from rest_framework import serializers
from django.contrib.auth.models import User
from . import models

class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model  = models.MyUser
        fields = ['email', 'user_name', 'password', 'first_name']
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Post
        fields = ['id', 'title', 'content', 'image', 'date_pushed']
        
    def update(self, instance, validated_data):
        instance.content = validated_data.get('content', instance.content)
        instance.title = validated_data.get('title', instance.title)
        instance.save()
        return instance
            
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contact
        fields = ['name', 'email', 'phone', 'message']

        