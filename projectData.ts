import { DigitalDesignIcon } from './components/icons/DigitalDesignIcon';
import { PhotographyIcon } from './components/icons/PhotographyIcon';
import { VideoEditingIcon } from './components/icons/VideoEditingIcon';
import { ProgrammingIcon } from './components/icons/ProgrammingIcon';
import { BrandingIcon } from './components/icons/BrandingIcon';
import { HtmlIcon } from './components/icons/HtmlIcon';
import { WebDevelopmentIcon } from './components/icons/WebDevelopmentIcon';
import { CloudServicesIcon } from './components/icons/CloudServicesIcon';

type Language = 'ar' | 'en';

// --- UI TEXT ---
export const uiText = {
  ar: {
    home: "الرئيسية",
    services: "خدماتنا",
    works: "أعمالنا",
    about: "من نحن",
    contact: "تواصل معنا",
    startProject: "ابدأ مشروعك",
    viewMore: "عرض المزيد",
    exploreCase: "عرض دراسة الحالة",
    colorSystem: "نظام الألوان",
    rights: "جميع الحقوق محفوظة",
    graphicDesign: "تصميم جرافيك",
    motionGraphics: "موشن جرافيك",
    trustedBy: "شركاء النجاح",
    caseStudies: "دراسات حالة",
    completeIdentities: "هويات بصرية",
    completeIdentitiesHighlight: "متكاملة"
  },
  en: {
    home: "Home",
    services: "Services",
    works: "Works",
    about: "About",
    contact: "Contact",
    startProject: "Start a Project",
    viewMore: "View More",
    exploreCase: "Explore Case Study",
    colorSystem: "Color System",
    rights: "All Rights Reserved",
    graphicDesign: "Graphic Design",
    motionGraphics: "Motion Graphics",
    trustedBy: "Trusted by Industry Leaders",
    caseStudies: "Case Studies",
    completeIdentities: "Complete",
    completeIdentitiesHighlight: "Visual Identities"
  }
};

// --- HERO SECTION ---
export const heroData = {
  ar: {
    titleLine1: "رؤية إبداعية.",
    titleLine2: "تقنية ذكية.",
    description: "نحن نمزج الإبداع مع أحدث التقنيات لنحقق أفكارك على أرض الواقع. من التصاميم المذهلة إلى التطبيقات القوية، نحن شركاؤك في الابتكار.",
    ctaPrimary: "اكتشف خدماتنا",
    ctaSecondary: "تواصل معنا"
  },
  en: {
    titleLine1: "Creative Vision.",
    titleLine2: "Smart Tech.",
    description: "We blend creativity with cutting-edge technology to bring your ideas to life. From stunning designs to robust applications, we are your partners in innovation.",
    ctaPrimary: "Explore Services",
    ctaSecondary: "Get in Touch"
  }
};

// --- SERVICES SECTION ---
export const servicesData = (lang: Language) => {
  const data = [
    { icon: DigitalDesignIcon, name: { ar: 'التصميم الرقمي', en: 'Digital Design' }, description: { ar: 'صياغة رسومات وواجهات مستخدم مذهلة بصرياً.', en: 'Crafting visually stunning graphics and user interfaces.' } },
    { icon: PhotographyIcon, name: { ar: 'التصوير الفوتوغرافي', en: 'Photography' }, description: { ar: 'التقاط اللحظات التي تحكي قصة مقنعة.', en: 'Capturing moments that tell a compelling story.' } },
    { icon: VideoEditingIcon, name: { ar: 'مونتاج الفيديو', en: 'Video Editing' }, description: { ar: 'إنتاج محتوى فيديو احترافي وجذاب.', en: 'Producing professional and engaging video content.' } },
    { icon: ProgrammingIcon, name: { ar: 'البرمجة', en: 'Programming' }, description: { ar: 'بناء حلول برمجية قوية وقابلة للتطوير.', en: 'Building robust and scalable software solutions.' } },
    { icon: BrandingIcon, name: { ar: 'الهوية البصرية', en: 'Branding' }, description: { ar: 'إنشاء هويات فريدة للعلامة التجارية تترسخ في الأذهان.', en: 'Creating unique brand identities that resonate with audiences.' } },
    { icon: HtmlIcon, name: { ar: 'تطوير الواجهات', en: 'Frontend Dev' }, description: { ar: 'تطوير مواقع ويب متجاوبة وتفاعلية.', en: 'Developing responsive and interactive websites.' } },
    { icon: WebDevelopmentIcon, name: { ar: 'تطوير الويب', en: 'Web Development' }, description: { ar: 'حلول متكاملة لتواجدك الرقمي على الويب.', en: 'Full-stack solutions for your online presence.' } },
    { icon: CloudServicesIcon, name: { ar: 'الخدمات السحابية', en: 'Cloud Services' }, description: { ar: 'الاستفادة من المنصات السحابية لزيادة الكفاءة.', en: 'Leveraging cloud platforms for scalability and efficiency.' } },
  ];
  return data.map(item => ({
    ...item,
    name: item.name[lang],
    description: item.description[lang]
  }));
};

