from rest_framework import serializers
from django.contrib.auth.models import User
from . import models

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Post
        fields = ['title', 'content', 'image', 'date_pushed']