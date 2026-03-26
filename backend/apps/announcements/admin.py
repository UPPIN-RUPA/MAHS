from django.contrib import admin

from .models import Announcement


@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "publish_date", "is_published", "is_featured")
    list_filter = ("category", "is_published", "is_featured")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "summary", "content")
