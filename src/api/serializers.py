from rest_framework import serializers
from django.contrib.auth.models import User
from . import models

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Post
        fields = ['id', 'title', 'content', 'image', 'date_pushed']
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contact
        fields = ['name', 'email', 'phone', 'message']
class TextSerializer(serializers.ModelSerializer):
    pass
    