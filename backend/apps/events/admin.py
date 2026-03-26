from django.contrib import admin

from .models import Event


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("title", "event_date", "venue", "status", "is_featured")
    list_filter = ("status", "is_featured")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "description", "venue")
