from django.contrib import admin
from django import forms
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError
from . import models
from .models import MyUser

admin.site.register(models.Post)
admin.site.register(models.Contact)
admin.site.register(models.Author)
admin.site.register(models.Category)