from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    content = models.TextField(max_length=500, null=True, blank=True)
    author = models.CharField(max_length=255, null=True, blank=True)
    
    def __str__(self):
        return str(self.title)