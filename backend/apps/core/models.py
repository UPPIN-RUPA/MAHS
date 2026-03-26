from django.db import models


class SiteSettings(models.Model):
    school_name = models.CharField(max_length=160, default="MAHS")
    tagline = models.CharField(max_length=220, blank=True)
    logo = models.URLField(blank=True)
    hero_title = models.CharField(max_length=220, blank=True)
    hero_subtitle = models.TextField(blank=True)
    address = models.TextField(blank=True)
    phone = models.CharField(max_length=40, blank=True)
    email = models.EmailField(blank=True)
    principal_message = models.TextField(blank=True)
    about_text = models.TextField(blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Site settings"

    def __str__(self) -> str:
        return self.school_name
