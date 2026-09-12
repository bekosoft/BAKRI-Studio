/**
 * BAKRI — Visual Communications & Multimedia Specialist
 * Core Application Engine & Bilingual System
 */

// ==========================================================================
// 1. DATA SOURCES & CASE STUDIES
// ==========================================================================

const videoProjects = [
  {
    id: "aerial-1",
    src: "تصوير جوي/1.mp4",
    poster: "w3.jpg",
    category: "aerial",
    titleKey: "case1Title",
    descKey: "case1Desc",
    roleKey: "case1Role",
    objectiveKey: "case1Objective",
    specs: {
      platform: "DJI Professional Drone Quadcopter",
      resolution: "4K UHD (3840 × 2160)",
      framerate: "60 fps Cinematic",
      colorWorkflow: "D-Log Color Profile to Rec.709",
      editingSuite: "Adobe Premiere Pro / DaVinci Resolve",
      classification: "Selected Work • Aerial Perspectives"
    }
  },
  {
    id: "aerial-2",
    src: "تصوير جوي/2.mp4",
    poster: "1/r1 (1).jpg",
    category: "aerial",
    titleKey: "case2Title",
    descKey: "case2Desc",
    roleKey: "case2Role",
    objectiveKey: "case2Objective",
    specs: {
      platform: "DJI Aerial Imaging System",
      resolution: "4K UHD (3840 × 2160)",
      framerate: "60 fps Fluid Motion",
      colorWorkflow: "Natural Grade & Contrast Balancing",
      editingSuite: "Adobe Premiere Pro",
      classification: "Selected Work • Landscape & Spatial Tracking"
    }
  },
  {
    id: "aerial-3",
    src: "تصوير جوي/3.mp4",
    poster: "1/r1 (2).jpg",
    category: "aerial",
    titleKey: "case3Title",
    descKey: "case3Desc",
    roleKey: "case3Role",
    objectiveKey: "case3Objective",
    specs: {
      platform: "Aerial Drone System",
      resolution: "4K UHD / Full HD",
      framerate: "30 / 60 fps",
      colorWorkflow: "Atmospheric & Horizon Exposure Calibration",
      editingSuite: "Adobe Premiere Pro",
      classification: "Selected Work • Field & Structural Survey"
    }
  },
  {
    id: "motion-1",
    src: "moto/0001-0237.mp4",
    poster: "3/b (1).jpg",
    category: "video",
    titleKey: "case4Title",
    descKey: "case4Desc",
    roleKey: "case4Role",
    objectiveKey: "case4Objective",
    specs: {
      platform: "Motion Graphics & Kinetic Typography",
      resolution: "1080p Full HD",
      framerate: "60 fps Vector Render",
      colorWorkflow: "Digital Color Grading",
      editingSuite: "Adobe After Effects & Premiere Pro",
      classification: "Digital Media • Motion Design"
    }
  },
  {
    id: "video-vfx",
    src: "moto/vfx 1122.mp4",
    poster: "5/d (1).jpg",
    category: "video",
    titleKey: "case5Title",
    descKey: "case5Desc",
    roleKey: "case5Role",
    objectiveKey: "case5Objective",
    specs: {
      platform: "Visual Effects & Compositing",
      resolution: "High Definition 1080p",
      framerate: "30 fps",
      colorWorkflow: "Cinematic Color Grade",
      editingSuite: "Adobe After Effects & Photoshop",
      classification: "Post-Production • VFX & Compositing"
    }
  },
  {
    id: "video-commercial",
    src: "moto/4.mp4",
    poster: "7/x (1).jpg",
    category: "video",
    titleKey: "case6Title",
    descKey: "case6Desc",
    roleKey: "case6Role",
    objectiveKey: "case6Objective",
    specs: {
      platform: "Video Production & Editing",
      resolution: "1080p Full HD",
      framerate: "30 fps",
      colorWorkflow: "Commercial Tone & Sound Synchronization",
      editingSuite: "Adobe Premiere Pro & Audition",
      classification: "Video Editing • Promotional & Institutional"
    }
  }
];

// Photography & Visual Media Items (from project folders)
const photographyItems = [
  {
    image: "1/r1 (1).jpg",
    category: "photo",
    subCat: "events",
    titleKey: "photo1Title",
    descKey: "photo1Desc"
  },
  {
    image: "1/r1 (2).jpg",
    category: "photo",
    subCat: "documentary",
    titleKey: "photo2Title",
    descKey: "photo2Desc"
  },
  {
    image: "1/r1 (3).jpg",
    category: "photo",
    subCat: "events",
    titleKey: "photo3Title",
    descKey: "photo3Desc"
  },
  {
    image: "1/r1 (4).jpg",
    category: "photo",
    subCat: "documentary",
    titleKey: "photo4Title",
    descKey: "photo4Desc"
  },
  {
    image: "1/r1 (5).jpg",
    category: "photo",
    subCat: "events",
    titleKey: "photo5Title",
    descKey: "photo5Desc"
  },
  {
    image: "3/b (1).jpg",
    category: "photo",
    subCat: "portraits",
    titleKey: "photo6Title",
    descKey: "photo6Desc"
  },
  {
    image: "3/b (2).jpg",
    category: "photo",
    subCat: "documentary",
    titleKey: "photo7Title",
    descKey: "photo7Desc"
  },
  {
    image: "3/b (3).jpg",
    category: "photo",
    subCat: "portraits",
    titleKey: "photo8Title",
    descKey: "photo8Desc"
  },
  {
    image: "5/d (1).jpg",
    category: "photo",
    subCat: "documentary",
    titleKey: "photo9Title",
    descKey: "photo9Desc"
  },
  {
    image: "5/d (2).jpg",
    category: "photo",
    subCat: "events",
    titleKey: "photo10Title",
    descKey: "photo10Desc"
  },
  {
    image: "5/d (3).jpg",
    category: "photo",
    subCat: "portraits",
    titleKey: "photo11Title",
    descKey: "photo11Desc"
  },
  {
    image: "7/x (1).jpg",
    category: "photo",
    subCat: "documentary",
    titleKey: "photo12Title",
    descKey: "photo12Desc"
  },
  {
    image: "7/x (2).jpg",
    category: "photo",
    subCat: "events",
    titleKey: "photo13Title",
    descKey: "photo13Desc"
  },
  {
    image: "des/p (1).jpg",
    category: "design",
    subCat: "visual-comms",
    titleKey: "design1Title",
    descKey: "design1Desc"
  },
  {
    image: "des/p (2).jpg",
    category: "design",
    subCat: "digital",
    titleKey: "design2Title",
    descKey: "design2Desc"
  },
  {
    image: "des/p (3).jpg",
    category: "design",
    subCat: "visual-comms",
    titleKey: "design3Title",
    descKey: "design3Desc"
  },
  {
    image: "des/p (4).jpg",
    category: "design",
    subCat: "digital",
    titleKey: "design4Title",
    descKey: "design4Desc"
  },
  {
    image: "su/sh (1).jpg",
    category: "digital",
    subCat: "social",
    titleKey: "social1Title",
    descKey: "social1Desc"
  },
  {
    image: "su/sh (2).jpg",
    category: "digital",
    subCat: "social",
    titleKey: "social2Title",
    descKey: "social2Desc"
  }
];

// ==========================================================================
// 2. BILINGUAL TRANSLATION DICTIONARY (EN / AR)
// ==========================================================================

