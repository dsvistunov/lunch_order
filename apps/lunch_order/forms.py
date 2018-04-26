from django.contrib.auth.forms import AuthenticationForm
from django import forms


class LoginForm(AuthenticationForm):
    username = forms.CharField(
        label="Login", max_length=30,
        widget=forms.TextInput(
            attrs={
                'class': 'form-control',
                'name': 'username'
            }
        )
    )
    password = forms.CharField(
        label="Password", max_length=30,
        widget=forms.TextInput(
            attrs={
                'class': 'form-control',
                'name': 'password',
                'type': 'password'
            }
        )
    )


class CsvImportForm(forms.Form):
    csv_file = forms.FileField()
