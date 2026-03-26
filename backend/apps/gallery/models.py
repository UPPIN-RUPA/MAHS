from django.db import models

from apps.common.models import TimeStampedModel
from apps.events.models import Event


class GalleryItem(TimeStampedModel):
    CATEGORY_CHOICES = [
        ("campus", "Campus"),
        ("annual_day", "Annual Day"),
        ("sports", "Sports"),
        ("cultural", "Cultural"),
        ("classroom", "Classroom"),
        ("other", "Other"),
    ]

    title = models.CharField(max_length=255)
    image = models.URLField()
    category = models.CharField(max_length=30, choices=CATEGORY_CHOICES, default="other")
    related_event = models.ForeignKey(Event, on_delete=models.SET_NULL, blank=True, null=True, related_name="gallery_items")
    is_featured = models.BooleanField(default=False)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self) -> str:
        return self.title
