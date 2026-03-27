import type { AcademicsContent, Announcement, ContactMessageInput, EventItem, GalleryItem, PaginatedResponse, SiteSettings } from "../types";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000/api";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    ...init,
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

function normalizeListResponse<T>(payload: T[] | PaginatedResponse<T>): T[] {
  return Array.isArray(payload) ? payload : payload.results ?? [];
}

export const api = {
  getSiteSettings: () => request<SiteSettings>("/site-settings/"),
  getAcademics: async () => normalizeListResponse(await request<AcademicsContent[] | PaginatedResponse<AcademicsContent>>("/academics/")),
  getAcademicDetail: (slug: string) => request<AcademicsContent>(`/academics/${slug}/`),
  getAnnouncements: async () => normalizeListResponse(await request<Announcement[] | PaginatedResponse<Announcement>>("/announcements/")),
  getAnnouncementDetail: (slug: string) => request<Announcement>(`/announcements/${slug}/`),
  getEvents: async () => normalizeListResponse(await request<EventItem[] | PaginatedResponse<EventItem>>("/events/")),
  getEventDetail: (slug: string) => request<EventItem>(`/events/${slug}/`),
  getGallery: async () => normalizeListResponse(await request<GalleryItem[] | PaginatedResponse<GalleryItem>>("/gallery/")),
  submitContact: (payload: ContactMessageInput) =>
    request("/contact/", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
