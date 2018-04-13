import io
import csv
from django.contrib.auth.models import User
from django.contrib.admin.views.decorators import staff_member_required
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.template import RequestContext, Context
from django.template.loader import get_template

from .forms import CsvImportForm


@staff_member_required
def import_csv(request):
    if request.method == "POST":
        form = CsvImportForm(request.POST, request.FILES)
        if form.is_valid():
            csv_file = request.FILES["csv_file"].read().decode('utf-8')
            io_str = io.StringIO(csv_file)
            reader = csv.reader(io_str)
            template = get_template('contact_template.html')
            for line in reader:
                username, _ = line[2].split('@')
                password = User.objects.make_random_password(
                    length=10,
                    allowed_chars='abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789'
                )
                User.objects.create_user(
                    username=username,
                    password=password,
                    first_name=line[0],
                    last_name=line[1],
                    email=line[2]
                )
                context = {
                    'user': username,
                    'password': password
                }
                content = template.render(context)
                send_mail(
                    "Your password",
                    content,
                    'lunch-order@gmail.com',
                    [line[2]],
                    fail_silently=False,
                    html_message=content
                )
            return redirect('auth/user')

    else:
        form = CsvImportForm()
        context = {"form": form}
        return render(request, "admin/import_csv.html", context)
