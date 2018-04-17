from rest_framework.generics import ListAPIView
from apps.lunch_order.models import Product
from .serializers import ProductSerializer


class ProductListAPIView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer