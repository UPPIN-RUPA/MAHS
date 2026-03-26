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
            "about_title",
            "address",
            "phone",
            "email",
            "principal_name",
            "principal_message",
            "principal_photo",
            "about_text",
            "facebook_url",
            "instagram_url",
            "youtube_url",
            "is_active",
            "updated_at",
        ]
