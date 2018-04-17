from rest_framework.serializers import ModelSerializer
from apps.lunch_order.models import Product


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'title',
            'manufacturer',
            'price',
        ]