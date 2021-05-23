from django.contrib import admin
from django.urls import path, include 
from . import views
from rest_framework.routers import SimpleRouter
from rest_framework.schemas import get_schema_view

router = SimpleRouter()
router.register('post', views.PostViewSet, basename = 'post')
router.register('contact', views.ContactViewSet, basename = 'contact')

urlpatterns = router.urls
