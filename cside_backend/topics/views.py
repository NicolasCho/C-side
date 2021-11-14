from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .serializers import TopicSerializer, MusicSerializer
from .models import Music, Topic


def index(request):
    return HttpResponse("Projeto 2 de Tecnologias Web do Insper :D")

#Devolve lista de todos os tópicos
@api_view(['GET', 'POST'])
def api_topic_list(request):   
    topics = Topic.objects.all()
    serialized_topics = TopicSerializer(topics, many = True) 
    return Response(serialized_topics.data)

#Devolve tópico especifico
@api_view(['GET', 'POST'])
def api_topic(request, topic_id):   
    topic = Topic.objects.filter(id=topic_id)
    serialized_topics = TopicSerializer(topic, many = True) 
    return Response(serialized_topics.data)

#Devolve lista de músicas que respondem determinado tópico
@api_view(['GET', 'POST'])
def api_music_list(request, topic_id):   
    musics = Music.objects.filter(topic_id = topic_id)
    serialized_musics = MusicSerializer(musics, many = True) 
    return Response(serialized_musics.data)

#Posta tópico
@api_view(['GET', 'POST'])
def api_topic_create(request):     
    if request.method == 'POST':
        new_topic_data = request.data
        topic = Topic()
        topic.topic_str = new_topic_data['topic_str']
        topic.save()

    topics = Topic.objects.all()
    serialized_topics = TopicSerializer(topics, many = True) 
    return Response(serialized_topics.data)

#Posta música
@api_view(['GET', 'POST'])
def api_music_create(request):     
    if request.method == 'POST':
        new_music_data = request.data
        music = Music()
        music.music_title = new_music_data['music_title']
        music.music_artist = new_music_data['music_artist']
        music.image_URL = new_music_data['image_URL']
        music.topic_id = new_music_data['topic_id']
        music.save()

    musics = Music.objects.all()
    serialized_musics = MusicSerializer(musics, many = True) 
    return Response(serialized_musics.data)
