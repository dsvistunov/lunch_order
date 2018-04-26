from django.conf.urls import url
from .views import ProductListAPIView, OrderCreateAPIView

urlpatterns = [
    url(r'^create/$', OrderCreateAPIView.as_view(), name='create'),
    url(r'^products/', ProductListAPIView.as_view(), name='list'),
]