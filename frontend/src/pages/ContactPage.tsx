import { FormEvent, useState } from "react";
import { PageHero } from "../components/PageHero";
import { api } from "../services/api";

export function ContactPage() {
  const [status, setStatus] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    try {
      await api.submitContact({
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        phone: String(form.get("phone") ?? ""),
        subject: String(form.get("subject") ?? ""),
        message: String(form.get("message") ?? ""),
      });
      setStatus("Message submitted successfully.");
      event.currentTarget.reset();
    } catch {
      setStatus("Unable to submit the message right now.");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="A direct school communication channel."
        description="Phase 1 includes a contact module so inquiries can flow into the backend instead of living only in static page content."
      />
      <section className="content-section">
        <div className="container contact-grid">
          <article className="info-card">
            <h3>School Contact</h3>
            <p>123 Academy Street<br />Hometown, State 00000</p>
            <p>+1 (555) 010-2020<br />info@mahs-school.edu</p>
            <p>Office hours: Monday to Friday, 8:00 AM to 4:00 PM</p>
          </article>
          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="eyebrow">Send Inquiry</p>
            <input name="name" placeholder="Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <input name="phone" placeholder="Phone" />
            <input name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" rows={6} required />
            <button className="button primary" type="submit">
              Send Message
            </button>
            {status ? <p className="form-status">{status}</p> : null}
          </form>
        </div>
      </section>
    </>
  );
}