const i18n = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About",
    navCapabilities: "Capabilities",
    navSelected: "Selected Work",
    navAerial: "Aerial",
    navPortfolio: "Portfolio",
    navComms: "Visual Comms",
    navSkills: "Skills",
    navExperience: "Experience",
    navCV: "CV / Resume",
    navContact: "Contact",

    // Hero
    heroBadge: "Visual Communications & Multimedia Specialist",
    heroTitleLine1: "Visual Stories.",
    heroTitleLine2: "Meaningful Communication.",
    heroDesc: "Visual Communications & Multimedia Specialist creating purposeful visual narratives through photography, videography, aerial imaging, and digital media to document missions, engage communities, and communicate with clarity and institutional impact.",
    btnExploreWork: "Explore Selected Work",
    btnDownloadCV: "Download CV (PDF)",
    btnContactHero: "Get in Touch",
    heroTrustLabel: "Aligned With Standards Of",
    trustTag1: "UN Agencies",
    trustTag2: "INGOs & Non-Profits",
    trustTag3: "Humanitarian & Development Bodies",
    trustTag4: "Corporate & Media Units",

    // About
    aboutEyebrow: "Professional Profile",
    aboutTitle: "Who I Am",
    aboutLead: "Specialist in Visual Communications and Multimedia, holding an academic background in Information Technology, with hands-on expertise in photography, videography, aerial cinematography, and institutional digital communications.",
    aboutBody1: "I combine rigorous technical understanding with creative visual craft to produce clear, impactful content designed for field missions, institutional reporting, stakeholder engagement, and high-standard digital distribution.",
    aboutBody2: "Rather than presenting an inflated catalog, this portfolio highlights carefully selected real-world work demonstrating technical precision, visual composition, ethical storytelling, and reliable delivery.",
    aboutStat1Title: "IT Degree + Media Craft",
    aboutStat1Desc: "Bridging systems, data tools & visual production",
    aboutStat2Title: "Responsible Storytelling",
    aboutStat2Desc: "Respecting dignity, privacy & consent in the field",
    aboutStat3Title: "Cross-Discipline Media",
    aboutStat3Desc: "Drone, photo, video editing, motion & layout",
    aboutStat4Title: "Field & Remote Ready",
    aboutStat4Desc: "Adaptive to institutional deadlines & field conditions",
    aboutBadgeTitle: "Bakri (Abobker Ali)",
    aboutBadgeText: "B.Sc. in Information Technology • Multimedia Producer",

    // Capabilities
    capEyebrow: "Core Capabilities",
    capTitle: "Capabilities & Scope of Work",
    capSubtitle: "Delivering strategic visual communications from conceptual planning to final delivery for organizations, missions, and professional initiatives.",
    cap1Title: "Professional Photography",
    cap1Desc: "Documentation of institutional events, humanitarian field operations, editorial features, and dignified human-interest portraits.",
    cap1f1: "Event coverage & summit documentation",
    cap1f2: "Field missions & humanitarian reporting",
    cap1f3: "High-resolution post-processing & archiving",

    cap2Title: "Videography & Film Production",
    cap2Desc: "End-to-end video creation—from shot planning and on-location filming to editing, color grading, sound design, and master delivery.",
    cap2f1: "Cinematic documentary short-form",
    cap2f2: "Institutional overviews & mission summaries",
    cap2f3: "Precise pacing, color correction & sound mix",

    cap3Title: "Drone & Aerial Imaging",
    cap3Desc: "Cinematic aerial videography and high-elevation surveys capturing scale, architectural landscapes, and spatial context safely and smoothly.",
    cap3f1: "Smooth camera motion & dynamic tracking",
    cap3f2: "Architectural & environmental context",
    cap3f3: "Multi-angle visual mapping & elevation shots",

    cap4Title: "Visual Storytelling",
    cap4Desc: "Translating complex institutional objectives, field activities, and community impact into coherent, emotionally resonant visual narratives.",
    cap4f1: "Storyboarding & thematic sequencing",
    cap4f2: "Human-centered narratives with dignity",
    cap4f3: "Contextual consistency across media",

    cap5Title: "Digital & Social Media Content",
    cap5Desc: "Creating responsive, platform-tailored digital assets engineered to communicate key messages clearly to diverse audiences.",
    cap5f1: "Short-form video reels & campaign teasers",
    cap5f2: "Information graphics & announcement visuals",
    cap5f3: "Cross-platform asset preparation & formats",

    cap6Title: "Visual Communication & Design",
    cap6Desc: "Structuring information visually through editorial layout, publication covers, typography, brand alignment, and clear infographic assets.",
    cap6f1: "Infographics & data visualization",
    cap6f2: "Institutional brand guideline alignment",
    cap6f3: "Editorial layouts & report aesthetics",

    // Aerial Section
    aerialEyebrow: "Aerial Perspectives",
    aerialTitle: "Selected Aerial & Drone Cinematography",
    aerialSubtitle: "Three featured aerial productions highlighting flight dynamics, cinematic framing, spatial composition, and comprehensive post-production.",
    btnWatchCase: "View Case Study",
    btnDirectPlay: "Play Video",

    case1Title: "Architectural & Urban Perspectives",
    case1Desc: "Cinematic aerial survey emphasizing geometric scale, urban lines, and smooth spatial transitions with precise flight control.",
    case1Role: "Drone Pilot • Cinematographer • Colorist • Editor",
    case1Objective: "Capture structural geometry and urban context with high-altitude stability and smooth horizontal tracking.",

    case2Title: "Aerial Landscape & Environmental Survey",
    case2Desc: "Dynamic flight path capturing expansive terrain, natural light gradients, and environmental depth through continuous sweeping motion.",
    case2Role: "Drone Operation • Flight Route Planning • Grading",
    case2Objective: "Document environmental continuity and spatial relationships using slow cinematic pan and altitude shifts.",

    case3Title: "Field & Structural Documentation",
    case3Desc: "High-angle spatial documentation showcasing infrastructure, activity zones, and surrounding perimeter with clear visual clarity.",
    case3Role: "Aerial Filming • Camera Gimbal Control • Post-Production",
    case3Objective: "Provide clear spatial awareness and structural context suitable for stakeholder briefing and activity overview.",

    case4Title: "Kinetic Motion Graphics & Transition Study",
    case4Desc: "Vector motion design exploring dynamic pacing, kinetic typography, and fluid visual transitions.",
    case4Role: "Motion Designer • Animator",
    case4Objective: "Deliver punchy, engaging visual rhythm for digital screens.",

    case5Title: "Cinematic Visual Effects & Compositing",
    case5Desc: "Layered visual composition integrating motion graphics, depth masking, and stylized visual grading.",
    case5Role: "VFX Compositor • Visual Editor",
    case5Objective: "Demonstrate high-end digital post-production and layer integration.",

    case6Title: "Commercial & Promotional Editing",
    case6Desc: "Fast-paced video edit highlighting narrative momentum, sound beat synchronization, and commercial color grading.",
    case6Role: "Video Editor • Sound Editor",
    case6Objective: "Drive immediate viewer retention and convey brand energy.",

    // Portfolio
    portEyebrow: "Curated Works",
    portTitle: "Selected Portfolio Gallery",
    portSubtitle: "A verified collection of visual documentation, photography, videography, and graphic communication.",
    filterAll: "All Works",
    filterPhoto: "Photography",
    filterVideo: "Video & Motion",
    filterAerial: "Aerial Imaging",
    filterComms: "Visual Comms",
    filterDigital: "Digital Content",
    filterDesign: "Design & Layout",

    // Photography items
    photo1Title: "Institutional Event Documentation",
    photo1Desc: "Keynote coverage, speaker engagement, and attendee participation.",
    photo2Title: "Field Interaction & Documentation",
    photo2Desc: "Capturing authentic field moments and team activities.",
    photo3Title: "Formal Gathering & Forum Coverage",
    photo3Desc: "Session dynamics and panel dialogue documentation.",
    photo4Title: "Field Activities & Context",
    photo4Desc: "Natural environment and working session overview.",
    photo5Title: "Delegate & Stakeholder Assembly",
    photo5Desc: "Documenting protocol, attendance, and audience focus.",
    photo6Title: "Human-Centered Portrait Study",
    photo6Desc: "Natural light, dignity, and calm expressive focus.",
    photo7Title: "Community & Field Narrative",
    photo7Desc: "Contextual documentation respecting subjects.",
    photo8Title: "Editorial Subject Profile",
    photo8Desc: "Authentic character and individual storytelling.",
    photo9Title: "Operational & Facility Documentation",
    photo9Desc: "Site survey and infrastructure perspective.",
    photo10Title: "Conference Dialogue & Media",
    photo10Desc: "Interactive sessions and exchange of insights.",
    photo11Title: "Environmental Human Narrative",
    photo11Desc: "Expressive field presence under ambient lighting.",
    photo12Title: "Activity Milestones & Teamwork",
    photo12Desc: "Documenting practical execution and teamwork.",
    photo13Title: "Keynote Delivery & Presentations",
    photo13Desc: "Capturing stage presence, visual aids, and audience.",
    design1Title: "Visual Publication & Identity Concept",
    design1Desc: "Structured typography, clear layout, and brand harmony.",
    design2Title: "Digital Campaign Asset",
    design2Desc: "Visual pacing tailored for web and digital communication.",
    design3Title: "Visual Communication Editorial",
    design3Desc: "Information hierarchy designed for quick comprehension.",
    design4Title: "Digital Visual Strategy",
    design4Desc: "Harmonized color palette and balanced visual elements.",
    social1Title: "Digital Content Campaign",
    social1Desc: "High-impact visual layout for social channels.",
    social2Title: "Public Information Digital Asset",
    social2Desc: "Concise message delivery with visual emphasis.",

    // Visual Comms Section
    commsEyebrow: "Strategic Approach",
    commsTitle: "Visual Communications in Practice",
    commsSubtitle: "Photography and film are not merely aesthetic exercises—they are strategic tools to inform, advocate, and document institutional impact.",
    commsP1Title: "Stakeholder Accountability",
    commsP1Desc: "Providing verified, transparent visual records that substantiate project progress and donor investments.",
    commsP2Title: "Human-First Dignity",
    commsP2Desc: "Portraying beneficiaries, communities, and partners with respect, agency, and contextual truth.",
    commsP3Title: "Multi-Platform Utility",
    commsP3Desc: "Producing assets engineered to seamlessly serve annual reports, donor briefs, social campaigns, and press releases.",

    // Responsible Storytelling
    respEyebrow: "Ethics & Compliance",
    respTitle: "Responsible Visual Storytelling",
    respQuote: "\"Visual excellence in institutional and humanitarian media is meaningless without respect for human dignity, contextual honesty, and strict adherence to informed consent. I treat every camera assignment as a position of ethical trust.\"",
    respPillar1Title: "Informed Consent",
    respPillar1Desc: "Ensuring subjects understand where and how images will be used before pressing the shutter.",
    respPillar2Title: "Contextual Truth",
    respPillar2Desc: "Resisting sensationalism or misleading crops; depicting situations with factual integrity.",
    respPillar3Title: "Child & Vulnerable Safeguarding",
    respPillar3Desc: "Applying strict protection guidelines for minors, displaced persons, and vulnerable groups.",
    respPillar4Title: "Data & Privacy Respect",
    respPillar4Desc: "Complying with non-disclosure mandates, embargoes, and institutional security protocols.",

    // Institutional Readiness
    instEyebrow: "Operational Readiness",
    instTitle: "Working in Institutional Environments",
    instCard1Title: "Strict Adherence to Guidelines",
    instCard1Desc: "Experienced with brand books, UN/NGO visibility standards, terminology rules, and publication requirements.",
    instCard2Title: "Field Deployability",
    instCard2Desc: "Prepared for rapid travel, variable field conditions, heat, and working alongside multidisciplinary teams.",
    instCard3Title: "Tight Turnaround Delivery",
    instCard3Desc: "Reliable workflows for same-day event stills, fast-track press cuts, and prompt media package dispatch.",
    instCard4Title: "Digital Asset Archiving",
    instCard4Desc: "Proper EXIF/IPTC metadata tagging, captioning, categorization, and secure cloud/local repository archiving.",

    // Skills & Technical Background
    skillsEyebrow: "Technical Competence",
    skillsTitle: "Skills, Tools & Academic Background",
    skillsSubtitle: "A balanced profile uniting formal IT education with professional visual craftsmanship.",
    skCat1Title: "Visual & Media Production",
    skCat2Title: "Communications & Digital Strategy",
    skCat3Title: "Software & Production Tools",
    skCat4Title: "Technical & Information Systems",

    synergyTitle: "The Interdisciplinary Advantage: IT + Visual Media",
    synergyDesc: "Holding a Bachelor of Science in Information Technology provides me with a rare edge in visual communications. I understand digital asset management, network workflows, data visualization, web architecture, and secure cloud storage—ensuring smooth collaboration with IT, comms, and program teams alike.",

    // Timeline / Experience
    expEyebrow: "Career Progression",
    expTitle: "Professional Experience",
    expSubtitle: "Verified background in media production, institutional visual documentation, and digital communications.",
    exp1Period: "2023 — Present",
    exp1Role: "Visual Communications & Multimedia Specialist",
    exp1Org: "Independent Consultant / Contractor",
    exp1Body: "Providing tailored photography, videography, aerial documentation, and digital content packages for organizations, corporate bodies, and development initiatives. Responsible for end-to-end production, ethical clearance, and asset delivery.",
    exp1Tag1: "Drone Imaging",
    exp1Tag2: "Event Documentation",
    exp1Tag3: "Digital Campaigns",

    exp2Period: "2021 — 2023",
    exp2Role: "Multimedia & Digital Media Producer",
    exp2Org: "Creative Studio & Media Production",
    exp2Body: "Directed video editing, post-production workflows, graphic collateral, and motion graphics. Supervised audio-visual quality control and multi-format delivery across web and broadcast specifications.",
    exp2Tag1: "Video Editing",
    exp2Tag2: "Motion Graphics",
    exp2Tag3: "Brand Identity",

    exp3Period: "2018 — 2021",
    exp3Role: "IT & Digital Content Assistant",
    exp3Org: "Technical & Media Support",
    exp3Body: "Supported information systems, digital asset databases, and web-ready content publishing. Leveraged IT background to streamline media archiving and digital distribution workflows.",
    exp3Tag1: "Information Technology",
    exp3Tag2: "Digital Archiving",
    exp3Tag3: "Web Content",

    // CV Section
    cvEyebrow: "Full Credentials",
    cvTitle: "Curriculum Vitae",
    cvDesc: "For comprehensive details on professional history, academic background, technical proficiencies, and verified references, download the English CV prepared for international agencies and institutions.",
    cvBtnDownload: "Download Complete CV (PDF)",
    cvBtnPrint: "Print / View Summary",
    cvLabelName: "Full Name",
    cvValName: "Abobker Ali (BAKRI)",
    cvLabelDegree: "Degree",
    cvValDegree: "B.Sc. in Information Technology",
    cvLabelSpecialty: "Core Specialty",
    cvValSpecialty: "Visual Communications & Multimedia",
    cvLabelLangs: "Languages",
    cvValLangs: "Arabic (Native) • English (Professional)",
    cvLabelLocation: "Location",
    cvValLocation: "Sudan (Available for field missions & remote contracts)",

    // Contact
    contactEyebrow: "Start a Conversation",
    contactTitle: "Get in Touch",
    contactSubtitle: "Available for consultancy assignments, field photo/video missions, institutional documentation contracts, and full-time communications roles.",
    contactEmailLabel: "Email Address",
    contactPhoneLabel: "Phone / WhatsApp",
    contactLocLabel: "Base Location",
    contactLocVal: "Khartoum, Sudan • Open to Travel & Field Missions",
    contactAvailabilityLabel: "Availability Status",
    contactAvailabilityVal: "Available for Contracts & Consultancies",

    formName: "Full Name",
    formNamePlh: "e.g. Sarah Jenkins",
    formEmail: "Work Email",
    formEmailPlh: "e.g. s.jenkins@organization.org",
    formOrg: "Organization / Agency",
    formOrgPlh: "e.g. UN Agency / INGO / Media House",
    formSubject: "Assignment Type",
    formSubjectPlh: "e.g. Field Photo Documentation / Video Production",
    formMsg: "Message / Terms of Reference",
    formMsgPlh: "Please provide brief details on the assignment, location, timeline, and scope...",
    btnSendMsg: "Send Message",
    msgSuccess: "Thank you! Your message inquiry has been prepared. You can also contact directly via email.",

    // Footer
    footerDesc: "Professional portfolio of BAKRI — Visual Communications & Multimedia Specialist. Documenting missions, telling human stories, and communicating with clarity.",
    footerCopy: "© 2025 BAKRI (Abobker Ali). All rights reserved.",
    footerDisclaimer: "Curated work samples & concept studies presented for recruitment and evaluation purposes.",
    footerBackTop: "Back to Top ↑",

    // Modal Case Study
    modalClose: "Close",
    specTitlePlatform: "Capture Platform",
    specTitleRes: "Resolution",
    specTitleFps: "Frame Rate",
    specTitleColor: "Color Profile",
    specTitleSuite: "Post-Production",
    specTitleClass: "Project Classification",
    modalOverviewTitle: "Project Overview",
    modalObjectiveTitle: "Visual & Communication Objective",
    modalRoleTitle: "My Actual Role in this Project",
    modalTechnicalTitle: "Technical Specifications & Workflow",
    modalDeliveryTitle: "Final Production Delivery"
  },

  ar: {
    // Navigation
    navHome: "الرئيسية",
    navAbout: "عني",
    navCapabilities: "القدرات",
    navSelected: "أعمال مختارة",
    navAerial: "التصوير الجوي",
    navPortfolio: "معرض الأعمال",
    navComms: "الاتصالات البصرية",
    navSkills: "المهارات والتقنيات",
    navExperience: "الخبرة المهنية",
    navCV: "السيرة الذاتية",
    navContact: "تواصل معي",

    // Hero
    heroBadge: "أخصائي الاتصالات البصرية والوسائط المتعددة",
    heroTitleLine1: "قصص بصرية.",
    heroTitleLine2: "تواصل هادف.",
    heroDesc: "متخصص في الاتصالات البصرية والوسائط المتعددة، أعمل على إنتاج محتوى بصري يجمع بين التصوير الفوتوغرافي، الفيديو، السرد البصري والتقنيات الرقمية لتوثيق الأنشطة والأحداث وإيصال الرسائل بوضوح واحترافية.",
    btnExploreWork: "استعرض الأعمال",
    btnDownloadCV: "تحميل السيرة الذاتية",
    btnContactHero: "تواصل معي",
    heroTrustLabel: "ملائم لمعايير ومتطلبات",
    trustTag1: "وكالات الأمم المتحدة (UN)",
    trustTag2: "المنظمات الدولية (INGOs)",
    trustTag3: "المنظمات الإنسانية والتنموية",
    trustTag4: "فرق الإعلام والتواصل المؤسسي",

    // About
    aboutEyebrow: "الملف التعريفي",
    aboutTitle: "من أنا؟",
    aboutLead: "متخصص في الاتصالات البصرية والوسائط المتعددة، حاصل على خلفية أكاديمية في تقنية المعلومات، مع خبرة عملية في التصوير الفوتوغرافي، تصوير الفيديو، إنتاج المحتوى الرقمي والتواصل البصري.",
    aboutBody1: "أجمع بين المعرفة التقنية والمهارات الإبداعية لإنتاج محتوى بصري واضح وهادف، مناسب للفعاليات، الأنشطة المؤسسية، التوثيق، المنصات الرقمية ووسائل التواصل الاجتماعي.",
    aboutBody2: "بدل تضخيم الموقع بأعمال غير حقيقية، يقدم هذا الملف أعمالاً مختارة بعناية تعكس الدقة الفنية، السرد الأخلاقي، وفهم آليات التوثيق المؤسسي.",
    aboutStat1Title: "تقنية المعلومات + الإنتاج المرئي",
    aboutStat1Desc: "دمج البنية التقنية وإدارة البيانات مع فنون الميديا",
    aboutStat2Title: "سرد بصري مسؤول",
    aboutStat2Desc: "احترام الكرامة والخصوصية والموافقة المستنيرة في الميدان",
    aboutStat3Title: "إنتاج متعدد الوسائط",
    aboutStat3Desc: "تصوير جوي، فوتوغرافي، مونتاج، موشن وتصميم",
    aboutStat4Title: "جاهزية للعمل المؤسسي والميداني",
    aboutStat4Desc: "التزام كامل بالمواعيد والضوابط الصارمة",
    aboutBadgeTitle: "بكري (ابوبكر علي)",
    aboutBadgeText: "بكالوريوس تقنية معلومات • منتج وسائط بصرية",

    // Capabilities
    capEyebrow: "القدرات المهنية",
    capTitle: "مجالات القدرات والخبرة",
    capSubtitle: "تقديم حلول اتصالات بصرية متكاملة من التخطيط والتكوين وحتى المعالجة النهائية والتسليم للمؤسسات والمنظمات والجهات المهنية.",
    cap1Title: "التصوير الفوتوغرافي",
    cap1Desc: "توثيق احترافي للفعاليات المؤسسية، الأنشطة الميدانية والإنسانية، والصور التحريرية والشخصية التي تحترم كرامة الأفراد.",
    cap1f1: "تغطية المؤتمرات والفعاليات الرسمية",
    cap1f2: "التوثيق الميداني والتقارير الإنسانية",
    cap1f3: "المعالجة الرقمية والأرشفة المنظمة",

    cap2Title: "تصوير الفيديو والمونتاج",
    cap2Desc: "إنتاج الفيديو السينمائي من مرحلة التخطيط والتصوير الميداني، وحتى المونتاج وتصحيح الألوان وهندسة الصوت.",
    cap2f1: "أفلام وثائقية وقصص أثر قصيرة",
    cap2f2: "فيديوهات تعريفية وملخصات للمشاريع",
    cap2f3: "مونتاج متناسق، ضبط ألوان وتزامن صوتي",

    cap3Title: "التصوير الجوي (الدرون)",
    cap3Desc: "تصوير سينمائي ومسح جوي يبرز المساحات، السياق المكاني، والهندسة المعمارية بحركات كاميرا انسيابية وآمنة.",
    cap3f1: "حركات كاميرا سلسة وتتبع ديناميكي",
    cap3f2: "إبراز السياق الجغرافي والبيئي للمشاريع",
    cap3f3: "لقطات متعددة الزوايا للمسح والتخطيط",

    cap4Title: "السرد البصري (Visual Storytelling)",
    cap4Desc: "تحويل المبادرات الميدانية والمفاهيم المعقدة إلى قصص بصرية متماسكة تنقل الرسالة بعمق وتخاطب الجمهور بصدق.",
    cap4f1: "تخطيط تسلسل المشاهد والرسائل",
    cap4f2: "قصص إنسانية تحافظ على وقار الأشخاص",
    cap4f3: "ترابط المحتوى عبر مختلف القنوات",

    cap5Title: "المحتوى الرقمي والإعلامي",
    cap5Desc: "إنتاج مواد وسائط رقمية موجهة للويب ومنصات التواصل الاجتماعي، مصممة لإيصال الأفكار بسرعة وفاعلية.",
    cap5f1: "مقاطع ريلز وفيديوهات رقمية قصيرة",
    cap5f2: "تصاميم إعلانية وإعلامية مركزة",
    cap5f3: "تجهيز المواد بمقاسات وصيغ قياسية",

    cap6Title: "التصميم والتواصل البصري",
    cap6Desc: "تنظيم المعلومات والمحتوى عبر التصميم الجرافيكي، الإنفوجرافيك، والمواد المطبوعة والرقمية المتناسقة مع هوية المؤسسة.",
    cap6f1: "إنفوجرافيك وتجسيد البيانات",
    cap6f2: "الالتزام بأدلة الهوية البصرية المؤسسية",
    cap6f3: "تصميم المطبوعات والتقارير الدورية",

    // Aerial Section
    aerialEyebrow: "التصوير الجوي",
    aerialTitle: "أعمال مختارة — التصوير الجوي",
    aerialSubtitle: "ثلاثة أعمال مختارة تُبرز مهارات الطيران الاحترافي، التكوين البصري، الحركة السينمائية، والتسليم التقني عالي الجودة.",
    btnWatchCase: "دراسة الحالة والتفاصيل",
    btnDirectPlay: "تشغيل الفيديو",

    case1Title: "منظور معماري وحضري",
    case1Desc: "مسح جوي سينمائي يركز على الخطوط المعمارية، الأنماط الهندسية، والانتقالات المكانية السلسة مع تحكم عالي في حركة الدرون.",
    case1Role: "طيار درون • مصور جوي • مصحح ألوان • مونتير",
    case1Objective: "إبراز التفاصيل الهندسية والأبعاد المكانية بزوايا مرتفعة مع الحفاظ على استقرار الكاميرا وتوازن الحركة الأفقية.",

    case2Title: "استكشاف جوي وبيئي",
    case2Desc: "مسار طيران ديناميكي يرصد اتساع المساحات والتدرج الضوئي الطبيعي والعمق البيئي عبر حركات بانورامية مستمرة.",
    case2Role: "تشغيل الدرون • تخطيط مسار الطيران • معالجة الألوان",
    case2Objective: "توثيق الامتداد البيئي والترابط المكاني للموقع باستخدام حركة هادئة تحاكي العين الطبيعية.",

    case3Title: "توثيق ميداني وهيكلي",
    case3Desc: "توثيق بصري من زوايا علوية يوضح البنية التحتية، مناطق النشاط، والمحيط العام بوضوح مكاني دقيق.",
    case3Role: "تصوير جوي • التحكم بحامل الكاميرا • المونتاج النهائي",
    case3Objective: "توفير رؤية محيطية شاملة تدعم تقديم الإحاطات لأصحاب المصلحة وتوثيق تقدم العمل.",

    case4Title: "موشن جرافيك وحركة بصرية ديناميكية",
    case4Desc: "تصميم حركة متقدم يدمج التيبوغرافي الحركي والانتقالات المتناسقة لإيصال رسائل رقمية حيوية.",
    case4Role: "مصمم حركة • محرك ومونتير",
    case4Objective: "تقديم ريتم بصري سريع وجذاب مخصص للشاشات الرقمية.",

    case5Title: "مؤثرات بصرية ومعالجة سينمائية",
    case5Desc: "تركيب طبقات بصرية ودمج مؤثرات سينمائية مع تدرج لوني عميق.",
    case5Role: "مركب مؤثرات • محرر فيديو",
    case5Objective: "إظهار القدرة على المعالجة الرقمية المتقدمة بعد التصوير.",

    case6Title: "مونتاج ترويجي ومؤسسي",
    case6Desc: "مونتاج فيديو بإيقاع سريع وتزامن دقيق بين الإيقاع الصوتي وحركة اللقطات.",
    case6Role: "مونتير • هندسة وتزامن صوتي",
    case6Objective: "جذب انتباه المشاهد الفوري وتعزيز الهوية البصرية.",

    // Portfolio
    portEyebrow: "معرض الأعمال",
    portTitle: "معرض الأعمال المختارة",
    portSubtitle: "مجموعة منتقاة من التوثيق البصري، التصوير الفوتوغرافي، الفيديو، والاتصالات الجرافيكية الحقيقية.",
    filterAll: "جميع الأعمال",
    filterPhoto: "التصوير الفوتوغرافي",
    filterVideo: "الفيديو والموشن",
    filterAerial: "التصوير الجوي",
    filterComms: "الاتصالات البصرية",
    filterDigital: "المحتوى الرقمي",
    filterDesign: "التصميم والتخطيط",

    // Photography items
    photo1Title: "توثيق الفعاليات المؤسسية",
    photo1Desc: "تغطية الجلسات الرئيسية وتفاعل المتحدثين والمشاركين.",
    photo2Title: "توثيق العمل الميداني",
    photo2Desc: "رصد الأنشطة الميدانية والجهود المجتمعية بواقعية.",
    photo3Title: "تغطية المنتديات الرسمية",
    photo3Desc: "جلسات الحوار والنقاشات بين الوفود والمشاركين.",
    photo4Title: "سياق الأنشطة والبيئة الميدانية",
    photo4Desc: "نظرة شاملة على بيئة العمل والأنشطة المشتركة.",
    photo5Title: "ملتقى الوفود الرسمية",
    photo5Desc: "توثيق الحضور والبروتوكول والتفاعل العام.",
    photo6Title: "دراسة البورتريه الإنساني",
    photo6Desc: "إضاءة طبيعية تعكس الكرامة والهدوء التعبيري.",
    photo7Title: "قصة مجتمعية وميدانية",
    photo7Desc: "توثيق محترم يحفظ خصوصية الأشخاص في بيئتهم.",
    photo8Title: "بورتريه تعبيري تحريري",
    photo8Desc: "ملامح أصيلة تعكس السرد الواقعي والمصداقية.",
    photo9Title: "توثيق المنشآت والمواقع",
    photo9Desc: "لقطات مسحية للمرافق وتفاصيل البنية المحيطة.",
    photo10Title: "جلسات الحوار التفاعلية",
    photo10Desc: "التقاط لحظات تبادل الأفكار والتفاعل الجماعي.",
    photo11Title: "السرد الإنساني في البيئة الطبيعية",
    photo11Desc: "لقطة ميدانية تعتمد على الضوء المحيط والتعبير التلقائي.",
    photo12Title: "محطات الإنجاز والعمل الجماعي",
    photo12Desc: "توثيق خطوات التنفيذ وروح التعاون الميداني.",
    photo13Title: "عروض المتحدثين والمؤتمرات",
    photo13Desc: "التقاط المتحدث والمنصة وتفاعل الحضور.",
    design1Title: "تصميم المطبوعات والهوية",
    design1Desc: "طباعة واضحة وتوزيع متزن متوافق مع الهوية المؤسسية.",
    design2Title: "أصول الحملات الرقمية",
    design2Desc: "محتوى بصري مخصص للنشر الرقمي السريع والواضح.",
    design3Title: "تنسيق المواد التحريرية",
    design3Desc: "تسلسل هرمي للمعلومات يسهل القراءة والاستيعاب.",
    design4Title: "استراتيجية بصرية رقمية",
    design4Desc: "تنسيق لوني ومساحي يعزز وضوح الرسالة.",
    social1Title: "حملة محتوى لوسائل التواصل",
    social1Desc: "تصميم لافت يعزز وصول الرسالة للمنصات الرقمية.",
    social2Title: "مادة إعلامية توعوية",
    social2Desc: "صياغة بصرية مباشرة تخدم الرسائل العامة.",

    // Visual Comms Section
    commsEyebrow: "المنهجية المؤسسية",
    commsTitle: "الاتصالات البصرية في الممارسة العملية",
    commsSubtitle: "التصوير والفيديو ليسا مجرد مهارات تقنية أو لقطات جميلة، بل هما أدوات استراتيجية لنقل الحقائق، حشد الدعم، وتوثيق الأثر المؤسسي.",
    commsP1Title: "المساءلة والشفافية لأصحاب المصلحة",
    commsP1Desc: "توفير سجلات بصرية موثقة تدعم تقارير تقدم المشاريع وتؤكد استثمار الموارد أمام الشركاء والمانحين.",
    commsP2Title: "أولوية الكرامة الإنسانية",
    commsP2Desc: "تصوير المستفيدين والمجتمعات برؤية تعكس الاحترام والاستقلالية، بعيداً عن التنميط أو الاستغلال البصري.",
    commsP3Title: "مرونة الاستخدام عبر القنوات",
    commsP3Desc: "إنتاج حزم وسائط ملائمة في آن واحد للتقارير السنوية، ملخصات المانحين، الإعلام، والحملات الرقمية.",

    // Responsible Storytelling
    respEyebrow: "المعايير الأخلاقية",
    respTitle: "السرد البصري المسؤول",
    respQuote: "\"لا تقتصر جودة المحتوى البصري على الجانب الفني، بل تشمل أيضًا احترام الأشخاص والسياق والخصوصية والكرامة. أحرص في عملي البصري على تقديم الأشخاص والقصص بصورة مهنية ومحترمة، مع مراعاة الموافقات المستنيرة، والخصوصية، والاستخدام المسؤول للصور والمحتوى دون استغلال.\"",
    respPillar1Title: "الموافقة المستنيرة",
    respPillar1Desc: "التأكد التام من فهم الأشخاص لكيفية وأماكن استخدام موادهم قبل التصوير.",
    respPillar2Title: "الأمانة السياقية",
    respPillar2Desc: "الابتعاد عن التهويل أو الاقتصاص المضلل، وتجسيد الواقع بأمانة وموضوعية.",
    respPillar3Title: "حماية الأطفال والفئات الحساسة",
    respPillar3Desc: "تطبيق إجراءات الحماية الصارمة للمشاركين والأطفال والنازحين.",
    respPillar4Title: "احترام الخصوصية والسرية",
    respPillar4Desc: "الامتثال لمتطلبات عدم الإفصاح والبروتوكولات الأمنية والمؤسسية في الميدان.",

    // Institutional Readiness
    instEyebrow: "الجاهزية الميدانية",
    instTitle: "العمل في البيئات المؤسسية والميدانية",
    instCard1Title: "الالتزام بالأدلة المؤسسية",
    instCard1Desc: "معرفة واسعة بأدلة الهوية البصرية وإرشادات الظهور المعتمدة لدى منظمات الأمم المتحدة والـ INGOs.",
    instCard2Title: "الجاهزية الميدانية",
    instCard2Desc: "استعداد كامل للسفر، التكيف مع البيئات الميدانية المتنوعة، والعمل ضمن فرق متعددة التخصصات.",
    instCard3Title: "الوفاء بالمواعيد الصارمة",
    instCard3Desc: "تسليم فوري للمواد العاجلة والبيانات الصحفية والتغطيات المباشرة أثناء سير الأحداث.",
    instCard4Title: "الأرشفة الرقمية والـ Metadata",
    instCard4Desc: "توثيق بيانات الصور الجغرافية والزمنية والوصفية (IPTC/EXIF) وتصنيفها بأمان في أرشيف منظم.",

    // Skills & Technical Background
    skillsEyebrow: "المهارات والتقنيات",
    skillsTitle: "المهارات، البرامج، والخلفية التقنية",
    skillsSubtitle: "ملف مهني متكامل يجمع بين دراسة تقنية المعلومات الرسمية والمهارة البصرية المتقدمة.",
    skCat1Title: "التصوير والإنتاج البصري",
    skCat2Title: "الاتصالات والمحتوى الرقمي",
    skCat3Title: "البرامج والتقنيات الإبداعية",
    skCat4Title: "الأنظمة والتقنية المعلوماتية",

    synergyTitle: "الميزة التنافسية: تقنية المعلومات + الاتصالات البصرية",
    synergyDesc: "حصولي على بكالوريوس في تقنية المعلومات يمنحني ميزة فريدة في مجالات الاتصال المرئي. أفهم بنية إدارة الأصول الرقمية، أمان السحابة، معالجة البيانات والإنفوجرافيك، وهندسة الويب، مما يتيح لي التواصل والتنسيق السلس مع فرق البرمجة والإعلام على حد سواء.",

    // Timeline / Experience
    expEyebrow: "المسار المهني",
    expTitle: "الخبرة المهنية",
    expSubtitle: "سجل واقعي في التوثيق البصري، إنتاج الوسائط المتعددة، والاتصالات المؤسسية.",
    exp1Period: "2023 — حتى الآن",
    exp1Role: "أخصائي اتصالات بصرية ووسائط متعددة",
    exp1Org: "استشاري وموثق مستقل",
    exp1Body: "إنتاج حزم تصوير فوتوغرافي، فيديو، تصوير جوي، ومحتوى رقمي للمنظمات والشركات والمبادرات التنموية، مع إدارة مراحل الإنتاج والتنسيق الميداني والالتزام بالمعايير الأخلاقية.",
    exp1Tag1: "تصوير جوي",
    exp1Tag2: "توثيق فعاليات",
    exp1Tag3: "حملات رقمية",

    exp2Period: "2021 — 2023",
    exp2Role: "منتج وسائط متعددة ومحتوى رقمي",
    exp2Org: "استوديو إنتاج إعلامي ومرئي",
    exp2Body: "إدارة مونتاج الفيديو، المؤثرات البصرية، الموشن جرافيك، وتصميم المطبوعات والهويات الرقمية مع مراقبة جودة العرض عبر مختلف المنصات.",
    exp2Tag1: "مونتاج فيديو",
    exp2Tag2: "موشن جرافيك",
    exp2Tag3: "تصميم بصري",

    exp3Period: "2018 — 2021",
    exp3Role: "مساعد تقنية معلومات ومحتوى رقمي",
    exp3Org: "دعم فني وإعلامي",
    exp3Body: "دعم قواعد بيانات الميديا، إدارة الأصول الرقمية، ونشر المحتوى الموجه للمنصات الرقمية مستفيداً من الخلفية التقنية في هندسة وتنظيم المواد.",
    exp3Tag1: "تقنية معلومات",
    exp3Tag2: "أرشفة رقمية",
    exp3Tag3: "محتوى ويب",

    // CV Section
    cvEyebrow: "المؤهلات والخبرات",
    cvTitle: "السيرة الذاتية",
    cvDesc: "للاطلاع على الخبرات المهنية والمؤهلات والمهارات بشكل كامل وموثق، يمكنك تحميل السيرة الذاتية باللغة الإنجليزية المجهزة للتقديم إلى المنظمات والوكالات الدولية.",
    cvBtnDownload: "تحميل السيرة الذاتية (PDF)",
    cvBtnPrint: "عرض / طباعة الملخص",
    cvLabelName: "الاسم الكامل",
    cvValName: "ابوبكر علي (بكري - BAKRI)",
    cvLabelDegree: "المؤهل العلمي",
    cvValDegree: "بكالوريوس في تقنية المعلومات (B.Sc. IT)",
    cvLabelSpecialty: "التخصص الرئيسي",
    cvValSpecialty: "الاتصالات البصرية والوسائط المتعددة",
    cvLabelLangs: "اللغات",
    cvValLangs: "العربية (اللغة الأم) • الإنجليزية (مهنية)",
    cvLabelLocation: "الموقع",
    cvValLocation: "السودان (متاح للتكليفات الميدانية والعمل عن بُعد)",

    // Contact
    contactEyebrow: "بدء التواصل",
    contactTitle: "تواصل معي",
    contactSubtitle: "متاح لفرص العمل والتكليفات المتعلقة بالاتصالات، التصوير، الفيديو، المحتوى الرقمي والوسائط المتعددة.",
    contactEmailLabel: "البريد الإلكتروني",
    contactPhoneLabel: "الهاتف / واتساب",
    contactLocLabel: "الموقع والجاهزية",
    contactLocVal: "الخرطوم، السودان • متاح للمهام الميدانية والسفر",
    contactAvailabilityLabel: "حالة التوفر",
    contactAvailabilityVal: "متاح للعقود والمشاريع والاستشارات",

    formName: "الاسم الكامل",
    formNamePlh: "مثال: د. أحمد المنصور",
    formEmail: "البريد المؤسسي / الشخصي",
    formEmailPlh: "name@organization.org",
    formOrg: "الجهة أو المنظمة",
    formOrgPlh: "مثال: وكالة أممية / منظمة دولية / جهة حكومية",
    formSubject: "طبيعة التكليف أو الفرصة",
    formSubjectPlh: "مثال: توثيق ميداني فوتوغرافي / إنتاج فيلم قصير",
    formMsg: "تفاصيل المهمة أو نطاق العمل",
    formMsgPlh: "يرجى كتابة نبذة عن طبيعة العمل، الموقع، والموعد الزمني المتوقع...",
    btnSendMsg: "إرسال الرسالة",
    msgSuccess: "تم تجهيز رسالتك بنجاح! يمكنك أيضاً التواصل المباشر عبر البريد أو واتساب.",

    // Footer
    footerDesc: "ملف الأعمال المهني لبكري — متخصص الاتصالات البصرية والوسائط المتعددة. توثيق الأنشطة، السرد الإنساني الهادف، والتواصل المؤسسي الفعّال.",
    footerCopy: "© 2025 BAKRI (ابوبكر علي). جميع الحقوق محفوظة.",
    footerDisclaimer: "المواد والأعمال المعروضة مختارة لغرض التقديم المهني والتقييم المؤسسي.",
    footerBackTop: "إلى الأعلى ↑",

    // Modal Case Study
    modalClose: "إغلاق",
    specTitlePlatform: "منصة ومعدات التصوير",
    specTitleRes: "دقة التصوير",
    specTitleFps: "معدل الإطارات",
    specTitleColor: "الملف اللوني والتدرج",
    specTitleSuite: "برامج المعالجة والمونتاج",
    specTitleClass: "تصنيف المشروع",
    modalOverviewTitle: "نظرة عامة على العمل",
    modalObjectiveTitle: "الهدف البصري والاتصالي",
    modalRoleTitle: "دوري الفعلي في المشروع",
    modalTechnicalTitle: "المواصفات التقنية ومنهجية التنفيذ",
    modalDeliveryTitle: "النتيجة النهائية للمشروع"
  }
};

