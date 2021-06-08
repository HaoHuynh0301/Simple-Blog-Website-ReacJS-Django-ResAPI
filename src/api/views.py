from django.shortcuts import render, get_object_or_404
from . import models
from . import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import viewsets 
from rest_framework import permissions
from rest_framework import status

class PostViewSet(generics.ListAPIView):
    queryset = models.Post.objects.all()
    serializer_class = serializers.PostSerializer
    permission_classes = [permissions.AllowAny]

class SignInAuthor(APIView):
    def get(self, request, format = None):
        serializer = serializers.AuthorSerializer(data=request.data)
        
    


