from django.contrib import admin
from django.contrib.auth.models import User, Group
from .models import Product


class UserModelAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'username', 'is_staff']

    class Meta:
        model = User


class ProductModelAdmin(admin.ModelAdmin):
    list_display = ["title", "manufacturer", "price"]

    class Meta:
        model = Product


admin.site.unregister(User)
admin.site.unregister(Group)
admin.site.register(User, UserModelAdmin)
admin.site.register(Product, ProductModelAdmin)
