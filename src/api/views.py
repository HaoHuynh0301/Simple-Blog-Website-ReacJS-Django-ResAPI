from django.shortcuts import render, get_object_or_404
from . import models
from . import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import viewsets 

class PostCreateView(generics.CreateAPIView):
    queryset = models.Post.objects.all()
    serializer_class = serializers.PostSerializer
    
class PostListView(generics.ListAPIView):
    queryset = models.Post.objects.all()
    serializer_class = serializers.PostSerializer
    
class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Post.objects.all()
    serializer_class = serializers.PostSerializer

