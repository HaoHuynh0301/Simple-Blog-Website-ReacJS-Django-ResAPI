from rest_framework import serializers
from django.contrib.auth.models import User
from . import models

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Author
        field = ['username', 'password']

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Post
        fields = ['id', 'title', 'content', 'image', 'date_pushed']
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contact
        fields = ['name', 'email', 'phone', 'message']

    