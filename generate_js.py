import os

output_path = "js/main.js"

content = """/**
 * BAKRI — Humanitarian Photography & Visual Communications Specialist
 * Core Application Engine & Bilingual System
 */

// ==========================================================================
// 1. DATA SOURCES & CASE STUDIES
// ==========================================================================

const videoProjects = [
  {
    id: "aerial-1",
    src: "aerial/1.mp4",
    poster: "thumbs/aerial-1.jpg",
    category: "aerial",
    titleKey: "case1Title",
    descKey: "case1Desc",
    roleKey: "case1Role",
    objectiveKey: "case1Objective",
    specs: {
      platform: "DJI Professional Drone Quadcopter",
      resolution: "4K UHD (3840 x 2160)",
      framerate: "60 fps Cinematic",
      colorWorkflow: "D-Log Color Profile to Rec.709",
      editingSuite: "Adobe Premiere Pro / DaVinci Resolve",
      classification: "Selected Work • Aerial Spatial Survey"
    }
  },
  {
    id: "aerial-2",
    src: "aerial/2.mp4",
    poster: "thumbs/aerial-2.jpg",
    category: "aerial",
    titleKey: "case2Title",
    descKey: "case2Desc",
    roleKey: "case2Role",
    objectiveKey: "case2Objective",
    specs: {
      platform: "DJI Aerial Imaging System",
      resolution: "4K UHD (3840 x 2160)",
      framerate: "60 fps Fluid Motion",
      colorWorkflow: "Natural Grade & Contrast Balancing",
      editingSuite: "Adobe Premiere Pro",
      classification: "Selected Work • Environmental & Spatial Mapping"
    }
  },
  {
    id: "aerial-3",
    src: "aerial/3.mp4",
    poster: "thumbs/aerial-3.jpg",
    category: "aerial",
    titleKey: "case3Title",
    descKey: "case3Desc",
    roleKey: "case3Role",
    objectiveKey: "case3Objective",
    specs: {
      platform: "Aerial Drone System",
      resolution: "4K UHD / Full HD",
      framerate: "30 / 60 fps",
      colorWorkflow: "Atmospheric & Horizon Calibration",
      editingSuite: "Adobe Premiere Pro",
      classification: "Selected Work • Infrastructure & Site Survey"
    }
  },
  {
    id: "motion-1",
    src: "moto/55.mp4",
    poster: "thumbs/motion-1.jpg",
    category: "video",
    titleKey: "case4Title",
    descKey: "case4Desc",
    roleKey: "case4Role",
    objectiveKey: "case4Objective",
    personalProject: true,
    specs: {
      platform: "Motion Graphics & Kinetic Typography",
      resolution: "1080p Full HD",
      framerate: "60 fps",
      colorWorkflow: "Digital Color Grading",
      editingSuite: "Adobe After Effects & Premiere Pro",
      classification: "Concept Work • Kinetic Motion Study"
    }
  },
  {
    id: "video-vfx",
    src: "moto/vfx 1122.mp4",
    poster: "thumbs/video-vfx.jpg",
    category: "video",
    titleKey: "case5Title",
    descKey: "case5Desc",
    roleKey: "case5Role",
    objectiveKey: "case5Objective",
    personalProject: true,
    specs: {
      platform: "Visual Effects & Layer Compositing",
      resolution: "High Definition 1080p",
      framerate: "30 fps",
      colorWorkflow: "Cinematic Color Grade",
      editingSuite: "Adobe After Effects & Photoshop",
      classification: "Concept Work • VFX & Compositing"
    }
  },
  {
    id: "video-commercial",
    src: "moto/4.mp4",
    poster: "thumbs/video-commercial.jpg",
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
      classification: "Video Editing • Institutional Brief"
    }
  },
  {
    id: "video-edit-1",
    src: "moto/0112.mp4",
    poster: "thumbs/video-edit-1.jpg",
    category: "video",
    titleKey: "case7Title",
    descKey: "case7Desc",
    roleKey: "case7Role",
    objectiveKey: "case7Objective",
    personalProject: true,
    specs: {
      platform: "Video Production & Editing",
      resolution: "1080p Full HD",
      framerate: "30 fps",
      colorWorkflow: "Natural Grade & Contrast Balancing",
      editingSuite: "Adobe Premiere Pro",
      classification: "Concept Work • Video Pacing Study"
    }
  },
  {
    id: "video-edit-2",
    src: "moto/0913.mp4",
    poster: "thumbs/video-edit-2.jpg",
    category: "video",
    titleKey: "case8Title",
    descKey: "case8Desc",
    roleKey: "case8Role",
    objectiveKey: "case8Objective",
    personalProject: true,
    specs: {
      platform: "Video Editing & Post-Production",
      resolution: "1080p Full HD",
      framerate: "30 fps",
      colorWorkflow: "Atmospheric & Cinematic Grade",
      editingSuite: "Adobe Premiere Pro & After Effects",
      classification: "Concept Work • Editorial Video Study"
    }
  }
];

// 76 Verified Photography & Visual Media Items (Relif, su, 1, 4, 5, 6, 7, des)
const photographyItems = [
  // --- Relif NGO Field Operations ---
  { image: "Relif_opt/DSC_0902.JPG", category: "photo", subCat: "relief-operations", titleKey: "relif1Title", descKey: "relif1Desc" },
  { image: "Relif_opt/DSC_0909.JPG", category: "photo", subCat: "field-missions", titleKey: "relif2Title", descKey: "relif2Desc" },
  { image: "Relif_opt/DSC_0913.JPG", category: "photo", subCat: "field-missions", titleKey: "relif3Title", descKey: "relif3Desc" },
  { image: "Relif_opt/DSC_0915.JPG", category: "photo", subCat: "relief-operations", titleKey: "relif4Title", descKey: "relif4Desc" },
  { image: "Relif_opt/DSC_0916.JPG", category: "photo", subCat: "relief-operations", titleKey: "relif5Title", descKey: "relif5Desc" },
  { image: "Relif_opt/DSC_0927.JPG", category: "photo", subCat: "field-missions", titleKey: "relif6Title", descKey: "relif6Desc" },
  { image: "Relif_opt/DSC_0930.JPG", category: "stories", subCat: "community-resilience", titleKey: "relif7Title", descKey: "relif7Desc" },
  { image: "Relif_opt/DSC_0942.JPG", category: "photo", subCat: "field-missions", titleKey: "relif8Title", descKey: "relif8Desc" },
  { image: "Relif_opt/DSC_0958.JPG", category: "photo", subCat: "relief-operations", titleKey: "relif9Title", descKey: "relif9Desc" },
  { image: "Relif_opt/DSC_0972.JPG", category: "photo", subCat: "field-missions", titleKey: "relif10Title", descKey: "relif10Desc" },
  { image: "Relif_opt/DSC_0977.JPG", category: "photo", subCat: "humanitarian-events", titleKey: "relif11Title", descKey: "relif11Desc" },
  { image: "Relif_opt/DSC_0983.JPG", category: "stories", subCat: "human-stories", titleKey: "relif12Title", descKey: "relif12Desc" },
  { image: "Relif_opt/DSC_0985.JPG", category: "photo", subCat: "relief-operations", titleKey: "relif13Title", descKey: "relif13Desc" },
  { image: "Relif_opt/DSC_0996.JPG", category: "photo", subCat: "relief-operations", titleKey: "relif14Title", descKey: "relif14Desc" },
  { image: "Relif_opt/DSC_0999.JPG", category: "photo", subCat: "field-missions", titleKey: "relif15Title", descKey: "relif15Desc" },
  { image: "Relif_opt/DSC_1001.JPG", category: "stories", subCat: "portraits", titleKey: "relif16Title", descKey: "relif16Desc" },
  { image: "Relif_opt/DSC_1004.JPG", category: "photo", subCat: "field-missions", titleKey: "relif17Title", descKey: "relif17Desc" },
  { image: "Relif_opt/DSC_1013.JPG", category: "photo", subCat: "relief-operations", titleKey: "relif18Title", descKey: "relif18Desc" },

  // --- su NGO Programs & Community Field Work ---
  { image: "su_opt/DSC_6657.JPG", category: "stories", subCat: "portraits", titleKey: "su1Title", descKey: "su1Desc" },
  { image: "su_opt/DSC_6658.JPG", category: "stories", subCat: "human-stories", titleKey: "su2Title", descKey: "su2Desc" },
  { image: "su_opt/DSC_6659.JPG", category: "photo", subCat: "humanitarian-events", titleKey: "su3Title", descKey: "su3Desc" },
  { image: "su_opt/DSC_6714.JPG", category: "photo", subCat: "field-missions", titleKey: "su4Title", descKey: "su4Desc" },
  { image: "su_opt/DSC_6768.JPG", category: "photo", subCat: "field-missions", titleKey: "su5Title", descKey: "su5Desc" },
  { image: "su_opt/DSC_6774.JPG", category: "stories", subCat: "community-resilience", titleKey: "su6Title", descKey: "su6Desc" },
  { image: "su_opt/DSC_6787.JPG", category: "photo", subCat: "field-missions", titleKey: "su7Title", descKey: "su7Desc" },
  { image: "su_opt/IMG-20241005-WA0002.jpg", category: "photo", subCat: "field-missions", titleKey: "su8Title", descKey: "su8Desc" },
  { image: "su_opt/IMG-20241005-WA0003.jpg", category: "stories", subCat: "human-stories", titleKey: "su9Title", descKey: "su9Desc" },
  { image: "su_opt/IMG-20241005-WA0004.jpg", category: "photo", subCat: "humanitarian-events", titleKey: "su10Title", descKey: "su10Desc" },
  { image: "su_opt/IMG-20241005-WA0016.jpg", category: "photo", subCat: "field-missions", titleKey: "su11Title", descKey: "su11Desc" },
  { image: "su_opt/IMG-20241005-WA0017.jpg", category: "stories", subCat: "community-resilience", titleKey: "su12Title", descKey: "su12Desc" },
  { image: "su_opt/IMG-20241005-WA0019.jpg", category: "photo", subCat: "relief-operations", titleKey: "su13Title", descKey: "su13Desc" },
  { image: "su_opt/IMG-20241005-WA0041.jpg", category: "stories", subCat: "portraits", titleKey: "su14Title", descKey: "su14Desc" },
  { image: "su_opt/IMG-20241005-WA0045.jpg", category: "photo", subCat: "field-missions", titleKey: "su15Title", descKey: "su15Desc" },
  { image: "su_opt/IMG-20241005-WA0047.jpg", category: "photo", subCat: "relief-operations", titleKey: "su16Title", descKey: "su16Desc" },
  { image: "su_opt/IMG-20241005-WA0050.jpg", category: "stories", subCat: "human-stories", titleKey: "su17Title", descKey: "su17Desc" },
  { image: "su_opt/IMG-20260926-WA0000.jpg", category: "photo", subCat: "field-missions", titleKey: "su18Title", descKey: "su18Desc" },
  { image: "su_opt/IMG-20260926-WA0001.jpg", category: "stories", subCat: "portraits", titleKey: "su19Title", descKey: "su19Desc" },
  { image: "su_opt/IMG-20260926-WA0002.jpg", category: "photo", subCat: "humanitarian-events", titleKey: "su20Title", descKey: "su20Desc" },
  { image: "su_opt/IMG-20260926-WA0003.jpg", category: "stories", subCat: "community-resilience", titleKey: "su21Title", descKey: "su21Desc" },
  { image: "su_opt/IMG-20260926-WA0004.jpg", category: "photo", subCat: "field-missions", titleKey: "su22Title", descKey: "su22Desc" },
  { image: "su_opt/IMG-20260926-WA0005.jpg", category: "photo", subCat: "relief-operations", titleKey: "su23Title", descKey: "su23Desc" },
  { image: "su_opt/IMG-20260926-WA0006.jpg", category: "stories", subCat: "human-stories", titleKey: "su24Title", descKey: "su24Desc" },
  { image: "su_opt/IMG-20260926-WA0007.jpg", category: "photo", subCat: "field-missions", titleKey: "su25Title", descKey: "su25Desc" },
  { image: "su_opt/IMG-20260926-WA0008.jpg", category: "stories", subCat: "portraits", titleKey: "su26Title", descKey: "su26Desc" },
  { image: "su_opt/IMG-20260926-WA0009.jpg", category: "photo", subCat: "field-missions", titleKey: "su27Title", descKey: "su27Desc" },
  { image: "su_opt/IMG-20260926-WA0010.jpg", category: "stories", subCat: "community-resilience", titleKey: "su28Title", descKey: "su28Desc" },
  { image: "su_opt/sh (1).jpg", category: "comms", subCat: "campaign-kits", titleKey: "sh1Title", descKey: "sh1Desc", personalProject: true },
  { image: "su_opt/sh (2).jpg", category: "comms", subCat: "infographics", titleKey: "sh2Title", descKey: "sh2Desc", personalProject: true },
  { image: "su_opt/sh (3).jpg", category: "comms", subCat: "visibility-collateral", titleKey: "sh3Title", descKey: "sh3Desc", personalProject: true },

  // --- Folder 1: High Level Forums & Protocol ---
  { image: "1/r1 (1).jpg", category: "photo", subCat: "humanitarian-events", titleKey: "f1_1Title", descKey: "f1_1Desc" },
  { image: "1/r1 (2).jpg", category: "stories", subCat: "human-stories", titleKey: "f1_2Title", descKey: "f1_2Desc" },
  { image: "1/r1 (3).jpg", category: "photo", subCat: "humanitarian-events", titleKey: "f1_3Title", descKey: "f1_3Desc" },
  { image: "1/r1 (4).jpg", category: "stories", subCat: "community-resilience", titleKey: "f1_4Title", descKey: "f1_4Desc" },
  { image: "1/r1 (5).jpg", category: "photo", subCat: "humanitarian-events", titleKey: "f1_5Title", descKey: "f1_5Desc" },
  { image: "1/r1 (6).jpg", category: "stories", subCat: "portraits", titleKey: "f1_6Title", descKey: "f1_6Desc" },
  { image: "1/r1 (7).jpg", category: "photo", subCat: "humanitarian-events", titleKey: "f1_7Title", descKey: "f1_7Desc" },

  // --- Folder 4: Information Design Kits ---
  { image: "4/c (1).jpg", category: "comms", subCat: "campaign-kits", titleKey: "f4_1Title", descKey: "f4_1Desc", personalProject: true },
  { image: "4/c (3).jpg", category: "comms", subCat: "donor-reports", titleKey: "f4_3Title", descKey: "f4_3Desc", personalProject: true },
  { image: "4/c (5).jpg", category: "comms", subCat: "infographics", titleKey: "f4_5Title", descKey: "f4_5Desc", personalProject: true },

  // --- Folder 5: Infrastructure & Site Surveys ---
  { image: "5/d (1).jpg", category: "photo", subCat: "site-survey", titleKey: "f5_1Title", descKey: "f5_1Desc" },
  { image: "5/d (2).jpg", category: "photo", subCat: "humanitarian-events", titleKey: "f5_2Title", descKey: "f5_2Desc" },
  { image: "5/d (3).jpg", category: "stories", subCat: "portraits", titleKey: "f5_3Title", descKey: "f5_3Desc" },
  { image: "5/d (4).jpg", category: "photo", subCat: "site-survey", titleKey: "f5_4Title", descKey: "f5_4Desc" },
  { image: "5/d (5).jpg", category: "photo", subCat: "humanitarian-events", titleKey: "f5_5Title", descKey: "f5_5Desc" },
  { image: "5/d (6).jpg", category: "photo", subCat: "field-missions", titleKey: "f5_6Title", descKey: "f5_6Desc" },

  // --- Folder 6: Editorial Publication Layouts ---
  { image: "6/w (1).jpg", category: "comms", subCat: "editorial-layouts", titleKey: "f6_1Title", descKey: "f6_1Desc", personalProject: true },
  { image: "6/w (3).jpg", category: "comms", subCat: "visibility-collateral", titleKey: "f6_3Title", descKey: "f6_3Desc", personalProject: true },
  { image: "6/w (5).jpg", category: "comms", subCat: "campaign-kits", titleKey: "f6_5Title", descKey: "f6_5Desc", personalProject: true },

  // --- Folder 7: Operations & Logistics ---
  { image: "7/x (1).jpg", category: "photo", subCat: "relief-operations", titleKey: "f7_1Title", descKey: "f7_1Desc" },
  { image: "7/x (2).jpg", category: "photo", subCat: "humanitarian-events", titleKey: "f7_2Title", descKey: "f7_2Desc" },
  { image: "7/x (3).jpg", category: "stories", subCat: "portraits", titleKey: "f7_3Title", descKey: "f7_3Desc" },
  { image: "7/x (4).jpg", category: "photo", subCat: "field-missions", titleKey: "f7_4Title", descKey: "f7_4Desc" },
  { image: "7/x (5).jpg", category: "stories", subCat: "community-resilience", titleKey: "f7_5Title", descKey: "f7_5Desc" },

  // --- Folder des: Info Design & Brand Assets ---
  { image: "des/p (3).jpg", category: "comms", subCat: "editorial-layouts", titleKey: "fdes_3Title", descKey: "fdes_3Desc", personalProject: true },
  { image: "des/p (4).jpg", category: "comms", subCat: "infographics", titleKey: "fdes_4Title", descKey: "fdes_4Desc", personalProject: true },
  { image: "des/p (5).jpg", category: "comms", subCat: "visibility-collateral", titleKey: "fdes_5Title", descKey: "fdes_5Desc", personalProject: true }
];

// ==========================================================================
// 2. BILINGUAL TRANSLATION DICTIONARY (EN / AR)
// ==========================================================================

const i18n = {
  en: {
    // Nav
    navHome: "Home",
    navAbout: "About & Mission",
    navCapabilities: "Core Focus",
    navAerial: "Aerial Survey",
    navPortfolio: "Humanitarian Gallery",
    navEthics: "Field Ethics",
    navSkills: "Skills & IT",
    navExperience: "Field Experience",
    navCV: "UN/NGO CV",
    navContact: "Contact",

    // Hero
    heroBadge: "Humanitarian Photography & Visual Communications Specialist",
    heroTitleLine1: "Documenting Human Dignity.",
    heroTitleLine2: "Strategic Communications for UN & NGOs.",
    heroDesc: "Visual Communications & Photography Specialist dedicated to documenting humanitarian field operations, community resilience, emergency response, and strategic media campaigns for UN agencies, INGOs, and development organizations.",
    btnExploreWork: "Explore Humanitarian Gallery",
    btnDownloadCV: "Download UN/NGO CV (PDF)",
    btnContactHero: "Request Field Mission",
    heroTrustLabel: "Tailored For Standards Of:",
    trustTag1: "UN Agencies (UNICEF, UNHCR, WFP, OCHA, IOM)",
    trustTag2: "International NGOs (INGOs)",
    trustTag3: "Humanitarian & Field Missions",
    trustTag4: "Development & Civil Society Bodies",

    // About
    aboutEyebrow: "Humanitarian Profile",
    aboutTitle: "Visual Storyteller for International Agencies & NGOs",
    aboutLead: "Specialist in Visual Communications and Humanitarian Photography, holding a Bachelor of Science in Information Technology (B.Sc. IT). Combining technical precision with deep empathy to document field missions, emergency response, and community resilience.",
    aboutBody1: "My core expertise centers on Photography and Strategic Communications for non-governmental organizations and international agencies. I capture authentic, dignified human stories without sensationalism, adhering strictly to informed consent, child safeguarding, and cultural sensitivity.",
    aboutBody2: "This reference portfolio is curated specifically for UN officers, INGO communications leads, and mission directors seeking a reliable specialist capable of handling field photography, documentary media, aerial surveys, and structured digital asset management under demanding field conditions.",
    aboutStat1Title: "B.Sc. IT + Media Archiving",
    aboutStat1Desc: "Combining IT systems, metadata tagging & digital asset management",
    aboutStat2Title: "Dignity-First Photography",
    aboutStat2Desc: "Respecting informed consent, privacy & child safeguarding in the field",
    aboutStat3Title: "NGO & UN Field Readiness",
    aboutStat3Desc: "Rapid deployment for emergency response & remote field assignments",
    aboutStat4Title: "Strategic Communications",
    aboutStat4Desc: "Delivering photo essays, donor briefs, press kits & campaign visuals",
    aboutBadgeTitle: "Bakri (Abobker Ali)",
    aboutBadgeText: "B.Sc. in Information Technology • Humanitarian Visual Specialist",

    // Capabilities
    capEyebrow: "Core Specializations",
    capTitle: "Specialized Services for NGOs & UN Agencies",
    capSubtitle: "Focusing heavily on Photography and Strategic Communications to deliver high-impact visual reference assets for missions, donors, and humanitarian advocacy.",

    cap1Title: "Humanitarian & Field Photography",
    cap1Desc: "High-impact visual documentation of relief operations, refugee/IDP communities, emergency aid distributions, health/education interventions, and dignified human-interest portraits.",
    cap1f1: "Field mission & emergency response coverage",
    cap1f2: "Beneficiary portraits with dignity & respect",
    cap1f3: "High-resolution IPTC/EXIF metadata archiving",

    cap2Title: "Strategic Visual Communications",
    cap2Desc: "Transforming field data and project objectives into compelling visual communication packages, donor photo essays, visibility kits, and multi-channel media assets.",
    cap2f1: "Donor reporting photo essays & success stories",
    cap2f2: "UN/INGO visibility guideline compliance",
    cap2f3: "Press releases, infographics & campaign media",

    cap3Title: "Field Videography & Impact Documentaries",
    cap3Desc: "End-to-end video creation—from shot planning and on-location field interviews to color grading, sound design, and short-form documentary films.",
    cap3f1: "Human-interest short documentary stories",
    cap3f2: "Project impact summaries & donor briefings",
    cap3f3: "Fast-track editing & sound synchronization",

    cap4Title: "Drone Aerial Survey & Spatial Mapping",
    cap4Desc: "Cinematic aerial videography and spatial surveys documenting camp layouts, environmental scale, and infrastructure projects with flight safety and precision.",
    cap4f1: "Geographic scale & spatial context mapping",
    cap4f2: "Infrastructure & site progress surveys",
    cap4f3: "High-altitude 4K UHD tracking & footage",

    // Ethics & Standards
    respEyebrow: "Field Ethics & Compliance",
    respTitle: "Responsible & Dignified Visual Documentation",
    respQuote: "\\"Visual excellence in humanitarian and institutional media is meaningless without respect for human dignity, contextual honesty, and strict adherence to informed consent. Every lens assignment is a position of ethical trust.\\"",
    respPillar1Title: "Informed & Voluntary Consent",
    respPillar1Desc: "Ensuring subjects fully understand where and how their image will be shared before pressing the shutter.",
    respPillar2Title: "Contextual Truth & Dignity",
    respPillar2Desc: "Resisting sensationalism or misleading crops; depicting communities with authentic strength and resilience.",
    respPillar3Title: "Child & Vulnerable Safeguarding",
    respPillar3Desc: "Applying strict protection protocols aligned with UNICEF & UNHCR guidelines for minors and displaced persons.",
    respPillar4Title: "Data Security & Embargo Protocol",
    respPillar4Desc: "Complying with non-disclosure mandates, organizational security protocols, and encrypted asset transfers.",

    // Portfolio Gallery
    portEyebrow: "Curated Reference Gallery",
    portTitle: "Humanitarian & Field Documentation Exhibit",
    portSubtitle: "A verified collection of photography, field stories, aerial surveys, documentary media, and visual communication assets.",
    filterAll: "All Works",
    filterPhoto: "Humanitarian Photography",
    filterStories: "Human Stories & Field",
    filterAerial: "Aerial & Field Surveys",
    filterVideo: "Documentaries & Video",
    filterComms: "Visual Comms & Layouts",
    portfolioNote: "Portfolio Reference Note: All featured works demonstrate real-world technical execution, ethical field documentation, and visual communication craft.",

    // Aerial Section
    aerialEyebrow: "Aerial Surveying",
    aerialTitle: "Selected Aerial & Spatial Cinematography",
    aerialSubtitle: "Featured aerial productions demonstrating flight control, spatial context mapping, scale visualization, and cinematic post-production.",
    btnWatchCase: "View Technical Details",
    btnDirectPlay: "Play Aerial Video",

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

    case4Title: "Kinetic Motion Graphics Study",
    case4Desc: "Vector motion design exploring dynamic pacing, kinetic typography, and fluid visual transitions — concept work.",
    case4Role: "Motion Designer • Animator",
    case4Objective: "Explore visual rhythm, timing, and kinetic composition for digital screen communication.",

    case5Title: "Visual Effects & Compositing Study",
    case5Desc: "Layered visual composition integrating motion graphics, depth masking, and stylized visual grading — concept work.",
    case5Role: "VFX Compositor • Visual Editor",
    case5Objective: "Demonstrate digital post-production and layer integration capabilities.",

    case6Title: "Video Editing — Promotional & Institutional",
    case6Desc: "Fast-paced video edit highlighting narrative momentum, sound beat synchronization, and commercial color grading.",
    case6Role: "Video Editor • Sound Editor",
    case6Objective: "Drive immediate viewer attention and convey clear messaging through editing pace and sound sync.",

    case7Title: "Short Video Production Study",
    case7Desc: "Video editing and pacing study exploring cinematic cuts, sound synchronization, and visual storytelling rhythm — concept work.",
    case7Role: "Video Editor • Colorist",
    case7Objective: "Demonstrate editing workflow, color balance, and visual storytelling through personal production.",

    case8Title: "Editorial Video Editing Study",
    case8Desc: "Atmospheric video composition emphasizing mood, pacing, and cinematic transitions — concept work.",
    case8Role: "Video Editor • Post-Production",
    case8Objective: "Explore editorial techniques, atmospheric color grading, and narrative sequencing.",

    // Relif Photos (EN)
    relif1Title: "Relief Aid Distribution & Assessment", relif1Desc: "Documenting relief interventions, beneficiary verification, and logistics coordination.",
    relif2Title: "Community Health & Relief Program", relif2Desc: "Field photo coverage of community health outreach and medical supply logistics.",
    relif3Title: "Emergency Response Field Mission", relif3Desc: "On-location documentation of rapid response team operations in rural communities.",
    relif4Title: "Relief Intervention & Verification", relif4Desc: "Capturing beneficiary verification processes for humanitarian aid distribution.",
    relif5Title: "Food Basket & Essential Supply Distribution", relif5Desc: "Documenting orderly distribution of essential relief items and food packages.",
    relif6Title: "Field Team Coordination & Partner Briefing", relif6Desc: "Field photo coverage of inter-agency operational alignment and field logistics.",
    relif7Title: "Support & Advocacy for Affected Communities", relif7Desc: "Capturing local community resilience and field team interaction with elders.",
    relif8Title: "NGO Relief Program Visual Coverage", relif8Desc: "Visual documentation of non-governmental organization relief field programs.",
    relif9Title: "Assistance for Vulnerable Beneficiaries", relif9Desc: "Dignified documentation of direct assistance delivered to vulnerable families.",
    relif10Title: "Humanitarian Mission Logistics & Storage", relif10Desc: "On-site photography of supply storage, inventory management, and transport.",
    relif11Title: "Field Activity & Stakeholder Mission", relif11Desc: "Documenting field visits by institutional stakeholders and project managers.",
    relif12Title: "Humanitarian Worker & Community Dialogue", relif12Desc: "Capturing authentic conversations between field staff and community members.",
    relif13Title: "Relief Project Milestone Coverage", relif13Desc: "Key operational milestone photo coverage for donor reporting and monitoring.",
    relif14Title: "Field Operations & Distribution Site", relif14Desc: "Broad operational perspective documenting relief distribution center activities.",
    relif15Title: "Visual Documentation of Field Response", relif15Desc: "Contextual photography capturing emergency response deployment under field conditions.",
    relif16Title: "Dignified Beneficiary Field Portrait", relif16Desc: "Human-centered field portrait respecting individual dignity and consent.",
    relif17Title: "Project Impact Monitoring & Evaluation", relif17Desc: "Photo records substantiating field progress and project implementation standards.",
    relif18Title: "Comprehensive Relief Program Overview", relif18Desc: "Full-scale visual coverage of humanitarian relief program execution.",

    // su Photos (EN)
    su1Title: "Human Dignity Portrait Study", su1Desc: "Dignified portrait capturing individual character under natural daylight.",
    su2Title: "Field Narrative & Beneficiary Story", su2Desc: "Contextual photo documentation of community life and beneficiary resilience.",
    su3Title: "Community Engagement & Workshop", su3Desc: "Capturing participatory group workshops and community dialogue sessions.",
    su4Title: "NGO Personnel Field Documentation", su4Desc: "Field photo coverage documenting humanitarian workers during on-location missions.",
    su5Title: "Field Teamwork & Operational Dynamics", su5Desc: "Documenting teamwork, field logistics, and shared mission objectives.",
    su6Title: "Community Resilience Portrait", su6Desc: "Subject-centered portrait emphasizing strength, agency, and hope.",
    su7Title: "Development & Empowerment Program", su7Desc: "Photo coverage of community empowerment initiatives and vocational training.",
    su8Title: "NGO Program Field Coverage", su8Desc: "On-location documentation of non-governmental organization field initiatives.",
    su9Title: "Visual Narrative of Humanitarian Activities", su9Desc: "Coherent photo narrative illustrating field program implementation.",
    su10Title: "Community Forum & Gathering", su10Desc: "Documenting local stakeholder assemblies and participatory community meetings.",
    su11Title: "Field Operations & Distribution", su11Desc: "Operational coverage of field teams delivering community support programs.",
    su12Title: "Family Resilience in Local Context", su12Desc: "Contextual photography showcasing daily family life and community environments.",
    su13Title: "Emergency NGO Interventions", su13Desc: "Capturing rapid field interventions and emergency response activities.",
    su14Title: "Expressive Program Participant Portrait", su14Desc: "Human interest portrait of program participant captured with natural lighting.",
    su15Title: "Field Documentation of Humanitarian Services", su15Desc: "Photo records substantiating service delivery and community outreach.",
    su16Title: "Assistance Delivery & Field Recording", su16Desc: "On-location photo documentation of direct assistance and field distribution.",
    su17Title: "Social Impact Stories of the Project", su17Desc: "Visual story package illustrating positive social impact and community growth.",
    su18Title: "Humanitarian Response Field Operations", su18Desc: "Operational field photo documenting team deployment in local communities.",
    su19Title: "Authentic Character & Human Portrait", su19Desc: "Natural human portrait honoring individual dignity and personal narrative.",
    su20Title: "Community Education & Dialogue Session", su20Desc: "Documenting awareness sessions, health education, and group dialogues.",
    su21Title: "Local Solidarity & Resilience Manifestations", su21Desc: "Capturing community mutual aid, local solidarity, and collective strength.",
    su22Title: "Operational Site Field Coverage", su22Desc: "Field photo coverage showcasing project site activities and operational setup.",
    su23Title: "Field Humanitarian Assistance", su23Desc: "Documenting assistance delivery and community support activities.",
    su24Title: "Visual Storytelling of Success Stories", su24Desc: "Photo narrative highlighting individual success stories and project outcomes.",
    su25Title: "Field Coordination & Monitoring Activities", su25Desc: "Documenting monitoring visits, field data collection, and team review.",
    su26Title: "Program Participant Portrait Collection", su26Desc: "Human interest portrait series honoring program participants with dignity.",
    su27Title: "Comprehensive On-Location Field Coverage", su27Desc: "Full-spectrum photo documentation of field mission activities.",
    su28Title: "Empowerment & Community Resilience Record", su28Desc: "Photo record documenting long-term community resilience and development.",
    sh1Title: "Advocacy Campaign Media Asset", sh1Desc: "High-impact visual layout tailored for digital advocacy and campaign reach.",
    sh2Title: "Data Visualization Infographic", sh2Desc: "Structured graphic design converting field data into clear visual insights.",
    sh3Title: "Institutional Visibility Graphic Asset", sh3Desc: "Branded graphic asset aligned with international agency visibility guidelines.",

    // Folder 1, 4, 5, 6, 7, des (EN)
    f1_1Title: "High-Level Forum & UN Protocol", f1_1Desc: "Keynote coverage, speaker engagement, and official protocol.",
    f1_2Title: "Delegate & Stakeholder Assembly", f1_2Desc: "Session dynamics and panel dialogue during international summit.",
    f1_3Title: "Summit Dialogue & Media Coverage", f1_3Desc: "Interactive session documentation for institutional press kits.",
    f1_4Title: "Summit Dialogue & Community Focus", f1_4Desc: "Capturing delegate interactions and partner exchanges.",
    f1_5Title: "Formal Gathering & Protocol Coverage", f1_5Desc: "Documenting protocol, audience focus, and delegate assembly.",
    f1_6Title: "Human-Centered Portrait Study", f1_6Desc: "Dignified portrait featuring natural lighting and quiet focus.",
    f1_7Title: "Conference Stage & Keynote Presentations", f1_7Desc: "Stage photography capturing keynote presentation and visual aids.",

    f4_1Title: "Humanitarian Campaign Visual Kit", f4_1Desc: "Visual campaign collateral designed for multi-channel publishing.",
    f4_3Title: "Visual Publication & Donor Report Concept", f4_3Desc: "Structured typography and publication cover design.",
    f4_5Title: "Infographic & Data Visualization Strategy", f4_5Desc: "Harmonized visual elements transforming project data into graphics.",

    f5_1Title: "Operational Facility & Infrastructure Survey", f5_1Desc: "High-resolution architectural survey documenting facility status.",
    f5_2Title: "Interactive Workshop & Dialogue", f5_2Desc: "Documenting participatory learning and stakeholder dialogue.",
    f5_3Title: "Environmental Portrait Study", f5_3Desc: "Subject-centered portrait photography in local environment.",
    f5_4Title: "Infrastructure & Site Survey Photography", f5_4Desc: "Site survey documenting perimeter and operational facilities.",
    f5_5Title: "Conference Dialogue & Media Coverage", f5_5Desc: "Interactive session coverage for institutional briefing.",
    f5_6Title: "Field Team Deployment & Context", f5_6Desc: "Broad operational scene documenting field deployment context.",

    f6_1Title: "Editorial Report & Layout Design", f6_1Desc: "Publication-style layout with clear visual hierarchy.",
    f6_3Title: "Institutional Visibility Collateral", f6_3Desc: "Branded collateral complying with UN/INGO visibility rules.",
    f6_5Title: "Digital Platform Communication Asset", f6_5Desc: "Platform-ready visual media crafted for digital distribution.",

    f7_1Title: "Relief Operations & Logistics", f7_1Desc: "Documenting supply logistics, storage, and distribution.",
    f7_2Title: "Institutional Event Coverage", f7_2Desc: "Formal gathering photography documenting protocol.",
    f7_3Title: "Beneficiary Portrait & Story", f7_3Desc: "Authentic character portrait for humanitarian reporting.",
    f7_4Title: "Field Mission Teamwork", f7_4Desc: "Documenting team execution and operational logistics.",
    f7_5Title: "Community Resilience & Field Moments", f7_5Desc: "Authentic field coverage depicting local community resilience.",

    fdes_3Title: "Editorial Publication & Brand Identity", fdes_3Desc: "Publication layout with structured typography and brand harmony.",
    fdes_4Title: "Digital Visual Communication Strategy", fdes_4Desc: "Harmonized color palette and balanced elements for web.",
    fdes_5Title: "Institutional Brand & Visibility Graphic", fdes_5Desc: "Branded asset designed for organizational visibility.",

    // Institutional Readiness
    instEyebrow: "Operational Readiness",
    instTitle: "Working with UN Agencies & International NGOs",
    instCard1Title: "UN/INGO Visibility Standards",
    instCard1Desc: "Thorough understanding of brand books, co-branding protocols, terminology rules, and publication standards.",
    instCard2Title: "Field Deployability",
    instCard2Desc: "Equipped and prepared for rapid field travel, harsh environmental conditions, and remote emergency zones.",
    instCard3Title: "Fast Turnaround Stills & Cuts",
    instCard3Desc: "Streamlined workflow delivering same-day event photo selections and fast-track video cuts for immediate press dispatch.",
    instCard4Title: "Digital Asset Management (DAM)",
    instCard4Desc: "Comprehensive IPTC/EXIF tagging, bilingual captions, secure cloud repositories, and structured folder hierarchies.",

    // Skills & IT
    skillsEyebrow: "Technical Expertise",
    skillsTitle: "Skills, Tools & IT Foundation",
    skillsSubtitle: "Uniting formal Information Technology education with professional field photography and visual media craft.",
    skCat1Title: "Humanitarian Photography & Media",
    skCat2Title: "Strategic Comms & Media Kits",
    skCat3Title: "Creative Software Suite",
    skCat4Title: "IT & Asset Archiving Systems",

    synergyTitle: "The Interdisciplinary Advantage: B.Sc. IT + Visual Comms",
    synergyDesc: "Holding a Bachelor of Science in Information Technology provides a unique technical edge. I manage digital asset workflows, metadata standards, secure cloud backups, and data visualization—ensuring seamless coordination with UN/NGO IT, communications, and field program teams.",

    // Timeline
    expEyebrow: "Field Progression",
    expTitle: "Professional Experience",
    expSubtitle: "Proven track record in humanitarian documentation, visual communications, and media production.",
    exp1Period: "2023 — Present",
    exp1Role: "Humanitarian Photography & Visual Communications Specialist",
    exp1Org: "Independent Consultant / NGO Contractor",
    exp1Body: "Providing photography packages, field documentaries, aerial surveys, and strategic media kits for international NGOs and development initiatives. Managing end-to-end production, ethical clearance, and digital asset archiving.",
    exp1Tag1: "Humanitarian Photography",
    exp1Tag2: "Field Missions",
    exp1Tag3: "Donor Comms",

    exp2Period: "2021 — 2023",
    exp2Role: "Multimedia & Digital Content Producer",
    exp2Org: "Media Production Studio",
    exp2Body: "Directed video editing, post-production workflows, photo retouching, motion graphics, and visual layouts. Supervised audio-visual quality control and multi-format distribution.",
    exp2Tag1: "Video Production",
    exp2Tag2: "Photo Editing",
    exp2Tag3: "Visual Layouts",

    exp3Period: "2018 — 2021",
    exp3Role: "IT & Digital Asset Assistant",
    exp3Org: "Technical & Media Services",
    exp3Body: "Supported digital asset management databases, IPTC metadata tagging, and media publishing. Leveraged IT background to streamline file archiving and secure storage workflows.",
    exp3Tag1: "B.Sc. IT",
    exp3Tag2: "Asset Archiving",
    exp3Tag3: "Metadata Standards",

    // CV
    cvEyebrow: "Credentials & References",
    cvTitle: "Curriculum Vitae (UN & NGO Tailored)",
    cvDesc: "Download the complete professional CV prepared for international agencies, UN officers, and NGO recruitment leads—containing full work history, technical skills, and references.",
    cvBtnDownload: "Download Complete CV (PDF)",
    cvBtnPrint: "Print Summary",
    cvLabelName: "Full Name",
    cvValName: "Abobker Ali (BAKRI)",
    cvLabelDegree: "Degree",
    cvValDegree: "B.Sc. in Information Technology",
    cvLabelSpecialty: "Core Specialty",
    cvValSpecialty: "Humanitarian Photography & Visual Comms",
    cvLabelLangs: "Languages",
    cvValLangs: "Arabic (Native) • English (Professional)",
    cvLabelLocation: "Base & Readiness",
    cvValLocation: "Sudan • Available for International & Field Missions",

    // Contact
    contactEyebrow: "Field Mission Inquiry",
    contactTitle: "Get in Touch / Request Mission",
    contactSubtitle: "Available for consultancy contracts, field photo/video missions, emergency documentation assignments, and institutional communications roles.",
    contactEmailLabel: "Direct Email",
    contactPhoneLabel: "Phone / WhatsApp",
    contactLocLabel: "Location & Deployment",
    contactLocVal: "Khartoum, Sudan • Open to Travel & Field Missions",
    contactAvailabilityLabel: "Current Status",
    contactAvailabilityVal: "Available for UN & INGO Contracts",

    formName: "Full Name",
    formNamePlh: "e.g. Sarah Jenkins",
    formEmail: "Work Email",
    formEmailPlh: "name@organization.org",
    formOrg: "Organization / Agency",
    formOrgPlh: "e.g. UN Agency / INGO / Relief Body",
    formSubject: "Assignment Type",
    formSubjectPlh: "e.g. Field Photo Mission / Donor Comms Kit",
    formMsg: "Mission Brief / Terms of Reference",
    formMsgPlh: "Please provide brief details on the assignment location, scope, timeline, and deliverables...",
    btnSendMsg: "Send Mission Brief",
    msgSuccess: "Thank you! Your mission inquiry has been received. You can also connect directly via Email or WhatsApp.",

    // Footer
    footerDesc: "Official Portfolio & Reference Exhibit of BAKRI — Humanitarian Photography & Visual Communications Specialist. Dedicated to documenting missions, capturing human dignity, and communicating institutional impact.",
    footerCopy: "© 2026 BAKRI (Abobker Ali). All rights reserved.",
    footerDisclaimer: "Portfolio Reference: Content curated specifically to showcase visual storytelling, photography, and strategic media capabilities for UN agencies and INGOs.",
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
    // Nav
    navHome: "الرئيسية",
    navAbout: "عن الموثق",
    navCapabilities: "مجالات التركيز",
    navAerial: "المسح الجوي",
    navPortfolio: "المعرض الإنساني",
    navEthics: "أخلاقيات الميدان",
    navSkills: "المهارات والتقنية",
    navExperience: "الخبرة الميدانية",
    navCV: "السيرة الذاتية (UN/NGO)",
    navContact: "تواصل للمهمات",

    // Hero
    heroBadge: "أخصائي التصوير الإنساني والاتصالات البصرية للمنظمات والوكالات الأممية",
    heroTitleLine1: "توثيق الكرامة الإنسانية.",
    heroTitleLine2: "اتصالات بصرية استراتيجية للمنظمات.",
    heroDesc: "أخصائي اتصالات بصرية وتصوير فوتوغرافي وميداني مكرس لتوثيق عمليات الاستجابة الإنسانية، صمود المجتمعات، برامج الإغاثة، والحملات الإعلامية الاستراتيجية لصالح المنظمات غير الحكومية (INGOs) والوكالات الأممية (UN).",
    btnExploreWork: "استكشف المعرض الإنساني",
    btnDownloadCV: "تحميل السيرة الذاتية (UN/NGO)",
    btnContactHero: "طلب مهمة ميدانية",
    heroTrustLabel: "مصمم ومصاغ وفق معايير:",
    trustTag1: "وكالات الأمم المتحدة (UNICEF, UNHCR, WFP, OCHA, IOM)",
    trustTag2: "المنظمات الدولية غير الحكومية (INGOs)",
    trustTag3: "المهمات الميدانية والإغاثية",
    trustTag4: "مؤسسات التنمية والمجتمع المدني",

    // About
    aboutEyebrow: "الملف التعريفي والجانب الإنساني",
    aboutTitle: "سرد بصري مسؤول للمنظمات الدولية والوكالات الأممية",
    aboutLead: "أخصائي اتصالات بصرية وتصوير إنساني وميداني، حاصل على بكالوريوس في تقنية المعلومات (B.Sc. IT). أجمع بين الدقة التقنية والتعاطف الإنساني لتوثيق المهمات الميدانية، الاستجابة للطوارئ، ومشاريع التنمية.",
    aboutBody1: "يركز نطاق عملي الرئيسي على التصوير الفوتوغرافي وصياغة استراتيجيات الاتصال البصري للمنظمات غير الحكومية والوكالات الدولية. أحرص على التقاط القصص الإنسانية بأصالة ووقار بعيداً عن التهويل، مع الالتزام الصارم بالموافقة المستنيرة، حماية الأطفال، والحساسية الثقافية.",
    aboutBody2: "تم إعداد هذا المعرض المرجعي خصيصاً لمسؤولي الإعلام والاتصال بالوكالات الأممية ومدراء منظمات الإغاثة، ليبرز التغطيات الفوتوغرافية، الأفلام الوثائقية، المسح الجوي، وإدارة الأصول الرقمية المنظمة في أكثر الظروف الميدانية تحدياً.",
    aboutStat1Title: "تقنية المعلومات وأرشفة الميديا",
    aboutStat1Desc: "إدارة منظمة للأصول الرقمية، بيانات IPTC، وبنية رقمية آمنة",
    aboutStat2Title: "تصوير إنساني يحترم الكرامة",
    aboutStat2Desc: "التزام كامل بالموافقة المستنيرة وحماية الأطفال والخصوصية",
    aboutStat3Title: "جاهزية ميدانية للمنظمات والوكالات",
    aboutStat3Desc: "استجابة سريعة للتكليفات الميدانية ومناطق الاستجابة الإنسانية",
    aboutStat4Title: "اتصالات بصرية استراتيجية",
    aboutStat4Desc: "إنتاج القصص المصورة للمانحين، التقارير، وحزم الإعلام",
    aboutBadgeTitle: "بكري (ابوبكر علي)",
    aboutBadgeText: "بكالوريوس تقنية معلومات • أخصائي التوثيق البصري الإنساني",

    // Capabilities
    capEyebrow: "مجالات التركيز الرئيسية",
    capTitle: "خدمات اتصالات وتصوير متخصصة للمنظمات والوكالات",
    capSubtitle: "تركيز أساسي على التصوير الفوتوغرافي والاتصالات البصرية تقديم مرجع بصري عالي التأثير للمشاريع والمانحين والحملات الإنسانية.",

    cap1Title: "التصوير الفوتوغرافي الإنساني والميداني",
    cap1Desc: "توثيق بصري مؤثر لمشاريع الإغاثة، المجتمعات والنازحين، عمليات توزيع المساعدات الطارئة، التدخلات الصحية والتعليمية، وبورتريهات تعبيرية تعكس كرامة الإنسان.",
    cap1f1: "تغطية المهمات الميدانية والاستجابة للطوارئ",
    cap1f2: "بورتريهات إنسانية تحفظ الوقار والاحترام",
    cap1f3: "أرشفة عالية الدقة مع بيانات IPTC/EXIF الوصفية",

    cap2Title: "الاتصالات البصرية والاستراتيجية للمنظمات",
    cap2Desc: "تحويل البيانات الميدانية وأهداف المشاريع إلى حزم اتصالات بصرية جاذبة، قصص مصورة للمانحين، وحملات توعية متوافقة مع أدلة الهوية البصرية للوكالات الأممية.",
    cap2f1: "قصص مصورة لتقارير المانحين والأثر الميداني",
    cap2f2: "الالتزام بأدلة الهوية (Visibility Guidelines)",
    cap2f3: "إنتاج البيانات الصحفية والإنفوجرافيك للمنصات",

    cap3Title: "تصوير الفيديو والوثائقيات الميدانية",
    cap3Desc: "إنتاج فيديو متكامل من التخطيط والمقابلات الميدانية وحتى تصحيح الألوان وهندسة الصوت وإنتاج أفلام قصيرة تعكس أثر المشاريع.",
    cap3f1: "أفلام وثائقية قصيرة تسلط الضوء على القصص الإنسانية",
    cap3f2: "ملخصات المشاريع وعروض إحاطة المانحين",
    cap3f3: "مونتاج سريع وتزامن صوتي عالي الجودة",

    cap4Title: "التصوير الجوي والمسح المكاني (الدرون)",
    cap4Desc: "تصوير جوي سينمائي ومسح جوي يبرز مخططات المخيمات، الامتداد الجغرافي، وحجم المنشآت التنموية بحركات كاميرا آمنة ودقيقة.",
    cap4f1: "رسم النطاق الجغرافي والسياق المكاني للمشاريع",
    cap4f2: "مسح وتقييم الموقع والبنية التحتية",
    cap4f3: "لقطات جوية بدقة 4K UHD وتتبع انسيابي",

    // Ethics
    respEyebrow: "أخلاقيات الميدان والمعايير",
    respTitle: "توثيق بصري مسؤول يحفظ الكرامة الإنسانية",
    respQuote: "\\"جودة التوثيق البصري في الإعلام الإنساني والمؤسسي لا تكتمل إلا باحترام كرامة الإنسان، والأمانة السياقية، والالتزام الصارم بالموافقة المستنيرة. كل تكليف تصوير هو مسؤولية أخلاقية قبل أن يكون مهمة فنية.\\"",
    respPillar1Title: "الموافقة الطوعية والمستنيرة",
    respPillar1Desc: "التأكد التام من فهم المشاركين لكيفية وأماكن نشر صورهم قبل التقاطها.",
    respPillar2Title: "الصدق السياقي والكرامة",
    respPillar2Desc: "تجنب التهويل أو الاقتصاص المضلل؛ وإبراز المجتمعات بقوتها وصمودها أصالة.",
    respPillar3Title: "حماية الأطفال والفئات الهشة",
    respPillar3Desc: "تطبيق قواعد الحماية الصارمة المتوافقة مع معايير UNICEF و UNHCR.",
    respPillar4Title: "أمن البيانات وحظر النشر",
    respPillar4Desc: "الالتزام بسرية البيانات والاتفاقيات الأمنية ونقل الأصول المشفر.",

    // Portfolio
    portEyebrow: "المعرض المرجعي المُنتقى",
    portTitle: "معرض التوثيق الإنساني والعمل الميداني",
    portSubtitle: "مجموعة موثقة من التصوير الفوتوغرافي، القصص الميدانية، المسح الجوي، الوثائقيات، وحزم الاتصالات البصرية.",
    filterAll: "جميع الأعمال",
    filterPhoto: "التصوير الإنساني والميداني",
    filterStories: "القصص والبورتريه الإنساني",
    filterAerial: "التصوير الجوي والمسح",
    filterVideo: "الفيديو والوثائقيات",
    filterComms: "الاتصالات البصرية والتصميم",
    portfolioNote: "ملاحظة مرجعية: جميع الأعمال المعروضة مصنفة بوضوح لتعكس الأداء التقني، التوثيق الأخلاقي، والمهارة البصرية الميدانية.",

    // Aerial
    aerialEyebrow: "المسح الجوي",
    aerialTitle: "أعمال مختارة — التصوير الجوي والمسح المكاني",
    aerialSubtitle: "عروض تصوير جوي تبرز التحكم بالطيران، رسم السياق الجغرافي، وإبراز المساحات والمعالجة السينمائية.",
    btnWatchCase: "عرض التفاصيل التقنية",
    btnDirectPlay: "تشغيل فيديو المسح الجوي",

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

    case4Title: "دراسة موشن جرافيك وحركة بصرية",
    case4Desc: "تصميم حركة يدمج التيبوغرافي الحركي والانتقالات المتناسقة — عمل مفاهيمي.",
    case4Role: "مصمم حركة • محرك ومونتير",
    case4Objective: "استكشاف الإيقاع البصري والتوقيت والتكوين الحركي للتواصل الرقمي.",

    case5Title: "دراسة مؤثرات بصرية وتركيب",
    case5Desc: "تركيب طبقات بصرية ودمج مؤثرات سينمائية مع تدرج لوني عميق — عمل مفاهيمي.",
    case5Role: "مركب مؤثرات • محرر فيديو",
    case5Objective: "إظهار قدرات المعالجة الرقمية المتقدمة وتركيب الطبقات البصرية.",

    case6Title: "مونتاج ترويجي ومؤسسي",
    case6Desc: "مونتاج فيديو بإيقاع سريع وتزامن دقيق بين الإيقاع الصوتي وحركة اللقطات.",
    case6Role: "مونتير • هندسة وتزامن صوتي",
    case6Objective: "جذب انتباه المشاهد الفوري ونقل رسائل واضحة عبر إيقاع المونتاج.",

    case7Title: "دراسة إنتاج فيديو قصير",
    case7Desc: "مونتاج فيديو وتوازن حركي يستكشف القطعات السينمائية والتزامن الصوتي — عمل مفاهيمي.",
    case7Role: "مونتير • مصحح ألوان",
    case7Objective: "إظهار سير عمل المونتاج وتوازن الألوان والسرد البصري من خلال الإنتاج الشخصي.",

    case8Title: "دراسة مونتاج تحريري",
    case8Desc: "تكوين فيديو جوي يركز على الحالة المزاجية والإيقاع والانتقالات السينمائية — عمل مفاهيمي.",
    case8Role: "مونتير • ما بعد الإنتاج",
    case8Objective: "استكشاف تقنيات التحرير وتدرج الألوان الجوي وتسلسل السرد.",

    // Relif Photos (AR)
    relif1Title: "توثيق توزيع المساعدات الإغاثية والتقييم الميداني", relif1Desc: "تغطية عمليات توزيع الإغاثة، التحقق من المستفيدين، وتنسيق اللوجستيات الميدانية.",
    relif2Title: "برنامج الصحة المجتمعية والإغاثة الطارئة", relif2Desc: "تغطية فوتوغرافية ميدانية لنشاط التوعية الصحية وإمدادات الإغاثة.",
    relif3Title: "مهمة الاستجابة الميدانية السريعة للطوارئ", relif3Desc: "توثيق عمليات فريق الاستجابة السريعة في المجتمعات المحلية والريفية.",
    relif4Title: "التدخل الإغاثي والتحقق الميداني", relif4Desc: "التقاط عمليات التحقق والتسجيل لتوزيع المساعدات الإنسانية.",
    relif5Title: "توزيع السلال الغذائية والمستلزمات الأساسية", relif5Desc: "توثيق توزيع المساعدات الغذائية والمستلزمات الطارئة المنظمة للمستفيدين.",
    relif6Title: "تنسيق الفريق الميداني وإحاطة الشركاء", relif6Desc: "تغطية ميدانية للتوافق التشغيلي بين الوكالات واللوجستيات الميدانية.",
    relif7Title: "دعم ومناصرة المجتمعات المحلية المتأثرة", relif7Desc: "إبراز صمود المجتمعات المحلية وتفاعل الفريق الميداني مع الأهالي.",
    relif8Title: "التوثيق البصري لبرامج المنظمات الإغاثية", relif8Desc: "توثيق بصري شامل لمشاريع وبرامج المنظمات غير الحكومية في الميدان.",
    relif9Title: "تقديم المساعدات للفئات الهشة والمستفيدين", relif9Desc: "توثيق محترم ومسؤول للمساعدات المباشرة للمستفيدين والفئات الأكثر احتياجاً.",
    relif10Title: "لوجستيات المهمة الإنسانية وإدارة المخازن", relif10Desc: "تصوير ميداني لمخازن الإمداد وإدارة المخزون ونقل المساعدات.",
    relif11Title: "تغطية الزيارات والأنشطة الميدانية", relif11Desc: "توثيق الزيارات الميدانية لأصحاب المصلحة وإدارات المشاريع الإنسانية.",
    relif12Title: "حوار الكوادر الإنسانية مع أفراد المجتمع", relif12Desc: "التقاط لحظات الحوار والتواصل المباشر بين كوادر الإغاثة والأهالي.",
    relif13Title: "محطة إنجاز في مشروع الاستجابة الإغاثية", relif13Desc: "تغطية المحطات الميدانية الرئيسية لتقارير المانحين والمتابعة والتقييم.",
    relif14Title: "الوجود الميداني ومركز توزيع الإعانة", relif14Desc: "منظور تشغيلي واسع النطاق يوثق أنشطة مراكز التوزيع الميداني.",
    relif15Title: "التوثيق البصري للاستجابة الطارئة", relif15Desc: "تصوير سياقي يوضح انتشار الفرق الميدانية في ظروف العمل الفعلي.",
    relif16Title: "بورتريه إنساني لمستفيد في الميدان", relif16Desc: "بورتريه تعبيري يركز على كرامة الإنسان واحترام الموافقة المستنيرة.",
    relif17Title: "متابعة وتقييم أثر المشروع الإنساني", relif17Desc: "سجلات فوتوغرافية تؤكد تقدم العمل الميداني ومعايير التنفيذ.",
    relif18Title: "التغطية الشاملة لبرامج الاستجابة الإغاثية", relif18Desc: "تغطية فوتوغرافية متكاملة لعمليات تنفيذ برامج الإغاثة الإنسانية.",

    // su Photos (AR)
    su1Title: "دراسة البورتريه الإنساني (الكرامة والوقار)", su1Desc: "بورتريه إنساني تعبيري بالضوء الطبيعي يحفظ وقار الأشخاص وأصالتهم.",
    su2Title: "السرد الميداني وقصص المستفيدين", su2Desc: "توثيق فوتوغرافي سياقي يعكس الحياة المجتمعية وصمود الأهالي.",
    su3Title: "التفاعل المجتمعي وورش العمل التشاركية", su3Desc: "التقاط ورش العمل التفاعلية وجلسات الحوار المجتمعي البناء.",
    su4Title: "كوادر المنظمات أثناء التغطية الميدانية", su4Desc: "تغطية ميدانية توثق عمل كوادر الإغاثة والمنظمات أثناء التكليفات.",
    su5Title: "روح العمل الجماعي واللوجستيات الميدانية", su5Desc: "توثيق التعاون والعمل الجماعي والأنشطة الميدانية المشتركة.",
    su6Title: "بورتريه صمود الأسر والمجتمعات", su6Desc: "بورتريه يركز على القوة الإنسانية والأمل واستقلالية الأفراد.",
    su7Title: "برامج التمكين والتنمية المجتمعية", su7Desc: "تغطية فوتوغرافية لمبادرات التمكين والتدريب المهني في الميدان.",
    su8Title: "التغطية الميدانية لمبادرات المنظمات", su8Desc: "توثيق ميداني لمشاريع وبرامج المنظمات غير الحكومية في المواقع.",
    su9Title: "السرد البصري للأنشطة الإنسانية", su9Desc: "قصة مصورة متماسكة تعكس تنفيذ البرامج والمبادرات الميدانية.",
    su10Title: "المنتدى المجتمعي واللقاءات التشاركية", su10Desc: "توثيق اجتماعات أصحاب المصلحة المحليين واللقاءات التشاركية.",
    su11Title: "العمليات الميدانية وتوزيع الخدمات", su11Desc: "تغطية تشغيلية لفرق الميدان أثناء تقديم البرامج المجتمعية.",
    su12Title: "صمود الأسر في البيئة المحلية", su12Desc: "تصوير سياقي يعكس جانب الحياة اليومية والبيئة المجتمعية.",
    su13Title: "التدخلات الطارئة للمنظمات الإنسانية", su13Desc: "التقاط أنشطة الاستجابة السريعة والتدخلات الميدانية الطارئة.",
    su14Title: "بورتريه تعبيري لمشارك في البرنامج", su14Desc: "بورتريه إنساني بالضوء الطبيعي لمشارك في أنشطة المشروع.",
    su15Title: "التوثيق الميداني للخدمات الإنسانية", su15Desc: "سجلات فوتوغرافية توثق تقديم الخدمات والتواصل المجتمعي.",
    su16Title: "تسليم المساعدات والتوثيق الميداني", su16Desc: "توثيق فوتوغرافي ميداني لتسليم المساعدات والتوزيع المباشر.",
    su17Title: "قصص الأثر الاجتماعي للمشروع", su17Desc: "حزمة قصص مصورة تعكس الأثر الاجتماعي الإيجابي وتنمية المجتمع.",
    su18Title: "العمليات الميدانية للاستجابة الإنسانية", su18Desc: "تصوير فوتوغرافي ميداني يوثق انتشار الفرق في المجتمعات المحلية.",
    su19Title: "ملامح أصيلة وبورتريه إنساني", su19Desc: "بورتريه إنساني أصيل يحترم القصة الشخصية ووقار الإنسان.",
    su20Title: "جلسات التوعية والحوار المجتمعي", su20Desc: "توثيق جلسات التوعية الصحية والتثقيف والنقاشات الجماعية.",
    su21Title: "مظاهر التكافل والصمود المحلي", su21Desc: "التقاط التكافل المجتمعي والتعاون المحلي والقوة الجماعية.",
    su22Title: "التغطية الفوتوغرافية لموقع العمليات", su22Desc: "تغطية ميدانية تبرز أنشطة موقع المشروع والتجهيزات التشغيلية.",
    su23Title: "المساعدات الإنسانية الميدانية", su23Desc: "توثيق تسليم المساعدات وأنشطة الدعم المجتمعي المباشر.",
    su24Title: "السرد البصري لقصص النجاح", su24Desc: "قصة مصورة تسلط الضوء على قصص النجاح الفردية ومخرجات المشروع.",
    su25Title: "أنشطة التنسيق والمتابعة الميدانية", su25Desc: "توثيق زيارات المتابعة وجمع البيانات الميدانية وتقييم الفريق.",
    su26Title: "سلسلة بورتريهات المشاركين في البرامج", su26Desc: "مجموعة بورتريهات إنسانية تكرم المشاركين بالاحترام والوقار.",
    su27Title: "التغطية الميدانية الشاملة للمهمة", su27Desc: "توثيق بصري شامل لكافة أنشطة ومراحل المهمة الميدانية.",
    su28Title: "توثيق التمكين والصمود المجتمعي", su28Desc: "سجل فوتوغرافي يوثق الصمود المجتمعي والتنمية طويلة الأمد.",
    sh1Title: "حزمة ميديا للمناصرة والتوعية", sh1Desc: "تصميم بصري عالي التأثير مخصص للمناصرة الرقمية والتوعية.",
    sh2Title: "إنفوجرافيك وتجسيد البيانات", sh2Desc: "تصميم جرافيكي منظم يحول البيانات الميدانية إلى معلومات مرئية.",
    sh3Title: "مواد الإبراز المؤسسي (Visibility)", sh3Desc: "أصل بصري ملتزم تماماً بأدلة الهوية للوكالات الدولية.",

    // Folder 1, 4, 5, 6, 7, des (AR)
    f1_1Title: "المنتدى رفيع المستوى والبروتوكول الدولي", f1_1Desc: "تغطية الجلسات الرئيسية وتفاعل المتحدثين والبروتوكول الرسمي.",
    f1_2Title: "ملتقى الوفود الرسمية والمشاركين", f1_2Desc: "جلسات الحوار والنقاشات بين الوفود والمشاركين في القمة.",
    f1_3Title: "حوار المؤتمرات والتغطية الإعلامية", f1_3Desc: "توثيق الجلسات التفاعلية للحزم الإعلامية المؤسسية.",
    f1_4Title: "حوار المؤتمرات والتركيز المجتمعي", f1_4Desc: "التقاط تفاعل الوفود وتبادل الخبرات بين الشركاء.",
    f1_5Title: "تغطية التجمعات الرسمية والبروتوكول", f1_5Desc: "توثيق الحضور والبروتوكول والاهتمام الجماهيري.",
    f1_6Title: "دراسة البورتريه الإنساني", f1_6Desc: "بورتريه يحترم الخصوصية والكرامة بإضاءة طبيعية.",
    f1_7Title: "منصة المؤتمرات والعروض التقديمية", f1_7Desc: "تصوير المنصة والعروض البصرية وتفاعل الحضور.",

    f4_1Title: "حزمة المواد البصرية للحملات الإنسانية", f4_1Desc: "تصميم حملة بصرية مخصص للنشر عبر مختلف القنوات.",
    f4_3Title: "تصميم التقارير والمطبوعات للمنظمات", f4_3Desc: "تيبوغرافيا منظمة وتصميم غلاف لتقارير المانحين.",
    f4_5Title: "استراتيجية الإنفوجرافيك وتجسيد البيانات", f4_5Desc: "عناصر بصرية متناسقة تحول بيانات المشاريع إلى جرافيك.",

    f5_1Title: "مسح المرافق والمنشآت التشغيلية", f5_1Desc: "مسح معماري وموقعي عالي الدقة يوضح حالة المنشآت.",
    f5_2Title: "ورش العمل التفاعلية والحوار", f5_2Desc: "توثيق التعلم التشاركي والحوار بين أصحاب المصلحة.",
    f5_3Title: "دراسة البورتريه البيئي", f5_3Desc: "تصوير بورتريه يركز على الإنسان داخل بيئته المحلية.",
    f5_4Title: "تصوير مسح البنية التحتية والموقع", f5_4Desc: "مسح موقعي يوثق المحيط العام والمرافق التشغيلية.",
    f5_5Title: "جلسات الحوار والتغطية الإعلامية", f5_5Desc: "تغطية الجلسات التفاعلية لإحاطات المؤسسات والمنظمات.",
    f5_6Title: "انتشار الفرق الميدانية والسياق التشغيلي", f5_6Desc: "مشهد تشغيلي واسع يوضح سياق الانتشار الميداني.",

    f6_1Title: "تصميم التقرير والتحرير البصري", f6_1Desc: "تخطيط نشر احترافي مع تسلسل هرمي بصري واضح.",
    f6_3Title: "مواد الإبراز والظهور المؤسسي (Visibility)", f6_3Desc: "تصاميم مؤسسية متوافقة مع أدلة الهوية الدولية.",
    f6_5Title: "أصل الاتصالات للمنصات الرقمية", f6_5Desc: "محتوى بصري جاهز للمنصات الرقمية والتوزيع الشبكي.",

    f7_1Title: "لوجستيات الإغاثة والعمليات الميدانية", f7_1Desc: "توثيق لوجستيات الإمداد والتخزين والتوزيع الميداني.",
    f7_2Title: "تغطية الفعاليات والأنشطة الرسمية", f7_2Desc: "تصوير التجمعات الرسمية وتوثيق البروتوكول.",
    f7_3Title: "بورتريه المستفيد والقصة الإنسانية", f7_3Desc: "بورتريه أصيل يُستخدم في تقارير المنظمات والميديا.",
    f7_4Title: "العمل الجماعي في المهمات الميدانية", f7_4Desc: "توثيق تنفيذ الفريق واللوجستيات التشغيلية.",
    f7_5Title: "صمود المجتمعات واللحظات الميدانية", f7_5Desc: "تغطية ميدانية أصيلة تعكس صمود المجتمع المحلي.",

    fdes_3Title: "تصميم المطبوعات والهوية المؤسسية", fdes_3Desc: "تخطيط تحريري بتيبوغرافيا منظمة وتوافق مع الهوية.",
    fdes_4Title: "استراتيجية الاتصالات البصرية الرقمية", fdes_4Desc: "تدرج لوني وعناصر متزنة مخصصة للعرض الرقمي.",
    fdes_5Title: "جرافيك الهوية والظهور المؤسسي", fdes_5Desc: "عنصر هوية بصري مصمم للظهور والإبراز المؤسسي."
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
  setupVideoAutoplay();
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
          <video class="autoplay-video" poster="${project.poster || ''}" src="${project.src}" muted loop playsinline preload="metadata"></video>
          <div class="play-overlay">
            <div class="play-btn-circle" title="${dict.btnDirectPlay}">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <span class="video-duration">4K UHD • 60 FPS</span>
        </div>
        <div class="video-details">
          <span class="video-tag">Aerial Survey 0${idx + 1}</span>
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
    // Combine video previews + photography items
    const vidItems = videoProjects.map(v => ({
      type: 'video',
      id: v.id,
      src: v.src,
      poster: v.poster,
      category: v.category,
      personalProject: v.personalProject,
      title: dict[v.titleKey],
      desc: dict[v.descKey]
    }));
    const pItems = photographyItems.map((p, idx) => ({
      type: 'photo',
      id: `p-${idx}`,
      src: p.image,
      category: p.category,
      subCat: p.subCat,
      personalProject: p.personalProject,
      title: dict[p.titleKey] || "Field Photography",
      desc: dict[p.descKey] || "Humanitarian Documentation"
    }));
    items = [...vidItems, ...pItems];
  } else if (filter === 'video') {
    items = videoProjects.map(v => ({
      type: 'video',
      id: v.id,
      src: v.src,
      poster: v.poster,
      category: v.category,
      personalProject: v.personalProject,
      title: dict[v.titleKey],
      desc: dict[v.descKey]
    }));
  } else if (filter === 'aerial') {
    items = videoProjects.filter(v => v.category === 'aerial').map(v => ({
      type: 'video',
      id: v.id,
      src: v.src,
      poster: v.poster,
      category: 'aerial',
      personalProject: v.personalProject,
      title: dict[v.titleKey],
      desc: dict[v.descKey]
    }));
  } else {
    items = photographyItems.filter(p => p.category === filter || p.subCat === filter).map((p, idx) => ({
      type: 'photo',
      id: `p-${idx}`,
      src: p.image,
      category: p.category,
      subCat: p.subCat,
      personalProject: p.personalProject,
      title: dict[p.titleKey] || "Field Photography",
      desc: dict[p.descKey] || "Visual Content"
    }));
  }

  activeGalleryList = items;

  grid.innerHTML = items.map((item, index) => {
    const conceptBadge = item.personalProject
      ? `<span class="portfolio-badge personal-project-badge">${currentLang === 'ar' ? 'عمل مفاهيمي' : 'Concept Work'}</span>`
      : '';
    if (item.type === 'video') {
      return `
        <div class="portfolio-item reveal" onclick="openCaseStudyModal('${item.id}')">
          ${conceptBadge}
          <video class="autoplay-video" poster="${item.poster || ''}" src="${item.src}" muted loop playsinline preload="metadata"></video>
          <div class="portfolio-overlay">
            <span class="portfolio-category">${item.category.toUpperCase()} • VIDEO</span>
            <h4 class="portfolio-item-title">${item.title}</h4>
            <p class="portfolio-item-desc">${item.desc}</p>
          </div>
        </div>
      `;
    } else {
      const categoryLabel = item.category === 'photo' ? (currentLang === 'ar' ? 'تصوير إغاثي وميداني' : 'FIELD / RELIEF PHOTO') 
                          : item.category === 'stories' ? (currentLang === 'ar' ? 'قصة إنسانية' : 'HUMAN STORY')
                          : (currentLang === 'ar' ? 'اتصالات بصرية' : 'VISUAL COMMS');
      return `
        <div class="portfolio-item reveal" onclick="openPhotoLightbox(${index})">
          ${conceptBadge}
          <img src="${item.src}" alt="${item.title}" loading="lazy" decoding="async" onerror="this.src='w3.jpg'">
          <div class="portfolio-overlay">
            <span class="portfolio-category">${categoryLabel}</span>
            <h4 class="portfolio-item-title">${item.title}</h4>
            <p class="portfolio-item-desc">${item.desc}</p>
          </div>
        </div>
      `;
    }
  }).join('');

  // Re-observe animations and video autoplay
  setupScrollAnimations();
  setupVideoAutoplay();
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
          <span>${currentLang === 'ar' ? 'فتح في صفحة مستقلة' : 'Open Direct Page'}</span>
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
      const mailtoUrl = `mailto:bekosoft149@gmail.com?subject=${encodeURIComponent(`[Field Mission / Portfolio Inquiry] ${subject} - ${org}`)}&body=${encodeURIComponent(`Name: ${name}\\nEmail: ${email}\\nOrganization: ${org}\\n\\nTerms of Reference / Scope:\\n${msg}`)}`;

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

// ==========================================================================
// 12. VIDEO AUTOPLAY OBSERVER (plays when visible, pauses when not)
// ==========================================================================

function setupVideoAutoplay() {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        // Only play if not inside an open modal
        if (!video.closest('.modal-backdrop.active, .lightbox-backdrop.active')) {
          video.play().catch(() => {});
        }
      } else {
        video.pause();
      }
    });
  }, {
    threshold: 0.25,
    rootMargin: '0px 0px 0px 0px'
  });

  // Observe all autoplay-video elements
  document.querySelectorAll('video.autoplay-video').forEach(video => {
    videoObserver.observe(video);
  });
}
"""

with open(output_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated js/main.js successfully with 76 verified images including Relif_opt & su_opt!")
