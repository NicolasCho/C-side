from rest_framework import serializers
from .models import Music, Topic


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ['topic_str', 'id']

class MusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = ['id', 'music_title', 'music_artist', 'image_URL', 'topic_id']