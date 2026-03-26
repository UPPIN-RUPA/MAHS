from rest_framework.response import Response
from rest_framework.views import APIView

from .models import SiteSettings
from .serializers import SiteSettingsSerializer


class SiteSettingsView(APIView):
    def get(self, request):
        settings = SiteSettings.objects.filter(is_active=True).order_by("-updated_at").first()
        if settings is None:
            return Response(
                {
                    "school_name": "MAHS",
                    "tagline": "A central digital home for students, alumni, staff, and school leadership.",
                    "logo": "",
                    "hero_title": "A modern school website built for communication and community.",
                    "hero_subtitle": "MAHS brings announcements, academics, events, gallery content, and school information into one digital platform.",
                    "about_title": "About Our School",
                    "address": "",
                    "phone": "",
                    "email": "",
                    "principal_name": "",
                    "principal_message": "",
                    "principal_photo": "",
                    "about_text": "",
                    "facebook_url": "",
                    "instagram_url": "",
                    "youtube_url": "",
                    "is_active": True,
                    "updated_at": None,
                }
            )
        return Response(SiteSettingsSerializer(settings).data)
