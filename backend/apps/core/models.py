from django.db import models

from apps.common.models import TimeStampedModel


class SiteSettings(TimeStampedModel):
    school_name = models.CharField(max_length=255, default="MAHS")
    tagline = models.CharField(max_length=255, blank=True)
    logo = models.URLField(blank=True)
    hero_title = models.CharField(max_length=255, blank=True)
    hero_subtitle = models.TextField(blank=True)
    about_title = models.CharField(max_length=255, default="About Our School")
    about_text = models.TextField(blank=True)
    principal_name = models.CharField(max_length=255, blank=True)
    principal_message = models.TextField(blank=True)
    principal_photo = models.URLField(blank=True)
    address = models.TextField(blank=True)
    phone = models.CharField(max_length=50, blank=True)
    email = models.EmailField(blank=True)
    facebook_url = models.URLField(blank=True)
    instagram_url = models.URLField(blank=True)
    youtube_url = models.URLField(blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Site settings"

    def __str__(self) -> str:
        return self.school_name
