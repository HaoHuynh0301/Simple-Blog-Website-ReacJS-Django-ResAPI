from django.contrib import admin
from django.urls import path, include 
from . import views
from rest_framework.routers import SimpleRouter, DefaultRouter
from rest_framework.schemas import get_schema_view

app_name = 'blog_api'

router = DefaultRouter()
router.register('', views.PostList, basename = 'post')

urlpatterns = router.urls

# urlpatterns = [
#     path('listposts/', views.PostViewSet.as_view(), name= 'listpost'),
#     path('listposts/<int:pk>/', views.RetrievePostViewSet.as_view(), name = 'retrievepost'),
#     path('user/register/', views.RegisterUser.as_view(), name = "signup")
# ]


