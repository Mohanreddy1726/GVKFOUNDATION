"use client";
import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { CTABanner } from "../components/sections/CTABanner";
import { Reveal } from "../components/primitives/Reveal";
import { PillButton } from "../components/primitives/PillButton";
import { SectionLabel } from "../components/primitives/SectionLabel";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Reveal>
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-2xl text-[#0d162a] mb-2">Thank You!</h3>
          <p className="font-body text-[#5f6368]">We've received your message and will get back to you soon.</p>
        </div>
      </Reveal>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-sm text-[#5f6368] mb-2">Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#ff0008] focus:ring-1 focus:ring-[#ff0008] outline-none transition-colors font-body text-[#0d162a]"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block font-body text-sm text-[#5f6368] mb-2">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#ff0008] focus:ring-1 focus:ring-[#ff0008] outline-none transition-colors font-body text-[#0d162a]"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-sm text-[#5f6368] mb-2">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#ff0008] focus:ring-1 focus:ring-[#ff0008] outline-none transition-colors font-body text-[#0d162a]"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label className="block font-body text-sm text-[#5f6368] mb-2">Subject *</label>
          <select
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#ff0008] focus:ring-1 focus:ring-[#ff0008] outline-none transition-colors font-body text-[#0d162a]"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="donation">Donation Related</option>
            <option value="volunteer">Volunteering</option>
            <option value="partnership">Partnership</option>
            <option value="media">Media & Press</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block font-body text-sm text-[#5f6368] mb-2">Message *</label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#ff0008] focus:ring-1 focus:ring-[#ff0008] outline-none transition-colors font-body text-[#0d162a] resize-none"
          placeholder="How can we help you?"
        />
      </div>
      <PillButton variant="red" type="submit" className="w-full justify-center">Send Message</PillButton>
    </form>
  );
}

function ContactInfo() {
  const info = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Address",
      content: ["GVK Brothers Foundation", "123 Charity Lane, Suite 500", "Hyderabad, Telangana 500001"]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: ["contact@gvkfoundation.org", "donate@gvkfoundation.org"]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      content: ["+91 40 2345 6789", "+91 98765 43210"]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Office Hours",
      content: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"]
    }
  ];

  return (
    <div className="space-y-6">
      {info.map((item, index) => (
        <Reveal key={index} delay={index * 80} direction="up">
          <div className="flex gap-4 p-5 rounded-2xl bg-white border border-black/5 shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ff0008]/10 flex items-center justify-center text-[#ff0008]">
              {item.icon}
            </div>
            <div>
              <h4 className="font-display text-lg text-[#0d162a] mb-1">{item.title}</h4>
              {item.content.map((line, i) => (
                <p key={i} className="font-body text-sm text-[#5f6368]">{line}</p>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function FAQSection() {
  const faqs = [
    { q: "How can I donate to GVK Foundation?", a: "You can donate through our secure online portal, bank transfer, or visit our office. Every contribution makes a difference." },
    { q: "Can I volunteer with GVK Foundation?", a: "Yes! We welcome volunteers. Fill out the contact form and our team will get in touch with you." },
    { q: "Are my donations tax-deductible?", a: "Yes, all donations to GVK Foundation are tax-deductible under Section 80G of the Income Tax Act." }
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-12 bg-gray-50">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block h-px w-10 bg-[#ff0008]" />
            <span className="font-eyebrow text-xs tracking-[0.2em] text-[#ff0008]">FAQ</span>
          </div>
        </Reveal>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 80} direction="up">
              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
                <h4 className="font-display text-lg text-[#0d162a] mb-2">{faq.q}</h4>
                <p className="font-body text-sm text-[#5f6368]">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 text-white overflow-hidden" style={{ background: "radial-gradient(circle at 70% 40%, #1e2f6a 0%, transparent 55%), linear-gradient(135deg, #1e2f6a22 0%, #050817 60%, #0d162a 100%)" }}>
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 80%, #ff000822 0%, transparent 60%)" }} />
          <div className="relative mx-auto max-w-[1440px] px-5 md:px-12">
            <Reveal>
              <SectionLabel color="#ff0008">GET IN TOUCH</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-[40px] sm:text-[52px] md:text-[64px] leading-tight mt-4">
                Contact Us
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="font-body mt-6 text-[16px] md:text-[18px] leading-7 text-white/80 max-w-2xl">
                Get in touch with GVK Foundation. We'd love to hear from you and answer any questions you may have.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24 px-5 md:px-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Reveal>
                <div>
                  <h2 className="font-display text-[28px] sm:text-[36px] text-[#0d162a] mb-2">Send us a Message</h2>
                  <p className="font-body text-[#5f6368] mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                  <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-lg">
                    <ContactForm />
                  </div>
                </div>
              </Reveal>

              {/* Contact Info */}
              <Reveal delay={120}>
                <div>
                  <h2 className="font-display text-[28px] sm:text-[36px] text-[#0d162a] mb-2">Contact Information</h2>
                  <p className="font-body text-[#5f6368] mb-8">Reach out to us through any of these channels.</p>
                  <ContactInfo />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        <CTABanner />
        <Footer />
      </main>
    </>
  );
}