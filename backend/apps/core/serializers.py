from rest_framework import serializers

from .models import SiteSettings


class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = [
            "school_name",
            "tagline",
            "logo",
            "hero_title",
            "hero_subtitle",
            "address",
            "phone",
            "email",
            "principal_message",
            "about_text",
            "updated_at",
        ]
