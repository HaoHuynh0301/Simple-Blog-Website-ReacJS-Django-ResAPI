from django.db import models
from django.utils import timezone
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser, PermissionsMixin
)
class Role(models.Model):
    name = models.CharField(max_length=255, null = False, blank = True)
    
    def __str__(self):
        return str(self.name)

class Author(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, null = True , on_delete = models.SET_NULL)
    role = models.ForeignKey(Role, null = True, on_delete = models.SET_NULL)
    
    def __str__(self):
        return str(self.user.username)
    
class Category(models.Model):
    name = models.CharField(max_length = 255, null = False, blank = True)
    
    def __str__(self):
        return str(self.name)

class Post(models.Model):
    title = models.CharField(max_length=255, null = False, blank = True)
    content = models.TextField()
    catogeory = models.ForeignKey(Category, null = True , on_delete = models.PROTECT)
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
    
class MyUserManager(BaseUserManager):
    def create_user(self, email, user_name, first_name, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            user_name = user_name,
            first_name = first_name
        )

        user.set_password(password)
        user.save(using = self._db)
        return user
    
    def create_superuser(self, email, user_name, first_name, password=None):
        user = self.create_user(
            email = email,
            user_name = user_name,
            first_name = first_name,
            password = password
        )
        user.is_admin = True
        user.is_superuser = True
        user.save(using = self._db)
        return user
        
    
class MyUser(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    user_name = models.CharField(max_length=255, unique=True, null=True)
    first_name = models.CharField(max_length=255, blank=True, null = True) 
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', 'first_name']

    def __str__(self):
        return str(self.email)

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.is_admin
    
    def has_perm(self, perm, obj = None):
        return True

    def has_module_perms(self, app_label):
        return True
    
    
    
    
