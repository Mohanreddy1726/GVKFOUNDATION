// Bilingual dictionary. The English (en) entries are the source of truth.
// Telugu (te) and Hindi (hi) are added for every user-facing string.
// t(key) falls back to English if a key is missing in a locale.

export const LOCALES = ["en", "te", "hi"];
export const DEFAULT_LOCALE = "en";

export const DICTIONARY = {
  // ─── Navigation ──────────────────────────────────────────────────────
  en: {
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.impact": "Impact",
    "nav.stories": "Stories",
    "nav.contact": "Contact",

    // ─── Header ───────────────────────────────────────────────────────
    "header.brand": "GVK FOUNDATION",
    "header.donateNow": "Donate Now",
    "header.toggleMenu": "Toggle menu",
    "header.skipToContent": "Skip to content",

    // ─── Hero ────────────────────────────────────────────────────────
    "hero.badge": "Transforming communities since 2018",
    "hero.titleLine1": "Beyond Support",
    "hero.titleLine2": "Creating Real",
    "hero.titleLine3": "Change.",
    "hero.subtitle":
      "GVK Brothers Foundation uplifts students and communities through programs focused on education, health, empowerment, and sustainable development.",
    "hero.ctaDonate": "Donate Now →",
    "hero.ctaExplore": "Explore Programs",
    "hero.stat.lives": "Lives Impacted",
    "hero.stat.programs": "Programs",
    "hero.stat.volunteers": "Volunteers",
    "hero.successRate": "Student success rate",

    // ─── Immersive ──────────────────────────────────────────────────
    "immersive.eyebrow": "IMMERSIVE IN EVERY DIMENSION",
    "immersive.headingLine": "Where Change Becomes",
    "immersive.headingHighlight": "Something You Can See",
    "immersive.sub":
      "Six pillars. One movement. Every cause GVK Foundation stands for — education, health, empowerment, community, opportunity, and dignity.",
    "immersive.scroll": "Scroll to explore",
    "immersive.pillar.education": "Education",
    "immersive.pillar.health": "Health",
    "immersive.pillar.empowerment": "Empowerment",
    "immersive.pillar.community": "Community",
    "immersive.pillar.opportunity": "Opportunity",
    "immersive.pillar.dignity": "Dignity",

    // ─── Welcome ─────────────────────────────────────────────────────
    "welcome.eyebrow": "WELCOME TO GVK EDUTECH FOUNDATION",
    "welcome.heading": "Created To Uplift Lives\nDriven To Build Futures",
    "welcome.body":
      "GVK Brothers Foundation is committed to supporting students and communities through impactful programs focused on education, health, empowerment, and development.",
    "welcome.pill.education": "Educational Support",
    "welcome.pill.health": "Health & Welfare",
    "welcome.pill.community": "Community Impact",

    // ─── Purpose ─────────────────────────────────────────────────────
    "purpose.heading": "More Than An Organization\nA Purpose Driven\nBy Humanity",
    "purpose.sub":
      "We exist to serve, to uplift, and to stand with every individual working toward a better tomorrow.",
    "purpose.point1": "Empowering students through education",
    "purpose.point2": "Promoting health and community welfare",
    "purpose.point3": "Driving sustainable social impact",
    "purpose.point4": "Creating pathways for future generations",

    // ─── Vision ──────────────────────────────────────────────────────
    "vision.eyebrow": "OUR VISION",
    "vision.heading": "A Vision Built On Care\nA Future Built For\nCommunities",
    "vision.body":
      "To build a society where every individual has access to opportunity, dignity, and the support they need to thrive.",
    "vision.pillar1.title": "Opportunity",
    "vision.pillar1.sub": "for all",
    "vision.pillar2.title": "Dignity",
    "vision.pillar2.sub": "in every step",
    "vision.pillar3.title": "Support",
    "vision.pillar3.sub": "that lasts",

    // ─── Programs ────────────────────────────────────────────────────
    "programs.id": "programs",
    "programs.sectionHeading": "Programmes That Change Lives",
    "programs.sectionSub":
      "Every programme is designed to create lasting, measurable change in the communities we serve.",
    "programs.donateHere": "Donate to this program →",
    "programs.back": "Back to all programs",
    "programs.supportHere": "Support this program →",

    // ─── Stats ───────────────────────────────────────────────────────
    "stats.heading": "Some Count Numbers,\nWe Count Lives Changed",
    "stats.sub":
      "Every number represents a student supported, an opportunity created, and a future empowered.",
    "stats.students": "Students Empowered",
    "stats.lives": "Lives Impacted",
    "stats.programs": "Programs Delivered",
    "stats.volunteers": "Volunteers Engaged",

    // ─── Initiatives ─────────────────────────────────────────────────
    "initiatives.eyebrow": "WHAT WE DO",
    "initiatives.heading": "Every Initiative,\nA Step Towards Change",
    "initiatives.sub":
      "Discover initiatives creating impact through education, healthcare, empowerment, and community support.",
    "initiatives.cta": "View All Initiatives →",
    "initiatives.card.1.title":
      "Honoring Students For Excellence, Commitment, And Academic Success",
    "initiatives.card.1.desc":
      "Recognizing students who demonstrate outstanding academic commitment.",
    "initiatives.card.2.title": "Supporting Aspiring Athletes Through Sports Kit Distribution",
    "initiatives.card.2.desc":
      "Providing equipment and resources to young athletes to help them pursue excellence.",
    "initiatives.card.3.title": "Leading The Food Distribution Program",
    "initiatives.card.3.desc":
      "Serving nutritious meals to families and individuals facing hardship across communities.",
    "initiatives.card.4.title": "Empowering Future Tech Leaders",
    "initiatives.card.4.desc":
      "Equipping students with tablets, digital tools, and access to online learning resources.",
    "initiatives.card.5.title": "Career Guidance & Job Melas",
    "initiatives.card.5.desc":
      "Connecting aspiring professionals with mentors and employers through career fairs.",
    "initiatives.card.6.title": "Free Health & Welfare Camps",
    "initiatives.card.6.desc":
      "Delivering essential healthcare services to underserved communities across regions.",
    "initiatives.card.7.title": "Skill Development Workshops",
    "initiatives.card.7.desc":
      "Hands-on training programs that prepare students and professionals for the modern workforce.",
    "initiatives.card.8.title": "Community Outreach Drives",
    "initiatives.card.8.desc":
      "Mobilizing volunteers to support education, health, and welfare at the grassroots level.",
    "initiatives.card.9.title": "Women Empowerment Initiatives",
    "initiatives.card.9.desc":
      "Programs that create pathways for women to access education, skills, and opportunities.",
    "initiatives.card.10.title": "Educational Material Distribution",
    "initiatives.card.10.desc":
      "Providing books, supplies, and learning kits to students in underserved schools.",
    "initiatives.card.11.title": "Mentorship & Counseling",
    "initiatives.card.11.desc":
      "Connecting students and families with mentors who guide long-term personal growth.",
    "initiatives.card.12.title": "Rural Development Projects",
    "initiatives.card.12.desc":
      "Investing in infrastructure and programs that strengthen rural communities.",

    // ─── Moments ─────────────────────────────────────────────────────
    "moments.eyebrow": "OUR STORIES",
    "moments.heading": "Moments Of Impact\nStories Captured Through Action",

    // ─── Founder ─────────────────────────────────────────────────────
    "founder.eyebrow": "OUR FOUNDER",
    "founder.heading": "A Vision Born From\nThe Heart",
    "founder.name": "Dr. GUNDALA VIJAY KUMAR (GVK)",
    "founder.role": "Founder",
    "founder.quote":
      "We believe every individual deserves access to education, support, dignity, and opportunity. What began as a vision to uplift communities continues to grow through compassion, service, and meaningful impact.",

    // ─── Awards ──────────────────────────────────────────────────────
    "awards.eyebrow": "RECOGNITION",
    "awards.heading":
      "More Than Awards — A Reflection Of Leadership",
    "awards.card.1.title": "Youth Nation Award — 2026",
    "awards.card.1.desc":
      "Recognized for outstanding contribution to youth empowerment and community impact.",
    "awards.card.2.title": "Social Impact Excellence",
    "awards.card.2.desc":
      "Honored for sustained programs that uplift students and communities across India.",
    "awards.card.3.title": "Education Changemaker",
    "awards.card.3.desc":
      "Awarded for innovative digital education initiatives reaching rural learners.",

    // ─── Testimonials ────────────────────────────────────────────────
    "testimonials.eyebrow": "COMMUNITY VOICES",
    "testimonials.heading": "What Our Community Says",
    "testimonials.roles.parent": "Parent",
    "testimonials.roles.student": "Student",
    "testimonials.roles.teacher": "Teacher",
    "testimonials.roles.volunteer": "Volunteer",
    "testimonials.roles.partner": "Partner",
    "testimonials.t1":
      "When the foundation gave my daughter a tablet, she started teaching me how to use it within a week. Today she's the family's window to the world.",
    "testimonials.t2":
      "The career mentorship program gave me the resume, the practice, and the confidence. I walked into my first interview knowing I belonged there.",
    "testimonials.t3":
      "I've taught for thirty years. The quiet persistence of the GVK volunteers — showing up every week with no fanfare — is what changed my students' lives.",
    "testimonials.t4":
      "I joined to give a few hours on weekends. Three years later, I'm leading a district team. The work grows on you.",
    "testimonials.t5":
      "I used to skip meals to save money for books. The food-relief program took that weight off. I could finally just be a student.",
    "testimonials.t6":
      "We partnered with GVK on a rural skilling cohort. Their follow-through with each learner was better than any corporate program I've seen.",

    // ─── CTA banner ─────────────────────────────────────────────────
    "cta.heading": "Hope begins when humanity",
    "cta.headingEm": "chooses to care.",
    "cta.body":
      "Your support can create hope, opportunity, and lasting change for communities that need it most.",
    "cta.donate": "Donate Now →",
    "cta.getInvolved": "Get Involved",

    // ─── Donation form ──────────────────────────────────────────────
    "donate.eyebrow": "MAKE A DONATION",
    "donate.heading": "Every Rupee,\nA Step Toward",
    "donate.headingEm": "Someone's Future.",
    "donate.body":
      "Your contribution directly funds scholarships, healthcare camps, food relief, and community programs across India. 100% of your donation reaches those in need.",
    "donate.bullet.transparent.title": "Transparent",
    "donate.bullet.transparent.body": "Every donation is tracked and reported",
    "donate.bullet.secure.title": "Secure",
    "donate.bullet.secure.body": "256-bit SSL encrypted payment processing",
    "donate.bullet.tax.title": "Tax Deductible",
    "donate.bullet.tax.body": "80G certificate provided for all donations",
    "donate.freq.oneTime": "One-time",
    "donate.freq.monthly": "Monthly",
    "donate.causeLabel": "Direct your donation",
    "donate.cause.general": "General Fund — where most needed",
    "donate.cause.education": "Education",
    "donate.cause.health": "Health & Welfare",
    "donate.cause.empowerment": "Empowerment",
    "donate.cause.community": "Community",
    "donate.cause.opportunity": "Opportunity",
    "donate.cause.dignity": "Dignity",
    "donate.cause.food": "Food & Hunger Relief",
    "donate.cause.sports": "Sports Development",
    "donate.field.name": "Full Name",
    "donate.field.email": "Email",
    "donate.field.phone": "Phone (optional)",
    "donate.field.message": "Message (optional)",
    "donate.field.messagePh": "Leave a note of encouragement...",
    "donate.field.customAmount": "Custom amount (min ₹50)",
    "donate.paymentLabel": "Payment Method",
    "donate.payment.card": "Card",
    "donate.payment.upi": "UPI",
    "donate.payment.netbanking": "Net Banking",
    "donate.payment.wallet": "Wallet",
    "donate.summary": "Your Donation",
    "donate.summarySuffixMonthly": "/month",
    "donate.submit": "Donate",
    "donate.agree":
      "By donating you agree to our terms. This is a demo form — no payment is processed.",
    "donate.error.name": "Please enter your full name",
    "donate.error.email": "Email is required",
    "donate.error.emailInvalid": "Enter a valid email",
    "donate.error.phone": "Enter a valid phone number",
    "donate.error.amount": "Minimum donation is ₹50",
    "donate.thankHeading": "Thank you, ",
    "donate.thankSub": "Your kindness creates change.",
    "donate.thankBody":
      "A donation of {amount} {monthly}has been recorded for the {cause} programme. A confirmation has been sent to {email}.",
    "donate.thankAnother": "Make Another Donation",
    "donate.thankBack": "Back to Top",

    // ─── Volunteer form ─────────────────────────────────────────────
    "volunteer.eyebrow": "GET INVOLVED",
    "volunteer.heading": "Become A Volunteer.",
    "volunteer.headingEm": "Become A Bridge.",
    "volunteer.body":
      "Whether you have an hour a month or a day a week, your presence matters. Join a community of volunteers building futures across India.",
    "volunteer.bullet.difference.title": "Make a Difference",
    "volunteer.bullet.difference.body": "Direct, tangible impact on real lives",
    "volunteer.bullet.community.title": "Join a Community",
    "volunteer.bullet.community.body": "Connect with people who care like you do",
    "volunteer.bullet.flexible.title": "Flexible Commitment",
    "volunteer.bullet.flexible.body": "Choose what fits your schedule",
    "volunteer.field.name": "Full Name",
    "volunteer.field.email": "Email",
    "volunteer.field.phone": "Phone (optional)",
    "volunteer.field.city": "City",
    "volunteer.field.area": "Area of Interest",
    "volunteer.field.availability": "Availability",
    "volunteer.field.message": "Why do you want to volunteer? (optional)",
    "volunteer.area.education": "Education",
    "volunteer.area.health": "Health",
    "volunteer.area.food": "Food & Hunger Relief",
    "volunteer.area.sports": "Sports",
    "volunteer.area.community": "Community Outreach",
    "volunteer.area.skills": "Skills-based Volunteering",
    "volunteer.avail.weekends": "Weekends",
    "volunteer.avail.weekdays": "Weekdays",
    "volunteer.avail.flexible": "Flexible",
    "volunteer.submit": "Sign me up",
    "volunteer.error.name": "Please enter your full name",
    "volunteer.error.email": "Email is required",
    "volunteer.error.emailInvalid": "Enter a valid email",
    "volunteer.error.city": "Please enter your city",
    "volunteer.error.area": "Please pick an area",
    "volunteer.thankHeading": "Welcome, ",
    "volunteer.thankSub": "You're now part of something bigger.",
    "volunteer.thankBody":
      "We've received your volunteer sign-up. Our {area} coordinator will reach out within 48 hours with next steps for {city}.",
    "volunteer.thankAnother": "Submit Another",

    // ─── Floating Donate ─────────────────────────────────────────────
    "fab.donate": "Donate",
    "fab.aria": "Donate to GVK Foundation",

    // ─── Footer ─────────────────────────────────────────────────────
    "footer.tagline":
      "GVK Brothers Foundation is committed to supporting students and communities through impactful programs focused on education, health, empowerment, and development.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.address": "Hyderabad, India",
    "footer.emailLabel": "contact@gvkfoundation.org",
    "footer.copyright": "All rights reserved.",
    "footer.builtWith": "Built with purpose.",
    "footer.social.facebook": "Facebook",
    "footer.social.x": "X",
    "footer.social.linkedin": "LinkedIn",
    "footer.social.youtube": "YouTube",

    // ─── Language switcher ──────────────────────────────────────────
    "lang.en": "EN",
    "lang.te": "తె",
    "lang.hi": "हिं",
    "lang.aria": "Switch language",
  },

  te: {
    "nav.about": "గురించి",
    "nav.programs": "కార్యక్రమాలు",
    "nav.impact": "ప్రభావం",
    "nav.stories": "కథలు",
    "nav.contact": "సంప్రదించండి",

    "header.brand": "GVK ఫౌండేషన్",
    "header.donateNow": "విరాళం ఇవ్వండి",
    "header.toggleMenu": "మెనుని తెరవండి",
    "header.skipToContent": "కంటెంట్‌కు వెళ్ళండి",

    "hero.badge": "2018 నుండి సంఘాలను మారుస్తోంది",
    "hero.titleLine1": "మద్దతు కంటే",
    "hero.titleLine2": "నిజమైన",
    "hero.titleLine3": "మార్పు.",
    "hero.subtitle":
      "GVK బ్రదర్స్ ఫౌండేషన్ విద్య, ఆరోగ్యం, సాధికారత మరియు సుస్థిర అభివృద్ధిపై దృష్టి సారించిన కార్యక్రమాల ద్వారా విద్యార్థులు మరియు సంఘాలను ఎత్తుకుంటుంది.",
    "hero.ctaDonate": "విరాళం ఇవ్వండి →",
    "hero.ctaExplore": "కార్యక్రమాలు చూడండి",
    "hero.stat.lives": "ప్రభావిత జీవితాలు",
    "hero.stat.programs": "కార్యక్రమాలు",
    "hero.stat.volunteers": "వాలంటీర్లు",
    "hero.successRate": "విద్యార్థి విజయ రేటు",

    "immersive.eyebrow": "ప్రతి కోణంలో ఇమ్మర్సివ్",
    "immersive.headingLine": "మార్పు ఎక్కడ",
    "immersive.headingHighlight": "కనిపించేదిగా మారుతుంది",
    "immersive.sub":
      "ఆరు స్తంభాలు. ఒక ఉద్యమం. GVK ఫౌండేషన్ నిలబడే ప్రతి లక్ష్యం — విద్య, ఆరోగ్యం, సాధికారత, సంఘం, అవకాశం మరియు గౌరవం.",
    "immersive.scroll": "స్క్రోల్ చేయండి",
    "immersive.pillar.education": "విద్య",
    "immersive.pillar.health": "ఆరోగ్యం",
    "immersive.pillar.empowerment": "సాధికారత",
    "immersive.pillar.community": "సంఘం",
    "immersive.pillar.opportunity": "అవకాశం",
    "immersive.pillar.dignity": "గౌరవం",

    "welcome.eyebrow": "GVK ఎడ్యుటెక్ ఫౌండేషన్‌కు స్వాగతం",
    "welcome.heading": "జీవితాలను ఎత్తడానికి\nభవిష్యత్తును నిర్మించడానికి",
    "welcome.body":
      "GVK బ్రదర్స్ ఫౌండేషన్ విద్య, ఆరోగ్యం, సాధికారత మరియు అభివృద్ధిపై దృష్టి సారించిన కార్యక్రమాల ద్వారా విద్యార్థులు మరియు సంఘాలకు మద్దతు ఇవ్వడానికి కట్టుబడి ఉంది.",
    "welcome.pill.education": "విద్యా మద్దతు",
    "welcome.pill.health": "ఆరోగ్యం & సంక్షేమం",
    "welcome.pill.community": "సంఘ ప్రభావం",

    "purpose.heading": "సంస్థ కంటే ఎక్కువ\nమానవత్వం నడిచే\nఒక లక్ష్యం",
    "purpose.sub":
      "మెరుగైన రేపటి కోసం పనిచేసే ప్రతి వ్యక్తిని మేము సేవించడానికి, ఎత్తడానికి మరియు నిలబడటానికి ఉన్నాము.",
    "purpose.point1": "విద్య ద్వారా విద్యార్థుల సాధికారత",
    "purpose.point2": "ఆరోగ్యం మరియు సంఘ సంక్షేమం",
    "purpose.point3": "సుస్థిర సామాజిక ప్రభావం",
    "purpose.point4": "తరతరాలకు మార్గాలు సృష్టించడం",

    "vision.eyebrow": "మా దృష్టి",
    "vision.heading": "శ్రద్ధపై నిర్మిత దృష్టి\nసంఘాల కోసం\nభవిష్యత్తు",
    "vision.body":
      "ప్రతి వ్యక్తికి అవకాశం, గౌరవం మరియు వృద్ధి చెందడానికి అవసరమైన మద్దతు ఉన్న సమాజాన్ని నిర్మించడం.",
    "vision.pillar1.title": "అవకాశం",
    "vision.pillar1.sub": "అందరికీ",
    "vision.pillar2.title": "గౌరవం",
    "vision.pillar2.sub": "ప్రతి అడుగులో",
    "vision.pillar3.title": "మద్దతు",
    "vision.pillar3.sub": "శాశ్వతమైనది",

    "programs.id": "programs",
    "programs.sectionHeading": "జీవితాలను మార్చే కార్యక్రమాలు",
    "programs.sectionSub":
      "ప్రతి కార్యక్రమం మేము సేవించే సంఘాలలో శాశ్వత, కొలవగలిగే మార్పును సృష్టించడానికి రూపొందించబడింది.",
    "programs.donateHere": "ఈ కార్యక్రమానికి విరాళం ఇవ్వండి →",
    "programs.back": "అన్ని కార్యక్రమాలకు తిరిగి",
    "programs.supportHere": "ఈ కార్యక్రమానికి మద్దతు ఇవ్వండి →",

    "stats.heading": "కొందరు సంఖ్యలను లెక్కిస్తారు,\nమేము మారిన జీవితాలను లెక్కిస్తాము",
    "stats.sub":
      "ప్రతి సంఖ్య మద్దతు పొందిన విద్యార్థిని, సృష్టించిన అవకాశాన్ని మరియు సాధికారమైన భవిష్యత్తును సూచిస్తుంది.",
    "stats.students": "సాధికారమైన విద్యార్థులు",
    "stats.lives": "ప్రభావిత జీవితాలు",
    "stats.programs": "అందించిన కార్యక్రమాలు",
    "stats.volunteers": "నిమగ్నమైన వాలంటీర్లు",

    "initiatives.eyebrow": "మేము ఏమి చేస్తాము",
    "initiatives.heading": "ప్రతి చొరవ,\nమార్పు వైపు ఒక అడుగు",
    "initiatives.sub":
      "విద్య, ఆరోగ్య సంరక్షణ, సాధికారత మరియు సంఘ మద్దతు ద్వారా ప్రభావాన్ని సృష్టిస్తున్న చొరవలను కనుగొనండి.",
    "initiatives.cta": "అన్ని చొరవలు చూడండి →",
    "initiatives.card.1.title": "విద్యార్థులను విజయం, నిబద్ధత మరియు విద్యా విజయం కోసం గౌరవించడం",
    "initiatives.card.1.desc": "అత్యుత్తమ విద్యా నిబద్ధతను ప్రదర్శించే విద్యార్థులను గుర్తించడం.",
    "initiatives.card.2.title": "క్రీడా కిట్ పంపిణీ ద్వారా ఆశించే అథ్లెట్లకు మద్దతు",
    "initiatives.card.2.desc": "అథ్లెట్లకు పరికరాలు మరియు వనరులను అందించడం.",
    "initiatives.card.3.title": "ఆహార పంపిణీ కార్యక్రమం",
    "initiatives.card.3.desc": "కష్టాల్లో ఉన్న కుటుంబాలకు పోషకాహార భోజనం అందించడం.",
    "initiatives.card.4.title": "భవిష్యత్ టెక్ లీడర్లను సాధికారం చేయడం",
    "initiatives.card.4.desc": "విద్యార్థులకు ట్యాబ్లెట్‌లు, డిజిటల్ సాధనాలు అందించడం.",
    "initiatives.card.5.title": "కెరీర్ గైడెన్స్ & జాబ్ మేళాలు",
    "initiatives.card.5.desc": "కెరీర్ ఫెయిర్‌ల ద్వారా ఆకాంక్షించే నిపుణులను మెంటార్లతో అనుసంధానం చేయడం.",
    "initiatives.card.6.title": "ఉచిత ఆరోగ్య & సంక్షేమ శిబిరాలు",
    "initiatives.card.6.desc": "అవసరమైన ఆరోగ్య సంరక్షణ సేవలను అందించడం.",
    "initiatives.card.7.title": "నైపుణ్య అభివృద్ధి వర్క్‌షాప్‌లు",
    "initiatives.card.7.desc": "ఆధునిక శ్రామిక శక్తికి విద్యార్థులను సిద్ధం చేసే శిక్షణ కార్యక్రమాలు.",
    "initiatives.card.8.title": "సంఘ ఔట్రీచ్ డ్రైవ్‌లు",
    "initiatives.card.8.desc": "విద్య, ఆరోగ్యం మరియు సంక్షేమం కోసం వాలంటీర్లను సమీకరించడం.",
    "initiatives.card.9.title": "మహిళా సాధికారత చొరవలు",
    "initiatives.card.9.desc": "మహిళలకు విద్య, నైపుణ్యాలు మరియు అవకాశాలకు మార్గాలు సృష్టించడం.",
    "initiatives.card.10.title": "విద్యా సామగ్రి పంపిణీ",
    "initiatives.card.10.desc": "పుస్తకాలు, సరఫరాలు మరియు అభ్యాస కిట్‌లను అందించడం.",
    "initiatives.card.11.title": "మెంటార్‌షిప్ & కౌన్సెలింగ్",
    "initiatives.card.11.desc": "దీర్ఘకాలిక వ్యక్తిగత వృద్ధిని మార్గనిర్దేశం చేసే మెంటార్లతో అనుసంధానం.",
    "initiatives.card.12.title": "గ్రామీణ అభివృద్ధి ప్రాజెక్ట్‌లు",
    "initiatives.card.12.desc": "గ్రామీణ సంఘాలను బలోపేతం చేసే మౌలిక సదుపాయాలు.",

    "moments.eyebrow": "మా కథలు",
    "moments.heading": "ప్రభావ క్షణాలు\nచర్య ద్వారా సంగ్రహించిన కథలు",

    "founder.eyebrow": "మా వ్యవస్థాపకుడు",
    "founder.heading": "హృదయం నుండి\nజన్మించిన దృష్టి",
    "founder.name": "డా. గుండాల విజయ్ కుమార్ (GVK)",
    "founder.role": "వ్యవస్థాపకుడు",
    "founder.quote":
      "ప్రతి వ్యక్తి విద్య, మద్దతు, గౌరవం మరియు అవకాశానికి అర్హుడు. సంఘాలను ఎత్తడమనే దృష్టి నుండి ప్రారంభమైనది, కరుణ, సేవ మరియు అర్థవంతమైన ప్రభావం ద్వారా పెరుగుతూనే ఉంది.",

    "awards.eyebrow": "గుర్తింపు",
    "awards.heading": "అవార్డుల కంటే ఎక్కువ — నాయకత్వ ప్రతిబింబం",
    "awards.card.1.title": "యూత్ నేషన్ అవార్డు — 2026",
    "awards.card.1.desc": "యూత్ సాధికారత మరియు సంఘ ప్రభావానికి అత్యుత్తమ సహకారం.",
    "awards.card.2.title": "సామాజిక ప్రభావ శ్రేష్ఠత",
    "awards.card.2.desc": "భారతదేశంలో విద్యార్థులు మరియు సంఘాలను ఎత్తే నిరంతర కార్యక్రమాలకు గుర్తింపు.",
    "awards.card.3.title": "విద్యా చేంజ్‌మేకర్",
    "awards.card.3.desc": "గ్రామీణ అభ్యాసకులను చేరుకునే వినూత్న డిజిటల్ విద్య చొరవలకు అవార్డు.",

    "testimonials.eyebrow": "సంఘ స్వరాలు",
    "testimonials.heading": "మా సంఘం ఏమి చెబుతుంది",
    "testimonials.roles.parent": "తల్లిదండ్రి",
    "testimonials.roles.student": "విద్యార్థి",
    "testimonials.roles.teacher": "ఉపాధ్యాయుడు",
    "testimonials.roles.volunteer": "వాలంటీర్",
    "testimonials.roles.partner": "భాగస్వామి",
    "testimonials.t1":
      "ఫౌండేషన్ నా కూతురికి ట్యాబ్లెట్ ఇచ్చినప్పుడు, ఆమె వారంలోనే నాకు దాన్ని ఉపయోగించడం నేర్పించింది. ఈరోజు ఆమె కుటుంబానికి ప్రపంచంలోకి కిటికీ.",
    "testimonials.t2":
      "కెరీర్ మెంటార్‌షిప్ ప్రోగ్రామ్ నాకు రెజ్యూమే, ప్రాక్టీస్ మరియు ఆత్మవిశ్వాసం ఇచ్చింది. నా మొదటి ఇంటర్వ్యూలో నేను చెందుతానని తెలుసుకుని హాజరయ్యాను.",
    "testimonials.t3":
      "నేను ముప్ఫై సంవత్సరాలు బోధించాను. GVK వాలంటీర్ల నిశ్శబ్ద స్థిరత్వం — ఎలాంటి హంగు లేకుండా ప్రతి వారం హాజరు కావడం — నా విద్యార్థుల జీవితాలను మార్చింది.",
    "testimonials.t4":
      "వారాంతాలలో కొన్ని గంటలు ఇవ్వడానికి చేరాను. మూడు సంవత్సరాల తర్వాత, నేను ఒక జిల్లా బృందానికి నాయకత్వం వహిస్తున్నాను.",
    "testimonials.t5":
      "పుస్తకాల కోసం డబ్బు ఆదా చేయడానికి భోజనం వదిలేసేవాడిని. ఆహార సహాయ కార్యక్రమం ఆ భారాన్ని తీసేసింది. నేను చివరికి విద్యార్థిని కాగలిగాను.",
    "testimonials.t6":
      "మేము GVKతో గ్రామీణ నైపుణ్య కోహోర్ట్‌లో భాగస్వామ్యం కుదుర్చుకున్నాము. ప్రతి అభ్యాసకుడితో వారి ఫాలో-త్రూ నా చూసిన ఏ కార్పొరేట్ ప్రోగ్రామ్ కంటే బాగుంది.",

    "cta.heading": "మానవత్వం",
    "cta.headingEm": "శ్రద్ద వహిస్తే ఆశ మొదలవుతుంది.",
    "cta.body":
      "మీ మద్దతు అవసరమైన సంఘాలకు ఆశ, అవకాశం మరియు శాశ్వత మార్పును సృష్టించగలదు.",
    "cta.donate": "విరాళం ఇవ్వండి →",
    "cta.getInvolved": "పాల్గొనండి",

    "donate.eyebrow": "విరాళం ఇవ్వండి",
    "donate.heading": "ప్రతి రూపాయి,\nఒక అడుగు",
    "donate.headingEm": "ఒకరి భవిష్యత్తు వైపు.",
    "donate.body":
      "మీ సహకారం నేరుగా భారతదేశం అంతటా స్కాలర్‌షిప్‌లు, ఆరోగ్య శిబిరాలు, ఆహార సహాయం మరియు సంఘ కార్యక్రమాలకు నిధులు సమకూరుస్తుంది.",
    "donate.bullet.transparent.title": "పారదర్శకం",
    "donate.bullet.transparent.body": "ప్రతి విరాళం ట్రాక్ చేయబడుతుంది",
    "donate.bullet.secure.title": "సురక్షితం",
    "donate.bullet.secure.body": "256-bit SSL ఎన్‌క్రిప్టెడ్ చెల్లింపు",
    "donate.bullet.tax.title": "పన్ను మినహాయింపు",
    "donate.bullet.tax.body": "80G ధృవీకరణ అందించబడుతుంది",
    "donate.freq.oneTime": "ఒకసారి",
    "donate.freq.monthly": "నెలవారీ",
    "donate.causeLabel": "మీ విరాళాన్ని దర్శించండి",
    "donate.cause.general": "సాధారణ నిధి",
    "donate.cause.education": "విద్య",
    "donate.cause.health": "ఆరోగ్యం & సంక్షేమం",
    "donate.cause.empowerment": "సాధికారత",
    "donate.cause.community": "సంఘం",
    "donate.cause.opportunity": "అవకాశం",
    "donate.cause.dignity": "గౌరవం",
    "donate.cause.food": "ఆహారం & ఆకలి సహాయం",
    "donate.cause.sports": "క్రీడల అభివృద్ధి",
    "donate.field.name": "పూర్తి పేరు",
    "donate.field.email": "ఇమెయిల్",
    "donate.field.phone": "ఫోన్ (ఐచ్ఛికం)",
    "donate.field.message": "సందేశం (ఐచ్ఛికం)",
    "donate.field.messagePh": "ప్రోత్సాహ సందేశం...",
    "donate.field.customAmount": "కస్టమ్ మొత్తం (కనీసం ₹50)",
    "donate.paymentLabel": "చెల్లింపు పద్ధతి",
    "donate.payment.card": "కార్డ్",
    "donate.payment.upi": "UPI",
    "donate.payment.netbanking": "నెట్ బ్యాంకింగ్",
    "donate.payment.wallet": "వాలెట్",
    "donate.summary": "మీ విరాళం",
    "donate.summarySuffixMonthly": "/నెల",
    "donate.submit": "విరాళం ఇవ్వండి",
    "donate.agree": "విరాళం ఇవ్వడం ద్వారా మా నిబంధనలకు అంగీకరిస్తున్నారు. ఇది డెమో ఫారం — చెల్లింపు ప్రాసెస్ చేయబడదు.",
    "donate.error.name": "దయచేసి మీ పూర్తి పేరు నమోదు చేయండి",
    "donate.error.email": "ఇమెయిల్ అవసరం",
    "donate.error.emailInvalid": "చెల్లుబాటు అయ్యే ఇమెయిల్ నమోదు చేయండి",
    "donate.error.phone": "చెల్లుబాటు అయ్యే ఫోన్ నంబర్ నమోదు చేయండి",
    "donate.error.amount": "కనీస విరాళం ₹50",
    "donate.thankHeading": "ధన్యవాదాలు, ",
    "donate.thankSub": "మీ దయ మార్పును సృష్టిస్తుంది.",
    "donate.thankBody":
      "{cause} కార్యక్రమం కోసం {amount} విరాళం నమోదు చేయబడింది. నిర్ధారణ {email}కి పంపబడింది.",
    "donate.thankAnother": "మరో విరాళం ఇవ్వండి",
    "donate.thankBack": "పైకి తిరిగి",

    "volunteer.eyebrow": "పాల్గొనండి",
    "volunteer.heading": "వాలంటీర్ అవ్వండి.",
    "volunteer.headingEm": "వారధి అవ్వండి.",
    "volunteer.body":
      "నెలకు ఒక గంటైనా, వారానికి ఒక రోజైనా — మీ ఉనికి ముఖ్యమైనది.",
    "volunteer.bullet.difference.title": "మార్పు తీసుకురండి",
    "volunteer.bullet.difference.body": "నేరుగా, కొలవగలిగే ప్రభావం",
    "volunteer.bullet.community.title": "సంఘంలో చేరండి",
    "volunteer.bullet.community.body": "మీలా శ్రద్ద ఉన్న వారితో అనుసంధానం",
    "volunteer.bullet.flexible.title": "సరళమైన నిబద్ధత",
    "volunteer.bullet.flexible.body": "మీ షెడ్యూల్‌కు సరిపోయేది ఎంచుకోండి",
    "volunteer.field.name": "పూర్తి పేరు",
    "volunteer.field.email": "ఇమెయిల్",
    "volunteer.field.phone": "ఫోన్ (ఐచ్ఛికం)",
    "volunteer.field.city": "నగరం",
    "volunteer.field.area": "ఆసక్తి రంగం",
    "volunteer.field.availability": "అందుబాటు",
    "volunteer.field.message": "మీరు ఎందుకు వాలంటీర్ కావాలనుకుంటున్నారు? (ఐచ్ఛికం)",
    "volunteer.area.education": "విద్య",
    "volunteer.area.health": "ఆరోగ్యం",
    "volunteer.area.food": "ఆహారం & ఆకలి సహాయం",
    "volunteer.area.sports": "క్రీడలు",
    "volunteer.area.community": "సంఘ ఔట్రీచ్",
    "volunteer.area.skills": "నైపుణ్య ఆధారిత వాలంటీరింగ్",
    "volunteer.avail.weekends": "వారాంతాలు",
    "volunteer.avail.weekdays": "వారంలోని రోజులు",
    "volunteer.avail.flexible": "సరళమైనది",
    "volunteer.submit": "నన్ను చేర్చండి",
    "volunteer.error.name": "దయచేసి మీ పూర్తి పేరు నమోదు చేయండి",
    "volunteer.error.email": "ఇమెయిల్ అవసరం",
    "volunteer.error.emailInvalid": "చెల్లుబాటు అయ్యే ఇమెయిల్ నమోదు చేయండి",
    "volunteer.error.city": "దయచేసి మీ నగరం నమోదు చేయండి",
    "volunteer.error.area": "దయచేసి ఒక రంగం ఎంచుకోండి",
    "volunteer.thankHeading": "స్వాగతం, ",
    "volunteer.thankSub": "మీరు ఇప్పుడు మరింత పెద్ద దానిలో భాగం.",
    "volunteer.thankBody":
      "మీ వాలంటీర్ సైన్-అప్ అందుకున్నాము. మా {area} కోఆర్డినేటర్ 48 గంటల్లోపు {city} కోసం తదుపరి దశలతో సంప్రదిస్తారు.",
    "volunteer.thankAnother": "మరొకటి సమర్పించండి",

    "fab.donate": "విరాళం",
    "fab.aria": "GVK ఫౌండేషన్‌కు విరాళం",

    "footer.tagline":
      "GVK బ్రదర్స్ ఫౌండేషన్ విద్య, ఆరోగ్యం, సాధికారత మరియు అభివృద్ధిపై దృష్టి సారించిన కార్యక్రమాల ద్వారా విద్యార్థులు మరియు సంఘాలకు మద్దతు ఇవ్వడానికి కట్టుబడి ఉంది.",
    "footer.quickLinks": "త్వరిత లింకులు",
    "footer.contact": "సంప్రదించండి",
    "footer.address": "హైదరాబాద్, భారతదేశం",
    "footer.emailLabel": "contact@gvkfoundation.org",
    "footer.copyright": "అన్ని హక్కులు రక్షించబడ్డాయి.",
    "footer.builtWith": "ఉద్దేశ్యంతో నిర్మించబడింది.",
    "footer.social.facebook": "ఫేస్‌బుక్",
    "footer.social.x": "X",
    "footer.social.linkedin": "లింక్డ్‌ఇన్",
    "footer.social.youtube": "యూట్యూబ్",

    "lang.en": "EN",
    "lang.te": "తె",
    "lang.hi": "हिं",
    "lang.aria": "భాష మార్చండి",
  },

  hi: {
    "nav.about": "हमारे बारे में",
    "nav.programs": "कार्यक्रम",
    "nav.impact": "प्रभाव",
    "nav.stories": "कहानियाँ",
    "nav.contact": "संपर्क",

    "header.brand": "GVK फाउंडेशन",
    "header.donateNow": "दान करें",
    "header.toggleMenu": "मेनू खोलें",
    "header.skipToContent": "सामग्री पर जाएँ",

    "hero.badge": "2018 से समुदायों को बदल रहे हैं",
    "hero.titleLine1": "सहायता से परे",
    "hero.titleLine2": "असली",
    "hero.titleLine3": "बदलाव।",
    "hero.subtitle":
      "GVK ब्रदर्स फाउंडेशन शिक्षा, स्वास्थ्य, सशक्तिकरण और सतत विकास पर केंद्रित कार्यक्रमों के माध्यम से छात्रों और समुदायों को ऊपर उठाता है।",
    "hero.ctaDonate": "अभी दान करें →",
    "hero.ctaExplore": "कार्यक्रम देखें",
    "hero.stat.lives": "प्रभावित जीवन",
    "hero.stat.programs": "कार्यक्रम",
    "hero.stat.volunteers": "स्वयंसेवक",
    "hero.successRate": "छात्र सफलता दर",

    "immersive.eyebrow": "हर आयाम में इमर्सिव",
    "immersive.headingLine": "जहाँ बदलाव",
    "immersive.headingHighlight": "दिखने योग्य बनता है",
    "immersive.sub":
      "छह स्तंभ। एक आंदोलन। शिक्षा, स्वास्थ्य, सशक्तिकरण, समुदाय, अवसर और गरिमा — हर वह कारण जिसके लिए GVK फाउंडेशन खड़ा है।",
    "immersive.scroll": "स्क्रॉल करें",
    "immersive.pillar.education": "शिक्षा",
    "immersive.pillar.health": "स्वास्थ्य",
    "immersive.pillar.empowerment": "सशक्तिकरण",
    "immersive.pillar.community": "समुदाय",
    "immersive.pillar.opportunity": "अवसर",
    "immersive.pillar.dignity": "गरिमा",

    "welcome.eyebrow": "GVK एजुटेक फाउंडेशन में आपका स्वागत है",
    "welcome.heading": "जीवन ऊपर उठाने के लिए\nभविष्य बनाने के लिए",
    "welcome.body":
      "GVK ब्रदर्स फाउंडेशन शिक्षा, स्वास्थ्य, सशक्तिकरण और विकास पर केंद्रित प्रभावशाली कार्यक्रमों के माध्यम से छात्रों और समुदायों का समर्थन करने के लिए प्रतिबद्ध है।",
    "welcome.pill.education": "शैक्षिक सहायता",
    "welcome.pill.health": "स्वास्थ्य एवं कल्याण",
    "welcome.pill.community": "सामुदायिक प्रभाव",

    "purpose.heading": "एक संगठन से अधिक\nमानवता से संचालित\nएक उद्देश्य",
    "purpose.sub":
      "हम सेवा करने, ऊपर उठाने और बेहतर कल की ओर काम करने वाले हर व्यक्ति के साथ खड़े रहने के लिए मौजूद हैं।",
    "purpose.point1": "शिक्षा के माध्यम से छात्रों का सशक्तिकरण",
    "purpose.point2": "स्वास्थ्य और सामुदायिक कल्याण को बढ़ावा",
    "purpose.point3": "टिकाऊ सामाजिक प्रभाव",
    "purpose.point4": "भावी पीढ़ियों के लिए रास्ते बनाना",

    "vision.eyebrow": "हमारी दृष्टि",
    "vision.heading": "देखभाल पर बनी दृष्टि\nसमुदायों के लिए\nभविष्य",
    "vision.body":
      "एक ऐसा समाज बनाना जहाँ हर व्यक्ति के पास अवसर, गरिमा और फलने-फूलने के लिए आवश्यक सहायता हो।",
    "vision.pillar1.title": "अवसर",
    "vision.pillar1.sub": "सबके लिए",
    "vision.pillar2.title": "गरिमा",
    "vision.pillar2.sub": "हर कदम पर",
    "vision.pillar3.title": "सहारा",
    "vision.pillar3.sub": "स्थायी",

    "programs.id": "programs",
    "programs.sectionHeading": "जीवन बदलने वाले कार्यक्रम",
    "programs.sectionSub":
      "हर कार्यक्रम उन समुदायों में स्थायी, मापने योग्य बदलाव लाने के लिए डिज़ाइन किया गया है जिनकी हम सेवा करते हैं।",
    "programs.donateHere": "इस कार्यक्रम को दान करें →",
    "programs.back": "सभी कार्यक्रमों पर वापस",
    "programs.supportHere": "इस कार्यक्रम का समर्थन करें →",

    "stats.heading": "कुछ लोग संख्याएँ गिनते हैं,\nहम बदले हुए जीवन गिनते हैं",
    "stats.sub":
      "हर संख्या एक समर्थित छात्र, एक निर्मित अवसर और एक सशक्त भविष्य का प्रतिनिधित्व करती है।",
    "stats.students": "सशक्त छात्र",
    "stats.lives": "प्रभावित जीवन",
    "stats.programs": "वितरित कार्यक्रम",
    "stats.volunteers": "जुड़े स्वयंसेवक",

    "initiatives.eyebrow": "हम क्या करते हैं",
    "initiatives.heading": "हर पहल,\nबदलाव की ओर एक कदम",
    "initiatives.sub":
      "शिक्षा, स्वास्थ्य देखभाल, सशक्तिकरण और सामुदायिक सहायता के माध्यम से प्रभाव बनाने वाली पहलों की खोज करें।",
    "initiatives.cta": "सभी पहल देखें →",
    "initiatives.card.1.title": "उत्कृष्टता, प्रतिबद्धता और शैक्षणिक सफलता के लिए छात्रों का सम्मान",
    "initiatives.card.1.desc": "उत्कृष्ट शैक्षणिक प्रतिबद्धता प्रदर्शित करने वाले छात्रों को पहचानना।",
    "initiatives.card.2.title": "खेल किट वितरण के माध्यम से आकांक्षी एथलीटों का समर्थन",
    "initiatives.card.2.desc": "युवा एथलीटों को उत्कृष्टता के लिए उपकरण और संसाधन प्रदान करना।",
    "initiatives.card.3.title": "खाद्य वितरण कार्यक्रम का नेतृत्व",
    "initiatives.card.3.desc": "संकट में परिवारों और व्यक्तियों को पौष्टिक भोजन परोसना।",
    "initiatives.card.4.title": "भविष्य के तकनीकी नेताओं को सशक्त बनाना",
    "initiatives.card.4.desc": "छात्रों को टैबलेट, डिजिटल उपकरण और ऑनलाइन शिक्षा संसाधन प्रदान करना।",
    "initiatives.card.5.title": "करियर मार्गदर्शन और जॉब मेले",
    "initiatives.card.5.desc": "करियर मेलों के माध्यम से आकांक्षी पेशेवरों को जोड़ना।",
    "initiatives.card.6.title": "मुफ्त स्वास्थ्य एवं कल्याण शिविर",
    "initiatives.card.6.desc": "अंडरसर्व्ड समुदायों को आवश्यक स्वास्थ्य सेवाएँ प्रदान करना।",
    "initiatives.card.7.title": "कौशल विकास कार्यशालाएँ",
    "initiatives.card.7.desc": "छात्रों और पेशेवरों को आधुनिक कार्यबल के लिए तैयार करने वाले प्रशिक्षण कार्यक्रम।",
    "initiatives.card.8.title": "सामुदायिक आउटरीच अभियान",
    "initiatives.card.8.desc": "शिक्षा, स्वास्थ्य और कल्याण के लिए स्वयंसेवकों को जुटाना।",
    "initiatives.card.9.title": "महिला सशक्तिकरण पहल",
    "initiatives.card.9.desc": "महिलाओं के लिए शिक्षा, कौशल और अवसरों के रास्ते बनाना।",
    "initiatives.card.10.title": "शैक्षणिक सामग्री वितरण",
    "initiatives.card.10.desc": "अंडरसर्व्ड स्कूलों के छात्रों को पुस्तकें, सामग्री और किट प्रदान करना।",
    "initiatives.card.11.title": "मेंटरशिप और परामर्श",
    "initiatives.card.11.desc": "दीर्घकालिक व्यक्तिगत विकास का मार्गदर्शन करने वाले मेंटरों के साथ जोड़ना।",
    "initiatives.card.12.title": "ग्रामीण विकास परियोजनाएँ",
    "initiatives.card.12.desc": "ग्रामीण समुदायों को मजबूत करने वाले बुनियादी ढाँचे में निवेश।",

    "moments.eyebrow": "हमारी कहानियाँ",
    "moments.heading": "प्रभाव के क्षण\nकार्यवाही से कैद कहानियाँ",

    "founder.eyebrow": "हमारे संस्थापक",
    "founder.heading": "हृदय से\nजन्मी एक दृष्टि",
    "founder.name": "डॉ. गुंडाला विजय कुमार (GVK)",
    "founder.role": "संस्थापक",
    "founder.quote":
      "हम मानते हैं कि हर व्यक्ति शिक्षा, सहारा, गरिमा और अवसर का हकदार है। समुदायों को ऊपर उठाने का जो सपना था, वह करुणा, सेवा और सार्थक प्रभाव के माध्यम से बढ़ता जा रहा है।",

    "awards.eyebrow": "मान्यता",
    "awards.heading": "पुरस्कारों से अधिक — नेतृत्व का प्रतिबिंब",
    "awards.card.1.title": "यूथ नेशन अवार्ड — 2026",
    "awards.card.1.desc": "युवा सशक्तिकरण और सामुदायिक प्रभाव के लिए उत्कृष्ट योगदान।",
    "awards.card.2.title": "सामाजिक प्रभाव उत्कृष्टता",
    "awards.card.2.desc": "भारत भर के छात्रों और समुदायों को ऊपर उठाने वाले निरंतर कार्यक्रमों के लिए सम्मान।",
    "awards.card.3.title": "शिक्षा परिवर्तनकर्ता",
    "awards.card.3.desc": "ग्रामीण शिक्षार्थियों तक पहुँचने वाली नवाचार डिजिटल शिक्षा पहलों के लिए।",

    "testimonials.eyebrow": "समुदाय की आवाज़ें",
    "testimonials.heading": "हमारा समुदाय क्या कहता है",
    "testimonials.roles.parent": "अभिभावक",
    "testimonials.roles.student": "छात्र",
    "testimonials.roles.teacher": "शिक्षक",
    "testimonials.roles.volunteer": "स्वयंसेवक",
    "testimonials.roles.partner": "भागीदार",
    "testimonials.t1":
      "जब फाउंडेशन ने मेरी बेटी को टैबलेट दिया, उसने एक हफ़्ते में मुझे इसका उपयोग करना सिखा दिया। आज वह परिवार की दुनिया में खिड़की है।",
    "testimonials.t2":
      "करियर मेंटरशिप कार्यक्रम ने मुझे रिज्यूमे, अभ्यास और आत्मविश्वास दिया। मैं अपने पहले साक्षात्कार में जानता था कि मेरी जगह है।",
    "testimonials.t3":
      "मैं तीस साल से पढ़ा रहा हूँ। GVK स्वयंसेवकों की शांत दृढ़ता — बिना किसी शोर के हर हफ़्ते आना — मेरे छात्रों की ज़िंदगी बदल गई।",
    "testimonials.t4":
      "मैं वीकेंड पर कुछ घंटे देने आया था। तीन साल बाद, मैं एक ज़िला टीम का नेतृत्व कर रहा हूँ। काम आप पर चढ़ जाता है।",
    "testimonials.t5":
      "मैं किताबों के लिए पैसे बचाने को खाना छोड़ देती थी। भोजन राहत कार्यक्रम ने वह बोझ उतार दिया। मैं आखिरकार बस एक छात्रा रह सकी।",
    "testimonials.t6":
      "हमने GVK के साथ ग्रामीण कौशल सहयोग किया। हर सीखने वाले के साथ उनका फॉलो-थ्रू किसी भी कॉर्पोरेट प्रोग्राम से बेहतर था।",

    "cta.heading": "आशा तब शुरू होती है जब मानवता",
    "cta.headingEm": "देखभाल चुनती है।",
    "cta.body":
      "आपका समर्थन ज़रूरतमंद समुदायों के लिए आशा, अवसर और स्थायी बदलाव बना सकता है।",
    "cta.donate": "अभी दान करें →",
    "cta.getInvolved": "जुड़ें",

    "donate.eyebrow": "दान करें",
    "donate.heading": "हर रुपया,\nएक कदम",
    "donate.headingEm": "किसी के भविष्य की ओर।",
    "donate.body":
      "आपका योगदान सीधे भारत भर में छात्रवृत्तियों, स्वास्थ्य शिविरों, भोजन राहत और सामुदायिक कार्यक्रमों को निधि देता है।",
    "donate.bullet.transparent.title": "पारदर्शक",
    "donate.bullet.transparent.body": "हर दान को ट्रैक और रिपोर्ट किया जाता है",
    "donate.bullet.secure.title": "सुरक्षित",
    "donate.bullet.secure.body": "256-bit SSL एन्क्रिप्टेड भुगतान",
    "donate.bullet.tax.title": "कर कटौती योग्य",
    "donate.bullet.tax.body": "सभी दानों के लिए 80G प्रमाणपत्र",
    "donate.freq.oneTime": "एक बार",
    "donate.freq.monthly": "मासिक",
    "donate.causeLabel": "अपना दान निर्देशित करें",
    "donate.cause.general": "सामान्य कोष",
    "donate.cause.education": "शिक्षा",
    "donate.cause.health": "स्वास्थ्य एवं कल्याण",
    "donate.cause.empowerment": "सशक्तिकरण",
    "donate.cause.community": "समुदाय",
    "donate.cause.opportunity": "अवसर",
    "donate.cause.dignity": "गरिमा",
    "donate.cause.food": "भोजन एवं भूख राहत",
    "donate.cause.sports": "खेल विकास",
    "donate.field.name": "पूरा नाम",
    "donate.field.email": "ईमेल",
    "donate.field.phone": "फ़ोन (वैकल्पिक)",
    "donate.field.message": "संदेश (वैकल्पिक)",
    "donate.field.messagePh": "प्रोत्साहन का संदेश...",
    "donate.field.customAmount": "कस्टम राशि (न्यूनतम ₹50)",
    "donate.paymentLabel": "भुगतान विधि",
    "donate.payment.card": "कार्ड",
    "donate.payment.upi": "UPI",
    "donate.payment.netbanking": "नेट बैंकिंग",
    "donate.payment.wallet": "वॉलेट",
    "donate.summary": "आपका दान",
    "donate.summarySuffixMonthly": "/माह",
    "donate.submit": "दान करें",
    "donate.agree": "दान करके आप हमारी शर्तों से सहमत हैं। यह डेमो फ़ॉर्म है — कोई भुगतान संसाधित नहीं होता।",
    "donate.error.name": "कृपया अपना पूरा नाम दर्ज करें",
    "donate.error.email": "ईमेल आवश्यक है",
    "donate.error.emailInvalid": "वैध ईमेल दर्ज करें",
    "donate.error.phone": "वैध फ़ोन नंबर दर्ज करें",
    "donate.error.amount": "न्यूनतम दान ₹50 है",
    "donate.thankHeading": "धन्यवाद, ",
    "donate.thankSub": "आपकी दयालुता बदलाव लाती है।",
    "donate.thankBody":
      "{cause} कार्यक्रम के लिए {amount} का दान दर्ज किया गया है। पुष्टि {email} पर भेजी गई है।",
    "donate.thankAnother": "एक और दान करें",
    "donate.thankBack": "ऊपर वापस",

    "volunteer.eyebrow": "जुड़ें",
    "volunteer.heading": "स्वयंसेवक बनें।",
    "volunteer.headingEm": "सेतु बनें।",
    "volunteer.body":
      "चाहे महीने में एक घंटा हो या हफ़्ते में एक दिन — आपकी उपस्थिति मायने रखती है।",
    "volunteer.bullet.difference.title": "बदलाव लाएँ",
    "volunteer.bullet.difference.body": "वास्तविक जीवन पर सीधा प्रभाव",
    "volunteer.bullet.community.title": "समुदाय से जुड़ें",
    "volunteer.bullet.community.body": "आपके जैसा सोचने वालों से जुड़ें",
    "volunteer.bullet.flexible.title": "लचीली प्रतिबद्धता",
    "volunteer.bullet.flexible.body": "अपने शेड्यूल के अनुसार चुनें",
    "volunteer.field.name": "पूरा नाम",
    "volunteer.field.email": "ईमेल",
    "volunteer.field.phone": "फ़ोन (वैकल्पिक)",
    "volunteer.field.city": "शहर",
    "volunteer.field.area": "रुचि का क्षेत्र",
    "volunteer.field.availability": "उपलब्धता",
    "volunteer.field.message": "आप स्वयंसेवक क्यों बनना चाहते हैं? (वैकल्पिक)",
    "volunteer.area.education": "शिक्षा",
    "volunteer.area.health": "स्वास्थ्य",
    "volunteer.area.food": "भोजन एवं भूख राहत",
    "volunteer.area.sports": "खेल",
    "volunteer.area.community": "सामुदायिक आउटरीच",
    "volunteer.area.skills": "कौशल-आधारित स्वयंसेवा",
    "volunteer.avail.weekends": "सप्ताहांत",
    "volunteer.avail.weekdays": "सप्ताह के दिन",
    "volunteer.avail.flexible": "लचीला",
    "volunteer.submit": "मुझे जोड़ें",
    "volunteer.error.name": "कृपया अपना पूरा नाम दर्ज करें",
    "volunteer.error.email": "ईमेल आवश्यक है",
    "volunteer.error.emailInvalid": "वैध ईमेल दर्ज करें",
    "volunteer.error.city": "कृपया अपना शहर दर्ज करें",
    "volunteer.error.area": "कृपया एक क्षेत्र चुनें",
    "volunteer.thankHeading": "स्वागत है, ",
    "volunteer.thankSub": "आप अब किसी बड़ी चीज़ का हिस्सा हैं।",
    "volunteer.thankBody":
      "हमें आपका स्वयंसेवक साइन-अप मिला है। हमारे {area} समन्वयक 48 घंटों के भीतर {city} के लिए अगले कदमों के साथ संपर्क करेंगे।",
    "volunteer.thankAnother": "एक और सबमिट करें",

    "fab.donate": "दान",
    "fab.aria": "GVK फाउंडेशन को दान करें",

    "footer.tagline":
      "GVK ब्रदर्स फाउंडेशन शिक्षा, स्वास्थ्य, सशक्तिकरण और विकास पर केंद्रित प्रभावशाली कार्यक्रमों के माध्यम से छात्रों और समुदायों का समर्थन करने के लिए प्रतिबद्ध है।",
    "footer.quickLinks": "त्वरित लिंक",
    "footer.contact": "संपर्क",
    "footer.address": "हैदराबाद, भारत",
    "footer.emailLabel": "contact@gvkfoundation.org",
    "footer.copyright": "सर्वाधिकार सुरक्षित।",
    "footer.builtWith": "उद्देश्य से निर्मित।",
    "footer.social.facebook": "फेसबुक",
    "footer.social.x": "X",
    "footer.social.linkedin": "लिंक्डइन",
    "footer.social.youtube": "यूट्यूब",

    "lang.en": "EN",
    "lang.te": "తె",
    "lang.hi": "हिं",
    "lang.aria": "भाषा बदलें",
  },
};
