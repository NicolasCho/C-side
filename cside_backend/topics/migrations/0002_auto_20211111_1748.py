# Generated by Django 3.2.8 on 2021-11-11 20:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('topics', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='music',
            name='music_id',
        ),
        migrations.AddField(
            model_name='music',
            name='image_URL',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='music',
            name='music_artist',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='music',
            name='music_title',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='topic',
            name='topic_str',
            field=models.CharField(max_length=400),
        ),
    ]