// ==========================================================================
// 3. CORE APPLICATION STATE & CONTROLLER
// ==========================================================================

let currentLang = localStorage.getItem('bakri_portfolio_lang') || 'en';
let currentFilter = 'all';
let currentLightboxIndex = 0;
let activeGalleryList = [];

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  applyLanguage(currentLang);
  renderAerialShowcase();
  renderPortfolioGrid('all');
  setupModals();
  setupFilterTabs();
  setupContactForm();
  setupScrollAnimations();
});

// ==========================================================================
// 4. LANGUAGE SWITCHER
// ==========================================================================

function switchLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('bakri_portfolio_lang', currentLang);
  
  // Smooth page transition
  document.body.style.opacity = '0.6';
  setTimeout(() => {
    applyLanguage(currentLang);
    renderAerialShowcase();
    renderPortfolioGrid(currentFilter);
    document.body.style.opacity = '1';
  }, 120);
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const dict = i18n[lang];
  if (!dict) return;

  // Translate all [data-i18n] text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Translate HTML attributes (e.g. placeholder, title)
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const [attr, key] = el.getAttribute('data-i18n-attr').split(':');
    if (attr && key && dict[key]) {
      el.setAttribute(attr, dict[key]);
    }
  });

  // Update language toggle button text
  const toggleBtnText = document.getElementById('lang-toggle-text');
  if (toggleBtnText) {
    toggleBtnText.textContent = lang === 'en' ? 'العربية' : 'English';
  }
}

