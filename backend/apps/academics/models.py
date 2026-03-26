from django.db import models


class AcademicsContent(models.Model):
    title = models.CharField(max_length=160)
    description = models.TextField()
    display_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order", "title"]

    def __str__(self) -> str:
        return self.title
