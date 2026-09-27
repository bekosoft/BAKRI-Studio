/**
 * BAKRI — Visual Communications & Documentary Photography Specialist
 * Core Application Engine, Bilingual System & 6-Category Gallery
 * Fully sanitized: Organized purely by content type and task nature.
 */

// ==========================================================================
// 1. DATA SOURCES: 6 CONTENT SECTIONS
// ==========================================================================

const videoProjects = [
  {
    "id": "aerial-1",
    "src": "3. Aerial Imaging (تصوير جوي بالدرون)/1.mp4",
    "poster": "w3.jpg",
    "category": "aerial-drone",
    "titleKey": "vidAerial1Title",
    "descKey": "vidAerial1Desc",
    "roleKey": "vidAerial1Role",
    "objectiveKey": "vidAerial1Objective",
    "specs": {
      "platform": "DJI Professional Drone Quadcopter",
      "resolution": "4K UHD (3840 x 2160)",
      "framerate": "60 fps Cinematic",
      "colorWorkflow": "D-Log Color Profile to Rec.709",
      "editingSuite": "Adobe Premiere Pro / DaVinci Resolve",
      "classification": "Aerial Drone Cinematography • Spatial Survey"
    }
  },
  {
    "id": "aerial-2",
    "src": "3. Aerial Imaging (تصوير جوي بالدرون)/2.mp4",
    "poster": "w3.jpg",
    "category": "aerial-drone",
    "titleKey": "vidAerial2Title",
    "descKey": "vidAerial2Desc",
    "roleKey": "vidAerial2Role",
    "objectiveKey": "vidAerial2Objective",
    "specs": {
      "platform": "DJI Aerial Imaging System",
      "resolution": "4K UHD (3840 x 2160)",
      "framerate": "60 fps Fluid Motion",
      "colorWorkflow": "Natural Grade & Contrast Balancing",
      "editingSuite": "Adobe Premiere Pro",
      "classification": "Aerial Drone Cinematography • Environmental Scale"
    }
  },
  {
    "id": "aerial-3",
    "src": "3. Aerial Imaging (تصوير جوي بالدرون)/3.mp4",
    "poster": "w3.jpg",
    "category": "aerial-drone",
    "titleKey": "vidAerial3Title",
    "descKey": "vidAerial3Desc",
    "roleKey": "vidAerial3Role",
    "objectiveKey": "vidAerial3Objective",
    "specs": {
      "platform": "Aerial Drone System",
      "resolution": "4K UHD / Full HD",
      "framerate": "30 / 60 fps",
      "colorWorkflow": "Atmospheric & Horizon Calibration",
      "editingSuite": "Adobe Premiere Pro",
      "classification": "Aerial Drone Cinematography • Infrastructure Survey"
    }
  },
  {
    "id": "aerial-4",
    "src": "3. Aerial Imaging (تصوير جوي بالدرون)/55.mp4",
    "poster": "w3.jpg",
    "category": "aerial-drone",
    "titleKey": "vidAerial4Title",
    "descKey": "vidAerial4Desc",
    "roleKey": "vidAerial4Role",
    "objectiveKey": "vidAerial4Objective",
    "specs": {
      "platform": "High-Altitude Aerial Drone",
      "resolution": "1080p Full HD",
      "framerate": "60 fps Fluid Motion",
      "colorWorkflow": "Dynamic Range Grading",
      "editingSuite": "Adobe Premiere Pro & After Effects",
      "classification": "Aerial Drone Cinematography • Dynamic Tracking"
    }
  },
  {
    "id": "motion-1",
    "src": "2. Video & Motion (فيديو ومونتاج)/0112.mp4",
    "poster": "w3.jpg",
    "category": "video-motion",
    "titleKey": "vidMotion1Title",
    "descKey": "vidMotion1Desc",
    "roleKey": "vidMotion1Role",
    "objectiveKey": "vidMotion1Objective",
    "specs": {
      "platform": "Video Production & Editing",
      "resolution": "1080p Full HD",
      "framerate": "30 fps",
      "colorWorkflow": "Natural Color Timing & Pacing",
      "editingSuite": "Adobe Premiere Pro",
      "classification": "Video & Motion • Dynamic Pacing Cut"
    }
  },
  {
    "id": "motion-2",
    "src": "2. Video & Motion (فيديو ومونتاج)/0913.mp4",
    "poster": "w3.jpg",
    "category": "video-motion",
    "titleKey": "vidMotion2Title",
    "descKey": "vidMotion2Desc",
    "roleKey": "vidMotion2Role",
    "objectiveKey": "vidMotion2Objective",
    "specs": {
      "platform": "Field Cinematography & Color Grading",
      "resolution": "1080p Full HD",
      "framerate": "30 fps",
      "colorWorkflow": "Rec.709 Color Calibration",
      "editingSuite": "Adobe Premiere Pro & DaVinci Resolve",
      "classification": "Video & Motion • Color Grading Showcase"
    }
  },
  {
    "id": "motion-3",
    "src": "2. Video & Motion (فيديو ومونتاج)/4.mp4",
    "poster": "w3.jpg",
    "category": "video-motion",
    "titleKey": "vidMotion3Title",
    "descKey": "vidMotion3Desc",
    "roleKey": "vidMotion3Role",
    "objectiveKey": "vidMotion3Objective",
    "specs": {
      "platform": "Documentary Short Video Editing",
      "resolution": "1080p Full HD",
      "framerate": "30 fps",
      "colorWorkflow": "Audio-Visual Synchronization",
      "editingSuite": "Adobe Premiere Pro & Audition",
      "classification": "Video & Motion • Editorial Short Production"
    }
  },
  {
    "id": "motion-4",
    "src": "2. Video & Motion (فيديو ومونتاج)/DSC_0087.mp4",
    "poster": "w3.jpg",
    "category": "video-motion",
    "titleKey": "vidMotion4Title",
    "descKey": "vidMotion4Desc",
    "roleKey": "vidMotion4Role",
    "objectiveKey": "vidMotion4Objective",
    "specs": {
      "platform": "Field Cinema Camera",
      "resolution": "1080p Full HD",
      "framerate": "50 / 60 fps",
      "colorWorkflow": "On-Location Ambient Lighting",
      "editingSuite": "Adobe Premiere Pro",
      "classification": "Video & Motion • On-Location Live Documentation"
    }
  },
  {
    "id": "motion-5",
    "src": "2. Video & Motion (فيديو ومونتاج)/DSC_8086.mp4",
    "poster": "w3.jpg",
    "category": "video-motion",
    "titleKey": "vidMotion5Title",
    "descKey": "vidMotion5Desc",
    "roleKey": "vidMotion5Role",
    "objectiveKey": "vidMotion5Objective",
    "specs": {
      "platform": "Field Cinematography Setup",
      "resolution": "1080p Full HD",
      "framerate": "60 fps Smooth Motion",
      "colorWorkflow": "Depth of Field & Subject Focus",
      "editingSuite": "Adobe Premiere Pro",
      "classification": "Video & Motion • Camera Movement & Tracking"
    }
  },
  {
    "id": "motion-6",
    "src": "2. Video & Motion (فيديو ومونتاج)/Sequence 01_1.mp4",
    "poster": "w3.jpg",
    "category": "video-motion",
    "titleKey": "vidMotion6Title",
    "descKey": "vidMotion6Desc",
    "roleKey": "vidMotion6Role",
    "objectiveKey": "vidMotion6Objective",
    "specs": {
      "platform": "Multi-Track Sequence Post-Production",
      "resolution": "1080p Full HD",
      "framerate": "30 fps",
      "colorWorkflow": "Rhythm & Audio Alignment",
      "editingSuite": "Adobe Premiere Pro",
      "classification": "Video & Motion • Paced Montage Sequence"
    }
  },
  {
    "id": "motion-7",
    "src": "2. Video & Motion (فيديو ومونتاج)/Sequence 01_7.mp4",
    "poster": "w3.jpg",
    "category": "video-motion",
    "titleKey": "vidMotion7Title",
    "descKey": "vidMotion7Desc",
    "roleKey": "vidMotion7Role",
    "objectiveKey": "vidMotion7Objective",
    "specs": {
      "platform": "Color Correction & Visual Transitions",
      "resolution": "1080p Full HD",
      "framerate": "30 fps",
      "colorWorkflow": "Cinematic Tone Curves",
      "editingSuite": "Adobe Premiere Pro & After Effects",
      "classification": "Video & Motion • Visual Continuity Sequence"
    }
  },
  {
    "id": "motion-8",
    "src": "2. Video & Motion (فيديو ومونتاج)/vfx 1122.mp4",
    "poster": "w3.jpg",
    "category": "video-motion",
    "titleKey": "vidMotion8Title",
    "descKey": "vidMotion8Desc",
    "roleKey": "vidMotion8Role",
    "objectiveKey": "vidMotion8Objective",
    "specs": {
      "platform": "Motion Graphics & Compositing",
      "resolution": "1080p Full HD",
      "framerate": "30 fps",
      "colorWorkflow": "Layer Blend & Graphic Animation",
      "editingSuite": "Adobe After Effects",
      "classification": "Video & Motion • VFX & Title Compositing"
    }
  }
];

const humanInterestItems = [
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0902.JPG",
    "category": "human-interest",
    "titleKey": "hi1Title",
    "descKey": "hi1Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0909.JPG",
    "category": "human-interest",
    "titleKey": "hi2Title",
    "descKey": "hi2Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0913.JPG",
    "category": "human-interest",
    "titleKey": "hi3Title",
    "descKey": "hi3Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0915.JPG",
    "category": "human-interest",
    "titleKey": "hi4Title",
    "descKey": "hi4Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0916.JPG",
    "category": "human-interest",
    "titleKey": "hi5Title",
    "descKey": "hi5Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0927.JPG",
    "category": "human-interest",
    "titleKey": "hi6Title",
    "descKey": "hi6Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0930.JPG",
    "category": "human-interest",
    "titleKey": "hi7Title",
    "descKey": "hi7Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0942.JPG",
    "category": "human-interest",
    "titleKey": "hi8Title",
    "descKey": "hi8Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0958.JPG",
    "category": "human-interest",
    "titleKey": "hi9Title",
    "descKey": "hi9Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0972.JPG",
    "category": "human-interest",
    "titleKey": "hi10Title",
    "descKey": "hi10Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0977.JPG",
    "category": "human-interest",
    "titleKey": "hi11Title",
    "descKey": "hi11Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0983.JPG",
    "category": "human-interest",
    "titleKey": "hi12Title",
    "descKey": "hi12Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0985.JPG",
    "category": "human-interest",
    "titleKey": "hi13Title",
    "descKey": "hi13Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0996.JPG",
    "category": "human-interest",
    "titleKey": "hi14Title",
    "descKey": "hi14Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_0999.JPG",
    "category": "human-interest",
    "titleKey": "hi15Title",
    "descKey": "hi15Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_1001.JPG",
    "category": "human-interest",
    "titleKey": "hi16Title",
    "descKey": "hi16Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_1004.JPG",
    "category": "human-interest",
    "titleKey": "hi17Title",
    "descKey": "hi17Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_1013.JPG",
    "category": "human-interest",
    "titleKey": "hi18Title",
    "descKey": "hi18Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_6657.JPG",
    "category": "human-interest",
    "titleKey": "hi19Title",
    "descKey": "hi19Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_6658.JPG",
    "category": "human-interest",
    "titleKey": "hi20Title",
    "descKey": "hi20Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_6659.JPG",
    "category": "human-interest",
    "titleKey": "hi21Title",
    "descKey": "hi21Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_6714.JPG",
    "category": "human-interest",
    "titleKey": "hi22Title",
    "descKey": "hi22Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_6768.JPG",
    "category": "human-interest",
    "titleKey": "hi23Title",
    "descKey": "hi23Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_6774.JPG",
    "category": "human-interest",
    "titleKey": "hi24Title",
    "descKey": "hi24Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/DSC_6787.JPG",
    "category": "human-interest",
    "titleKey": "hi25Title",
    "descKey": "hi25Desc"
  },
  {
    "image": "Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد/sh (3).jpg",
    "category": "human-interest",
    "titleKey": "hi26Title",
    "descKey": "hi26Desc"
  }
];

