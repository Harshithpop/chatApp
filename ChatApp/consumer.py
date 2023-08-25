import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from .models import Chats

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_group_name = 'test'
        async_to_sync (self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def receive(self,text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        Chats.objects.create(msg=message,user='Pops')
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type':'chat_msgss',
                'message':message
            }
        )
    def chat_msgss(self,event):
        message = event['message']
        self.send(text_data=json.dumps({
            'type' : 'chat',
            'message': message
        }))