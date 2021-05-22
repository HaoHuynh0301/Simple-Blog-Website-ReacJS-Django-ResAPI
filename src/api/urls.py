from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.PostCreateView.as_view(), name='create'),
    path('detail/<int:pk>/', views.PostDetailView.as_view(), name="detail"),
    path('list/', views.PostListView.as_view(), name="list")
]
