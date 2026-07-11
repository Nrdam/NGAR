/**
 * NextGenAR — Internationalization (i18n)
 * Supports English, French, and Arabic with RTL handling.
 */

(function () {
  "use strict";

  const translations = {
    en: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.demo": "Demo",
      "nav.pricing": "Pricing",
      "nav.clients": "Clients",
      "nav.contact": "Contact",

      // Hero
      "hero.badge": "No App Required — Just Scan & View",
      "hero.title_pre": "Where Physical Meets",
      "hero.title_highlight": "Virtual",
      "hero.desc": "NextGenAR transforms your physical products into immersive 3D and Augmented Reality experiences. Customers scan a QR code or click a link — and instantly explore your products in 3D and AR, right from their browser.",
      "hero.btn_start": "Get Started",
      "hero.btn_demo": "View Demo",
      "hero.hint": "Drag to rotate · Tap AR to view in your space",
      "hero.stat1": "3D Products Created",
      "hero.stat2": "AR Views",
      "hero.stat3": "QR Scans Monthly",
      "hero.stat4": "Active Clients",

      // Showcase
      "showcase.title": "3D Model Showcase",
      "showcase.desc": "Explore our full collection of 3D models — drag to rotate, tap AR to view in your space",

      // How It Works
      "how.title": "How It Works",
      "how.subtitle": "Process",
      "how.desc": "From your product to your customer's phone in three simple steps",
      "how.step1": "We Model It",
      "how.step1_desc": "Send us photos or your physical product. Our team creates a photorealistic 3D model optimized for web and mobile viewing with industry-standard tools.",
      "how.step2": "We Generate QR",
      "how.step2_desc": "Each product gets a unique QR code. Place it on menus, tags, packaging, signage — anywhere your customers interact with your products.",
      "how.step3": "Customers Experience",
      "how.step3_desc": "One scan opens the 3D viewer instantly. Customers explore, zoom, and view in AR — increasing confidence, reducing returns, and boosting sales.",

      // Features
      "features.title": "Platform Features",
      "features.subtitle": "Features",
      "features.desc": "Everything you need to bring your products into the augmented future",
      "features.f1": "3D Product Viewer",
      "features.f1_desc": "Interactive 360° viewers let customers rotate, zoom, and inspect every detail of your products directly in the browser.",
      "features.f2": "AR Experience",
      "features.f2_desc": "WebAR technology places products in the real world. No app download — works instantly on iOS and Android browsers.",
      "features.f3": "QR Code System",
      "features.f3_desc": "Every product gets a unique QR code. Track scans, manage codes, and place them anywhere customers shop.",
      "features.f4": "SaaS Dashboard",
      "features.f4_desc": "Manage your entire catalog from one dashboard. Upload models, track analytics, manage QR codes, and monitor AR views.",

      // Use Cases
      "usecases.title": "Perfect For Any Business",
      "usecases.subtitle": "Industries",
      "usecases.desc": "If you sell physical products, we can make them 3D",
      "usecases.restaurants": "Restaurants & Cafés",
      "usecases.restaurants_desc": "3D menus, dish previews, plating visualization",
      "usecases.jewelry": "Jewelry & Watches",
      "usecases.jewelry_desc": "Detail inspection, try-on experience, craftsmanship",
      "usecases.furniture": "Furniture & Decor",
      "usecases.furniture_desc": "Room placement, size visualization, style matching",
      "usecases.fashion": "Fashion & Accessories",
      "usecases.fashion_desc": "360° views, material detail, fit visualization",
      "usecases.automotive": "Automotive",
      "usecases.automotive_desc": "360° walkarounds, feature highlights, color options",
      "usecases.ecommerce": "E-Commerce",
      "usecases.ecommerce_desc": "Product pages, reduce returns, boost confidence",
      "usecases.art": "Art & Collectibles",
      "usecases.art_desc": "Gallery experience, provenance display, detail zoom",
      "usecases.realestate": "Real Estate",
      "usecases.realestate_desc": "Virtual tours, floor plan visualization, staging previews",
      "usecases.coming_soon": "Coming Soon",
      "usecases.btn": "Discuss Your Industry",

      // Pricing
      "pricing.title": "Simple Pricing",
      "pricing.subtitle": "Pricing",
      "pricing.desc": "Plans that scale with your business — from startup to enterprise",
      "pricing.starter": "Starter",
      "pricing.pro": "Pro",
      "pricing.enterprise": "Enterprise",
      "pricing.month": "/ month",
      "pricing.custom": "Custom",
      "pricing.choose": "Choose Plan",
      "pricing.contact_sales": "Contact Sales",

      // Testimonials
      "testi.title": "What Clients Say",
      "testi.subtitle": "Testimonials",
      "testi.desc": "Trusted by businesses across industries to bring products into AR",

      // CTA
      "cta.badge": "Get Started Today",
      "cta.title": "Ready to Transform Your Business?",
      "cta.desc": "Join businesses already using NextGenAR to wow their customers and increase sales. Get your first 3D model free — no credit card required.",
      "cta.btn": "Start a Project",

      // Footer
      "footer.address": "Address",
      "footer.contact": "Contact",
      "footer.hours": "Working Hours",
      "footer.follow": "Follow Us",
      "footer.phone": "Phone:",
      "footer.email": "Email:",
      "footer.mon_fri": "Mon-Fri:",
      "footer.sat_sun": "Sat-Sun:",
      "footer.copyright": "Where Physical Meets Virtual",

      // About page
      "about.mission_title": "Our Mission",
      "about.vision_title": "Our Vision",
      "about.stats_title": "Our Impact",
      "about.values_title": "Our Values",
      "about.tech_title": "Technology",

      // Services page
      "services.title": "Our Services",
      "services.desc": "Everything you need to bring your products into the augmented world",

      // Demo page
      "demo.title": "Live AR Demo",
      "demo.desc": "Experience the power of 3D and AR directly in your browser",

      // Contact page
      "contact.title": "Get in Touch",
      "contact.info": "Contact Information",
      "contact.form_title": "Send Us a Message",
      "contact.whatsapp": "Prefer WhatsApp? Chat with us directly!",
      "contact.btn_whatsapp": "Chat on WhatsApp",

      // Common
      "common.learn_more": "Learn More",
      "common.get_started": "Get Started",
      "common.view_ar": "View in AR",
    },

    fr: {
      // Navigation
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.services": "Services",
      "nav.demo": "Démo",
      "nav.pricing": "Tarifs",
      "nav.clients": "Clients",
      "nav.contact": "Contact",

      // Hero
      "hero.badge": "Aucune application requise — Scannez et visualisez",
      "hero.title_pre": "Où le Physique Rencontre le",
      "hero.title_highlight": "Virtuel",
      "hero.desc": "NextGenAR transforme vos produits physiques en expériences 3D et réalité augmentée immersives. Les clients scannent un QR code ou cliquent sur un lien — et explorent instantanément vos produits en 3D et RA, directement depuis leur navigateur.",
      "hero.btn_start": "Commencer",
      "hero.btn_demo": "Voir la Démo",
      "hero.hint": "Glissez pour pivoter · Touchez AR pour visualiser dans votre espace",
      "hero.stat1": "Produits 3D Créés",
      "hero.stat2": "Vues RA",
      "hero.stat3": "Scans QR Mensuels",
      "hero.stat4": "Clients Actifs",

      // Showcase
      "showcase.title": "Vitrine de Modèles 3D",
      "showcase.desc": "Explorez notre collection complète de modèles 3D — glissez pour pivoter, tapez AR pour visualiser dans votre espace",

      // How It Works
      "how.title": "Comment ça Marche",
      "how.subtitle": "Processus",
      "how.desc": "De votre produit au téléphone de votre client en trois étapes simples",
      "how.step1": "Nous Modélisons",
      "how.step1_desc": "Envoyez-nous des photos ou votre produit physique. Notre équipe crée un modèle 3D photoréaliste optimisé pour le web et la visualisation mobile avec des outils standards de l'industrie.",
      "how.step2": "Nous Génèrons le QR",
      "how.step2_desc": "Chaque produit reçoit un QR code unique. Placez-le sur les menus, étiquettes, emballages, signalisations — partout où vos clients interagissent avec vos produits.",
      "how.step3": "Les Clients Expérimentent",
      "how.step3_desc": "Un scan ouvre la visionneuse 3D instantanément. Les clients explorent, zooment et visualisent en RA — augmentant la confiance, réduisant les retours et stimulant les ventes.",

      // Features
      "features.title": "Fonctionnalités de la Plateforme",
      "features.subtitle": "Fonctionnalités",
      "features.desc": "Tout ce dont vous avez besoin pour propulser vos produits dans l'avenir augmenté",
      "features.f1": "Visionneuse 3D",
      "features.f1_desc": "Des visionneuses 360° interactives permettent aux clients de pivoter, zoomer et inspecter chaque détail de vos produits directement dans le navigateur.",
      "features.f2": "Expérience RA",
      "features.f2_desc": "La technologie WebRA place les produits dans le monde réel. Aucun téléchargement d'application — fonctionne instantanément sur les navigateurs iOS et Android.",
      "features.f3": "Système de QR Codes",
      "features.f3_desc": "Chaque produit reçoit un QR code unique. Suivez les scans, gérez les codes et placez-les partout où vos clients achètent.",
      "features.f4": "Tableau de Bord SaaS",
      "features.f4_desc": "Gérez tout votre catalogue depuis un seul tableau de bord. Téléchargez des modèles, suivez les analyses, gérez les QR codes et surveillez les vues RA.",

      // Use Cases
      "usecases.title": "Parfait Pour Toute Entreprise",
      "usecases.subtitle": "Industries",
      "usecases.desc": "Si vous vendez des produits physiques, nous pouvons les rendre 3D",
      "usecases.restaurants": "Restaurants & Cafés",
      "usecases.restaurants_desc": "Menus 3D, aperçus de plats, visualisation du dressage",
      "usecases.jewelry": "Joaillerie & Horlogerie",
      "usecases.jewelry_desc": "Inspection des détails, essayage, savoir-faire",
      "usecases.furniture": "Mobilier & Décoration",
      "usecases.furniture_desc": "Placement dans la pièce, visualisation des dimensions, correspondance de styles",
      "usecases.fashion": "Mode & Accessoires",
      "usecases.fashion_desc": "Vues à 360°, détail des matériaux, visualisation de l'ajustement",
      "usecases.automotive": "Automobile",
      "usecases.automotive_desc": "Visites à 360°, points forts des caractéristiques, options de couleur",
      "usecases.ecommerce": "E-Commerce",
      "usecases.ecommerce_desc": "Pages produits, réduire les retours, renforcer la confiance",
      "usecases.art": "Art & Collection",
      "usecases.art_desc": "Expérience de galerie, affichage de provenance, zoom sur les détails",
      "usecases.realestate": "Immobilier",
      "usecases.realestate_desc": "Visites virtuelles, visualisation de plans, aperçus de staging",
      "usecases.coming_soon": "Bientôt Disponible",
      "usecases.btn": "Discuter de Votre Secteur",

      // Pricing
      "pricing.title": "Tarification Simple",
      "pricing.subtitle": "Tarifs",
      "pricing.desc": "Des forfaits qui évoluent avec votre entreprise — de la startup à l'entreprise",
      "pricing.starter": "Débutant",
      "pricing.pro": "Pro",
      "pricing.enterprise": "Entreprise",
      "pricing.month": "/ mois",
      "pricing.custom": "Sur Mesure",
      "pricing.choose": "Choisir le Forfait",
      "pricing.contact_sales": "Contacter les Ventes",

      // Testimonials
      "testi.title": "Ce que Disent les Clients",
      "testi.subtitle": "Témoignages",
      "testi.desc": "La confiance d'entreprises de tous secteurs pour propulser leurs produits en RA",

      // CTA
      "cta.badge": "Commencez Aujourd'hui",
      "cta.title": "Prêt à Transformer Votre Entreprise ?",
      "cta.desc": "Rejoignez les entreprises qui utilisent déjà NextGenAR pour émerveiller leurs clients et augmenter leurs ventes. Obtenez votre premier modèle 3D gratuit — sans carte de crédit requise.",
      "cta.btn": "Démarrer un Projet",

      // Footer
      "footer.address": "Adresse",
      "footer.contact": "Contact",
      "footer.hours": "Heures d'Ouverture",
      "footer.follow": "Suivez-Nous",
      "footer.phone": "Tél:",
      "footer.email": "Email:",
      "footer.mon_fri": "Lun-Ven:",
      "footer.sat_sun": "Sam-Dim:",
      "footer.copyright": "Où le Physique Rencontre le Virtuel",

      // About page
      "about.mission_title": "Notre Mission",
      "about.vision_title": "Notre Vision",
      "about.stats_title": "Notre Impact",
      "about.values_title": "Nos Valeurs",
      "about.tech_title": "Technologie",

      // Services page
      "services.title": "Nos Services",
      "services.desc": "Tout ce dont vous avez besoin pour propulser vos produits dans le monde augmenté",

      // Demo page
      "demo.title": "Démo RA en Direct",
      "demo.desc": "Découvrez la puissance de la 3D et de la RA directement dans votre navigateur",

      // Contact page
      "contact.title": "Contactez-Nous",
      "contact.info": "Informations de Contact",
      "contact.form_title": "Envoyez-Nous un Message",
      "contact.whatsapp": "Préférez-vous WhatsApp ? Discutez avec nous directement !",
      "contact.btn_whatsapp": "Discuter sur WhatsApp",

      // Common
      "common.learn_more": "En Savoir Plus",
      "common.get_started": "Commencer",
      "common.view_ar": "Voir en RA",
    },

    ar: {
      // Navigation
      "nav.home": "الرئيسية",
      "nav.about": "من نحن",
      "nav.services": "الخدمات",
      "nav.demo": "العرض",
      "nav.pricing": "الأسعار",
      "nav.clients": "العملاء",
      "nav.contact": "اتصل بنا",

      // Hero
      "hero.badge": "لا حاجة لتطبيق — امسح وشاهد",
      "hero.title_pre": "حيث يلتقي الملموس بـ",
      "hero.title_highlight": "الافتراضي",
      "hero.desc": "يحوّل NextGenAR منتجاتك المادية إلى تجارب ثلاثية الأبعاد وواقع معزز غامرة. يقوم العملاء بمسح رمز QR أو النقر على رابط — واستكشاف منتجاتك فوراً بالأبعاد الثلاثية والواقع المعزز مباشرة من متصفحهم.",
      "hero.btn_start": "ابدأ الآن",
      "hero.btn_demo": "شاهد العرض",
      "hero.hint": "اسحب للتدوير · اضغط AR للعرض في مساحتك",
      "hero.stat1": "منتجات ثلاثية الأبعاد",
      "hero.stat2": "مشاهدات الواقع المعزز",
      "hero.stat3": "مسحات QR شهرية",
      "hero.stat4": "عملاء نشطون",

      // Showcase
      "showcase.title": "معرض النماذج ثلاثية الأبعاد",
      "showcase.desc": "استكشف مجموعتنا الكاملة من النماذج ثلاثية الأبعاد — اسحب للتدوير، اضغط AR للعرض في مساحتك",

      // How It Works
      "how.title": "كيف يعمل",
      "how.subtitle": "العملية",
      "how.desc": "من منتجك إلى هاتف عميلك في ثلاث خطوات بسيطة",
      "how.step1": "نقوم بالنمذجة",
      "how.step1_desc": "أرسل لنا صور أو منتجك المادي. فريقنا ينشئ نموذجاً ثلاثي الأبعاد واقعياً محسّناً للعرض على الويب والجوال باستخدام أدوات قياسية في الصناعة.",
      "how.step2": "ننشئ رمز QR",
      "how.step2_desc": "يحصل كل منتج على رمز QR فريد. ضعه على القوائم أو العلامات أو التغليف أو اللافتات — في أي مكان يتفاعل فيه عملاؤك مع منتجاتك.",
      "how.step3": "يعيش العملاء التجربة",
      "how.step3_desc": "مسحة واحدة تفتح عارض ثلاثي الأبعاد فوراً. يستكشف العملاء ويكبّرون ويشاهدون بالواقع المعزز — مما يزيد الثقة ويقلل الإرجاعات ويعزز المبيعات.",

      // Features
      "features.title": "ميزات المنصة",
      "features.subtitle": "الميزات",
      "features.desc": "كل ما تحتاجه لإطلاق منتجاتك نحو المستقبل المعزز",
      "features.f1": "عارض ثلاثي الأبعاد",
      "features.f1_desc": "عارضات تفاعلية بزاوية 360° تتيح للعملاء تدوير وتكبير وفحص كل تفاصيل منتجاتك مباشرة في المتصفح.",
      "features.f2": "تجربة الواقع المعزز",
      "features.f2_desc": "تقنية WebAR تضع المنتجات في العالم الحقيقي. لا حاجة لتحميل تطبيق — يعمل فوراً على متصفحات iOS و Android.",
      "features.f3": "نظام رموز QR",
      "features.f3_desc": "يحصل كل منتج على رمز QR فريد. تتبع المسحات وأدِر الرموز وضعها في أي مكان يتسوق فيه عملاؤك.",
      "features.f4": "لوحة تحكم SaaS",
      "features.f4_desc": "أدر كتالوجك بالكامل من لوحة واحدة. ارفع النماذج وتتبع التحليلات وأدِر رموز QR وراقب مشاهدات الواقع المعزز.",

      // Use Cases
      "usecases.title": "حالات الاستخدام",
      "usecases.subtitle": "الصناعات",
      "usecases.desc": "إذا كنت تبيع منتجات مادية، يمكننا تحويلها إلى ثلاثية الأبعاد",
      "usecases.furniture": "الأثاث",
      "usecases.furniture_desc": "وضع في الغرفة وتصور للأحجام ومطابقة الأنماط. دع العملاء يرون كيف يتناسب الأثاث قبل الشراء.",
      "usecases.realestate": "العقارات",
      "usecases.realestate_desc": "جولات افتراضية للعقارات وتصور لمخططات الطواب ومعاينات التأثيث. اعرض العقارات عن بُعد بثلاثية الأبعاد غامرة.",
      "usecases.retail": "التجزئة",
      "usecases.retail_desc": "صفحات منتجات بعرض ثلاثي الأبعاد تقلل الإرجاعات وتعزز الثقة. تجارب تغليف وأرفف تفاعلية.",
      "usecases.automotive": "السيارات",
      "usecases.automotive_desc": "جولات بزاوية 360° وإبراز الميزات وخيارات الألوان. دع العملاء يستكشفون المركبات من هواتفهم.",
      "usecases.btn": "استكشف جميع الخدمات",

      // Pricing
      "pricing.title": "تسعير بسيط",
      "pricing.subtitle": "الأسعار",
      "pricing.desc": "خطط تنمو مع عملك — من الناشئة إلى المؤسسة",
      "pricing.starter": "المبتدئ",
      "pricing.pro": "احترافي",
      "pricing.enterprise": "مؤسسة",
      "pricing.month": "/ شهر",
      "pricing.custom": "مخصص",
      "pricing.choose": "اختر الخطة",
      "pricing.contact_sales": "تواصل مع المبيعات",

      // Testimonials
      "testi.title": "ماذا يقول العملاء",
      "testi.subtitle": "الشهادات",
      "testi.desc": "موثوق به من قبل الشركات في مختلف الصناعات لإطلاق منتجاتها في الواقع المعزز",

      // CTA
      "cta.badge": "ابدأ اليوم",
      "cta.title": "هل أنت مستعد لتحويل عملك؟",
      "cta.desc": "انضم إلى الشركات التي تستخدم بالفعل NextGenAR لإبهار عملائها وزيادة المبيعات. احصل على نموذجك ثلاثي الأبعاد الأول مجاناً — بدون بطاقة ائتمان.",
      "cta.btn": "ابدأ مشروعاً",

      // Footer
      "footer.address": "العنوان",
      "footer.contact": "اتصال",
      "footer.hours": "ساعات العمل",
      "footer.follow": "تابعنا",
      "footer.phone": "الهاتف:",
      "footer.email": "البريد:",
      "footer.mon_fri": "الإثن-الجم:",
      "footer.sat_sun": "السبت-الأحد:",
      "footer.copyright": "حيث يلتقي الملموس بالافتراضي",

      // About page
      "about.mission_title": "مهمتنا",
      "about.vision_title": "رؤيتنا",
      "about.stats_title": "تأثيرنا",
      "about.values_title": "قيمنا",
      "about.tech_title": "التقنية",

      // Services page
      "services.title": "خدماتنا",
      "services.desc": "كل ما تحتاجه لإطلاق منتجاتك نحو العالم المعزز",

      // Demo page
      "demo.title": "عرض الواقع المعزز المباشر",
      "demo.desc": "اكتشف قوة ثلاثية الأبعاد والواقع المعزز مباشرة في متصفحك",

      // Contact page
      "contact.title": "تواصل معنا",
      "contact.info": "معلومات الاتصال",
      "contact.form_title": "أرسل لنا رسالة",
      "contact.whatsapp": "تفضل واتساب؟ تحدث معنا مباشرة!",
      "contact.btn_whatsapp": "الدردشة على واتساب",

      // Common
      "common.learn_more": "اعرف المزيد",
      "common.get_started": "ابدأ الآن",
      "common.view_ar": "عرض في الواقع المعزز",
    },
  };

  let currentLang = localStorage.getItem("nextgenar_lang") || "en";

  /**
   * Apply translations to all [data-i18n] elements.
   */
  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        if (el.getAttribute("data-i18n-html") === "true") {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Handle placeholder translations
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    // Update active button state
    document.querySelectorAll(".lang-dropdown a").forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("data-lang") === lang);
    });

    // Update current lang display
    const display = document.querySelector(".lang-btn .current-lang");
    if (display) {
      display.textContent = lang.toUpperCase();
    }

    // Handle RTL
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", lang);
    }

    // Save preference
    localStorage.setItem("nextgenar_lang", lang);
    currentLang = lang;
  }

  /**
   * Initialize language switcher.
   */
  function initLanguageSwitcher() {
    const btn = document.querySelector(".lang-btn");
    const dropdown = document.querySelector(".lang-dropdown");

    if (!btn || !dropdown) return;

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle("active");
    });

    dropdown.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const lang = link.getAttribute("data-lang");
        applyTranslations(lang);
        dropdown.classList.remove("active");
      });
    });

    // Close on outside click
    document.addEventListener("click", function () {
      dropdown.classList.remove("active");
    });

    // Apply saved language on load
    applyTranslations(currentLang);
  }

  // Initialize on DOM ready
  document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
})();