const docFieldItems = [
  {
    "image": "1. Photography (تصوير فوتوغرافي)/DSC_6657.JPG",
    "category": "doc-field",
    "titleKey": "df1Title",
    "descKey": "df1Desc"
  },
  {
    "image": "1. Photography (تصوير فوتوغرافي)/DSC_6658.JPG",
    "category": "doc-field",
    "titleKey": "df2Title",
    "descKey": "df2Desc"
  },
  {
    "image": "1. Photography (تصوير فوتوغرافي)/DSC_6659.JPG",
    "category": "doc-field",
    "titleKey": "df3Title",
    "descKey": "df3Desc"
  },
  {
    "image": "1. Photography (تصوير فوتوغرافي)/DSC_6714.JPG",
    "category": "doc-field",
    "titleKey": "df4Title",
    "descKey": "df4Desc"
  },
  {
    "image": "1. Photography (تصوير فوتوغرافي)/DSC_6768.JPG",
    "category": "doc-field",
    "titleKey": "df5Title",
    "descKey": "df5Desc"
  },
  {
    "image": "1. Photography (تصوير فوتوغرافي)/DSC_6774.JPG",
    "category": "doc-field",
    "titleKey": "df6Title",
    "descKey": "df6Desc"
  },
  {
    "image": "1. Photography (تصوير فوتوغرافي)/DSC_6787.JPG",
    "category": "doc-field",
    "titleKey": "df7Title",
    "descKey": "df7Desc"
  },
  {
    "image": "1. Photography (تصوير فوتوغرافي)/IMG-20241005-WA0003.jpg",
    "category": "doc-field",
    "titleKey": "df8Title",
    "descKey": "df8Desc"
  },
  {
    "image": "1. Photography (تصوير فوتوغرافي)/IMG-20241005-WA0016.jpg",
    "category": "doc-field",
    "titleKey": "df9Title",
    "descKey": "df9Desc"
  },
  {
    "image": "1. Photography (تصوير فوتوغرافي)/IMG-20241005-WA0017.jpg",
    "category": "doc-field",
    "titleKey": "df10Title",
    "descKey": "df10Desc"
  },
  {
    "image": "1. Photography (تصوير فوتوغرافي)/IMG-20241005-WA0019.jpg",
    "category": "doc-field",
    "titleKey": "df11Title",
    "descKey": "df11Desc"
  },
  {
    "image": "1. Photography (تصوير فوتوغرافي)/IMG-20241005-WA0041.jpg",
    "category": "doc-field",
    "titleKey": "df12Title",
    "descKey": "df12Desc"
  },
  {
    "image": "1. Photography (تصوير فوتوغرافي)/IMG-20241005-WA0045.jpg",
    "category": "doc-field",
    "titleKey": "df13Title",
    "descKey": "df13Desc"
  },
  {
    "image": "1. Photography (تصوير فوتوغرافي)/IMG-20241005-WA0047.jpg",
    "category": "doc-field",
    "titleKey": "df14Title",
    "descKey": "df14Desc"
  },
  {
    "image": "1. Photography (تصوير فوتوغرافي)/IMG-20241005-WA0050.jpg",
    "category": "doc-field",
    "titleKey": "df15Title",
    "descKey": "df15Desc"
  }
];

const designLayoutItems = [
  {
    "image": "4. Design & Layout (تصميم)/IMG-20260926-WA0000.jpg",
    "category": "design-layout",
    "titleKey": "dl1Title",
    "descKey": "dl1Desc"
  },
  {
    "image": "4. Design & Layout (تصميم)/IMG-20260926-WA0001.jpg",
    "category": "design-layout",
    "titleKey": "dl2Title",
    "descKey": "dl2Desc"
  },
  {
    "image": "4. Design & Layout (تصميم)/IMG-20260926-WA0003.jpg",
    "category": "design-layout",
    "titleKey": "dl3Title",
    "descKey": "dl3Desc"
  },
  {
    "image": "4. Design & Layout (تصميم)/IMG-20260926-WA0004.jpg",
    "category": "design-layout",
    "titleKey": "dl4Title",
    "descKey": "dl4Desc"
  },
  {
    "image": "4. Design & Layout (تصميم)/IMG-20260926-WA0007.jpg",
    "category": "design-layout",
    "titleKey": "dl5Title",
    "descKey": "dl5Desc"
  },
  {
    "image": "4. Design & Layout (تصميم)/IMG-20260926-WA0009.jpg",
    "category": "design-layout",
    "titleKey": "dl6Title",
    "descKey": "dl6Desc"
  }
];

const digitalSocialItems = [
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/ChatGPT Image 8 سبتمبر 2026، 09_49_33 ص.png",
    "category": "digital-social",
    "titleKey": "ds1Title",
    "descKey": "ds1Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/ChatGPT Image Sep 22, 2026, 03_02_11 PM.png",
    "category": "digital-social",
    "titleKey": "ds2Title",
    "descKey": "ds2Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/d (1).jpg",
    "category": "digital-social",
    "titleKey": "ds3Title",
    "descKey": "ds3Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/d (2).jpg",
    "category": "digital-social",
    "titleKey": "ds4Title",
    "descKey": "ds4Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/d (5).jpg",
    "category": "digital-social",
    "titleKey": "ds5Title",
    "descKey": "ds5Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/d (6).jpg",
    "category": "digital-social",
    "titleKey": "ds6Title",
    "descKey": "ds6Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/p (3).jpg",
    "category": "digital-social",
    "titleKey": "ds7Title",
    "descKey": "ds7Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/p (4).jpg",
    "category": "digital-social",
    "titleKey": "ds8Title",
    "descKey": "ds8Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/p (5).jpg",
    "category": "digital-social",
    "titleKey": "ds9Title",
    "descKey": "ds9Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/r1 (1).jpg",
    "category": "digital-social",
    "titleKey": "ds10Title",
    "descKey": "ds10Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/r1 (2).jpg",
    "category": "digital-social",
    "titleKey": "ds11Title",
    "descKey": "ds11Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/r1 (3).jpg",
    "category": "digital-social",
    "titleKey": "ds12Title",
    "descKey": "ds12Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/r1 (4).jpg",
    "category": "digital-social",
    "titleKey": "ds13Title",
    "descKey": "ds13Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/x (1).jpg",
    "category": "digital-social",
    "titleKey": "ds14Title",
    "descKey": "ds14Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/x (2).jpg",
    "category": "digital-social",
    "titleKey": "ds15Title",
    "descKey": "ds15Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/x (3).jpg",
    "category": "digital-social",
    "titleKey": "ds16Title",
    "descKey": "ds16Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/x (4).jpg",
    "category": "digital-social",
    "titleKey": "ds17Title",
    "descKey": "ds17Desc"
  },
  {
    "image": "5. Digital Content (محتوى رقميسوشيال ميديا)/x (5).jpg",
    "category": "digital-social",
    "titleKey": "ds18Title",
    "descKey": "ds18Desc"
  }
];

const photographyItems = [
  ...humanInterestItems,
  ...docFieldItems,
  ...designLayoutItems,
  ...digitalSocialItems
];

// ==========================================================================
// 2. BILINGUAL TRANSLATION DICTIONARY (EN / AR)
// ==========================================================================

