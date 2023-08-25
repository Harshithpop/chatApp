from django.db import models

class Chats(models.Model):
    msg = models.CharField(max_length=1000,blank=True)
    user = models.CharField(max_length=100,default='pop')
