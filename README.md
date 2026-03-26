# MAHS School Website

MAHS is a Django-based school website designed as a central digital platform for students, alumni, staff, and school administration.

This project is intentionally structured as more than a brochure site. The public website presents the school professionally, while the backend admin gives staff a way to keep announcements, events, academics, and gallery content current without editing code.

## Product Direction

The site is built as a phased school hub.

### MVP

- Home
- About
- Academics
- Events
- Announcements
- Gallery
- Contact
- Django admin for content management

### Version 2

- student login
- alumni login
- profile system
- controlled access features

### Version 3

- discussions
- messaging
- richer school community features

## Current Features

- school-branded public homepage
- about page for school mission and identity
- academics listing
- events page with upcoming and past events
- announcements page for notices and updates
- gallery page for school highlights
- contact page with inquiry details
- admin-managed content models for announcements, events, academics, and gallery items
- responsive templates and reusable styling

## Tech Stack

- Python 3
- Django 4.2
- SQLite for local development
- Django admin

## Project Structure

```text
MAHS/
  core/
  mahs_site/
  static/
  templates/
  manage.py
  requirements.txt
```

## Local Setup

### 1. Create a virtual environment

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 2. Install dependencies

```bash
python3 -m pip install -r requirements.txt
```

### 3. Run migrations

```bash
python3 manage.py migrate
```

### 4. Create an admin user

```bash
python3 manage.py createsuperuser
```

### 5. Start the development server

```bash
python3 manage.py runserver
```

Open:

- public site: `http://127.0.0.1:8000/`
- admin: `http://127.0.0.1:8000/admin/`

## Content Management

The Django admin is the operational side of the MVP. School staff can manage:

- announcements
- events
- academic program entries
- gallery items

This keeps the site maintainable for non-developers and matches the core project requirement that the school should be able to update content without code changes.

## Why This Project Is Useful

MAHS is a strong full-stack portfolio project because it combines:

- public website design
- backend architecture
- admin workflows
- database-backed content
- role-oriented future expansion

It is a realistic school platform rather than a generic CRUD demo.
