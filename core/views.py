from django.utils import timezone
from django.views.generic import TemplateView

from .models import AcademicProgram, Announcement, Event, GalleryItem


class HomePageView(TemplateView):
    template_name = "core/home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        now = timezone.now()
        upcoming_events = Event.objects.filter(end_at__gte=now).order_by("start_at")[:3]
        announcements = Announcement.objects.all()[:4]
        featured_gallery = GalleryItem.objects.filter(featured=True)[:3]
        context.update(
            {
                "upcoming_events": upcoming_events,
                "announcements": announcements,
                "featured_gallery": featured_gallery,
                "stats": [
                    {"label": "Students Supported", "value": "1,200+"},
                    {"label": "Active Clubs", "value": "18"},
                    {"label": "Upcoming Events", "value": str(upcoming_events.count())},
                    {"label": "Alumni Network", "value": "5,000+"},
                ],
            }
        )
        return context


class AboutPageView(TemplateView):
    template_name = "core/about.html"


class AcademicsPageView(TemplateView):
    template_name = "core/academics.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["programs"] = AcademicProgram.objects.all()
        return context


class EventsPageView(TemplateView):
    template_name = "core/events.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        now = timezone.now()
        context["upcoming_events"] = Event.objects.filter(end_at__gte=now).order_by("start_at")
        context["past_events"] = Event.objects.filter(end_at__lt=now).order_by("-start_at")[:6]
        return context


class AnnouncementsPageView(TemplateView):
    template_name = "core/announcements.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["announcements"] = Announcement.objects.all()
        return context


class GalleryPageView(TemplateView):
    template_name = "core/gallery.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["gallery_items"] = GalleryItem.objects.all()
        return context


class ContactPageView(TemplateView):
    template_name = "core/contact.html"
