from rest_framework import serializers

from .models import Announcement


class AnnouncementListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = [
            "id",
            "title",
            "slug",
            "summary",
            "category",
            "publish_date",
            "is_featured",
        ]


class AnnouncementDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = "__all__"
