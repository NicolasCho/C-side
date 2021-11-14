from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    #path('api/notes/<int:note_id>/', views.api_note),
    path('api/topics/', views.api_topic_list),                  #lista de tópicos
    path('api/topics/create/', views.api_topic_create),            #cria tópico
    path('api/musics/<int:topic_id>', views.api_music_list),     #lista de músicas de certo tópico
    path('api/musics/create/', views.api_music_create),            #cria música
    path('api/topic/<int:topic_id>', views.api_topic),            #devolve um topico
]