const i18n = {
  en: {
  "navHome": "Home",
  "navAbout": "About & Profile",
  "navEthics": "Field Ethics & Consent",
  "navHumanInterest": "Human-Interest Photography",
  "navDocField": "Documentary & Field",
  "navVideoMotion": "Video & Motion",
  "navAerialDrone": "Aerial Cinematography",
  "navDesignLayout": "Design & Layout",
  "navDigitalSocial": "Digital Content",
  "navCV": "Credentials & CV",
  "navContact": "Contact",
  "navBrandRole": "Visual Communications Specialist",
  "heroBadge": "Visual Communications & Documentary Photography Specialist",
  "heroTitleLine1": "Documenting Human Dignity.",
  "heroTitleLine2": "Impact Storytelling & Visual Media Production.",
  "heroDesc": "Professional Visual Communications Specialist dedicated to field missions, community resilience, authentic human stories, aerial spatial surveys, and high-impact media production.",
  "btnExploreGallery": "Explore Content Showcase",
  "btnReviewEthics": "Field Ethics & Standards",
  "btnContactHero": "Request Field Mission",
  "heroTrustLabel": "Technical Execution Standards:",
  "trustTag1": "Strict Informed Consent Protocols",
  "trustTag2": "Human Dignity & Non-Sensationalism",
  "trustTag3": "Field-Ready Rapid Deployment",
  "trustTag4": "Structured Digital Asset Management (DAM)",
  "aboutEyebrow": "Professional Profile",
  "aboutTitle": "Visual Storyteller & Multimedia Communications Specialist",
  "aboutLead": "Specializing in Visual Communications and Field Documentation, backed by a Bachelor of Science in Information Technology (B.Sc. IT). Combining technical workflow precision with deep contextual empathy.",
  "aboutBody1": "My core expertise centers on capturing authentic, dignified visual narratives without sensationalism, adhering strictly to informed consent, child safeguarding principles, and cultural sensitivity under demanding field environments.",
  "aboutBody2": "This curated showcase presents verified media productions categorized strictly by content type and task nature—ranging from human-interest storytelling to field operations, drone mapping, video editing, and information design.",
  "aboutStat1Title": "B.Sc. IT + Media Archiving",
  "aboutStat1Desc": "Digital asset management, metadata tagging & structured cloud repositories",
  "aboutStat2Title": "Dignity-First Documentation",
  "aboutStat2Desc": "Respecting informed consent, subject agency & ethical storytelling",
  "aboutStat3Title": "Field-Ready Deployment",
  "aboutStat3Desc": "Equipped for remote assignments, rapid turnaround & harsh field conditions",
  "aboutStat4Title": "Multi-Platform Production",
  "aboutStat4Desc": "Delivering photo essays, cinematic video cuts, aerial maps & campaign layouts",
  "aboutBadgeTitle": "Bakri (Abobker Ali)",
  "aboutBadgeText": "B.Sc. Information Technology • Visual Communications Specialist",
  "respEyebrow": "Ethical Standards & Protocols",
  "respTitle": "Responsible, Dignified & Ethical Visual Documentation",
  "respQuote": "\"Visual excellence is meaningless without profound respect for human dignity, contextual honesty, and uncompromising adherence to informed consent. Every lens assignment is a commitment to ethical trust.\"",
  "respPillar1Title": "Informed & Voluntary Consent",
  "respPillar1Desc": "Ensuring subjects understand the purpose, reach, and context of media documentation prior to filming.",
  "respPillar2Title": "Contextual Truth & Dignity",
  "respPillar2Desc": "Rejecting sensationalism, vulnerability exploitation, and decontextualized crops; honoring community strength.",
  "respPillar3Title": "Child & Vulnerable Safeguarding",
  "respPillar3Desc": "Strict application of international child safeguarding and vulnerable community protection guidelines.",
  "respPillar4Title": "Data Security & Media Integrity",
  "respPillar4Desc": "Secure encrypted storage, strict embargo compliance, and ethical archival standards for sensitive materials.",
  "hiBannerTitle": "Human-Interest & Humanitarian Photography",
  "hiBannerSubtitle": "A dedicated focus on real human moments, community perseverance, and authentic stories captured with full informed consent and deep dignity.",
  "hiBannerAction": "View Human-Interest Works",
  "portEyebrow": "Content Showcase",
  "portTitle": "Curated Content Portfolio",
  "portSubtitle": "Organized strictly by content discipline and task nature, completely free of institutional affiliations or dates.",
  "filterAll": "All Works",
  "filterHumanInterest": "★ Human-Interest Photography",
  "filterDocField": "Documentary & Field Photography",
  "filterVideoMotion": "Video & Motion Production",
  "filterAerialDrone": "Aerial & Drone Cinematography",
  "filterDesignLayout": "Design & Visual Layout",
  "filterDigitalSocial": "Digital & Social Media Content",
  "portfolioNote": "Content Integrity Note: All featured works demonstrate real-world technical execution, ethical documentation craft, and structured visual communication.",
  "catHumanInterest": "Human-Interest Photography",
  "catDocField": "Documentary & Field Photography",
  "catVideoMotion": "Video & Motion Production",
  "catAerialDrone": "Aerial Cinematography",
  "catDesignLayout": "Design & Visual Layout",
  "catDigitalSocial": "Digital & Social Media",
  "aerialEyebrow": "Spatial Perspectives",
  "aerialTitle": "Aerial & Drone Cinematography",
  "aerialSubtitle": "Cinematic drone productions demonstrating flight stability, spatial context mapping, scale visualization, and high-altitude cinematography.",
  "btnWatchCase": "Watch Showcase",
  "btnDirectPlay": "Play Video",
  "capEyebrow": "Core Capabilities",
  "capTitle": "Specialized Visual Communications Services",
  "capSubtitle": "Delivering end-to-end multimedia documentation tailored for institutional quality and international standards.",
  "cap1Title": "Field & Documentary Photography",
  "cap1Desc": "High-impact visual documentation of field operations, community initiatives, logistics workflows, and dignified portraits.",
  "cap1f1": "Field mission & operations coverage",
  "cap1f2": "Dignified human-centered documentation",
  "cap1f3": "IPTC/EXIF metadata archiving & taxonomy",
  "cap2Title": "Human-Interest Storytelling",
  "cap2Desc": "Capturing moving, authentic human stories with strict informed consent and profound respect for cultural nuance.",
  "cap2f1": "Participatory community documentation",
  "cap2f2": "Stories of resilience & optimism",
  "cap2f3": "Ethical safeguarding compliance",
  "cap3Title": "Video Editing & Color Grading",
  "cap3Desc": "End-to-end video creation—from on-location camera operation to dynamic cutting, pacing, sound sync, and Rec.709 color calibration.",
  "cap3f1": "Short documentary cuts & teasers",
  "cap3f2": "Dynamic visual pacing & rhythm",
  "cap3f3": "Rec.709 color grading workflows",
  "cap4Title": "Aerial Drone Cinematography",
  "cap4Desc": "Cinematic 4K aerial surveys documenting spatial layouts, environmental scale, and infrastructure topography with flight precision.",
  "cap4f1": "Topographic & spatial context mapping",
  "cap4f2": "Infrastructure & site progression surveys",
  "cap4f3": "High-altitude 4K UHD tracking shots",
  "synergyTitle": "The Technical Advantage: B.Sc. IT + Visual Production",
  "synergyDesc": "Holding a Bachelor of Science in Information Technology provides an exceptional technical edge in digital asset management, structured metadata indexing, secure backups, and data visualization.",
  "cvEyebrow": "Qualifications & Track Record",
  "cvTitle": "Professional Credentials",
  "cvDesc": "Review verified technical credentials, academic background in Information Technology, creative software proficiencies, and field experience.",
  "cvBtnDownload": "Request Full CV (PDF)",
  "cvBtnPrint": "Print Summary Sheet",
  "cvLabelName": "Full Name",
  "cvValName": "Abobker Ali (BAKRI)",
  "cvLabelDegree": "Degree",
  "cvValDegree": "B.Sc. in Information Technology",
  "cvLabelSpecialty": "Core Focus",
  "cvValSpecialty": "Visual Communications & Field Photography",
  "cvLabelLangs": "Languages",
  "cvValLangs": "Arabic (Native) • English (Professional)",
  "cvLabelLocation": "Deployment Readiness",
  "cvValLocation": "Sudan • Available for Regional & International Field Missions",
  "contactEyebrow": "Inquiries & Assignments",
  "contactTitle": "Get in Touch / Request Mission",
  "contactSubtitle": "Available for field documentation assignments, visual communications projects, video post-production, and media production missions.",
  "contactEmailLabel": "Direct Email",
  "contactPhoneLabel": "Phone / WhatsApp",
  "contactLocLabel": "Base Location",
  "contactLocVal": "Khartoum, Sudan • Available for Travel & Field Missions",
  "contactAvailabilityLabel": "Availability",
  "contactAvailabilityVal": "Available for Mission Assignments & Media Production",
  "formName": "Full Name",
  "formNamePlh": "e.g. Sarah Jenkins",
  "formEmail": "Email Address",
  "formEmailPlh": "name@organization.org",
  "formOrg": "Organization / Project",
  "formOrgPlh": "e.g. Media Agency / Field Project",
  "formSubject": "Assignment Scope",
  "formSubjectPlh": "e.g. Field Photo Mission / Video Editing",
  "formMsg": "Mission Brief / Objectives",
  "formMsgPlh": "Please describe the assignment nature, location, timeline, and key visual deliverables...",
  "btnSendMsg": "Submit Assignment Brief",
  "msgSuccess": "Thank you! Your assignment brief has been received. Redirecting to email...",
  "modalOverviewTitle": "Task Overview & Context",
  "modalObjectiveTitle": "Visual & Technical Objective",
  "modalRoleTitle": "Technical Craft & Execution",
  "specTitlePlatform": "Platform & Equipment",
  "specTitleRes": "Capture Resolution",
  "specTitleFps": "Frame Rate",
  "specTitleColor": "Color Space & Grading",
  "specTitleSuite": "Post-Production Suite",
  "footerDesc": "Official Portfolio & Reference Exhibit of BAKRI — Visual Communications & Photography Specialist. Dedicated to documenting human dignity, field resilience, and impactful visual media.",
  "footerCopy": "© 2026 BAKRI (Abobker Ali). All rights reserved.",
  "footerDisclaimer": "Content Reference: All showcase materials are categorized strictly by content type and task nature, demonstrating technical execution and visual storytelling.",
  "footerBackTop": "Back to Top ↑",
  "vidAerial1Title": "Aerial Spatial Survey & Camp Topography",
  "vidAerial1Desc": "Cinematic 4K drone cinematography documenting site topography and spatial scale.",
  "vidAerial1Role": "Drone Flight Operation, 4K UHD Capture & Cinematic Post-Production",
  "vidAerial1Objective": "Capture spatial layout and geographical context for site mapping and structural analysis.",
  "vidAerial2Title": "Aerial Infrastructure & Site Scale Documentation",
  "vidAerial2Desc": "Fluid drone flight path capturing geographical extent and facilities scale.",
  "vidAerial2Role": "Precision Flight Navigation & High-Altitude Cinematography",
  "vidAerial2Objective": "Provide clear spatial orientation and structural layout visualization.",
  "vidAerial3Title": "Aerial Terrain & Environmental Context Survey",
  "vidAerial3Desc": "High-altitude environmental perspective and geographical orientation survey.",
  "vidAerial3Role": "Aerial Survey Cinematography & Horizon Balancing",
  "vidAerial3Objective": "Document environmental surroundings and access routes to remote field locations.",
  "vidAerial4Title": "Dynamic Aerial Tracking & Orbit Maneuver",
  "vidAerial4Desc": "Precision drone flight maneuver highlighting site landmarks and motion tracking.",
  "vidAerial4Role": "Manual Flight Maneuvering & Gimbal Motion Control",
  "vidAerial4Objective": "Showcase dynamic camera movement, spatial depth, and fluid speed transitions.",
  "vidMotion1Title": "Dynamic Field Video Edit & Pacing Cut",
  "vidMotion1Desc": "Short-form video cut demonstrating pacing, continuity, and visual energy.",
  "vidMotion1Role": "Editorial Video Cutting, Rhythm Synchronization & Motion Pacing",
  "vidMotion1Objective": "Demonstrate high-energy editing techniques for fast-paced digital dissemination.",
  "vidMotion2Title": "Field Cinematography & Color Grading Showcase",
  "vidMotion2Desc": "On-location camera movement, natural light capture, and Rec.709 color grading.",
  "vidMotion2Role": "Cinematography, Light Balancing & Color Grading Workflow",
  "vidMotion2Objective": "Deliver filmic visual quality and color harmony under varying outdoor conditions.",
  "vidMotion3Title": "Editorial Short Video Production & Sound Design",
  "vidMotion3Desc": "Paced video edit with synchronized sound design, voiceover balance, and transitions.",
  "vidMotion3Role": "Complete Post-Production, Audio Mixing & Editorial Polishing",
  "vidMotion3Objective": "Produce an engaging informational video that communicates core points effectively.",
  "vidMotion4Title": "On-Location Documentary Footage & Ambience",
  "vidMotion4Desc": "Direct cinematic field recording capturing live atmosphere and authentic soundscapes.",
  "vidMotion4Role": "Field Camera Operation & Ambient Audio Recording",
  "vidMotion4Objective": "Preserve authentic field context and real-time operational atmosphere.",
  "vidMotion5Title": "Field Camera Movement & Smooth Tracking",
  "vidMotion5Desc": "High-definition camera tracking showcasing spatial depth and continuous motion.",
  "vidMotion5Role": "Gimbal Stabilization & Spatial Tracking Cinematography",
  "vidMotion5Objective": "Provide immersive viewer perspective through continuous, fluid camera motion.",
  "vidMotion6Title": "Paced Video Sequence & Beat Synchronization",
  "vidMotion6Desc": "Multi-track sequence editing featuring precise sound cuts and visual accents.",
  "vidMotion6Role": "Multi-Track Timeline Editing & Audio-Visual Alignment",
  "vidMotion6Objective": "Demonstrate precision cutting aligned to modern dynamic media formats.",
  "vidMotion7Title": "Color Correction & Visual Continuity Sequence",
  "vidMotion7Desc": "Advanced color grading workflow ensuring visual continuity across changing shots.",
  "vidMotion7Role": "Colorist Workflow, Curve Adjustments & Shot Matching",
  "vidMotion7Objective": "Achieve standardized cinematic color grading across multiple lighting conditions.",
  "vidMotion8Title": "Motion Graphics & Title Compositing Study",
  "vidMotion8Desc": "Layer compositing, typography motion, and graphic post-production techniques.",
  "vidMotion8Role": "Motion Design, Text Animation & Visual Effects Compositing",
  "vidMotion8Objective": "Integrate kinetic typography and graphic overlays to enhance message delivery.",
  "hi1Title": "Community Engagement Documentation",
  "hi1Desc": "Documenting community interaction and field dialogue with full informed consent.",
  "hi2Title": "Youth Resilience & Optimism",
  "hi2Desc": "Capturing authentic youth optimism and active participation during a field session.",
  "hi3Title": "Community Dialogue & Listening",
  "hi3Desc": "Listening to community voices and perspectives during an on-site field visit.",
  "hi4Title": "Everyday Dignity & Community Spirit",
  "hi4Desc": "Documenting everyday community life with deep dignity, empathy, and respect.",
  "hi5Title": "Community Solidarity & Mutual Support",
  "hi5Desc": "Portraying mutual support and community collaboration during field activities.",
  "hi6Title": "Participatory Field Session",
  "hi6Desc": "Community members participating actively in a structured field discussion.",
  "hi7Title": "Stories of Community Resilience",
  "hi7Desc": "Capturing authentic human expressions reflecting perseverance and inner strength.",
  "hi8Title": "Community Gathering & Shared Voices",
  "hi8Desc": "Respectful visual documentation of community members gathering during a field mission.",
  "hi9Title": "Direct Voices from the Field",
  "hi9Desc": "Documenting genuine dialogue and community viewpoints with mutual respect.",
  "hi10Title": "Intergenerational Community Bonds",
  "hi10Desc": "Respectful documentation highlighting strong intergenerational community relationships.",
  "hi11Title": "Community Trust & Rapport",
  "hi11Desc": "Fostering trust and authentic connection through ethical photographic documentation.",
  "hi12Title": "Human Story: Strength & Hope",
  "hi12Desc": "Human-interest portrait portraying personal strength, hope, and determination.",
  "hi13Title": "Dignified Field Interaction",
  "hi13Desc": "Documenting community interaction while honoring subject dignity and autonomy.",
  "hi14Title": "Human Presence in Field Documentation",
  "hi14Desc": "Highlighting authentic human presence and community spirit during a field mission.",
  "hi15Title": "Community Resilience Portrait",
  "hi15Desc": "Environmental portrait taken with explicit, informed consent honoring the individual.",
  "hi16Title": "Human Story: Dignified Personal Portrait",
  "hi16Desc": "Honoring personal agency and human dignity in a natural, respectful environment.",
  "hi17Title": "Solidarity & Shared Community Purpose",
  "hi17Desc": "Documenting community cohesion and shared commitment to local development.",
  "hi18Title": "Active Participation & Empowerment",
  "hi18Desc": "Portraying community members taking an active role in their local initiatives.",
  "hi19Title": "Human-Interest: Focus & Commitment",
  "hi19Desc": "Capturing individual dedication and focus during a community learning session.",
  "hi20Title": "Direct Human Dialogue in Field Mission",
  "hi20Desc": "Authentic documentation of open discussion and mutual listening in the field.",
  "hi21Title": "Shared Human Moments & Smiles",
  "hi21Desc": "Documenting shared human warmth, mutual smiles, and community joy.",
  "hi22Title": "Learning & Personal Development",
  "hi22Desc": "Capturing eagerness to learn and active participation in skill-building sessions.",
  "hi23Title": "Community Collaboration & Hope",
  "hi23Desc": "Collaborative human moments captured with full informed consent and respect.",
  "hi24Title": "Human Connection in Field Environments",
  "hi24Desc": "Human-centered documentation highlighting interpersonal empathy and connection.",
  "hi25Title": "Authentic Dignity in Daily Activity",
  "hi25Desc": "Authentic reflection of personal dignity, perseverance, and honest effort.",
  "hi26Title": "Humanitarian Advocacy & Human Rights Visual",
  "hi26Desc": "Visual storytelling asset centering human rights, community dignity, and equity.",
  "df1Title": "Field Operations Briefing Session",
  "df1Desc": "Field briefing session organizing operational workflows and on-site distribution.",
  "df2Title": "Field Team Deployment & Coordination",
  "df2Desc": "Documenting field team deployment and coordination across operational zones.",
  "df3Title": "Field Mission Site Assessment",
  "df3Desc": "Visual documentation of site conditions, physical access, and operational setup.",
  "df4Title": "Activity Implementation & Workflow",
  "df4Desc": "Documenting structured activity implementation and adherence to procedural standards.",
  "df5Title": "Field Visit Monitoring & Review",
  "df5Desc": "Visual record of on-site monitoring, progress observation, and field verification.",
  "df6Title": "Logistics Verification & Site Inspection",
  "df6Desc": "Detailed visual inspection of field logistics points and storage coordination.",
  "df7Title": "Field Operational Milestone Review",
  "df7Desc": "Capturing operational milestone execution and team debriefing on location.",
  "df8Title": "Field Workshop Proceedings Documentation",
  "df8Desc": "Documenting interactive field workshop sessions and participatory discussions.",
  "df9Title": "Field Logistics & Supply Chain Coverage",
  "df9Desc": "Monitoring supply movements, material arrival, and organized field staging.",
  "df10Title": "Community Forum & Field Consultation",
  "df10Desc": "Field documentation of open consultation proceedings and stakeholder discussions.",
  "df11Title": "Field Operations Support & Staging",
  "df11Desc": "Capturing operational readiness, equipment staging, and logistical support in the field.",
  "df12Title": "Field Event Proceedings & Assembly",
  "df12Desc": "Visual documentation of organized participant assembly during a field event.",
  "df13Title": "Field Activity Interactive Session",
  "df13Desc": "Documenting structured activity steps and collaborative participant involvement.",
  "df14Title": "On-Site Review & Verification Check",
  "df14Desc": "Field documentation of procedural reviews and operational accountability checks.",
  "df15Title": "Field Mission Completion & Debrief",
  "df15Desc": "Visual wrap-up of mission deliverables, team coordination, and completion milestones.",
  "dl1Title": "Editorial Publication & Typography Layout",
  "dl1Desc": "Clean grid hierarchy, structured editorial layout, and bilingual typography design.",
  "dl2Title": "Visual Information Architecture & Styling",
  "dl2Desc": "Information hierarchy and cohesive graphic styling for institutional publications.",
  "dl3Title": "Data Visualization & Key Metrics Infographic",
  "dl3Desc": "Visual representation of key operational metrics, clear charts, and data indicators.",
  "dl4Title": "Print & Digital Media Formatting",
  "dl4Desc": "Publication-ready layout ensuring consistent readability and visual appeal across formats.",
  "dl5Title": "Strategic Visual Brief & Layout Spread",
  "dl5Desc": "Structured double-page spread layout designed for executive and donor briefings.",
  "dl6Title": "Visual Collateral & Presentation Design",
  "dl6Desc": "Modern visual collateral with bold section hierarchy and balanced negative space.",
  "ds1Title": "Digital Awareness Campaign Visual",
  "ds1Desc": "Creative social media visual designed for high engagement and public message awareness.",
  "ds2Title": "Social Media Story & Feed Asset",
  "ds2Desc": "Optimized mobile visual format for social sharing, announcements, and story feeds.",
  "ds3Title": "Social Media Information Card",
  "ds3Desc": "Concise informational card formatted for quick visual comprehension on digital channels.",
  "ds4Title": "Digital Announcement & Event Graphic",
  "ds4Desc": "Clean digital graphic formatted for multi-platform broadcasting and awareness dissemination.",
  "ds5Title": "Digital Community Engagement Visual",
  "ds5Desc": "Visual asset crafted to encourage community feedback and participatory dialogue.",
  "ds6Title": "Infographic Social Media Slide",
  "ds6Desc": "Key data takeaways structured into an accessible, shareable social media graphic.",
  "ds7Title": "Community Action Visual Banner",
  "ds7Desc": "Social graphic highlighting community action, solidarity, and collaborative effort.",
  "ds8Title": "Digital Campaign Multi-Asset Spread",
  "ds8Desc": "Visual campaign kit asset adapted for web banners and social timeline feeds.",
  "ds9Title": "Digital Visibility & Brand Graphic",
  "ds9Desc": "Branded social media graphic ensuring consistent institutional visual identity.",
  "ds10Title": "Social Media Event Highlights Snapshot",
  "ds10Desc": "Fast-turnaround social media post visual communicating immediate milestone updates.",
  "ds11Title": "Digital Field Update Asset",
  "ds11Desc": "Field snapshot formatted for immediate digital publishing and operational updates.",
  "ds12Title": "Interactive Engagement Story Visual",
  "ds12Desc": "Visual story designed to engage audience across channels and prompt feedback.",
  "ds13Title": "Multi-Platform Social Graphic",
  "ds13Desc": "Multi-channel visual asset highlighting project milestones with clear visual hierarchy.",
  "ds14Title": "Digital Outreach Visual Graphic",
  "ds14Desc": "Graphic asset tailored for community outreach and informational dissemination.",
  "ds15Title": "Public Awareness Digital Banner",
  "ds15Desc": "High-contrast digital banner optimized for readability and rapid public notice.",
  "ds16Title": "Key Takeaways Social Summary Card",
  "ds16Desc": "Bilingual social media card highlighting critical outcomes and key action points.",
  "ds17Title": "Digital Campaign Feed Post",
  "ds17Desc": "Visual feed asset optimized for engagement, crisp text rendering, and clear messaging.",
  "ds18Title": "Summary Graphic for Digital Media",
  "ds18Desc": "Key findings condensed into an accessible, clean social graphic spread."
},
  ar: {
  "navHome": "الرئيسية",
  "navAbout": "عن المتخصص",
  "navEthics": "أخلاقيات الميدان والموافقة",
  "navHumanInterest": "تصوير إنساني",
  "navDocField": "تصوير ميداني وثائقي",
  "navVideoMotion": "فيديو ومونتاج",
  "navAerialDrone": "تصوير جوي بالدرون",
  "navDesignLayout": "تصميم وإخراج بصري",
  "navDigitalSocial": "محتوى رقمي",
  "navCV": "السيرة الذاتية والمؤهلات",
  "navContact": "تواصل معي",
  "navBrandRole": "متخصص اتصالات بصرية ومحتوى ميداني",
  "heroBadge": "متخصص اتصالات بصرية وتصوير ميداني وثائقي",
  "heroTitleLine1": "توثيق يحفظ الكرامة الإنسانية.",
  "heroTitleLine2": "سرد قصصي مؤثر وإنتاج بصري متكامل.",
  "heroDesc": "متخصص اتصالات بصرية وتصوير فوتوغرافي محترف، مكرس لتوثيق المهام الميدانية، تعزيز صمود المجتمعات، إبراز القصص الإنسانية الأصيلة، والمسح الجوي المكاني وإنتاج الوسائط عالية التأثير.",
  "btnExploreGallery": "استعراض معرض المحتوى",
  "btnReviewEthics": "أخلاقيات ومعايير الميدان",
  "btnContactHero": "طلب مهمة ميدانية",
  "heroTrustLabel": "معايير التنفيذ الميداني:",
  "trustTag1": "التزام تام بالموافقة المستنيرة",
  "trustTag2": "صون الكرامة والابتعاد عن الإثارة",
  "trustTag3": "جاهزية تامة للانتشار الميداني السريع",
  "trustTag4": "إدارة وأرشفة الأصول الرقمية (DAM)",
  "aboutEyebrow": "الملف المهني",
  "aboutTitle": "سارد بصري ومتخصص في الاتصالات الميدانية والوسائط المتعددة",
  "aboutLead": "متخصص في الاتصالات البصرية والتصوير الميداني، حاصل على بكالوريوس تقنية المعلومات (B.Sc. IT). أجمع بين دقة الأنظمة التقنية والتعاطف الإنساني العميق في توثيق الواقع.",
  "aboutBody1": "يرتكز عملي على التقاط قصص بصرية أصيلة تحفظ كرامة الإنسان وتنبذ الإثارة المشوهة، مع الالتزام الصارم بمبادئ الموافقة المستنيرة، حماية الطفل، ومراعاة الخصوصية الثقافية في البيئات الميدانية الصعبة.",
  "aboutBody2": "يقدم هذا المعرض المرجعي نماذج مختارة مصنفة حصرياً حسب نوع المحتوى وطبيعة المهمة البصرية — متضمنة القصص الإنسانية، التوثيق الميداني، التصوير الجوي، المونتاج، والتصميم البصري.",
  "aboutStat1Title": "تقنية المعلومات + الأرشفة البصرية",
  "aboutStat1Desc": "إدارة الأصول الرقمية، فهرسة البيانات الوصفية، والنسخ السحابي الآمن",
  "aboutStat2Title": "توثيق يحفظ الكرامة الإنسانية",
  "aboutStat2Desc": "احترام الموافقة المستنيرة والخصوصية في كافة مراحل التوثيق",
  "aboutStat3Title": "جاهزية ميدانية متكاملة",
  "aboutStat3Desc": "استجابة سريعة للمهام، قدرة على العمل تحت الضغط، وإنجاز سريع",
  "aboutStat4Title": "إنتاج متعدد المنصات",
  "aboutStat4Desc": "تقديم مقالات مصورة، مقاطع فيديو سينمائية، خرائط جوية، وتصاميم",
  "aboutBadgeTitle": "بكري (أبوبكر علي)",
  "aboutBadgeText": "بكالوريوس تقنية معلومات • متخصص اتصالات بصرية ميدانية",
  "respEyebrow": "المعايير والضوابط الأخلاقية",
  "respTitle": "توثيق بصري مسؤول وأخلاقي يحفظ الكرامة",
  "respQuote": "\"التميز البصري في الميدان يفقد كل معانيه دون الاحترام العميق لكرامة الإنسان، الصدق السياقي، والالتزام الصارم بمبدأ الموافقة المستنيرة. كل مهمة تصوير هي أمانة ومسؤولية أخلاقية.\"",
  "respPillar1Title": "الموافقة المستنيرة والتطوعية",
  "respPillar1Desc": "التأكد التام من فهم الأشخاص لغرض وسياق وقنوات نشر المادة المصورة قبل بدء التصوير.",
  "respPillar2Title": "الصدق السياقي وصون الكرامة",
  "respPillar2Desc": "نبذ الإثارة واستغلال الضعف أو الاقتطاع المضلل؛ وإظهار المجتمعات بقوتها وصمودها الحقيقي.",
  "respPillar3Title": "حماية الأطفال والفئات المستضعفة",
  "respPillar3Desc": "تطبيق صارم للمبادئ الدولية لحماية الأطفال والنازحين والحرص على سلامتهم ومصالحهم الفضلى.",
  "respPillar4Title": "أمن البيانات وسرية الأصول",
  "respPillar4Desc": "تأمين الملفات وسريتها، الالتزام بفترات حظر النشر المحددة، وأرشفة المواد الحساسة وفق أعلى المعايير.",
  "hiBannerTitle": "قسم التصوير الإنساني وقصص المجتمعات",
  "hiBannerSubtitle": "قسم مخصص حصرياً للصور التي تبرز الجانب الإنساني: وجوه الأشخاص، تلاحم المجتمعات، ولحظات الأمل الحقيقية بموجب موافقة مستنيرة تامة.",
  "hiBannerAction": "استعراض الأعمال الإنسانية",
  "portEyebrow": "معرض الأعمال",
  "portTitle": "معرض المحتوى البصري المتخصص",
  "portSubtitle": "مصنف حصرياً حسب تخصصات ومجالات المحتوى وطبيعة المهمة، دون ذكر جهات عمل أو تواريخ.",
  "filterAll": "كافة الأعمال",
  "filterHumanInterest": "★ تصوير إنساني",
  "filterDocField": "تصوير ميداني وثائقي",
  "filterVideoMotion": "فيديو ومونتاج",
  "filterAerialDrone": "تصوير جوي بالدرون",
  "filterDesignLayout": "تصميم وإخراج بصري",
  "filterDigitalSocial": "محتوى رقمي وشبكات تواصل",
  "portfolioNote": "تنويه سلامة المحتوى: كافة النماذج المعروضة تُبرز التنفيذ التقني، الحرفية التوثيقية، وصناعة المحتوى البصري الهادف.",
  "catHumanInterest": "تصوير إنساني",
  "catDocField": "تصوير ميداني وثائقي",
  "catVideoMotion": "فيديو ومونتاج",
  "catAerialDrone": "تصوير جوي بالدرون",
  "catDesignLayout": "تصميم وإخراج بصري",
  "catDigitalSocial": "محتوى رقمي",
  "aerialEyebrow": "أبعاد مكانية شاملة",
  "aerialTitle": "التصوير والمسح الجوي بالدرون",
  "aerialSubtitle": "أعمال تصوير جوي سينمائية تبرز مهارة التحكم بالطيران، المسح المكاني، قياس الأبعاد الميدانية، وتوثيق التضاريس بدقة 4K.",
  "btnWatchCase": "مشاهدة العمل",
  "btnDirectPlay": "تشغيل مباشر",
  "capEyebrow": "القدرات الأساسية",
  "capTitle": "خدمات الاتصالات البصرية المتخصصة",
  "capSubtitle": "تقديم إنتاج وسائط متكامل مصمم لتلبية المعايير الدولية والاحترافية الميدانية.",
  "cap1Title": "التصوير الميداني والوثائقي",
  "cap1Desc": "توثيق بصري رفيع للعمليات والأنشطة الميدانية، سلاسل الإمداد اللوجستي، والفعاليات بصورة مهنية دقيقة.",
  "cap1f1": "تغطية النزول والمهام الميدانية",
  "cap1f2": "توثيق يركز على الإنسان باحترام",
  "cap1f3": "أرشفة وتصنيف البيانات الوصفية (Metadata)",
  "cap2Title": "إنتاج القصص الإنسانية",
  "cap2Desc": "التقاط قصص إنسانية مؤثرة وأصيلة تعكس الواقع بموافقة مستنيرة واحترام كامل للخصوصية.",
  "cap2f1": "توثيق تشاركي مع المجتمعات",
  "cap2f2": "إبراز قصص العزيمة والصلابة",
  "cap2f3": "امتثال كامل لمعايير السلامة والحماية",
  "cap3Title": "المونتاج والتصحيح اللوني",
  "cap3Desc": "إنتاج فيديو متكامل—بدءاً من إدارة الكاميرا الميدانية إلى القطع الإيقاعي السريع، المزامنة الصوتية، والتصحيح اللوني Rec.709.",
  "cap3f1": "أفلام ومقاطع توثيقية قصيرة",
  "cap3f2": "مونتاج حركي متناسق وإيقاع سلس",
  "cap3f3": "معايرة وتصحيح الألوان سينمائياً",
  "cap4Title": "المسح والتصوير الجوي بالدرون",
  "cap4Desc": "لقطات جوية سينمائية بدقة 4K لتوثيق المساحات المفتوحة، حجم المنشآت، وتضاريس الموقع بدقة وأمان.",
  "cap4f1": "تخطيط ومسح الأبعاد الجغرافية",
  "cap4f2": "توثيق تطور البنية التحتية والمواقع",
  "cap4f3": "لقطات تتبع جوية فائقة الدقة 4K",
  "synergyTitle": "الميزة التقنية: بكالوريوس تقنية معلومات + الإنتاج البصري",
  "synergyDesc": "تمنحني الخلفية الأكاديمية في تقنية المعلومات ميزة استثنائية في إدارة وتصنيف الأصول الرقمية، الفهرسة الوصفية الدقيقة، النسخ الاحتياطي المشفر، وتحويل البيانات المعقدة إلى مواد بصرية جذابة.",
  "cvEyebrow": "المؤهلات وسجل الإنجاز",
  "cvTitle": "السيرة الذاتية والمؤهلات",
  "cvDesc": "استعراض المؤهلات التقنية، الدرجة العلمية في تقنية المعلومات، برامج الإنتاج الإبداعي، والخبرات الميدانية المتراكمة.",
  "cvBtnDownload": "طلب السيرة الذاتية الكاملة (PDF)",
  "cvBtnPrint": "طباعة ملخص المؤهلات",
  "cvLabelName": "الاسم الكامل",
  "cvValName": "أبوبكر علي (بكري)",
  "cvLabelDegree": "الدرجة العلمية",
  "cvValDegree": "بكالوريوس في تقنية المعلومات (B.Sc. IT)",
  "cvLabelSpecialty": "التخصص الأساسي",
  "cvValSpecialty": "اتصالات بصرية وتصوير ميداني وثائقي",
  "cvLabelLangs": "اللغات",
  "cvValLangs": "العربية (اللغة الأم) • الإنجليزية (مهنية متقدمة)",
  "cvLabelLocation": "الجاهزية الميدانية",
  "cvValLocation": "السودان • متاح للمهام الميدانية محلياً ودولياً",
  "contactEyebrow": "الاستفسارات والمهام",
  "contactTitle": "تواصل معي / طلب مهمة ميدانية",
  "contactSubtitle": "متاح لمهام التوثيق الميداني، مشاريع الاتصالات البصرية، مونتاج الفيديو، وإنتاج المواد الإنسانية والتنموية.",
  "contactEmailLabel": "البريد الإلكتروني المباشر",
  "contactPhoneLabel": "الهاتف / واتساب",
  "contactLocLabel": "مقر العمل",
  "contactLocVal": "الخرطوم، السودان • متاح للسفر والمهام الميدانية",
  "contactAvailabilityLabel": "حالة التفرغ",
  "contactAvailabilityVal": "متاح حالياً للمهام والتعاقدات الميدانية",
  "formName": "الاسم الكامل",
  "formNamePlh": "مثال: أحمد محمد",
  "formEmail": "البريد الإلكتروني المهني",
  "formEmailPlh": "name@organization.org",
  "formOrg": "الجهة / المشروع",
  "formOrgPlh": "مثال: مشروع ميداني / مبادرة مجتمعية",
  "formSubject": "طبيعة المهمة",
  "formSubjectPlh": "مثال: مهمة تصوير ميداني / إنتاج فيديو",
  "formMsg": "موجز المهمة / الأهداف",
  "formMsgPlh": "يرجى ذكر نبذة مختصرة عن موقع المهمة، أهدافها، الإطار الزمني، والمخرجات المطلوبة...",
  "btnSendMsg": "إرسال موجز المهمة",
  "msgSuccess": "شكراً لك! تم استلام موجز المهمة وسنقوم بالتواصل معك فوراً...",
  "modalOverviewTitle": "موجز المهمة والسياق",
  "modalObjectiveTitle": "الهدف البصري والتقني",
  "modalRoleTitle": "التنفيذ والحرفية التقنية",
  "specTitlePlatform": "معدة ومنصة التصوير",
  "specTitleRes": "دقة التصوير",
  "specTitleFps": "معدل الإطارات",
  "specTitleColor": "المعايرة والتصحيح اللوني",
  "specTitleSuite": "برامج المونتاج والمعالجة",
  "footerDesc": "المعرض المرجعي الرسمي للمتخصص بكري — اتصالات بصرية وتصوير ميداني وثائقي. مكرس لصون الكرامة الإنسانية وإبراز الصمود المجتمعي وإنتاج المحتوى المؤثر.",
  "footerCopy": "© 2026 بكري (أبوبكر علي). جميع الحقوق محفوظة.",
  "footerDisclaimer": "مرجع المحتوى: تم تصنيف كافة المواد المعروضة وفق نوع المحتوى وطبيعة المهمة، تأكيداً على الحرفية التقنية والسرد البصري الهادف.",
  "footerBackTop": "العودة إلى الأعلى ↑",
  "vidAerial1Title": "مسح جوي مكاني وتخطيط بيئي شامل",
  "vidAerial1Desc": "لقطات جوية سينمائية بدقة 4K توثق اتساع الموقع وتضاريسه وتخطيطه المكاني.",
  "vidAerial1Role": "تشغيل وإدارة طيران الدرون، تصوير 4K ومعالجة ومونتاج سينمائي",
  "vidAerial1Objective": "توثيق التوزيع المكاني والسياق الجغرافي للمسح الميداني والتحليل الهيكلي.",
  "vidAerial2Title": "توثيق جوي لحجم البنية التحتية والموقع",
  "vidAerial2Desc": "مسار طيران جوي انسيابي يبرز النطاق الجغرافي وحجم المنشآت الميدانية.",
  "vidAerial2Role": "ملاحة طيران دقيقة وتصوير جوي سينمائي من ارتفاعات عالية",
  "vidAerial2Objective": "توفير رؤية مكانية واضحة لتخطيط الموقع وحجم المنشآت الميدانية.",
  "vidAerial3Title": "مسح جوي للتضاريس والسياق البيئي",
  "vidAerial3Desc": "رؤية بيئية شاملة من ارتفاع جوي للمسح الجغرافي وتحديد الاتجاهات.",
  "vidAerial3Role": "تصوير مسحي جوي ومعايرة توازن خط الأفق والإضاءة الطبيعية",
  "vidAerial3Objective": "توثيق المحيط البيئي ومسارات الوصول إلى المواقع الميدانية البعيدة.",
  "vidAerial4Title": "تتبع جوي ديناميكي ودوران سينمائي",
  "vidAerial4Desc": "مناورة طيران احترافية تسلط الضوء على المعالم الميدانية بحركة دوران سلسة.",
  "vidAerial4Role": "تحكم يدوي احترافي بمسار الطيران وحركة الكاميرا المحورية (Gimbal)",
  "vidAerial4Objective": "إبراز ديناميكية حركة الكاميرا، العمق المكاني، والانتقال السلس في السرعة.",
  "vidMotion1Title": "مونتاج فيديو ميداني ديناميكي متسارع",
  "vidMotion1Desc": "مونتاج فيديو قصير يبرز سرعة الإيقاع، استمرارية المشاهد، والحيوية البصرية.",
  "vidMotion1Role": "المونتاج التحريري، ضبط الإيقاع الحركي، وتزامن الانتقالات",
  "vidMotion1Objective": "إبراز تقنيات المونتاج الإيقاعي السريع المناسب للمنصات الرقمية.",
  "vidMotion2Title": "تصوير سينمائي ميداني ومعايرة لونية احترافية",
  "vidMotion2Desc": "حركة كاميرا ميدانية سلسة، التقاط الإضاءة الطبيعية، وتصحيح لوني Rec.709.",
  "vidMotion2Role": "التصوير السينمائي الميداني، موازنة الإضاءة، وضبط تدفق الألوان",
  "vidMotion2Objective": "تقديم جودة سينمائية وتناغم لوني تحت ظروف الإضاءة الخارجية المختلفة.",
  "vidMotion3Title": "إنتاج فيديو تعريفي قصير وهندسة صوتية متزامنة",
  "vidMotion3Desc": "مونتاج فيديو متقن مع هندسة صوتية متزامنة، موازنة الأصوات، وانتقالات نظيفة.",
  "vidMotion3Role": "ما بعد الإنتاج المتكامل، المزج الصوتي، والتشطيب النهائي للفيديو",
  "vidMotion3Objective": "إنتاج محتوى فيديو تعريفي وجذاب يوصل الرسائل الأساسية بوضوح.",
  "vidMotion4Title": "لقطات توثيقية حية من الموقع الميداني",
  "vidMotion4Desc": "تسجيل ميداني سينمائي حي يوثق أجواء الموقع والأصوات الطبيعية الأصيلة.",
  "vidMotion4Role": "إدارة الكاميرا في الموقع الميداني والتسجيل الصوتي المحيطي",
  "vidMotion4Objective": "الحفاظ على السياق الميداني الواقعي وأجواء العمل الحقيقية دون افتعال.",
  "vidMotion5Title": "حركة كاميرا ميدانية وتتبع سينمائي انسيابي",
  "vidMotion5Desc": "تتبع بالكاميرا عالية الدقة يبرز العمق المكاني والحركة البصرية المستمرة.",
  "vidMotion5Role": "تثبيت الكاميرا بالمثبت الإلكتروني والتصوير التتبعي المكاني",
  "vidMotion5Objective": "منح المشاهد تجربة معايشة غامرة عبر حركة الكاميرا المتواصلة والانسيابية.",
  "vidMotion6Title": "تسلسل فيديو إيقاعي وتزامن حركي متقن",
  "vidMotion6Desc": "مونتاج متعدد المسارات يتميز بالتوافق الدقيق بين القطع البصري والإيقاع الصوتي.",
  "vidMotion6Role": "مونتاج المسارات المتعددة والمزامنة الدقيقة بين الصوت والصورة",
  "vidMotion6Objective": "إبراز دقة التقطيع البصري المتناغم مع متطلبات المنصات الرقمية الحديثة.",
  "vidMotion7Title": "تصحيح لوني وتتابع بصري احترافي",
  "vidMotion7Desc": "معالجة لونية متقدمة تضمن الاتساق البصري التام بين المشاهد واللقطات المختلفة.",
  "vidMotion7Role": "معايرة الألوان، ضبط منحنيات الإضاءة، ومطابقة المشاهد المختلفة",
  "vidMotion7Objective": "تحقيق توحيد لوني سينمائي منضبط عبر المشاهد الملتقطة في إضاءات متباينة.",
  "vidMotion8Title": "مؤثرات بصرية وتصميم عناوين حركية",
  "vidMotion8Desc": "دمج الطبقات البصرية، حركة النصوص الإيضاحية، وتقنيات الجرافيكس المتقدمة.",
  "vidMotion8Role": "تصميم الجرافيكس الحركي، تحريك النصوص، ودمج المؤثرات البصرية",
  "vidMotion8Objective": "دمج النصوص المتحركة والمؤثرات البصرية لدعم وصول الرسالة التوضيحية.",
  "hi1Title": "توثيق التفاعل والحوار المجتمعي",
  "hi1Desc": "توثيق التفاعل المجتمعي والحوار الميداني المباشر بموافقة مستنيرة كاملة.",
  "hi2Title": "عزيمة وأمل فئة الشباب في الميدان",
  "hi2Desc": "التقاط روح الأمل والتفاؤل والمشاركة الفاعلة للشباب خلال نشاط ميداني.",
  "hi3Title": "الاستماع المجتمعي والتواصل المباشر",
  "hi3Desc": "الاستماع إلى آراء أفراد المجتمع وتطلعاتهم أثناء زيارة ميدانية تفاعلية.",
  "hi4Title": "ملامح الكرامة اليومية والروح المجتمعية",
  "hi4Desc": "توثيق ملامح الحياة اليومية للمجتمع بروح من الكرامة والتعاطف والاحترام.",
  "hi5Title": "التضامن والتكافل المجتمعي الأصيل",
  "hi5Desc": "إبراز مشاعر التكافل والتعاون المشترك بين الأهالي أثناء تنفيذ الأنشطة.",
  "hi6Title": "جلسة تشاركية تفاعلية مع المجتمع",
  "hi6Desc": "مشاركة فاعلة لأفراد المجتمع في حلقة نقاش ميدانية تشاركية منظمة.",
  "hi7Title": "قصص العزيمة والصلابة المجتمعية",
  "hi7Desc": "التقاط تعابير إنسانية حقيقية تعكس الصلابة والصمود والعزيمة الصادقة.",
  "hi8Title": "لقاء مجتمعي وتبادل للآراء",
  "hi8Desc": "توثيق بصري محترم لأهالي المجتمع أثناء التقائهم خلال مهمة ميدانية.",
  "hi9Title": "أصوات ورؤى مباشرة من الميدان",
  "hi9Desc": "توثيق الحوار الصادق ووجهات النظر المجتمعية بروح من التقدير المتبادل.",
  "hi10Title": "تواصل الأجيال والتلاحم المجتمعي",
  "hi10Desc": "توثيق بصري يعكس عمق الترابط والتواصل المتين بين مختلف الأجيال.",
  "hi11Title": "بناء الثقة والتواصل الإنساني",
  "hi11Desc": "ترسيخ الثقة والتواصل الصادق عبر الالتزام بأخلاقيات التوثيق البصري.",
  "hi12Title": "قصة إنسانية: القوة والتطلع للأفضل",
  "hi12Desc": "بورتريه إنساني هادف يبرز القوة الذاتية، الأمل، والتطلع لمستقبل أفضل.",
  "hi13Title": "تفاعل إنساني يحفظ الكرامة والحضور",
  "hi13Desc": "توثيق التفاعل الميداني مع الحرص التام على صون كرامة واستقلالية أصحاب الصورة.",
  "hi14Title": "حضور إنساني أصيل في قلب الميدان",
  "hi14Desc": "إبراز الحضور الإنساني الأصيل والروح المجتمعية النابضة بالحياة أثناء المهمة.",
  "hi15Title": "بورتريه يجسد الصمود والأمل",
  "hi15Desc": "بورتريه بيئي ملتقط بموافقة مستنيرة صريحة تعلي من شأن وكرامة الفرد.",
  "hi16Title": "قصة إنسانية: بورتريه شخصي مفعم بالكرامة",
  "hi16Desc": "تكريم الإرادة الإنسانية والكرامة الذاتية في بيئة طبيعية خالية من التصنع.",
  "hi17Title": "تكاتف مجتمعي والتفاف حول الهدف",
  "hi17Desc": "توثيق التماسك المجتمعي والالتزام المشترك بدعم المبادرات المحلية.",
  "hi18Title": "المشاركة الفاعلة والتمكين المجتمعي",
  "hi18Desc": "إبراز دور أفراد المجتمع في قيادة والمشاركة في مبادراتهم التنموية.",
  "hi19Title": "قصة إنسانية: التركيز والالتزام الصادق",
  "hi19Desc": "التقاط مشاعر التفاني والتركيز الصادق خلال جلسة تعليمية وبناء قدرات.",
  "hi20Title": "حوار وتواصل إنساني مباشر في الميدان",
  "hi20Desc": "توثيق صادق لحلقات النقاش المفتوح والاستماع المتبادل في الميدان.",
  "hi21Title": "لحظات إنسانية مشتركة وابتسامات حقيقية",
  "hi21Desc": "توثيق الدفء الإنساني المشترك، الابتسامات الصادقة، وفرحة اللقاء المجتمعي.",
  "hi22Title": "قصة إنسانية: الشغف بالتعلم والمعرفة",
  "hi22Desc": "التقاط الشغف باكتساب المهارات والمشاركة الفاعلة في جلسات التطوير.",
  "hi23Title": "التعاون المجتمعي المشترك وصناعة الأمل",
  "hi23Desc": "لحظات تعاون بشري ملتقطة بموافقة مستنيرة كاملة وتقدير عميق للجهد المبذول.",
  "hi24Title": "التواصل والترابط الإنساني في البيئة الميدانية",
  "hi24Desc": "توثيق محوره الإنسان يبرز التعاطف والتواصل البناء بين المشاركين.",
  "hi25Title": "أصالة وكرامة في تفاصيل العمل اليومي",
  "hi25Desc": "انعكاس أصيل للكرامة الشخصية، المثابرة، والجهد الإنساني المخلص.",
  "hi26Title": "مادة بصرية للمناصرة وحقوق الإنسان",
  "hi26Desc": "سرد بصري هادف يركز على حقوق الإنسان، الكرامة المجتمعية، والعدالة.",
  "df1Title": "جلسة إحاطة وتنسيق للعمليات الميدانية",
  "df1Desc": "جلسة إحاطة ميدانية لتنظيم مسارات العمل والتحضير للتوزيع الميداني.",
  "df2Title": "تنسيق انتشار فرق العمل الميدانية",
  "df2Desc": "توثيق انتشار وتنسيق فرق العمل الميدانية عبر مناطق تنفيذ الأنشطة.",
  "df3Title": "تقييم ميداني لموقع تنفيذ الأنشطة",
  "df3Desc": "توثيق بصري لجاهزية الموقع، مسارات الدخول، والترتيبات اللوجستية.",
  "df4Title": "متابعة تنفيذ الأنشطة الميدانية",
  "df4Desc": "توثيق سير تنفيذ الأنشطة الميدانية المنظمة والالتزام بالمعايير الإجرائية.",
  "df5Title": "متابعة وتقييم مجريات الزيارة الميدانية",
  "df5Desc": "توثيق بصري لعمليات المراقبة الميدانية، متابعة التقدم، والتحقق المباشر.",
  "df6Title": "معاينة لوجستية وتفقد للموقع الميداني",
  "df6Desc": "معاينة بصرية دقيقة لنقاط الإمداد اللوجستي الميدانية وتنسيق التخزين.",
  "df7Title": "مراجعة مخرجات ومراحل العمل الميداني",
  "df7Desc": "توثيق مراحل إنجاز المهام الميدانية وجلسات التقييم المباشرة في الموقع.",
  "df8Title": "توثيق مجريات ورش العمل الميدانية",
  "df8Desc": "توثيق جلسات ورش العمل الميدانية التفاعلية والنقاشات المشتركة.",
  "df9Title": "تغطية لوجستيات وسلاسل الإمداد الميدانية",
  "df9Desc": "متابعة حركة الإمدادات، وصول المواد، والترتيب اللوجستي المنظم في الموقع.",
  "df10Title": "منتدى مجتمعي وجلسة تشاور ميدانية",
  "df10Desc": "توثيق ميداني لمجريات الجلسات التشاورية المفتوحة ونقاشات أصحاب المصلحة.",
  "df11Title": "الدعم الميداني وتجهيز بيئة العمل",
  "df11Desc": "توثيق الجاهزية التشغيلية، إعداد المعدات، وتقديم الدعم اللوجستي في الميدان.",
  "df12Title": "تغطية الفعاليات الميدانية والتجمع المنظم",
  "df12Desc": "توثيق بصري لتجمع وتنظيم المشاركين بصورة مهنية خلال فعالية ميدانية.",
  "df13Title": "جلسة تفاعلية ضمن الأنشطة الميدانية",
  "df13Desc": "توثيق خطوات تنفيذ النشاط الميداني والتفاعل الإيجابي للمشاركين.",
  "df14Title": "مراجعة وتدقيق ميداني لمجريات النشاط",
  "df14Desc": "توثيق ميداني للمراجعات الإجرائية والتحقق من سير العمل بدقة ومسؤولية.",
  "df15Title": "استكمال المهام الميدانية والمراجعة النهائية",
  "df15Desc": "توثيق اختتام المهام الميدانية، تنسيق الفريق، وإنجاز المخرجات المطلوبة.",
  "dl1Title": "إخراج وتنسيق المطبوعات والتقارير التحريرية",
  "dl1Desc": "هيكلية بصرية نظيفة، تخطيط تحريري منظم، وتصميم طباعي ثنائي اللغة.",
  "dl2Title": "هيكلة وتصميم المعلومات البصرية",
  "dl2Desc": "ترتيب تسلسل المعلومات وتنسيق بصري متناسق موجه للمطبوعات المتخصصة.",
  "dl3Title": "تصميم الرسوم البيانية وعرض المؤشرات",
  "dl3Desc": "تمثيل بصري للبيانات والمؤشرات الأساسية عبر مخططات ورسوم بيانية واضحة.",
  "dl4Title": "إخراج المواد للمنصات الرقمية والمطبوعة",
  "dl4Desc": "إخراج جاهز للطباعة والنشر الرقمي مع ضمان وضوح القراءة والجاذبية البصرية.",
  "dl5Title": "تصميم ملخصات الاتصال البصري والتقارير",
  "dl5Desc": "تصميم صفحات تقرير متناسقة مخصصة لملخصات القيادة والجهات المانحة.",
  "dl6Title": "إخراج وتصميم المواد والعروض التقديمية",
  "dl6Desc": "تصميم مواد بصرية وعروض حديثة بتدرج بصري واضح ومساحات متوازنة.",
  "ds1Title": "مادة بصرية لحملة توعية رقمية",
  "ds1Desc": "تصميم بصري مبتكر لمنصات التواصل مصمم لزيادة التفاعل ونشر الرسائل التوعوية.",
  "ds2Title": "تصميم مخصص لقصص ومنشورات التواصل",
  "ds2Desc": "محتوى بصري متوافق مع مقاسات الهواتف لمنشورات وقصص منصات التواصل الاجتماعي.",
  "ds3Title": "بطاقة معلومات رقمية لمنصات التواصل",
  "ds3Desc": "بطاقة معلوماتية مكثفة مصممة للفهم البصري السريع عبر المنصات الرقمية.",
  "ds4Title": "إعلان رقمي لشبكات التواصل الاجتماعي",
  "ds4Desc": "تصميم رقمي أنيق مخصص للبث عبر مختلف المنصات ونشر التنبيهات المهمة.",
  "ds5Title": "محتوى بصري للتفاعل والمشاركة المجتمعية",
  "ds5Desc": "مادة بصرية مصممة لتشجيع المشاركة المجتمعية وبناء الحوار التفاعلي.",
  "ds6Title": "شريحة إنفوجرافيك لمنصات التواصل",
  "ds6Desc": "تلخيص أهم البيانات في تصميم إنفوجرافيك ميسر وجذاب قابل للمشاركة السريعة.",
  "ds7Title": "بانر رقمي للمبادرات والعمل المجتمعي",
  "ds7Desc": "تصميم رقمي يسلط الضوء على المبادرات المجتمعية وروح العمل الجماعي.",
  "ds8Title": "محتوى بصري متكامل للحملات الرقمية",
  "ds8Desc": "عنصر ضمن حزمة بصرية متكاملة للحملات، مهيأ للمواقع ومنشورات الحسابات.",
  "ds9Title": "مادة بصرية لتعزيز الحضور والظهور الرقمي",
  "ds9Desc": "تصميم يعزز الحضور البصري المنضبط مع الالتزام بالهوية البصرية المؤسسية.",
  "ds10Title": "تغطية بصرية سريعة لأبرز اللحظات",
  "ds10Desc": "مادة بصرية منجزة بسرعة لمنصات التواصل لنقل التحديثات والإنجازات الميدانية.",
  "ds11Title": "تحديث بصري ميداني للنشر الفوري",
  "ds11Desc": "لقطة ميدانية مجهزة للنشر الرقمي الفوري لمواكبة مجريات العمل أولاً بأول.",
  "ds12Title": "محتوى بصري تفاعلي لقصص المتابعين",
  "ds12Desc": "تصميم بصري جذاب مخصص لإثارة اهتمام المتابعين وتحفيز التفاعل الإيجابي.",
  "ds13Title": "تصميم رقمي متعدد المنصات والقياسات",
  "ds13Desc": "مادة بصرية متعددة المقاسات تبرز مراحل المشروع بتسلسل بصري واضح.",
  "ds14Title": "مادة بصرية للتواصل والوصول الرقمي",
  "ds14Desc": "تصميم موجه لتعزيز التواصل المجتمعي وإيصال المعلومات الأساسية بسلاسة.",
  "ds15Title": "بانر رقمي للتوعية والتثقيف العام",
  "ds15Desc": "بانر رقمي عالي التباين مصمم للقراءة الواضحة ولفت الانتباه للرسائل الهامة.",
  "ds16Title": "بطاقة رقمية تسلط الضوء على الرسائل الأساسية",
  "ds16Desc": "بطاقة ثنائية اللغة تسلط الضوء على أهم النتائج والنقاط العملية المستفادة.",
  "ds17Title": "منشور رقمي لحملات التوعية الميدانية",
  "ds17Desc": "منشور رقمي مخصص للصفحات الإخبارية يجمع بين وضوح النص وجاذبية الصورة.",
  "ds18Title": "رسم بياني وتلخيصي موجه للإعلام الرقمي",
  "ds18Desc": "أهم الخلاصات والمعلومات مصاغة في تصميم رقمي ملخص وأنيق سهل التداول."
}
};

