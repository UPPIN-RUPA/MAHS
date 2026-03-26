from django.db import models
from django.utils import timezone

from apps.common.models import TimeStampedModel


class Announcement(TimeStampedModel):
    CATEGORY_CHOICES = [
        ("notice", "Notice"),
        ("news", "News"),
        ("exam", "Exam"),
        ("holiday", "Holiday"),
        ("admission", "Admission"),
    ]

    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    summary = models.CharField(max_length=300, blank=True)
    content = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default="notice")
    publish_date = models.DateField(default=timezone.now)
    expiry_date = models.DateField(blank=True, null=True)
    is_published = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)

    class Meta:
        ordering = ["-publish_date", "-created_at"]

    def __str__(self) -> str:
        return self.title
