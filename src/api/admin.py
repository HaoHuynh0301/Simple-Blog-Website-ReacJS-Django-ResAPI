from django.contrib import admin
from django.contrib.auth.models import User
from . import models

admin.site.register(models.Post)
admin.site.register(models.Contact)
admin.site.register(models.Author)
admin.site.register(models.Category)
admin.site.register(models.MyUser)