from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.response import Response
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

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
