from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from . import models
from .serializer import BlogSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BaseAuthentication
from rest_framework.permissions import IsAuthenticated

class BlogViews(APIView):
    def get(self, request):
        blogs = models.Blog.objects.all()
        serializer = BlogSerializer(blogs, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = BlogSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        
class BlogViewsDetail(APIView):
    def get_object(self, pk):
        try:
            return models.Blog.objects.get(pk = pk)
        except models.Blog.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)
        
    def get(self, request, pk):
        blog = self.get_object(pk)
        serializer = BlogSerializer(blog)
        return Response(serializer.data)
    
    def delete(self, request, pk):
        blog = self.get_object(pk)
        blog.delete()
        return Response(status = status.HTTP_400_BAD_REQUEST) 
    
    def put(self, request, pk):
        blog = self.get_object(pk)
        serializer = BlogSerializer(blog, data = request.data)       
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: return Response(serializer.errors, status = status.HTTP_404_NOT_FOUND)
        

