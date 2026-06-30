"use client";
import ImmersiveScene from "../components/ui/ImmersiveScene";
import { Hero } from "../components/sections/Hero";
import { ImmersiveShowcase } from "../components/sections/ImmersiveShowcase";
import { WelcomeBlock } from "../components/sections/WelcomeBlock";
import { PurposeSection } from "../components/sections/PurposeSection";
import { VisionSection } from "../components/sections/VisionSection";
import { ProgramsSection } from "../components/sections/ProgramsSection";
import { StatsBlock } from "../components/sections/StatsBlock";
import { InitiativesSection } from "../components/sections/InitiativesSection";
import { MomentsGallery } from "../components/sections/MomentsGallery";
import { FounderSection } from "../components/sections/FounderSection";
import { AwardsSection } from "../components/sections/AwardsSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { CTABanner } from "../components/sections/CTABanner";
import { VolunteerForm } from "../components/forms/VolunteerForm";
import { DonationForm } from "../components/forms/DonationForm";
import { Footer } from "../components/layout/Footer";

export default function Foundation() {
  return (
    <>
      <ImmersiveScene />
      <main id="main" tabIndex={-1} className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <ImmersiveShowcase />
        <WelcomeBlock />
        <PurposeSection />
        <VisionSection />
        <ProgramsSection />
        <StatsBlock />
        <InitiativesSection />
        <MomentsGallery />
        <FounderSection />
        <AwardsSection />
        <TestimonialsSection />
        <VolunteerForm />
        <DonationForm />
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