// --- PORTFOLIO SECTION ---
export const portfolioData = (lang: Language) => {
    // Shared images, just translating titles/cats
    const items = [
      {
        id: 1, type: 'graphic',
        category: { ar: "سوشيال ميديا", en: "Social Media" },
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1000&auto=format&fit=crop",
        title: { ar: "حملة التوصيل", en: "Delivery Campaign" }
      },
      {
        id: 2, type: 'graphic',
        category: { ar: "تصوير أطعمة", en: "Food Photography" },
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1000&auto=format&fit=crop",
        title: { ar: "حلويات شهية", en: "Sweet Delights" }
      },
      {
        id: 3, type: 'graphic',
        category: { ar: "هوية بصرية", en: "Brand Identity" },
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
        title: { ar: "مزاج البيتزا", en: "Pizza Mood" }
      },
      {
        id: 4, type: 'graphic',
        category: { ar: "تغليف", en: "Packaging" },
        image: "https://images.unsplash.com/photo-1589820296156-2454fb8a9554?q=80&w=1000&auto=format&fit=crop",
        title: { ar: "عبوات عصائر", en: "Juice Packaging" }
      },
      {
        id: 5, type: 'graphic',
        category: { ar: "مطبوعات", en: "Print Design" },
        image: "https://images.unsplash.com/photo-1626785774573-4b79931433da?q=80&w=1000&auto=format&fit=crop",
        title: { ar: "تصميم مجلة", en: "Magazine Layout" }
      },
      {
        id: 6, type: 'graphic',
        category: { ar: "ملابس", en: "Apparel" },
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
        title: { ar: "أزياء وطباعة", en: "Fashion & Print" }
      },
      // Motion
      {
        id: 7, type: 'motion',
        category: { ar: "أنيميشن 3D", en: "3D Animation" },
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
        title: { ar: "تدفق تجريدي", en: "Abstract Flow" }
      },
      {
        id: 8, type: 'motion',
        category: { ar: "إعلانات", en: "Commercial" },
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop",
        title: { ar: "مقدمة تقنية", en: "Tech Intro" }
      },
      {
        id: 9, type: 'motion',
        category: { ar: "تحريك شعار", en: "Logo Reveal" },
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
        title: { ar: "نيون جيمنج", en: "Neon Gaming" }
      },
      {
        id: 10, type: 'motion',
        category: { ar: "فيديو توضيحي", en: "Explainer Video" },
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        title: { ar: "جولة في التطبيق", en: "App Walkthrough" }
      },
      {
        id: 11, type: 'motion',
        category: { ar: "خدع بصرية", en: "VFX / Composite" },
        image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?q=80&w=1000&auto=format&fit=crop",
        title: { ar: "مشهد خيال علمي", en: "Sci-Fi Scene" }
      },
      {
        id: 12, type: 'motion',
        category: { ar: "تايبوجرافي", en: "Kinetic Typography" },
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
        title: { ar: "تحريك نصوص", en: "Text Animation" }
      }
    ];
    return items.map(item => ({
        ...item,
        category: item.category[lang],
        title: item.title[lang]
    }));
};

