from django.urls import path

from .views import AcademicsContentDetailView, AcademicsContentListView


urlpatterns = [
    path("academics/", AcademicsContentListView.as_view(), name="academics-list"),
    path("academics/<slug:slug>/", AcademicsContentDetailView.as_view(), name="academics-detail"),
]
