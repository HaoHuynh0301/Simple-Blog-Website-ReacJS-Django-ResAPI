from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('blogs/', views.BlogViews.as_view(), name = 'blogs'),
    path('blogsdetail/<int:pk>/', views.BlogViewsDetail.as_view(), name = "detail")
]