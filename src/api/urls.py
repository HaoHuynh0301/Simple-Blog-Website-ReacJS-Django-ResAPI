from django.contrib import admin
from django.urls import path, include 
from . import views
from rest_framework.routers import SimpleRouter
from rest_framework.schemas import get_schema_view

urlpatterns = [
    path('listposts/', views.PostViewSet.as_view(), name= 'listpost'),
    path('listposts/<int:pk>/', views.RetrievePostViewSet.as_view(), name = 'retrievepost'),
    path('signin/', views.SignInAuthor.as_view(), name = "signin")
]


