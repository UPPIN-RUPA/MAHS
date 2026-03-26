from rest_framework import serializers

from .models import AcademicsContent


class AcademicsContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicsContent
        fields = ["id", "title", "slug", "summary", "content", "display_order", "is_active"]