// --- BRAND IDENTITY SECTION ---
export const brandIdentityData = (lang: Language) => {
    const items = [
      {
        id: 1,
        title: { ar: "لومينا للمنازل الذكية", en: "Lumina Smart Home" },
        category: { ar: "تقنية & IoT", en: "Tech & IoT" },
        description: { 
            ar: "هوية مستقبلية لنظام بيئي للمنازل الذكية. ركزنا على الخطوط النظيفة ولوحة ألوان زرقاء نابضة بالحياة لنقل الثقة، الذكاء، والاتصال السلس.", 
            en: "A futuristic identity for a smart home ecosystem. We focused on clean lines and a vibrant blue palette to convey trust, intelligence, and seamless connectivity." 
        },
        colors: ['#0F172A', '#3B82F6', '#60A5FA', '#F1F5F9'],
        mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
        gridImages: [
          "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1550009158-9ebf690be310?q=80&w=1000&auto=format&fit=crop",
           "https://images.unsplash.com/photo-1558002038-1091a16627a3?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: 2,
        title: { ar: "فيلفيت & فاين", en: "Velvet & Vine" },
        category: { ar: "أزياء & لايف ستايل", en: "Fashion & Lifestyle" },
        description: { 
            ar: "لغة بصرية أنيقة وعضوية لعلامة تجارية للملابس المستدامة. تعكس الألوان الترابية والخطوط الكلاسيكية الطبيعة، الفخامة، والأسلوب الخالد.", 
            en: "An elegant and organic visual language for a sustainable clothing brand. The earthy tones and serif typography reflect nature, luxury, and timeless style." 
        },
        colors: ['#422006', '#A16207', '#EAB308', '#FEFCE8'],
        mainImage: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1000&auto=format&fit=crop",
        gridImages: [
          "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: 3,
        title: { ar: "نيون برست للطاقة", en: "Neon Burst Energy" },
        category: { ar: "مشروبات", en: "Beverage" },
        description: { 
            ar: "طاقة عالية، تأثير عالٍ. هوية علامة تجارية جريئة تركز على النيون صممت لتبرز على الرفوف وتجذب جمهور الألعاب.", 
            en: "High energy, high impact. A bold, neon-centric brand identity designed to stand out on the shelves and appeal to the gaming demographic." 
        },
        colors: ['#111111', '#CCFF00', '#FF0099', '#00FFFF'],
        mainImage: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000&auto=format&fit=crop",
        gridImages: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop"
        ]
      },
       {
        id: 4,
        title: { ar: "أورا سبا", en: "Aura Spa" },
        category: { ar: "عناية وجمال", en: "Wellness" },
        description: { 
            ar: "بساطة، صفاء، ونقاء. تستخدم الهوية ألوان الباستيل الناعمة والكثير من المساحات البيضاء لإثارة شعور بالهدوء والتجدد.", 
            en: "Minimalist, serene, and pure. The identity uses soft pastels and plenty of white space to evoke a sense of calm and restoration." 
        },
        colors: ['#Fdfbf7', '#D4A5A5', '#9CBFA7', '#E2E2E2'],
        mainImage: "https://images.unsplash.com/photo-1600334019640-eb38b4791d62?q=80&w=1000&auto=format&fit=crop",
        gridImages: [
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop"
        ]
      }
    ];
    return items.map(item => ({
        ...item,
        title: item.title[lang],
        category: item.category[lang],
        description: item.description[lang]
    }));
};

// --- CLIENTS SECTION ---
export const clientsData = [
  { id: 1, name: 'TechFlow', color: '#007BFF' },
  { id: 2, name: 'EcoLife', color: '#4CAF50' },
  { id: 3, name: 'BuildSmart', color: '#FF6F3C' },
  { id: 4, name: 'Creativa', color: '#9C27B0' },
  { id: 5, name: 'FoodieGo', color: '#FFC107' },
  { id: 6, name: 'SecureNet', color: '#607D8B' },
];

// --- ABOUT SECTION ---
export const aboutData = {
  ar: {
    title: "عن استوديو بكري",
    paragraph1: "استوديو بكري هو تجمع شغوف من المصممين والمطورين والمبدعين المكرسين لدفع حدود الابتكار الرقمي. نحن نؤمن بقوة الفكرة العظيمة المقترنة بالتنفيذ المتقن. مهمتنا هي تحويل رؤيتك إلى واقع رقمي لا يبدو جميلاً فحسب، بل يعمل ببراعة أيضاً.",
    paragraph2: "نحن نتعامل مع كل مشروع بروح تعاونية، ونعمل عن كثب مع عملائنا لفهم أهدافهم الفريدة. مع التركيز على الجودة والإبداع والتكنولوجيا، نقدم حلولاً تقود النمو وتخلق تأثيراً دائماً.",
    cta: "لنبدأ معاً"
  },
  en: {
    title: "About BAKRI Studio",
    paragraph1: "BAKRI Studio is a passionate collective of designers, developers, and creators dedicated to pushing the boundaries of digital innovation. We believe in the power of a great idea combined with flawless execution. Our mission is to transform your vision into a digital reality that not only looks beautiful but also performs brilliantly.",
    paragraph2: "We approach every project with a collaborative spirit, working closely with our clients to understand their unique goals. With a focus on quality, creativity, and technology, we deliver solutions that drive growth and create lasting impact.",
    cta: "Let's Create Together"
  },
  image: "https://picsum.photos/600/400?grayscale"
};

// --- CONTACT SECTION ---
export const contactData = {
  ar: {
    title: "تواصل معنا",
    subtitle: "لديك مشروع في ذهنك؟ نود أن نسمع منك.",
    addressTitle: "العنوان",
    address: "١٢٣ شارع التقنية، المدينة",
    emailTitle: "البريد الإلكتروني",
    phoneTitle: "الهاتف"
  },
  en: {
    title: "Get In Touch",
    subtitle: "Have a project in mind? We'd love to hear from you.",
    addressTitle: "Address",
    address: "123 Tech Street, City",
    emailTitle: "Email",
    phoneTitle: "Phone"
  },
  email: "info@bakristudio.com",
  phone: "+123 456 7890"
};