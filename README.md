# MAHS

MAHS is a modern school website and community-platform project built as a real full-stack system, not just a static brochure site.

It is designed to serve multiple audiences at once:

- students
- staff
- school administration
- alumni
- families and public visitors

The goal is simple:

**give the school one clear digital home for identity, communication, events, and future community features**

---

## What MAHS Does

MAHS combines a public-facing school website with an admin-managed content system.

In Phase 1, it already supports:

- a public homepage
- about and school identity content
- academics sections
- announcements and notices
- events and event details
- gallery content
- contact form submission
- admin-managed updates through Django admin

This makes the site useful both as a presentation layer and as an operational communication platform.

---

## Why This Project Matters

MAHS is intentionally stronger than a generic CRUD app.

It demonstrates:

- real-world domain modeling
- decoupled frontend/backend architecture
- admin workflows
- dynamic public content
- API-driven React pages
- room for future role-based school features

It is meant to grow into a real school platform, not remain a one-page showcase.

---

## Current Architecture

The repository contains two layers:

- the original Django-template MVP at the repo root, preserved as a reference implementation
- the actual target architecture in `backend/` and `frontend/`

### Final Phase 1 architecture

- Backend: Django + Django REST Framework
- Frontend: React + Vite
- Admin: Django admin
- Database: SQLite for local development, PostgreSQL-ready configuration for production

---

## MVP Scope

The current Phase 1 scope is frozen to:

- Home
- About
- Academics
- Announcements
- Events
- Gallery
- Contact
- Admin content management

Not included yet:

- student portal
- alumni portal
- authentication flows
- messaging/discussion features

Those belong to later phases.

---

## Repository Layout

```text
MAHS/
  backend/
    apps/
      common/
      core/
      academics/
      announcements/
      events/
      gallery/
      contact/
    config/
      settings/
        base.py
        local.py
        production.py
    manage.py
    requirements.txt
    Procfile
  frontend/
    src/
      components/
      hooks/
      layouts/
      pages/
      services/
    package.json
  core/         # legacy template MVP reference
  mahs_site/    # legacy template MVP reference
  templates/    # legacy template MVP reference
  static/       # legacy template MVP reference
```

---

## Backend Modules

### `common`

Shared backend primitives such as timestamped models and reusable helpers.

### `core`

Owns school-wide site content through `SiteSettings`, including:

- school name
- tagline
- hero content
- principal message
- contact details
- social links

### `academics`

Owns academic content blocks shown on the public site.

### `announcements`

Owns notices and school updates.

### `events`

Owns school event records and event detail data.

### `gallery`

Owns visual gallery records and ties images to optional events.

### `contact`

Stores submitted contact messages from the public form.

---

## Backend Data Model

The current API-first backend is built around these main models:

- `SiteSettings`
- `AcademicsContent`
- `Announcement`
- `Event`
- `GalleryItem`
- `ContactMessage`

This is enough to power the full public website for Phase 1.

---

## API Contract

### Public read endpoints

- `GET /api/site-settings/`
- `GET /api/academics/`
- `GET /api/academics/<slug>/`
- `GET /api/announcements/`
- `GET /api/announcements/<slug>/`
- `GET /api/events/`
- `GET /api/events/<slug>/`
- `GET /api/gallery/`

### Public write endpoint

- `POST /api/contact/`

The React frontend consumes these endpoints directly.

---

## Frontend Routing

The React app currently exposes:

- `/`
- `/about`
- `/academics`
- `/academics/:slug`
- `/announcements`
- `/announcements/:slug`
- `/events`
- `/events/:slug`
- `/gallery`
- `/contact`

That gives you a full public navigation flow for demos and deployment.

---

## Current UI State

The public frontend has already been polished into a more demo-ready product.

It includes:

- stronger homepage hero and hierarchy
- announcements preview on the homepage
- events preview on the homepage
- gallery preview on the homepage
- cleaner list/detail pages
- responsive layout structure
- contact form connected to the backend

This means the project is no longer just technically correct. It now reads like a real product.

---

## Demo Data

The backend includes a realistic seed command so MAHS can be demoed immediately without manual admin entry.

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

That gives the homepage, list pages, and detail pages believable content immediately.

---

## Local Setup

## 1. Backend

From `backend/`:

```bash
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r requirements.txt
python manage.py migrate
python manage.py seed_demo_content
python manage.py createsuperuser
python manage.py runserver
```

Backend URLs:

- API root: `https://mahs-ussp.onrender.com/api/` for the deployed app, or `http://127.0.0.1:8000/api/` for local development
- admin: `http://127.0.0.1:8000/admin/`

---

## 2. Frontend

From `frontend/`:

```bash
npm install
npm run dev
```

Frontend URL:

- `http://127.0.0.1:5173`

The frontend reads the backend base URL from:

```bash
VITE_API_BASE_URL=https://mahs-ussp.onrender.com/api
```

See:

- `frontend/.env.example`

---

## Recommended Demo Flow

If you want to show the project cleanly, use this sequence:

1. Open home page
2. Show announcements preview
3. Open announcements list and detail
4. Open events list and detail
5. Open academics
6. Open gallery
7. Submit contact form
8. Show Django admin and content models

This demonstrates both the public product and the admin-managed backend logic.

---

## Deployment Readiness

The repo is now prepared for simple deployment:

- `Procfile` added for backend hosting
- `gunicorn` added
- `whitenoise` added
- static root configured
- production settings split and ready
- frontend builds successfully

This makes the project ready for a Render + Vercel style deployment path.

---

## What Is Still Left

The project is strong, but a few later-phase improvements remain:

- true media uploads with `ImageField` instead of URL-based image placeholders
- deployed production URLs
- PostgreSQL in hosted environments
- student/alumni authentication later
- community features later

These are future enhancements, not MVP blockers.

---

## What We Have Completed So Far

- school platform concept finalized
- architecture split into backend and frontend
- modular Django apps created
- DRF endpoints implemented
- React routing built
- slug-based detail pages added
- public UI polished
- realistic seed data added
- deployment prep added
- local backend/frontend verification completed

This means MAHS is no longer just an idea or scaffold. It is now a functioning, portfolio-grade school platform foundation.

---

## Summary

MAHS is a full-stack school website platform built with Django, Django REST Framework, and React. It provides a dynamic public school site, an admin-managed content system, and a clean architecture that can later expand into student, alumni, and community features.
