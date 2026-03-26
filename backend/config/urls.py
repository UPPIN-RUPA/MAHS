from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("apps.core.urls")),
    path("api/", include("apps.academics.urls")),
    path("api/", include("apps.announcements.urls")),
    path("api/", include("apps.events.urls")),
    path("api/", include("apps.gallery.urls")),
    path("api/", include("apps.contact.urls")),
]
