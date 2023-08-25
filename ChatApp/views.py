from django.shortcuts import render
from .models import Chats

# Create your views here.

def login(request):
    return render(request,'login.html')
def msgHall(request,p):
    a = Chats.objects.all()
    return render(request,'message.html',{'msgss':a,'user':p})
