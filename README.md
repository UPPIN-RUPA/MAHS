# MAHS

MAHS is a school website and community platform project being rebuilt into a serious full-stack architecture.

The repository now contains two tracks:

- the original Django-template MVP at the repository root, kept as a reference implementation for page flow, admin concepts, and styling direction
- the new target architecture under `backend/` and `frontend/`, which is the actual long-term build path

## Final Architecture

### Phase 1

- public school website
- admin-managed content
- Django admin for non-technical staff
- Django REST Framework APIs
- React frontend consuming APIs

### Later Phases

- student authentication
- alumni authentication
- profile system
- community and participation features

## MVP Modules

The Phase 1 scope is intentionally frozen to:

- Home
- About
- Academics
- Announcements
- Events
- Gallery
- Contact
- Admin content management

## Repository Layout

```text
MAHS/
  backend/
    apps/
      academics/
      announcements/
      contact/
      core/
      events/
      gallery/
    config/
    manage.py
    requirements.txt
  frontend/
    src/
      components/
      layouts/
      pages/
      services/
    package.json
  core/                 # legacy template MVP reference
  mahs_site/            # legacy template MVP reference
  templates/            # legacy template MVP reference
  static/               # legacy template MVP reference
```

## Backend Domain Models

The API-first backend is structured around these MVP models:

- `SiteSettings`
- `AcademicsContent`
- `Announcement`
- `Event`
- `GalleryItem`
- `ContactMessage`

## API Contract

Public read endpoints:

- `GET /api/site-settings/`
- `GET /api/academics/`
- `GET /api/announcements/`
- `GET /api/announcements/<slug>/`
- `GET /api/events/`
- `GET /api/events/<slug>/`
- `GET /api/gallery/`

Public write endpoint:

- `POST /api/contact/`

Admin management remains in Django admin for Phase 1.

## Recommended Stack

- Backend: Django + Django REST Framework
- Database: PostgreSQL-ready Django configuration
- Frontend: React + Vite
- Admin: Django admin

## Why This Structure

This split makes MAHS stronger as a real project because it demonstrates:

- API-first backend design
- frontend/backend separation
- admin workflows
- scalable content architecture
- a realistic school platform use case

## Next Build Steps

1. Finish the Phase 1 backend APIs and admin polish
2. Build the React public pages against those APIs
3. Configure PostgreSQL for deployed environments
4. Add media handling for gallery uploads
5. Move into auth and alumni features only after the public MVP is stable

## Demo Data

The backend includes a seed command for realistic school content so the public site is usable immediately in demos.

From `backend/`:

```bash
source .venv/bin/activate
python manage.py seed_demo_content
```

Current seeded demo set:

- 1 active site settings record
- 5 announcements
- 5 events
- 10 gallery items
- 4 academics sections
