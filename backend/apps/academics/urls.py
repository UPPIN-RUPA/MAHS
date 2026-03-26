from django.urls import path

from .views import AcademicsContentListView


urlpatterns = [
    path("academics/", AcademicsContentListView.as_view(), name="academics-list"),
]
