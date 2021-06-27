from django.contrib import admin
from django.urls import path, include 
from . import views
from rest_framework.routers import SimpleRouter, DefaultRouter
from rest_framework.schemas import get_schema_view

app_name = 'blog_api'

#Define router for PostViewSet
Router = SimpleRouter()
Router.register('post', views.PostViewSet, basename = 'post')
Router.register('contact', views.ContactViewSet, basename = 'contact')

urlpatterns = [
    path('user/', views.UserRegister.as_view(), name = "signup"),
    path('', include(Router.urls)),
]


