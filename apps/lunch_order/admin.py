from django.contrib import admin
from django.contrib.auth.models import User, Group
from .models import Product, Order


class UserModelAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'username', 'is_staff']
    list_display_links = ['username']

    class Meta:
        model = User


class ProductModelAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "manufacturer", "price"]

    class Meta:
        model = Product


class ProductInLine(admin.TabularInline):
    model = Product.order.through


class OrderModelAdmin(admin.ModelAdmin):
    list_display = ["owner", "date", "id"]
    inlines = [
        ProductInLine,
    ]

    class Meta:
        model = Order


admin.site.unregister(User)
admin.site.unregister(Group)
admin.site.register(User, UserModelAdmin)
admin.site.register(Product, ProductModelAdmin)
admin.site.register(Order, OrderModelAdmin)
