# Generated by Django 3.2.8 on 2021-11-07 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Music',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('music_id', models.IntegerField()),
                ('topic_id', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('topic_str', models.CharField(max_length=200)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
    ]
