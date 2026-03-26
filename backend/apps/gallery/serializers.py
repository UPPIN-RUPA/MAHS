from rest_framework import serializers

from .models import GalleryItem


class GalleryItemSerializer(serializers.ModelSerializer):
    related_event_title = serializers.CharField(source="related_event.title", read_only=True)

    class Meta:
        model = GalleryItem
        fields = ["id", "title", "image", "category", "related_event", "related_event_title", "created_at", "is_featured"]
