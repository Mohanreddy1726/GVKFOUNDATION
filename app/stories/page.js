"use client";
import { useEffect, useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { MomentsGallery } from "../components/sections/MomentsGallery";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { FounderSection } from "../components/sections/FounderSection";
import { CTABanner } from "../components/sections/CTABanner";
import { Reveal } from "../components/primitives/Reveal";
import { PillButton } from "../components/primitives/PillButton";
import { SectionLabel } from "../components/primitives/SectionLabel";

function ImpactStories() {
  const stories = [
    {
      category: "Education",
      title: "From Classroom to Campus",
      story: "A young girl's journey from a government school to her dream engineering college, made possible by our scholarship program.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
      impact: "40+ scholarships awarded"
    },
    {
      category: "Healthcare",
      title: "A New Lease on Life",
      story: "How our free cardiac surgery program saved a father of three and gave his family hope for the future.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600",
      impact: "200+ surgeries completed"
    },
    {
      category: "Women Empowerment",
      title: "Building Dreams",
      story: "A homemaker transformed her tailoring skills into a successful business, now employing 10 other women.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600",
      impact: "500+ women entrepreneurs"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-12">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block h-px w-10 bg-[#ff0008]" />
            <span className="font-eyebrow text-xs tracking-[0.2em] text-[#ff0008]">IMPACT STORIES</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-[32px] sm:text-[42px] text-[#0d162a] mb-4">Stories of Change</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="font-body text-lg text-[#5f6368] max-w-2xl mb-12">
            Real stories of real impact. These are the lives you've helped transform through your support.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Reveal key={index} delay={200 + index * 100} direction="up">
              <div className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-white bg-[#ff0008]">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-[#ff0008] mb-2">{story.impact}</div>
                  <h3 className="font-display text-xl text-[#0d162a] mb-3">{story.title}</h3>
                  <p className="font-body text-sm text-[#5f6368] line-clamp-3">{story.story}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VolunteerSpotlight() {
  const volunteers = [
    { name: "Dr. Rajesh Kumar", role: "Medical Volunteer", years: "5 years", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400" },
    { name: "Priya Sharma", role: "Education Mentor", years: "3 years", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400" },
    { name: "Amit Reddy", role: "Event Coordinator", years: "4 years", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" }
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-12 bg-gray-50">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block h-px w-10 bg-[#ff0008]" />
            <span className="font-eyebrow text-xs tracking-[0.2em] text-[#ff0008]">VOLUNTEER SPOTLIGHT</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-[32px] sm:text-[42px] text-[#0d162a] mb-4">Our Volunteers</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="font-body text-lg text-[#5f6368] max-w-2xl mb-12">
            Meet the incredible people who give their time and talent to make a difference.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {volunteers.map((vol, index) => (
            <Reveal key={index} delay={200 + index * 80} direction="up">
              <div className="text-center p-8 bg-white rounded-2xl border border-black/5 shadow-sm">
                <img
                  src={vol.image}
                  alt={vol.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-[#ff0008]/20"
                />
                <h3 className="font-display text-xl text-[#0d162a]">{vol.name}</h3>
                <p className="font-body text-sm text-[#ff0008] mt-1">{vol.role}</p>
                <p className="font-body text-xs text-[#5f6368] mt-2">{vol.years} of service</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function StoriesPage() {
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
              <SectionLabel color="#ff0008">OUR STORIES</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-[40px] sm:text-[52px] md:text-[64px] leading-tight mt-4">
                Stories of Impact
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="font-body mt-6 text-[16px] md:text-[18px] leading-7 text-white/80 max-w-2xl">
                Every life transformed tells a story. Explore the journey of hope, courage, and change that your support makes possible.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <PillButton variant="red">Share Your Story</PillButton>
                <PillButton variant="outline">Become a Volunteer</PillButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Impact Stories */}
        <ImpactStories />

        {/* Moments Gallery */}
        <MomentsGallery />

        {/* Volunteer Spotlight */}
        <VolunteerSpotlight />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Founder Section */}
        <FounderSection />

        <CTABanner />
        <Footer />
      </main>
    </>
  );
}