import { Route, Routes } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";
import { AboutPage } from "./pages/AboutPage";
import { AcademicsPage } from "./pages/AcademicsPage";
import { AnnouncementsPage } from "./pages/AnnouncementsPage";
import { ContactPage } from "./pages/ContactPage";
import { EventsPage } from "./pages/EventsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
