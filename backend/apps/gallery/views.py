from rest_framework import generics

from .models import GalleryItem
from .serializers import GalleryItemSerializer


class GalleryItemListView(generics.ListAPIView):
    serializer_class = GalleryItemSerializer

    def get_queryset(self):
        queryset = GalleryItem.objects.all()
        category = self.request.query_params.get("category")
        if category:
            queryset = queryset.filter(category=category)
        return queryset
