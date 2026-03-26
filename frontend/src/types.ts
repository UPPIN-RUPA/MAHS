export type SiteSettings = {
  school_name: string;
  tagline: string;
  logo: string;
  hero_title: string;
  hero_subtitle: string;
  address: string;
  phone: string;
  email: string;
  principal_message: string;
  about_text: string;
  updated_at: string | null;
};

export type AcademicsContent = {
  id: number;
  title: string;
  description: string;
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
  uploaded_at: string;
  is_featured: boolean;
};

export type ContactMessageInput = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
