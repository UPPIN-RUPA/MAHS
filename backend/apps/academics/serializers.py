from rest_framework import serializers

from .models import AcademicsContent


class AcademicsContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicsContent
        fields = ["id", "title", "description", "display_order", "is_active"]
