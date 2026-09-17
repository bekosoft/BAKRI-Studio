# BAKRI — Visual Communications & Multimedia Specialist

> موقع المعرض الاحترافي لبكري (أبوبكر علي) — متخصص الاتصالات البصرية والوسائط المتعددة (تصوير فوتوغرافي، فيديو، تصوير جوي، تصميم وهوية بصرية).
> Professional portfolio website of BAKRI (Abobker Ali) — Visual Communications & Multimedia Specialist.

---

## ⚡ الميزات والأداء (Features & Performance)
- **فائق السرعة وخفيف الحجم**: تم تحسين وضغط كافة الصور، وتفعيل تقنية التحميل الذكي (Lazy Loading & Smart Video Preloading).
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
git commit -m "Initial release: optimized lightweight portfolio ready for deployment"

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
npx serve .
```

---

## 📁 هيكلية المشروع (Project Structure)
```
├── index.html          # الصفحة الرئيسية الكاملة
├── project.html        # صفحة دراسات الحالة المستقلة
├── favicon.svg         # أيقونة الموقع
├── .nojekyll           # تفعيل دعم المجلدات الرقمية على GitHub Pages
├── .gitignore          # ملف استبعاد الملفات المؤقتة
├── css/
│   └── style.css       # نظام التصميم والألوان والأنماط (Vanilla CSS)
├── js/
│   ├── main.js         # محرك الموقع، الترجمة الفورية، وعرض الوسائط
│   └── chat.js         # المساعد التفاعلي
├── aerial/             # فيديوهات التصوير الجوي والدرون (4K/HD)
├── moto/               # فيديوهات الموشن جرافيك والمونتاج والفيديو
└── 1..7, des, su/      # صور المعرض الفوتوغرافي والتصميم الرقمي المحسنة
```

---

## 📄 حقوق النشر والملكية (Copyright)
جميع الحقوق محفوظة © 2025 — بكري (أبوبكر علي).
All rights reserved © 2025 — BAKRI (Abobker Ali).
