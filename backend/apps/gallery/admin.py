from django.contrib import admin

from .models import GalleryItem


@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "related_event", "is_featured", "uploaded_at")
    list_filter = ("category", "is_featured")
    search_fields = ("title", "category")
