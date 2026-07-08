"use client";
import { useState, useEffect } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { CTABanner } from "../components/sections/CTABanner";
import { Reveal } from "../components/primitives/Reveal";
import { PillButton } from "../components/primitives/PillButton";
import { SectionLabel } from "../components/primitives/SectionLabel";
import { PhotoPlaceholder } from "../components/primitives/PhotoPlaceholder";

const EVENTS_DATA = [
  {
    id: 1,
    title: "Annual Charity Gala 2026",
    date: "August 15, 2026",
    location: "Grand Ballroom, Hyderabad",
    category: "Fundraiser",
    description: "Join us for an evening of celebration and giving back.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    accent: "#ff0008"
  },
  {
    id: 2,
    title: "Education Drive",
    date: "September 5, 2026",
    location: "Multiple Locations",
    category: "Community",
    description: "Distributing school supplies to underprivileged children.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
    accent: "#1e40af"
  },
  {
    id: 3,
    title: "Healthcare Camp",
    date: "September 20, 2026",
    location: "Rural Areas",
    category: "Health",
    description: "Free medical checkups and health awareness programs.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    accent: "#059669"
  },
  {
    id: 4,
    title: "Volunteer Meetup",
    date: "October 10, 2026",
    location: "Foundation Office",
    category: "Community",
    description: "Connect with fellow volunteers and make a difference.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800",
    accent: "#7c3aed"
  },
  {
    id: 5,
    title: "Food Distribution Drive",
    date: "October 25, 2026",
    location: "Various Districts",
    category: "Relief",
    description: "Providing nutritious meals to families in need.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800",
    accent: "#ea580c"
  },
  {
    id: 6,
    title: "Women's Empowerment Workshop",
    date: "November 12, 2026",
    location: "Community Center",
    category: "Education",
    description: "Skills training and entrepreneurship guidance.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800",
    accent: "#db2777"
  }
];

function EventCard({ event, index }) {
  return (
    <Reveal delay={index * 80} direction="up">
      <div className="group relative rounded-2xl overflow-hidden bg-white border border-black/5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-[200px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 z-20">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
              style={{ background: event.accent }}
            >
              {event.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-sm text-[#5f6368] mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{event.date}</span>
            <span className="mx-1">•</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{event.location}</span>
          </div>
          <h3 className="font-display text-xl text-[#0d162a] mb-2">{event.title}</h3>
          <p className="font-body text-sm text-[#5f6368] mb-4">{event.description}</p>
          <PillButton variant="outline" className="w-full justify-center">Register Now</PillButton>
        </div>
      </div>
    </Reveal>
  );
}

function StatsSection() {
  const stats = [
    { number: "150+", label: "Events Hosted" },
    { number: "50,000+", label: "Lives Impacted" },
    { number: "2,500+", label: "Active Volunteers" },
    { number: "25", label: "Cities Covered" }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0d162a] text-white">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 100} direction="up">
              <div className="text-center">
                <div className="font-stat text-4xl md:text-5xl text-[#ff0008] mb-2">{stat.number}</div>
                <div className="font-body text-sm text-white/70">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PastEvents() {
  const pastEvents = [
    { title: "Blood Donation Camp", date: "June 2026", image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600" },
    { title: "Tree Plantation Drive", date: "May 2026", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600" },
    { title: "Senior Care Visit", date: "April 2026", image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600" }
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-12 bg-gray-50">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block h-px w-10 bg-[#ff0008]" />
            <span className="font-eyebrow text-xs tracking-[0.2em] text-[#ff0008]">PAST EVENTS</span>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <Reveal key={index} delay={index * 80} direction="up">
              <div className="group relative rounded-2xl overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm text-white/70 mb-1">{event.date}</p>
                  <h3 className="font-display text-xl">{event.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EventsPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 text-white overflow-hidden" style={{ background: "radial-gradient(circle at 70% 40%, #1e2f6a 0%, transparent 55%), linear-gradient(135deg, #1e2f6a22 0%, #050817 60%, #0d162a 100%)" }}>
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 80%, #ff000822 0%, transparent 60%)" }} />
          <div className="relative mx-auto max-w-[1440px] px-5 md:px-12">
            <Reveal>
              <SectionLabel color="#ff0008">GET INVOLVED</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-[40px] sm:text-[52px] md:text-[64px] leading-tight mt-4">
                Upcoming Events
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="font-body mt-6 text-[16px] md:text-[18px] leading-7 text-white/80 max-w-2xl">
                Join us in our mission to create real change. Discover upcoming events, campaigns, and opportunities to get involved with GVK Foundation.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <PillButton variant="red">Register for Events</PillButton>
                <PillButton variant="outline">Become a Volunteer</PillButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Events Grid */}
        <section className="py-16 md:py-24 px-5 md:px-12">
          <div className="mx-auto max-w-[1440px]">
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block h-px w-10 bg-[#ff0008]" />
                <span className="font-eyebrow text-xs tracking-[0.2em] text-[#ff0008]">UPCOMING EVENTS</span>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EVENTS_DATA.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Past Events Gallery */}
        <PastEvents />

        <CTABanner />
        <Footer />
      </main>
    </>
  );
}