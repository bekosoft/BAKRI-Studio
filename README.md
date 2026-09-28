# BAKRI — Humanitarian Photography & Visual Communications Specialist

> موقع المعرض والفيلم المرجعي لبكري (أبوبكر علي) — أخصائي التصوير الإنساني والاتصالات البصرية للعمل مع المنظمات غير الحكومية والوكالات الأممية.
> Official portfolio and reference exhibit of BAKRI (Abobker Ali) — Humanitarian Photography & Visual Communications Specialist for UN Agencies, INGOs, and International Organizations.

---

## ⚡ الميزات والأداء (Features & Performance)
- **موجه للمنظمات والوكالات الأممية**: صياغة احترافية مخصصة للتقديم والتعاقد مع المنظمات الدولية (UN Agencies & INGOs)، تبرز التوثيق الميداني والجانب الإنساني والالتزام بالمعايير الأخلاقية والموافقة المستنيرة.
- **تركيز أساسي على التصوير والاتصالات**: إبراز مهارات التصوير الفوتوغرافي الإنساني والميداني، والقصص المصورة للمانحين، واستراتيجيات الاتصال البصري والظهور المؤسسي (Visibility).
- **فائق السرعة وخفيف الحجم**: تحسين وضغط كافة الصور، وتفعيل تقنية التحميل الذكي (Lazy Loading & Smart Video Preloading).
- **ثنائي اللغة بالكامل (Bilingual)**: دعم فوري وسلس للغتين العربية والإنجليزية بضغطة زر مع دعم الاتجاهات (LTR / RTL) والخطوط المتناسقة (Cairo & Inter).
- **تصميم تفاعلي وعصري**: بطاقات وسائط ديناميكية، عارض صور مكبّر (Lightbox)، ومشغل فيديو منبثق لدراسات الحالة (Case Studies).
- **جاهز تماماً لـ GitHub Pages**: تم ضبط بنية المجلدات والمسارات القياسية مع إضافة ملف `.nojekyll`.

---

## 🚀 طريقة الرفع على GitHub وتفعيل الموقع (How to Deploy to GitHub)

### الخطوة 1: تهيئة المستودع ورفع الملفات (Git Commands)
افتح موجه الأوامر (Terminal أو PowerShell) داخل مجلد المشروع، ثم نفذ الأوامر التالية:

```bash
# 1. تهيئة المستودع
git init

# 2. إضافة جميع الملفات
git add .

# 3. حفظ التغييرات (Commit)
git commit -m "Updated portfolio: Humanitarian Photography & Visual Comms for UN/NGOs"

# 4. تحديد الفرع الرئيسي
git branch -M main

# 5. ربط المستودع بحسابك على GitHub (استبدل YOUR-USERNAME باسم حسابك واسم المستودع)
git remote add origin https://github.com/YOUR-USERNAME/BAKRI-Studio.git

# 6. الرفع إلى GitHub
git push -u origin main
```

---

### الخطوة 2: تشغيل الموقع مجاناً عبر GitHub Pages
1. افتح صفحة المستودع على **GitHub**.
2. اذهب إلى التبويب **Settings** (الإعدادات).
3. من القائمة الجانبية على اليسار، اضغط على **Pages**.
4. تحت قسم **Build and deployment**:
   - Source: اختر **Deploy from a branch**.
   - Branch: اختر **main** والمجلد **/ (root)**.
   - اضغط **Save**.
5. بعد دقيقة أو دقيقتين، سيظهر لك رابط الموقع المباشر في أعلى الصفحة:
   `https://YOUR-USERNAME.github.io/BAKRI-Studio/`

---

## 💻 التشغيل والمعاينة محلياً (Local Preview)
يمكنك فتح ملف `index.html` مباشرة في أي متصفح، أو تشغيل خادم محلي خفيف مثل:
```bash
python -m http.server 8080
```

---

## 📁 هيكلية المشروع (Project Structure)
```
├── index.html          # الصفحة الرئيسية الكاملة بالمعايير الإنسانية والميدانية
├── project.html        # صفحة دراسات الحالة المستقلة
├── favicon.svg         # أيقونة الموقع
├── .nojekyll           # تفعيل دعم المجلدات الرقمية على GitHub Pages
├── .gitignore          # ملف استبعاد الملفات المؤقتة
├── css/
│   └── style.css       # نظام التصميم والألوان والأنماط (Vanilla CSS)
├── js/
│   ├── main.js         # محرك الموقع، الترجمة الفورية، ومعرض التوثيق الإنساني
│   └── chat.js         # المساعد التفاعلي
├── aerial/             # فيديوهات التصوير الجوي والمسح المكاني (4K UHD)
├── moto/               # فيديوهات المونتاج والوثائقيات
└── 1..7, des, su/      # صور المعرض الفوتوغرافي والتصميم الرقمي المحسنة
```

---

## 📄 حقوق النشر والملكية (Copyright)
جميع الحقوق محفوظة © 2026 — بكري (أبوبكر علي).
All rights reserved © 2026 — BAKRI (Abobker Ali).
