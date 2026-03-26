from django.db import models

from apps.events.models import Event


class GalleryItem(models.Model):
    title = models.CharField(max_length=160)
    image = models.URLField()
    category = models.CharField(max_length=120)
    related_event = models.ForeignKey(Event, on_delete=models.SET_NULL, blank=True, null=True, related_name="gallery_items")
    uploaded_at = models.DateTimeField(auto_now_add=True)
    is_featured = models.BooleanField(default=False)

    class Meta:
        ordering = ["-is_featured", "-uploaded_at"]

    def __str__(self) -> str:
        return self.title
