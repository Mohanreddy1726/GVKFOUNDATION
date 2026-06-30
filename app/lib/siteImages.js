// Single source of truth for every image slot on the site.
// Paste URLs into the empty `src` fields below — the rest of the site picks them up automatically.
// Leave a `src` as "" to keep the existing gradient placeholder.
//
// Each entry: { src: "https://...", alt: "description for screen readers", tone: "navy|cream|olive|rust|slate|sand" }
// `tone` is the gradient color used as a fallback when src is empty.

export const SITE_IMAGES = {
  // ── Hero collage (two stacked photos in the right column) ────────────────
  hero: {
    image1: {
      src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/image_2026-06-27_132215544.png",
      alt: "Students in a digital learning session",
      tone: "cream",
    },
    image2: {
      src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/image_2026-06-27_132947979.png",
      alt: "Community members at a foundation event",
      tone: "navy",
    },
  },

  // ── Welcome block (two stacked photos in the left column) ────────────────
  welcome: {
    image1: {
      src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/DSC_9311.JPG",
      alt: "Students engaged in a foundation programme",
      tone: "cream",
    },
    image2: {
      src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/gvk-sir-and-vinod-sir-food-donation-photo.jpg",
      alt: "Community members at a GVK Foundation event",
      tone: "navy",
    },
  },

  // ── Moments gallery ("Stories from the field" — 6 tiles) ─────────────────
  moments: {
    1: { src: "", alt: "Moment 1", tone: "navy" },
    2: { src: "", alt: "Moment 2", tone: "cream" },
    3: { src: "", alt: "Moment 3", tone: "rust" },
    4: { src: "", alt: "Moment 4", tone: "olive" },
    5: { src: "", alt: "Moment 5", tone: "sand" },
    6: { src: "", alt: "Moment 6", tone: "slate" },
  },

  // ── Founder portrait ─────────────────────────────────────────────────────
  founder: {
    portrait: {
      src: "",
      alt: "Dr. Gundala Vijay Kumar, founder of GVK Foundation",
      tone: "navy",
    },
  },

  // ── Initiatives grid (12 cards) ──────────────────────────────────────────
  initiatives: {
    1:  { src: "", alt: "Initiative 1", tone: "cream" },
    2:  { src: "", alt: "Initiative 2", tone: "olive" },
    3:  { src: "", alt: "Initiative 3", tone: "rust" },
    4:  { src: "", alt: "Initiative 4", tone: "navy" },
    5:  { src: "", alt: "Initiative 5", tone: "sand" },
    6:  { src: "", alt: "Initiative 6", tone: "slate" },
    7:  { src: "", alt: "Initiative 7", tone: "cream" },
    8:  { src: "", alt: "Initiative 8", tone: "olive" },
    9:  { src: "", alt: "Initiative 9", tone: "rust" },
    10: { src: "", alt: "Initiative 10", tone: "navy" },
    11: { src: "", alt: "Initiative 11", tone: "sand" },
    12: { src: "", alt: "Initiative 12", tone: "slate" },
  },

  // ── Testimonial avatars (one per testimonial id) ─────────────────────────
  testimonials: {
    t1: { src: "", alt: "Anitha R.", tone: "cream" },
    t2: { src: "", alt: "Ravi Kumar", tone: "navy" },
    t3: { src: "", alt: "Smt. Lakshmi Devi", tone: "rust" },
    t4: { src: "", alt: "Mohammed Iqbal", tone: "olive" },
    t5: { src: "", alt: "Priya Sharma", tone: "sand" },
    t6: { src: "", alt: "Dr. Suresh Naidu", tone: "slate" },
  },

  // ── Programs (spotlight on home + cards on home + gallery on detail page) ─
  programs: {
    "digital-education": {
      card:      { src: "", alt: "Digital Education", tone: "navy" },
      spotlight: {
        1: { src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/0af21485-6c71-4005-9004-4eb7941f8b2f.png", alt: "Digital Education — photo 1", tone: "cream" },
        2: { src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/6da55fc1-844d-49df-b27c-8d015711c0d0.png", alt: "Digital Education — photo 2", tone: "olive" },
      },
      gallery: {
        1: { src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/DSC02619.JPG.jpeg", alt: "Digital Education gallery 1", tone: "navy" },
        2: { src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/DSC02622.JPG.jpeg", alt: "Digital Education gallery 2", tone: "cream" },
        3: { src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/DSC02545.JPG.jpeg", alt: "Digital Education gallery 3", tone: "olive" },
        4: { src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/DSC02544.JPG.jpeg", alt: "Digital Education gallery 4", tone: "rust" },
        5: { src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/DSC02619.JPG.jpeg", alt: "Digital Education gallery 5", tone: "sand" },
        6: { src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/DSC02619.JPG.jpeg", alt: "Digital Education gallery 6", tone: "slate" },
      },
    },
    "career-empowerment": {
      card:      { src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/image_2026-06-27_151522985.png", alt: "Career Empowerment", tone: "sand" },
      spotlight: {
        1: { src: "", alt: "Career Empowerment — photo 1", tone: "sand" },
        2: { src: "", alt: "Career Empowerment — photo 2", tone: "navy" },
      },
      gallery: {
        1: { src: "", alt: "Career Empowerment gallery 1", tone: "sand" },
        2: { src: "", alt: "Career Empowerment gallery 2", tone: "navy" },
        3: { src: "", alt: "Career Empowerment gallery 3", tone: "cream" },
        4: { src: "", alt: "Career Empowerment gallery 4", tone: "slate" },
        5: { src: "", alt: "Career Empowerment gallery 5", tone: "olive" },
        6: { src: "", alt: "Career Empowerment gallery 6", tone: "rust" },
      },
    },
    "food-hunger-relief": {
      card:      { src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/DSC_9210.JPG", alt: "Food & Hunger Relief", tone: "rust" },
      spotlight: {
        1: { src: "", alt: "Food & Hunger Relief — photo 1", tone: "rust" },
        2: { src: "", alt: "Food & Hunger Relief — photo 2", tone: "cream" },
      },
      gallery: {
        1: { src: "", alt: "Food & Hunger Relief gallery 1", tone: "rust" },
        2: { src: "", alt: "Food & Hunger Relief gallery 2", tone: "cream" },
        3: { src: "", alt: "Food & Hunger Relief gallery 3", tone: "olive" },
        4: { src: "", alt: "Food & Hunger Relief gallery 4", tone: "navy" },
        5: { src: "", alt: "Food & Hunger Relief gallery 5", tone: "sand" },
        6: { src: "", alt: "Food & Hunger Relief gallery 6", tone: "slate" },
      },
    },
    "sports-development": {
      card:      { src: "https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/IMG_0994.JPG", alt: "Sports Development", tone: "olive" },
      spotlight: {
        1: { src: "", alt: "Sports Development — photo 1", tone: "olive" },
        2: { src: "", alt: "Sports Development — photo 2", tone: "navy" },
      },
      gallery: {
        1: { src: "", alt: "Sports Development gallery 1", tone: "olive" },
        2: { src: "", alt: "Sports Development gallery 2", tone: "navy" },
        3: { src: "", alt: "Sports Development gallery 3", tone: "rust" },
        4: { src: "", alt: "Sports Development gallery 4", tone: "cream" },
        5: { src: "", alt: "Sports Development gallery 5", tone: "sand" },
        6: { src: "", alt: "Sports Development gallery 6", tone: "slate" },
      },
    },
  },
};