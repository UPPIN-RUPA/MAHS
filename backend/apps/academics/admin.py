from django.contrib import admin

from .models import AcademicsContent


@admin.register(AcademicsContent)
class AcademicsContentAdmin(admin.ModelAdmin):
    list_display = ("title", "display_order", "is_active")
    list_filter = ("is_active",)
    list_editable = ("display_order", "is_active")
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ("title", "summary", "content")
