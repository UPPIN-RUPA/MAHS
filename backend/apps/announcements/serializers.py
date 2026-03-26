from rest_framework import serializers

from .models import Announcement


class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = [
            "id",
            "title",
            "slug",
            "summary",
            "content",
            "category",
            "publish_date",
            "expiry_date",
            "is_published",
        ]
