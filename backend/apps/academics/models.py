from django.db import models

from apps.common.models import TimeStampedModel


class AcademicsContent(TimeStampedModel):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, default="")
    summary = models.CharField(max_length=300, blank=True)
    content = models.TextField(default="")
    display_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["display_order", "title"]

    def __str__(self) -> str:
        return self.title