// ==========================================================================
// 3. APPLICATION STATE & INITIALIZATION
// ==========================================================================

let currentLang = 'en';
let currentFilter = 'all';
let currentLightboxIndex = 0;
let activeGalleryList = [];

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('bakri_lang') || 'en';
  currentLang = savedLang;
  
  setupNavigation();
  setupFilterTabs();
  setupModals();
  setupContactForm();
  
  // Initial render
  applyTranslations(currentLang);
  renderAerialShowcase();
  
  // Check URL hash for direct filter selection
  const initialHash = window.location.hash.replace('#', '');
  if (['human-interest', 'doc-field', 'video-motion', 'aerial-drone', 'design-layout', 'digital-social'].includes(initialHash)) {
    activateFilter(initialHash);
  } else {
    renderPortfolioGrid('all');
  }
  
  setupScrollAnimations();
  setupVideoAutoplay();
});

// ==========================================================================
// 4. LANGUAGE SWITCHER SYSTEM (EN / AR)
// ==========================================================================

function switchLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('bakri_lang', currentLang);
  
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  
  applyTranslations(currentLang);
  renderAerialShowcase();
  renderPortfolioGrid(currentFilter);
}

function applyTranslations(lang) {
  const dict = i18n[lang];
  if (!dict) return;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Attributes (placeholders, titles, etc.)
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const attrData = el.getAttribute('data-i18n-attr');
    const [attr, key] = attrData.split(':');
    if (attr && key && dict[key]) {
      el.setAttribute(attr, dict[key]);
    }
  });

  // Language toggle button label
  const toggleBtnText = document.getElementById('lang-toggle-text');
  if (toggleBtnText) {
    toggleBtnText.textContent = lang === 'en' ? 'العربية' : 'English';
  }
}

