import type { AcademicsContent, Announcement, ContactMessageInput, EventItem, GalleryItem, SiteSettings } from "../types";

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

export const api = {
  getSiteSettings: () => request<SiteSettings>("/site-settings/"),
  getAcademics: () => request<AcademicsContent[]>("/academics/"),
  getAnnouncements: () => request<Announcement[]>("/announcements/"),
  getEvents: () => request<EventItem[]>("/events/"),
  getGallery: () => request<GalleryItem[]>("/gallery/"),
  submitContact: (payload: ContactMessageInput) =>
    request("/contact/", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
