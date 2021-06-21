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

class PostViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = serializers.PostSerializer
    
    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(models.Post, id = item)
    
    def get_queryset(self):
        return models.Post.objects.all()

class ContactViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.ContactSerializer
    queryset = models.Contact.objects.all()
        

class RegisterUser(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        data = serializers.RegisterUserSerializer(data = request.data)
        if not data.is_valid():
            return Response("BAD REQUEST", status = status.HTTP_400_BAD_REQUEST)
        data.save()
        return Response("OK", status = status.HTTP_200_OK)
            
    
        
        
    


