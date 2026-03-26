from django.db import models


class Event(models.Model):
    STATUS_CHOICES = [
        ("upcoming", "Upcoming"),
        ("completed", "Completed"),
        ("cancelled", "Cancelled"),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    event_date = models.DateField()
    start_time = models.TimeField(blank=True, null=True)
    end_time = models.TimeField(blank=True, null=True)
    venue = models.CharField(max_length=160)
    cover_image = models.URLField(blank=True)
    is_featured = models.BooleanField(default=False)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="upcoming")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["event_date", "start_time"]

    def __str__(self) -> str:
        return self.title