// ==========================================================================
// 5. NAVIGATION & DIRECT FILTER REDIRECTION
// ==========================================================================

function setupNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const langToggle = document.getElementById('lang-toggle');

  if (langToggle) {
    langToggle.addEventListener('click', switchLanguage);
  }

  // Scroll styling
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

  // Intercept category hash clicks to automatically activate filter and scroll
  const categoryHashMap = {
    '#human-interest': 'human-interest',
    '#doc-field': 'doc-field',
    '#video-motion': 'video-motion',
    '#aerial-drone': 'aerial-drone',
    '#design-layout': 'design-layout',
    '#digital-social': 'digital-social'
  };

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetHash = anchor.getAttribute('href');
      if (categoryHashMap[targetHash]) {
        e.preventDefault();
        activateFilter(categoryHashMap[targetHash]);
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

function activateFilter(categoryKey) {
  currentFilter = categoryKey;
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(b => {
    if (b.getAttribute('data-filter') === categoryKey) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
  renderPortfolioGrid(categoryKey);
}

// ==========================================================================
// 6. PORTFOLIO FILTERABLE GALLERY (6 CATEGORIES)
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

  const vidItems = videoProjects.map(v => ({
    type: 'video',
    id: v.id,
    src: v.src,
    poster: v.poster,
    category: v.category,
    title: dict[v.titleKey] || "Video Production",
    desc: dict[v.descKey] || "Cinematography & Editing"
  }));

  const photoItems = photographyItems.map((p, idx) => ({
    type: 'photo',
    id: 'p-' + idx,
    src: p.image,
    category: p.category,
    title: dict[p.titleKey] || "Field Documentation",
    desc: dict[p.descKey] || "Visual Content"
  }));

  if (filter === 'all') {
    // Show balanced blend
    items = [...vidItems, ...photoItems];
  } else if (filter === 'video-motion') {
    items = vidItems.filter(v => v.category === 'video-motion');
  } else if (filter === 'aerial-drone') {
    items = vidItems.filter(v => v.category === 'aerial-drone');
  } else {
    items = photoItems.filter(p => p.category === filter);
  }

  activeGalleryList = items;

  grid.innerHTML = items.map((item, index) => {
    let categoryBadgeName = "";
    if (item.category === 'human-interest') {
      categoryBadgeName = dict.catHumanInterest || "Human-Interest Photography";
    } else if (item.category === 'doc-field') {
      categoryBadgeName = dict.catDocField || "Documentary & Field";
    } else if (item.category === 'video-motion') {
      categoryBadgeName = dict.catVideoMotion || "Video & Motion";
    } else if (item.category === 'aerial-drone') {
      categoryBadgeName = dict.catAerialDrone || "Aerial Cinematography";
    } else if (item.category === 'design-layout') {
      categoryBadgeName = dict.catDesignLayout || "Design & Layout";
    } else if (item.category === 'digital-social') {
      categoryBadgeName = dict.catDigitalSocial || "Digital Content";
    }

    if (item.type === 'video') {
      return `
        <div class="portfolio-item reveal" onclick="openCaseStudyModal('${item.id}')">
          <span class="portfolio-badge badge-${item.category}">${categoryBadgeName}</span>
          <video class="autoplay-video" poster="${item.poster || 'w3.jpg'}" src="${encodeURI(item.src)}" muted loop playsinline preload="metadata"></video>
          <div class="video-play-hint">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <div class="portfolio-overlay">
            <span class="portfolio-category">${categoryBadgeName.toUpperCase()}</span>
            <h4 class="portfolio-item-title">${item.title}</h4>
            <p class="portfolio-item-desc">${item.desc}</p>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="portfolio-item reveal" onclick="openPhotoLightbox(${index})">
          <span class="portfolio-badge badge-${item.category}">${categoryBadgeName}</span>
          <img src="${encodeURI(item.src)}" alt="${item.title}" loading="lazy" decoding="async" onerror="this.src='w3.jpg'">
          <div class="portfolio-overlay">
            <span class="portfolio-category">${categoryBadgeName.toUpperCase()}</span>
            <h4 class="portfolio-item-title">${item.title}</h4>
            <p class="portfolio-item-desc">${item.desc}</p>
          </div>
        </div>
      `;
    }
  }).join('');

  setupScrollAnimations();
  setupVideoAutoplay();
}

// ==========================================================================
// 7. DEDICATED AERIAL PERSPECTIVES SHOWCASE
// ==========================================================================

function renderAerialShowcase() {
  const container = document.getElementById('aerial-showcase-container');
  if (!container) return;

  const dict = i18n[currentLang];
  const aerialVideos = videoProjects.filter(p => p.category === 'aerial-drone');

  container.innerHTML = aerialVideos.map((project, idx) => {
    return `
      <div class="video-card reveal">
        <div class="video-thumb-wrap" onclick="openCaseStudyModal('${project.id}')">
          <video class="autoplay-video" poster="${project.poster || 'w3.jpg'}" src="${encodeURI(project.src)}" muted loop playsinline preload="metadata"></video>
          <div class="play-overlay">
            <div class="play-btn-circle" title="${dict.btnDirectPlay}">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <span class="video-duration">${project.specs.resolution} • ${project.specs.framerate}</span>
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
// 8. MODAL: VIDEO CASE STUDY PLAYER
// ==========================================================================

function setupModals() {
  const caseModal = document.getElementById('case-study-modal-backdrop');
  const photoLightbox = document.getElementById('photo-lightbox-backdrop');

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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCaseStudyModal();
      closePhotoLightbox();
    }
    if (e.key === 'ArrowRight') nextLightboxItem();
    if (e.key === 'ArrowLeft') prevLightboxItem();
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
      <video id="modal-active-video" src="${encodeURI(project.src)}" controls autoplay playsinline></video>
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
// 9. MODAL: PHOTO LIGHTBOX
// ==========================================================================

function openPhotoLightbox(index) {
  currentLightboxIndex = index;
  const item = activeGalleryList[index];
  if (!item) return;

  const modal = document.getElementById('photo-lightbox-backdrop');
  const img = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');
  const counter = document.getElementById('lightbox-counter');

  img.src = encodeURI(item.src);
  caption.innerHTML = `<strong>${item.title}</strong><br><span style="font-size:0.85rem; color:var(--text-muted);">${item.desc}</span>`;
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
// 10. CONTACT FORM HANDLER
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

      const mailtoUrl = `mailto:bekosoft149@gmail.com?subject=${encodeURIComponent(`[Field Assignment / Portfolio Inquiry] ${subject} - ${org}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nOrganization: ${org}\n\nAssignment Brief / Scope:\n${msg}`)}`;

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
// 11. SCROLL REVEAL ANIMATIONS & VIDEO AUTOPLAY
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

function setupVideoAutoplay() {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
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

  document.querySelectorAll('video.autoplay-video').forEach(video => {
    videoObserver.observe(video);
  });
}
