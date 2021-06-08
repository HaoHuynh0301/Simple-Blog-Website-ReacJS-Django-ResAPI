from django.db import models
from django.contrib.auth.models import User

class Role(models.Model):
    name = models.CharField(max_length=255, null = False, blank = True)
    
    def __str__(self):
        return str(self.name)

class Author(models.Model):
    user = models.OneToOneField(User, null = True , on_delete = models.SET_NULL)
    role = models.ForeignKey(Role, null = True, on_delete = models.SET_NULL)
    
    def __str__(self):
        return str(self.user.username)

class Post(models.Model):
    title = models.CharField(max_length=255, null = False, blank = True)
    content = models.TextField()
    date_pushed = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(null = True, blank = True)
    
    def __str__(self):
        return str(self.title)
    
    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url
    
class Contact(models.Model):
    name = models.CharField(max_length=255, blank = True, null = False)
    email = models.EmailField(max_length=255, blank = True, null = False)
    phone = models.IntegerField(blank = True, null = False)
    message = models.TextField(blank = True)
    
    def __str__(self):
        return str(self.name)
    
class Commnent(models.Model):
    post = models.ForeignKey(Post, on_delete = models.CASCADE)
    comment = models.TextField(blank = True, null = True)
    
    def __str__(self):
        return str(self.post.title)
    
class Category(models.Model):
    name = models.CharField(max_length = 255, null = False, blank = True)
    
    def __str__(self):
        return str(self.name)