// ==========================================================================
// 5. NAVIGATION & SCROLL
// ==========================================================================

function setupNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const langToggle = document.getElementById('lang-toggle');

  if (langToggle) {
    langToggle.addEventListener('click', switchLanguage);
  }

  // Navbar scroll background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

// ==========================================================================
// 6. AERIAL SHOWCASE & SELECTED WORK
// ==========================================================================

function renderAerialShowcase() {
  const container = document.getElementById('aerial-showcase-container');
  if (!container) return;

  const dict = i18n[currentLang];
  const aerialVideos = videoProjects.filter(p => p.category === 'aerial');

  container.innerHTML = aerialVideos.map((project, idx) => {
    return `
      <div class="video-card reveal">
        <div class="video-thumb-wrap" onclick="openCaseStudyModal('${project.id}')">
          <video src="${project.src}" muted loop playsinline preload="metadata" onmouseover="this.play()" onmouseout="this.pause()"></video>
          <div class="play-overlay">
            <div class="play-btn-circle" title="${dict.btnDirectPlay}">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <span class="video-duration">4K • 60 FPS</span>
        </div>
        <div class="video-details">
          <span class="video-tag">Selected Work 0${idx + 1}</span>
          <h3 class="video-title">${dict[project.titleKey]}</h3>
          <p class="video-desc">${dict[project.descKey]}</p>
          <div class="video-meta">
            <span>${project.specs.platform}</span>
            <span>${project.specs.resolution}</span>
          </div>
          <div class="video-card-actions">
            <button class="btn btn-primary btn-sm" onclick="openCaseStudyModal('${project.id}')">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>${dict.btnWatchCase}</span>
            </button>
            <a href="project.html?id=${project.id}" class="btn btn-outline btn-sm" target="_blank" title="Open Case Study in Standalone Page">
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// 7. PORTFOLIO FILTERABLE GALLERY
// ==========================================================================

function setupFilterTabs() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      currentFilter = filter;
      renderPortfolioGrid(filter);
    });
  });
}

function renderPortfolioGrid(filter = 'all') {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  const dict = i18n[currentLang];
  let items = [];

  if (filter === 'all') {
    // Combine video previews + photos
    const vidItems = videoProjects.map(v => ({
      type: 'video',
      id: v.id,
      src: v.src,
      category: v.category,
      title: dict[v.titleKey],
      desc: dict[v.descKey]
    }));
    const pItems = photographyItems.map((p, idx) => ({
      type: 'photo',
      id: `p-${idx}`,
      src: p.image,
      category: p.category,
      title: dict[p.titleKey] || "Editorial Media",
      desc: dict[p.descKey] || "Field Documentation"
    }));
    items = [...vidItems, ...pItems];
  } else if (filter === 'video') {
    items = videoProjects.map(v => ({
      type: 'video',
      id: v.id,
      src: v.src,
      category: v.category,
      title: dict[v.titleKey],
      desc: dict[v.descKey]
    }));
  } else if (filter === 'aerial') {
    items = videoProjects.filter(v => v.category === 'aerial').map(v => ({
      type: 'video',
      id: v.id,
      src: v.src,
      category: 'aerial',
      title: dict[v.titleKey],
      desc: dict[v.descKey]
    }));
  } else {
    items = photographyItems.filter(p => p.category === filter || p.subCat === filter).map((p, idx) => ({
      type: 'photo',
      id: `p-${idx}`,
      src: p.image,
      category: p.category,
      title: dict[p.titleKey] || "Documentary Media",
      desc: dict[p.descKey] || "Visual Content"
    }));
  }

  activeGalleryList = items;

  grid.innerHTML = items.map((item, index) => {
    if (item.type === 'video') {
      return `
        <div class="portfolio-item reveal" onclick="openCaseStudyModal('${item.id}')">
          <video src="${item.src}" muted loop playsinline preload="metadata"></video>
          <div class="portfolio-overlay">
            <span class="portfolio-category">${item.category.toUpperCase()} • VIDEO</span>
            <h4 class="portfolio-item-title">${item.title}</h4>
            <p class="portfolio-item-desc">${item.desc}</p>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="portfolio-item reveal" onclick="openPhotoLightbox(${index})">
          <img src="${item.src}" alt="${item.title}" loading="lazy">
          <div class="portfolio-overlay">
            <span class="portfolio-category">${item.category.toUpperCase()}</span>
            <h4 class="portfolio-item-title">${item.title}</h4>
            <p class="portfolio-item-desc">${item.desc}</p>
          </div>
        </div>
      `;
    }
  }).join('');

  // Re-observe animations
  setupScrollAnimations();
}

// ==========================================================================
// 8. CASE STUDY MODAL (VIDEO PLAYER & DETAILED SPECS)
// ==========================================================================

function setupModals() {
  const caseModal = document.getElementById('case-study-modal-backdrop');
  const photoLightbox = document.getElementById('photo-lightbox-backdrop');

  // Close modals on backdrop click
  if (caseModal) {
    caseModal.addEventListener('click', (e) => {
      if (e.target === caseModal) closeCaseStudyModal();
    });
  }

  if (photoLightbox) {
    photoLightbox.addEventListener('click', (e) => {
      if (e.target === photoLightbox) closePhotoLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCaseStudyModal();
      closePhotoLightbox();
    }
    if (e.key === 'ArrowRight') {
      nextLightboxItem();
    }
    if (e.key === 'ArrowLeft') {
      prevLightboxItem();
    }
  });
}

function openCaseStudyModal(projectId) {
  const project = videoProjects.find(p => p.id === projectId);
  if (!project) return;

  const dict = i18n[currentLang];
  const modal = document.getElementById('case-study-modal-backdrop');
  const content = document.getElementById('case-study-modal-content');

  content.innerHTML = `
    <div class="modal-video-box">
      <video id="modal-active-video" src="${project.src}" controls autoplay playsinline></video>
    </div>
    <div class="modal-content-box">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem;">
        <div>
          <span class="eyebrow">${project.specs.classification}</span>
          <h2 style="font-size:2rem; margin-top:0.25rem;">${dict[project.titleKey]}</h2>
        </div>
        <a href="project.html?id=${project.id}" target="_blank" class="btn btn-outline btn-sm">
          <span>Open Direct Page</span>
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      </div>

      <div class="modal-spec-grid">
        <div class="spec-item">
          <span class="spec-label">${dict.specTitlePlatform}</span>
          <span class="spec-val">${project.specs.platform}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">${dict.specTitleRes}</span>
          <span class="spec-val">${project.specs.resolution}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">${dict.specTitleFps}</span>
          <span class="spec-val">${project.specs.framerate}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">${dict.specTitleColor}</span>
          <span class="spec-val">${project.specs.colorWorkflow}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">${dict.specTitleSuite}</span>
          <span class="spec-val">${project.specs.editingSuite}</span>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:2.5rem; margin-top:2rem;">
        <div>
          <h4 style="font-size:1.15rem; color:var(--accent-light); margin-bottom:0.75rem;">${dict.modalOverviewTitle}</h4>
          <p style="color:var(--text-muted); line-height:1.75; font-size:0.95rem;">${dict[project.descKey]}</p>
        </div>
        <div>
          <h4 style="font-size:1.15rem; color:var(--accent-light); margin-bottom:0.75rem;">${dict.modalObjectiveTitle}</h4>
          <p style="color:var(--text-muted); line-height:1.75; font-size:0.95rem;">${dict[project.objectiveKey]}</p>
        </div>
      </div>

      <div style="margin-top:2rem; padding:1.5rem; background:var(--bg-card); border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
        <h4 style="font-size:1rem; font-weight:700; color:var(--text-main); margin-bottom:0.5rem;">${dict.modalRoleTitle}</h4>
        <p style="color:var(--accent); font-weight:600; font-size:0.95rem;">${dict[project.roleKey]}</p>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudyModal() {
  const modal = document.getElementById('case-study-modal-backdrop');
  const video = document.getElementById('modal-active-video');
  if (video) video.pause();

  modal.classList.remove('active');
  document.body.style.overflow = 'unset';
}

// ==========================================================================
// 9. PHOTO LIGHTBOX
// ==========================================================================

function openPhotoLightbox(index) {
  currentLightboxIndex = index;
  const item = activeGalleryList[index];
  if (!item) return;

  const modal = document.getElementById('photo-lightbox-backdrop');
  const img = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');
  const counter = document.getElementById('lightbox-counter');

  img.src = item.src;
  caption.textContent = item.title;
  counter.textContent = `${index + 1} / ${activeGalleryList.length}`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePhotoLightbox() {
  const modal = document.getElementById('photo-lightbox-backdrop');
  modal.classList.remove('active');
  document.body.style.overflow = 'unset';
}

function nextLightboxItem() {
  if (!activeGalleryList.length) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % activeGalleryList.length;
  openPhotoLightbox(currentLightboxIndex);
}

function prevLightboxItem() {
  if (!activeGalleryList.length) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + activeGalleryList.length) % activeGalleryList.length;
  openPhotoLightbox(currentLightboxIndex);
}

// ==========================================================================
// 10. CONTACT FORM & INTERACTION
// ==========================================================================

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const org = document.getElementById('form-org').value;
      const subject = document.getElementById('form-subject').value;
      const msg = document.getElementById('form-message').value;

      // Construct direct mailto link with prefilled context
      const mailtoUrl = `mailto:bekosoft149@gmail.com?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject} - ${org}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nOrganization: ${org}\n\nScope of Work:\n${msg}`)}`;

      if (feedback) {
        feedback.style.display = 'block';
        feedback.textContent = i18n[currentLang].msgSuccess;
      }

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 500);
    });
  }
}

// ==========================================================================
// 11. SCROLL REVEAL ANIMATIONS
// ==========================================================================

function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
