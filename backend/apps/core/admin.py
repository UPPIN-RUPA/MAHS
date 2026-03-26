from django.contrib import admin

from .models import SiteSettings


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = ("school_name", "email", "phone", "is_active", "updated_at")
    list_filter = ("is_active",)
