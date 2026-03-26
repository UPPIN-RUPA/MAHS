from rest_framework import generics

from .models import GalleryItem
from .serializers import GalleryItemSerializer


class GalleryItemListView(generics.ListAPIView):
    queryset = GalleryItem.objects.all()
    serializer_class = GalleryItemSerializer
