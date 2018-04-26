import datetime
from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField
from apps.lunch_order.models import Product, Order


class ProductListSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id',
            'title',
            'manufacturer',
            'price',
        ]


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id'
        ]


class OrderCreateSerializer(ModelSerializer):
    product = PrimaryKeyRelatedField(
        source='product_set',
        many=True,
        queryset=Product.objects.all()
    )

    class Meta:
        model = Order
        fields = [
            'owner',
            'product'
        ]

    def create(self, validated_data):
        product = validated_data.pop('product_set')
        owner = validated_data.pop('owner')
        order, created = Order.objects.get_or_create(
            owner=owner,
            date=datetime.date.today(),
            defaults={'owner': owner}
        )
        order.product_set.add(product[0])
        return order
