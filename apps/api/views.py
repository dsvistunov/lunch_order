from rest_framework.generics import ListAPIView, CreateAPIView
from apps.lunch_order.models import Product, Order
from .serializers import ProductListSerializer, OrderCreateSerializer
from .pagination import ProductPagination


class ProductListAPIView(ListAPIView):
    queryset = Product.objects.order_by('title')
    serializer_class = ProductListSerializer
    pagination_class = ProductPagination


class OrderCreateAPIView(CreateAPIView):
    model = Order
    serializer_class = OrderCreateSerializer
