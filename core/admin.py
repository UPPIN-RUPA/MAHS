from django.contrib import admin

from .models import AcademicProgram, Announcement, Event, GalleryItem


@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "is_urgent", "published_at")
    list_filter = ("category", "is_urgent")
    search_fields = ("title", "summary", "body")


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("title", "location", "start_at", "end_at", "is_featured")
    list_filter = ("is_featured",)
    search_fields = ("title", "description", "location")


@admin.register(AcademicProgram)
class AcademicProgramAdmin(admin.ModelAdmin):
    list_display = ("title", "lead", "display_order")
    list_editable = ("display_order",)
    search_fields = ("title", "overview", "lead")


@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ("title", "featured", "created_at")
    list_filter = ("featured",)
    search_fields = ("title", "caption")
