from rest_framework import generics

from .models import AcademicsContent
from .serializers import AcademicsContentSerializer


class AcademicsContentListView(generics.ListAPIView):
    queryset = AcademicsContent.objects.filter(is_active=True)
    serializer_class = AcademicsContentSerializer
