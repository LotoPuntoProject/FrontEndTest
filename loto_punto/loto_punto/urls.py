"""loto_punto URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
from django.conf.urls import url
from rest_framework import routers
from accounts.views import UserViewSetCreate
from accounts.views import UserViewSetList
from accounts.views import UserViewSetDetail
from accounts.views import GroupViewSet
from rest_framework_swagger.views import get_swagger_view

router = routers.DefaultRouter()
router.register(r'groups', GroupViewSet)

schema_view = get_swagger_view(title='Loto Punto API')

urlpatterns = [
    path(
        'register/',
        UserViewSetCreate.as_view(),
        name=UserViewSetCreate.name
    ),
    path(
        'users/',
        UserViewSetList.as_view(),
        name=UserViewSetList.name
    ),
    re_path(
        'users/(?P<pk>[0-9]+)/$',
        UserViewSetDetail.as_view(),
        name=UserViewSetDetail.name
    ),
    url(r'^swagger/', schema_view),
    path('', include(router.urls)),
    path('rest-auth/',include('rest_auth.urls')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls)
]
