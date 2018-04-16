from django.conf.urls import url
from .views import import_csv, index
urlpatterns = [
    url(r'^admin/import', import_csv, name="import"),
    url(r'^$', index, name='index'),
]
