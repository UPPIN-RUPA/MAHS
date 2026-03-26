from django.db.models import Q
from django.utils import timezone
from rest_framework import generics

from .models import Announcement
from .serializers import AnnouncementSerializer


class AnnouncementListView(generics.ListAPIView):
    serializer_class = AnnouncementSerializer

    def get_queryset(self):
        now = timezone.now()
        return Announcement.objects.filter(
            is_published=True,
        ).filter(Q(expiry_date__isnull=True) | Q(expiry_date__gte=now))


class AnnouncementDetailView(generics.RetrieveAPIView):
    serializer_class = AnnouncementSerializer
    lookup_field = "slug"
    queryset = Announcement.objects.filter(is_published=True)
