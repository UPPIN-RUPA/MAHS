from django.db import models

from apps.common.models import TimeStampedModel


class Event(TimeStampedModel):
    STATUS_CHOICES = [
        ("upcoming", "Upcoming"),
        ("completed", "Completed"),
        ("cancelled", "Cancelled"),
    ]

    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    event_date = models.DateField()
    start_time = models.TimeField(blank=True, null=True)
    end_time = models.TimeField(blank=True, null=True)
    venue = models.CharField(max_length=255, blank=True)
    cover_image = models.URLField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="upcoming")
    is_featured = models.BooleanField(default=False)

    class Meta:
        ordering = ["event_date", "start_time"]

    def __str__(self) -> str:
        return self.title
