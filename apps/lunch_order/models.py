from django.db import models
from django.contrib.auth.models import User


class Order(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return str(self.id)


class Product(models.Model):
    order = models.ManyToManyField(Order, blank=True)
    title = models.CharField(max_length=120)
    manufacturer = models.CharField(max_length=120)
    price = models.IntegerField()

    def __str__(self):
        return self.title
