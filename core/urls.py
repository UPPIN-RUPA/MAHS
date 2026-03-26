from django.urls import path

from .views import (
    AboutPageView,
    AcademicsPageView,
    AnnouncementsPageView,
    ContactPageView,
    EventsPageView,
    GalleryPageView,
    HomePageView,
)


urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("about/", AboutPageView.as_view(), name="about"),
    path("academics/", AcademicsPageView.as_view(), name="academics"),
    path("events/", EventsPageView.as_view(), name="events"),
    path("announcements/", AnnouncementsPageView.as_view(), name="announcements"),
    path("gallery/", GalleryPageView.as_view(), name="gallery"),
    path("contact/", ContactPageView.as_view(), name="contact"),
]
