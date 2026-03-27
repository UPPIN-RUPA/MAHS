export type SiteSettings = {
  school_name: string;
  tagline: string;
  logo: string;
  hero_title: string;
  hero_subtitle: string;
  about_title: string;
  address: string;
  phone: string;
  email: string;
  principal_name: string;
  principal_message: string;
  principal_photo: string;
  about_text: string;
  facebook_url: string;
  instagram_url: string;
  youtube_url: string;
  is_active: boolean;
  updated_at: string | null;
};

export type AcademicsContent = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  display_order: number;
  is_active: boolean;
};

export type Announcement = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  publish_date: string;
  expiry_date: string | null;
  is_published: boolean;
  is_featured?: boolean;
};

export type EventItem = {
  id: number;
  title: string;
  slug: string;
  description: string;
  event_date: string;
  start_time: string | null;
  end_time: string | null;
  venue: string;
  cover_image: string;
  is_featured: boolean;
  status: string;
};

export type GalleryItem = {
  id: number;
  title: string;
  image: string;
  category: string;
  related_event: number | null;
  related_event_title: string;
  created_at: string;
  is_featured: boolean;
};

export type ContactMessageInput = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};
