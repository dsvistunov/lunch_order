from django.conf.urls import url
from django.contrib.auth import views as auth_views

from .views import import_csv, index
from .forms import LoginForm


urlpatterns = [
    url(r'^admin/import', import_csv, name="import"),
    url(r'^login/$', auth_views.login, {'authentication_form': LoginForm}, name='login'),
    url(r'^logout/$', auth_views.logout, {'next_page': '/'}, name='logout'),
    url(r'^$', index, name='index'),
]
