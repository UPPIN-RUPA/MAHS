from rest_framework import generics

from .models import Event
from .serializers import EventDetailSerializer, EventListSerializer


class EventListView(generics.ListAPIView):
    queryset = Event.objects.all()

    def get_serializer_class(self):
        return EventListSerializer


class EventDetailView(generics.RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventDetailSerializer
    lookup_field = "slug"
