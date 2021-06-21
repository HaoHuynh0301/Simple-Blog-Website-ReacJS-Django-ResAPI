from django.contrib import admin
from django.urls import path, include 
from . import views
from rest_framework.routers import SimpleRouter, DefaultRouter
from rest_framework.schemas import get_schema_view

app_name = 'blog_api'

#Define router for PostViewSet
Postrouter = SimpleRouter()
Postrouter.register('', views.PostViewSet, basename = 'post')

#Define router for ContactViewSet
Contactrouter = SimpleRouter()
Contactrouter.register('', views.ContactViewSet, basename = 'contact')

urlpatterns = [
    path('user/', views.UserRegister.as_view(), name = "signup"),
    path('post/', include(Postrouter.urls)),
    path('contact/', include(Contactrouter.urls)),
]


