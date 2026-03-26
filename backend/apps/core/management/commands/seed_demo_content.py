from datetime import date, time, timedelta

from django.core.management.base import BaseCommand

from apps.academics.models import AcademicsContent
from apps.announcements.models import Announcement
from apps.core.models import SiteSettings
from apps.events.models import Event
from apps.gallery.models import GalleryItem


class Command(BaseCommand):
    help = "Seed MAHS with realistic demo content for local development and demos."

    def handle(self, *args, **options):
        today = date.today()

        SiteSettings.objects.update(is_active=False)
        SiteSettings.objects.update_or_create(
            school_name="MAHS",
            defaults={
                "tagline": "Learning, leadership, and community in one connected school platform.",
                "hero_title": "A modern digital home for the MAHS school community.",
                "hero_subtitle": (
                    "MAHS brings announcements, academics, events, galleries, and school communication into one "
                    "clean public platform managed through Django admin."
                ),
                "about_title": "About MAHS",
                "about_text": (
                    "MAHS is built as a school hub that supports communication, visibility, and institutional identity. "
                    "The platform is designed for students, staff, families, and alumni."
                ),
                "principal_name": "Dr. Ananya Rao",
                "principal_message": (
                    "At MAHS, we believe education should connect academic strength with character, creativity, and "
                    "community. This platform helps us keep that connection visible and accessible."
                ),
                "address": "123 Academy Avenue, Hometown, State 00000",
                "phone": "+1 (555) 010-2020",
                "email": "info@mahs-school.edu",
                "facebook_url": "https://facebook.com/mahs-school",
                "instagram_url": "https://instagram.com/mahs-school",
                "youtube_url": "https://youtube.com/@mahs-school",
                "logo": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
                "principal_photo": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
                "is_active": True,
            },
        )

        academics = [
            {
                "title": "Primary School Foundation",
                "slug": "primary-school-foundation",
                "summary": "Strong literacy, numeracy, and curiosity-building for the early school years.",
                "content": (
                    "The primary school program focuses on foundational learning, classroom participation, reading culture, "
                    "creative expression, and confidence in core subjects."
                ),
                "display_order": 1,
            },
            {
                "title": "STEM and Applied Learning",
                "slug": "stem-and-applied-learning",
                "summary": "Hands-on academic experiences across science, mathematics, and problem solving.",
                "content": (
                    "Students engage with project-driven science and mathematics activities, lab exposure, and applied "
                    "learning experiences that connect classroom knowledge with real-world thinking."
                ),
                "display_order": 2,
            },
            {
                "title": "Arts, Language, and Expression",
                "slug": "arts-language-and-expression",
                "summary": "Communication, language confidence, and cultural learning through expressive subjects.",
                "content": (
                    "This academic section highlights language development, public speaking, arts participation, reading "
                    "programs, and opportunities for students to develop confidence through expression."
                ),
                "display_order": 3,
            },
            {
                "title": "Senior Academic Guidance",
                "slug": "senior-academic-guidance",
                "summary": "Structured academic planning, mentoring, and support for higher-grade students.",
                "content": (
                    "Senior learners receive guidance in subject planning, exam preparation, mentorship, and future-facing "
                    "academic choices through a more structured support model."
                ),
                "display_order": 4,
            },
        ]

        for item in academics:
            AcademicsContent.objects.update_or_create(slug=item["slug"], defaults=item)

        announcements = [
            {
                "title": "Parent Orientation for New Academic Year",
                "slug": "parent-orientation-new-academic-year",
                "summary": "Parents of newly admitted students are invited for the orientation program next Monday.",
                "content": (
                    "The parent orientation will cover academic expectations, school communication channels, activity plans, "
                    "and student support resources for the new academic year."
                ),
                "category": "notice",
                "publish_date": today,
                "is_published": True,
                "is_featured": True,
            },
            {
                "title": "Science Exhibition Registrations Open",
                "slug": "science-exhibition-registrations-open",
                "summary": "Student teams can now register for the annual school science exhibition.",
                "content": (
                    "Registrations are open for all middle and senior school students. Project themes, lab support hours, "
                    "and judging criteria are available through the academic office."
                ),
                "category": "news",
                "publish_date": today - timedelta(days=2),
                "is_published": True,
                "is_featured": True,
            },
            {
                "title": "Midterm Examination Schedule Released",
                "slug": "midterm-examination-schedule-released",
                "summary": "The midterm exam timetable is now available for all grade levels.",
                "content": (
                    "Students should review the exam timetable carefully and coordinate with faculty for any subject-specific "
                    "clarifications. Revision sessions will be shared separately."
                ),
                "category": "exam",
                "publish_date": today - timedelta(days=4),
                "is_published": True,
                "is_featured": False,
            },
            {
                "title": "School Closed for Regional Holiday",
                "slug": "school-closed-for-regional-holiday",
                "summary": "Campus will remain closed this Friday in observance of the regional holiday.",
                "content": (
                    "All academic and administrative operations will resume on the next working day. Students should follow "
                    "the revised event and assignment schedule shared by class coordinators."
                ),
                "category": "holiday",
                "publish_date": today - timedelta(days=6),
                "expiry_date": today + timedelta(days=2),
                "is_published": True,
                "is_featured": False,
            },
            {
                "title": "Admissions Inquiry Window for Next Session",
                "slug": "admissions-inquiry-window-next-session",
                "summary": "Prospective families can submit early admission inquiries through the school contact portal.",
                "content": (
                    "The admissions inquiry window for the next academic session is now open. Families can use the contact "
                    "form to request details about eligibility, facilities, and campus visits."
                ),
                "category": "admission",
                "publish_date": today - timedelta(days=8),
                "is_published": True,
                "is_featured": False,
            },
        ]

        for item in announcements:
            Announcement.objects.update_or_create(slug=item["slug"], defaults=item)

        events = [
            {
                "title": "Annual Day Celebration",
                "slug": "annual-day-celebration",
                "description": (
                    "An evening of performances, recognitions, and school-wide celebration featuring student showcases and "
                    "special presentations."
                ),
                "event_date": today + timedelta(days=10),
                "start_time": time(17, 30),
                "end_time": time(20, 30),
                "venue": "Main Auditorium",
                "cover_image": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
                "status": "upcoming",
                "is_featured": True,
            },
            {
                "title": "Inter-House Sports Meet",
                "slug": "inter-house-sports-meet",
                "description": (
                    "Track, field, and team events that bring together students across houses for a full day of competition "
                    "and school spirit."
                ),
                "event_date": today + timedelta(days=18),
                "start_time": time(8, 30),
                "end_time": time(15, 0),
                "venue": "School Sports Ground",
                "cover_image": "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
                "status": "upcoming",
                "is_featured": True,
            },
            {
                "title": "Alumni Career Interaction Day",
                "slug": "alumni-career-interaction-day",
                "description": (
                    "Selected alumni return to campus to speak with senior students about higher education, careers, and "
                    "life beyond school."
                ),
                "event_date": today + timedelta(days=26),
                "start_time": time(11, 0),
                "end_time": time(13, 0),
                "venue": "Seminar Hall",
                "cover_image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
                "status": "upcoming",
                "is_featured": False,
            },
            {
                "title": "Founders Day Assembly",
                "slug": "founders-day-assembly",
                "description": (
                    "A school assembly recognizing the institution’s founding story, community milestones, and student-led "
                    "tributes."
                ),
                "event_date": today - timedelta(days=20),
                "start_time": time(9, 0),
                "end_time": time(10, 30),
                "venue": "Central Courtyard",
                "cover_image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
                "status": "completed",
                "is_featured": False,
            },
            {
                "title": "Cultural Week Showcase",
                "slug": "cultural-week-showcase",
                "description": (
                    "A multi-day celebration featuring music, theatre, art displays, and student-led cultural presentations."
                ),
                "event_date": today - timedelta(days=35),
                "start_time": time(14, 0),
                "end_time": time(17, 0),
                "venue": "Open Stage Arena",
                "cover_image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
                "status": "completed",
                "is_featured": False,
            },
        ]

        created_events = {}
        for item in events:
            event, _ = Event.objects.update_or_create(slug=item["slug"], defaults=item)
            created_events[item["slug"]] = event

        gallery_items = [
            {
                "title": "Morning Assembly on Campus",
                "image": "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
                "category": "campus",
                "related_event": None,
                "is_featured": True,
            },
            {
                "title": "Annual Day Performance Rehearsal",
                "image": "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
                "category": "annual_day",
                "related_event": created_events["annual-day-celebration"],
                "is_featured": True,
            },
            {
                "title": "House Team Sprint Finals",
                "image": "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1200&q=80",
                "category": "sports",
                "related_event": created_events["inter-house-sports-meet"],
                "is_featured": True,
            },
            {
                "title": "Classroom Learning Circle",
                "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
                "category": "classroom",
                "related_event": None,
                "is_featured": False,
            },
            {
                "title": "Founders Day Ceremony",
                "image": "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80",
                "category": "cultural",
                "related_event": created_events["founders-day-assembly"],
                "is_featured": False,
            },
            {
                "title": "Art Display Corridor",
                "image": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
                "category": "cultural",
                "related_event": created_events["cultural-week-showcase"],
                "is_featured": False,
            },
            {
                "title": "Science Lab Exploration",
                "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
                "category": "classroom",
                "related_event": None,
                "is_featured": False,
            },
            {
                "title": "Campus Reading Garden",
                "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
                "category": "campus",
                "related_event": None,
                "is_featured": False,
            },
            {
                "title": "Music Ensemble Practice",
                "image": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
                "category": "cultural",
                "related_event": created_events["annual-day-celebration"],
                "is_featured": False,
            },
            {
                "title": "Senior Guidance Session",
                "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
                "category": "other",
                "related_event": created_events["alumni-career-interaction-day"],
                "is_featured": False,
            },
        ]

        for item in gallery_items:
            GalleryItem.objects.update_or_create(title=item["title"], defaults=item)

        self.stdout.write(self.style.SUCCESS("MAHS demo content seeded successfully."))
