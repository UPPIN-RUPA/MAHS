from rest_framework import serializers

from .models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = [
            "id",
            "title",
            "slug",
            "description",
            "event_date",
            "start_time",
            "end_time",
            "venue",
            "cover_image",
            "is_featured",
            "status",
        ]
