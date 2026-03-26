from django.urls import path

from .views import AnnouncementDetailView, AnnouncementListView


urlpatterns = [
    path("announcements/", AnnouncementListView.as_view(), name="announcements-list"),
    path("announcements/<slug:slug>/", AnnouncementDetailView.as_view(), name="announcements-detail"),
]
