from django.db import models
from django.utils import timezone


class Announcement(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    summary = models.TextField()
    content = models.TextField()
    category = models.CharField(max_length=80, default="General")
    publish_date = models.DateTimeField(default=timezone.now)
    expiry_date = models.DateTimeField(blank=True, null=True)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-publish_date", "-created_at"]

    def __str__(self) -> str:
        return self.title
