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
    
class PostList(viewsets.ViewSet):
    queryset = models.Post.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
   
    def list(self, request):
        serializer_class = serializers.PostSerializer(self.queryset, many = True)
        return Response(serializer_class.data)
    def retrieve(self, request, pk=None):
        post = get_object_or_404(self.queryset, pk=pk)
        serializer_class = serializers.PostSerializer(post)
        return Response(serializer_class.data)

class RegisterUser(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        data = serializers.RegisterUserSerializer(data = request.data)
        if not data.is_valid():
            return Response("BAD REQUEST", status = status.HTTP_400_BAD_REQUEST)
        data.save()
        return Response("OK", status = status.HTTP_200_OK)
            
    
        
        
    


