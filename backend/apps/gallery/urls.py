from django.urls import path

from .views import GalleryItemListView


urlpatterns = [
    path("gallery/", GalleryItemListView.as_view(), name="gallery-list"),
]
