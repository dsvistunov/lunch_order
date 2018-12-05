from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    title = models.CharField(max_length=120)
    manufacturer = models.CharField(max_length=120)
    price = models.IntegerField()

    def __str__(self):
        return self.title


class Order(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, blank=True, through='OrderItem')
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return str(self.id)


class OrderItem(models.Model):
    count = models.IntegerField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
