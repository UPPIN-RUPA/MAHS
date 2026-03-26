from django.db import models
from django.utils import timezone


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Announcement(TimestampedModel):
    title = models.CharField(max_length=200)
    summary = models.TextField()
    body = models.TextField(blank=True)
    category = models.CharField(max_length=80, default="General")
    is_urgent = models.BooleanField(default=False)
    published_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ["-published_at", "-created_at"]

    def __str__(self) -> str:
        return self.title


class Event(TimestampedModel):
    title = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=200)
    start_at = models.DateTimeField()
    end_at = models.DateTimeField()
    is_featured = models.BooleanField(default=False)

    class Meta:
        ordering = ["start_at"]

    def __str__(self) -> str:
        return self.title

    @property
    def is_upcoming(self) -> bool:
        return self.start_at >= timezone.now()


class AcademicProgram(TimestampedModel):
    title = models.CharField(max_length=160)
    overview = models.TextField()
    lead = models.CharField(max_length=120, blank=True)
    highlights = models.TextField(blank=True, help_text="Use short sentences or bullet-style text.")
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order", "title"]

    def __str__(self) -> str:
        return self.title


class GalleryItem(TimestampedModel):
    title = models.CharField(max_length=160)
    caption = models.TextField(blank=True)
    image_url = models.URLField(help_text="Use a hosted image URL for now.")
    featured = models.BooleanField(default=False)

    class Meta:
        ordering = ["-featured", "-created_at"]

    def __str__(self) -> str:
        return self.title
