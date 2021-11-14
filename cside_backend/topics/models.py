from django.db import models


class Music(models.Model):
    id = models.AutoField(primary_key=True)
    music_title = models.CharField(max_length=100, null=True)
    music_artist = models.CharField(max_length=100, null=True)
    image_URL = models.CharField(max_length=200, null=True)
    topic_id = models.IntegerField()

    def __str__(self):
        musica = 'id:{} // musica:{} // artista{} // topico{}'.format(self.id, self.music_title, self.music_artist, self.topic_id)
        return musica

class Topic(models.Model):
    topic_str = models.CharField(max_length=400)
    id= models.AutoField(primary_key=True)

    def __str__(self):
        topico = '{}.{}'.format(self.id,self.topic_str)
        return topico
