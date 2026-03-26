from django.db.models import Q
from django.utils import timezone
from rest_framework import generics

from .models import Announcement
from .serializers import AnnouncementDetailSerializer, AnnouncementListSerializer


class AnnouncementListView(generics.ListAPIView):
    def get_queryset(self):
        now = timezone.now()
        return Announcement.objects.filter(
            is_published=True,
        ).filter(Q(expiry_date__isnull=True) | Q(expiry_date__gte=now))

    def get_serializer_class(self):
        return AnnouncementListSerializer


class AnnouncementDetailView(generics.RetrieveAPIView):
    serializer_class = AnnouncementDetailSerializer
    lookup_field = "slug"
    queryset = Announcement.objects.filter(is_published=True)
