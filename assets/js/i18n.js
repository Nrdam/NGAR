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
      "nav.demo": "Portfolio",
      "nav.pricing": "Pricing",
      "nav.clients": "Clients",
      "nav.contact": "Contact",

      // Hero
      "hero.badge": "No App Required — Just Scan & View",
      "hero.title_pre": "Where Physical Meets",
      "hero.title_highlight": "Virtual",
      "hero.desc": "NextGenAR transforms your physical products into immersive 3D and Augmented Reality experiences. Customers scan a QR code or click a link — and instantly explore your products in 3D and AR, right from their browser.",
      "hero.btn_start": "Get Started",
      "hero.btn_demo": "View Portfolio",
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
      "about.page_title": "About",
      "about.mission_badge": "About Us",
      "about.mission_title": "Our Mission & Vision",
      "about.mission_desc": "Bridging the gap between physical products and digital experiences",
      "about.mission_h3": "Our Mission",
      "about.mission_p1": "We're on a mission to eliminate the gap between physical products and digital experiences. Every product deserves to be explored in 3D and AR before purchase.",
      "about.mission_p2": "By making augmented reality accessible to businesses of all sizes, we're transforming how customers interact with products — increasing confidence, reducing returns, and driving sales across every industry.",
      "about.vision_h3": "Our Vision",
      "about.vision_p1": "We envision a world where every product has a digital twin. Where customers experience before they buy, and businesses connect with their audience through immersive AR technology.",
      "about.vision_p2": "The future of commerce is immersive, interactive, and accessible — and we're building the platform to make that future a reality today, for businesses everywhere.",
      "about.stats_badge": "Numbers",
      "about.stats_title": "Our Impact",
      "about.stats_desc": "The results behind our commitment to AR innovation",
      "about.stat1": "Years in AR",
      "about.stat2": "Products 3D Modeled",
      "about.stat3": "Active Clients",
      "about.stat4": "AR Views",
      "about.values_badge": "Values",
      "about.values_title": "What We Stand For",
      "about.values_desc": "The core principles that guide everything we build",
      "about.value1": "Innovation",
      "about.value1_desc": "We push the boundaries of what's possible with AR and 3D technology, always exploring new ways to enhance product experiences.",
      "about.value2": "Quality",
      "about.value2_desc": "Every 3D model we create meets the highest standards of photorealism, performance, and cross-platform compatibility.",
      "about.value3": "Accessibility",
      "about.value3_desc": "AR should work for everyone. No apps, no downloads — just scan and view. We make immersive tech effortless.",
      "about.value4": "Partnership",
      "about.value4_desc": "Your success is our success. We work closely with each client to deliver solutions that drive real business results.",
      "about.tech_badge": "Expertise",
      "about.tech_title": "Our Technology",
      "about.tech_desc": "Industry-leading tools and standards power our 3D and AR platform",
      "about.tech_h3": "Built on Cutting-Edge Tech",
      "about.tech_p1": "Our team combines expertise in 3D modeling, web development, and AR technology to deliver seamless experiences across all devices and platforms.",
      "about.tech_p2": "We use industry-standard file formats and web technologies to ensure compatibility, performance, and future-proofing. Every model we create is optimized for fast loading without sacrificing visual quality.",
      "about.tech_p3": "From photogrammetry to real-time rendering, our pipeline leverages the best tools available to bring your products to life in augmented reality.",

      // Services page
      "services.page_title": "Services",
      "services.badge": "Services",
      "services.title": "Our Services",
      "services.desc": "Everything you need to bring your products into the augmented world",
      "services.s1": "3D Product Conversion",
      "services.s1_desc": "We transform your physical products into photorealistic 3D models. Send photos, CAD files, or physical samples — we deliver optimized GLB files ready for web and AR.",
      "services.s2": "WebAR Integration",
      "services.s2_desc": "No app required. Our WebAR technology works directly in mobile browsers. Customers view products in augmented reality with a single tap.",
      "services.s3": "QR Code System",
      "services.s3_desc": "Every product gets a unique QR code. Track scans, manage codes, and place them on packaging, signage, or digital materials. Full analytics included.",
      "services.step1_desc": "Send us photos, CAD files, or your physical product. Our 3D artists create a photorealistic model using industry-standard tools like Blender, optimized for fast web loading and AR viewing on any device.",
      "services.step2_desc": "Each product gets a unique QR code linked to its 3D model. Place it on menus, tags, packaging, signage, or digital materials — anywhere your customers interact with your products.",
      "services.step3_desc": "One scan opens the 3D viewer instantly — no app download needed. Customers explore, zoom, and view products in AR, increasing confidence, reducing returns, and boosting sales.",
      "services.details_badge": "Details",
      "services.details_title": "Step-by-Step Breakdown",
      "services.details_desc": "A deeper look at each stage of the NextGenAR process",
      "services.details_page_title": "Service Details",
      "services.detail1_title": "3D Modeling & Conversion",
      "services.detail1_desc": "Our process begins with your product. Whether you provide professional photography, engineering CAD files, or ship us a physical sample, our team creates a highly detailed, photorealistic 3D model. We use photogrammetry and manual modeling techniques in Blender, then optimize the model for web performance — reducing file size without compromising visual quality. The final deliverable is a GLB file compatible with all modern browsers and AR platforms.",
      "services.detail2_title": "QR Code Generation & Deployment",
      "services.detail2_desc": "Once your 3D model is ready, we generate a unique QR code that links directly to the model's WebAR viewer. You can download, print, or embed the QR code anywhere — product packaging, retail signage, digital ads, or email campaigns. Our system tracks every scan, giving you real-time analytics on customer engagement, geographic location, and device type.",
      "services.detail3_title": "Customer AR Experience",
      "services.detail3_desc": "When a customer scans the QR code, the 3D viewer opens instantly in their mobile browser — no app download required. They can rotate the product 360°, zoom in on details, and tap the AR button to place the product in their real-world environment using their phone's camera. The experience works seamlessly on both iOS (via Quick Look / USDZ) and Android (via WebXR), delivering a consistent, immersive experience across all devices.",

      // Portfolio page
      "demo.badge": "Portfolio",
      "demo.title": "3D Model Portfolio",
      "demo.desc": "Explore our collection of 3D models — interact, rotate, and view them in augmented reality",
      "demo.feature_badge": "3D Portfolio",
      "demo.hint": "Drag to rotate · Scroll to zoom · Tap the AR icon to view in your space",
      "demo.gallery_badge": "Gallery",
      "demo.gallery_title": "All 3D Models",
      "demo.gallery_desc": "Click any model to load it in the viewer above",
      "demo.guide_badge": "Guide",
      "demo.guide_title": "How to View in AR",
      "demo.guide_desc": "Follow these simple steps to experience products in augmented reality",
      "demo.step1_title": "1. Open on Your Phone",
      "demo.step1_desc": "Open this page on your mobile device, or scan the QR code with your phone's camera to launch the 3D viewer directly.",
      "demo.step2_title": "2. Tap the AR Icon",
      "demo.step2_desc": "Look for the AR icon in the bottom-right corner of the 3D viewer and tap it to launch the augmented reality experience.",
      "demo.step3_title": "3. Point at a Flat Surface",
      "demo.step3_desc": "Move your phone to scan a flat surface like a floor or table. The model will appear in your real-world space — drag to reposition.",
      "demo.ar_note": "AR works on iOS 12+ (Safari) and Android 8+ (Chrome)",
      "demo.cta_title": "Want This for Your Products?",
      "demo.cta_desc": "See how NextGenAR can transform your catalog into immersive 3D and AR experiences. Get your first model free — no credit card required.",

      // Contact page
      "contact.page_title": "Contact",
      "contact.badge": "Contact",
      "contact.title": "Get in Touch",
      "contact.desc": "Have a question or ready to start? We'd love to hear from you.",
      "contact.info": "Contact Information",
      "contact.info_desc": "Reach out to us through any of the channels below. Our team is ready to help you bring your products into augmented reality.",
      "contact.location": "Location",
      "contact.email_label": "Email",
      "contact.phone_label": "Phone",
      "contact.hours_label": "Hours",
      "contact.hours_value": "Mon-Fri: 9AM - 7PM",
      "contact.form_title": "Send Us a Message",
      "contact.form_desc": "Fill out the form below and our team will get back to you within 24 hours.",
      "contact.label_name": "Your Name",
      "contact.label_email": "Your Email",
      "contact.label_subject": "Subject",
      "contact.label_message": "Message",
      "contact.btn_send": "Send Message",
      "contact.whatsapp_badge": "Quick Chat",
      "contact.whatsapp_title": "Prefer WhatsApp?",
      "contact.whatsapp_desc": "Chat with us directly!",
      "contact.whatsapp_btn": "Chat on WhatsApp",

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
      "nav.demo": "Portfolio",
      "nav.pricing": "Tarifs",
      "nav.clients": "Clients",
      "nav.contact": "Contact",

      // Hero
      "hero.badge": "Aucune application requise — Scannez et visualisez",
      "hero.title_pre": "Où le Physique Rencontre le",
      "hero.title_highlight": "Virtuel",
      "hero.desc": "NextGenAR transforme vos produits physiques en expériences 3D et réalité augmentée immersives. Les clients scannent un QR code ou cliquent sur un lien — et explorent instantanément vos produits en 3D et RA, directement depuis leur navigateur.",
      "hero.btn_start": "Commencer",
      "hero.btn_demo": "Voir le Portfolio",
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
      "about.page_title": "À propos",
      "about.mission_badge": "À propos de nous",
      "about.mission_title": "Notre Mission & Vision",
      "about.mission_desc": "Combler le fossé entre les produits physiques et les expériences numériques",
      "about.mission_h3": "Notre Mission",
      "about.mission_p1": "Notre mission est d'éliminer l'écart entre les produits physiques et les expériences numériques. Chaque produit mérite d'être exploré en 3D et en RA avant l'achat.",
      "about.mission_p2": "En rendant la réalité augmentée accessible aux entreprises de toutes tailles, nous transformons la façon dont les clients interagissent avec les produits — augmentant la confiance, réduisant les retours et stimulant les ventes dans tous les secteurs.",
      "about.vision_h3": "Notre Vision",
      "about.vision_p1": "Nous imaginons un monde où chaque produit a un jumeau numérique. Où les clients expérimentent avant d'acheter, et les entreprises se connectent avec leur public grâce à la technologie RA immersive.",
      "about.vision_p2": "L'avenir du commerce est immersif, interactif et accessible — et nous construisons la plateforme pour faire de cet avenir une réalité aujourd'hui, pour les entreprises partout.",
      "about.stats_badge": "Chiffres",
      "about.stats_title": "Notre Impact",
      "about.stats_desc": "Les résultats derrière notre engagement envers l'innovation RA",
      "about.stat1": "Années en RA",
      "about.stat2": "Produits Modélisés en 3D",
      "about.stat3": "Clients Actifs",
      "about.stat4": "Vues RA",
      "about.values_badge": "Valeurs",
      "about.values_title": "Ce que nous défendons",
      "about.values_desc": "Les principes fondamentaux qui guident tout ce que nous construisons",
      "about.value1": "Innovation",
      "about.value1_desc": "Nous repoussons les limites du possible avec la technologie RA et 3D, explorant toujours de nouvelles façons d'améliorer les expériences produit.",
      "about.value2": "Qualité",
      "about.value2_desc": "Chaque modèle 3D que nous créons répond aux plus hauts standards de photoréalisme, de performance et de compatibilité multiplateforme.",
      "about.value3": "Accessibilité",
      "about.value3_desc": "La RA doit fonctionner pour tous. Pas d'applications, pas de téléchargements — scannez et visualisez. Nous rendons la technologie immersive sans effort.",
      "about.value4": "Partenariat",
      "about.value4_desc": "Votre succès est notre succès. Nous travaillons en étroite collaboration avec chaque client pour fournir des solutions qui génèrent de vrais résultats.",
      "about.tech_badge": "Expertise",
      "about.tech_title": "Notre Technologie",
      "about.tech_desc": "Des outils et standards de pointe alimentent notre plateforme 3D et RA",
      "about.tech_h3": "Construit sur une Technologie de Pointe",
      "about.tech_p1": "Notre équipe combine expertise en modélisation 3D, développement web et technologie RA pour offrir des expériences fluides sur tous les appareils et plateformes.",
      "about.tech_p2": "Nous utilisons des formats de fichiers et des technologies web standards pour garantir compatibilité, performance et pérennité. Chaque modèle que nous créons est optimisé pour un chargement rapide sans sacrifier la qualité visuelle.",
      "about.tech_p3": "De la photogrammétrie au rendu en temps réel, notre pipeline exploite les meilleurs outils disponibles pour donner vie à vos produits en réalité augmentée.",

      // Services page
      "services.page_title": "Services",
      "services.badge": "Services",
      "services.title": "Nos Services",
      "services.desc": "Tout ce dont vous avez besoin pour propulser vos produits dans le monde augmenté",
      "services.s1": "Conversion 3D de Produits",
      "services.s1_desc": "Nous transformons vos produits physiques en modèles 3D photoréalistes. Envoyez des photos, des fichiers CAO ou des échantillons physiques — nous livrons des fichiers GLB optimisés prêts pour le web et la RA.",
      "services.s2": "Intégration WebAR",
      "services.s2_desc": "Aucune application requise. Notre technologie WebAR fonctionne directement dans les navigateurs mobiles. Les clients visualisent les produits en réalité augmentée en un seul clic.",
      "services.s3": "Système de QR Codes",
      "services.s3_desc": "Chaque produit reçoit un QR code unique. Suivez les scans, gérez les codes et placez-les sur les emballages, la signalétique ou les supports numériques. Analyses complètes incluses.",
      "services.step1_desc": "Envoyez-nous des photos, des fichiers CAO ou votre produit physique. Nos artistes 3D créent un modèle photoréaliste utilisant des outils standards comme Blender, optimisé pour un chargement web rapide et la visualisation RA sur tout appareil.",
      "services.step2_desc": "Chaque produit reçoit un QR code unique lié à son modèle 3D. Placez-le sur les menus, étiquettes, emballages, signalétiques ou supports numériques — partout où vos clients interagissent avec vos produits.",
      "services.step3_desc": "Un scan ouvre la visionneuse 3D instantanément — aucun téléchargement d'application. Les clients explorent, zooment et visualisent les produits en RA, augmentant la confiance, réduisant les retours et stimulant les ventes.",
      "services.details_badge": "Détails",
      "services.details_title": "Étapes Détaillées",
      "services.details_desc": "Un aperçu approfondi de chaque étape du processus NextGenAR",
      "services.details_page_title": "Détails du Service",
      "services.detail1_title": "Modélisation & Conversion 3D",
      "services.detail1_desc": "Notre processus commence avec votre produit. Que vous fournissiez des photos professionnelles, des fichiers CAO ou un échantillon physique, notre équipe crée un modèle 3D très détaillé et photoréaliste. Nous utilisons la photogrammétrie et des techniques de modélisation manuelle dans Blender, puis optimisons le modèle pour les performances web — réduisant la taille du fichier sans compromettre la qualité visuelle. Le livrable final est un fichier GLB compatible avec tous les navigateurs modernes et plateformes RA.",
      "services.detail2_title": "Génération & Déploiement de QR Codes",
      "services.detail2_desc": "Une fois votre modèle 3D prêt, nous générons un QR code unique qui lie directement au visualiseur WebAR du modèle. Vous pouvez télécharger, imprimer ou intégrer le QR code partout — emballage produit, signalétique retail, publicités numériques ou campagnes email. Notre système suit chaque scan, vous donnant des analyses en temps réel sur l'engagement client, la localisation géographique et le type d'appareil.",
      "services.detail3_title": "Expérience RA du Client",
      "services.detail3_desc": "Lorsqu'un client scanne le QR code, le visualiseur 3D s'ouvre instantanément dans son navigateur mobile — aucun téléchargement d'application requis. Il peut faire pivoter le produit à 360°, zoomer sur les détails et appuyer sur le bouton RA pour placer le produit dans son environnement réel via la caméra de son téléphone. L'expérience fonctionne parfaitement sur iOS (via Quick Look / USDZ) et Android (via WebXR), offrant une expérience cohérente et immersive sur tous les appareils.",

      // Portfolio page
      "demo.badge": "Portfolio",
      "demo.title": "Portefeuille de Modèles 3D",
      "demo.desc": "Explorez notre collection de modèles 3D — interagissez, pivotez et visualisez-les en réalité augmentée",
      "demo.feature_badge": "Portfolio 3D",
      "demo.hint": "Glissez pour pivoter · Molette pour zoomer · Touchez l'icône RA pour voir dans votre espace",
      "demo.gallery_badge": "Galerie",
      "demo.gallery_title": "Tous les Modèles 3D",
      "demo.gallery_desc": "Cliquez sur un modèle pour le charger dans le visualiseur ci-dessus",
      "demo.guide_badge": "Guide",
      "demo.guide_title": "Comment Visualiser en RA",
      "demo.guide_desc": "Suivez ces étapes simples pour découvrir les produits en réalité augmentée",
      "demo.step1_title": "1. Ouvrez sur Votre Téléphone",
      "demo.step1_desc": "Ouvrez cette page sur votre appareil mobile, ou scannez le QR code avec l'appareil photo de votre téléphone pour lancer directement le visualiseur 3D.",
      "demo.step2_title": "2. Touchez l'Icône RA",
      "demo.step2_desc": "Cherchez l'icône RA dans le coin inférieur droit du visualiseur 3D et touchez-la pour lancer l'expérience de réalité augmentée.",
      "demo.step3_title": "3. Pointez sur une Surface Plane",
      "demo.step3_desc": "Déplacez votre téléphone pour scanner une surface plane comme un sol ou une table. Le modèle apparaîtra dans votre espace réel — glissez pour le repositionner.",
      "demo.ar_note": "La RA fonctionne sur iOS 12+ (Safari) et Android 8+ (Chrome)",
      "demo.cta_title": "Vous voulez cela pour vos produits ?",
      "demo.cta_desc": "Voyez comment NextGenAR peut transformer votre catalogue en expériences 3D et RA immersives. Obtenez votre premier modèle gratuit — sans carte de crédit requise.",

      // Contact page
      "contact.page_title": "Contact",
      "contact.badge": "Contact",
      "contact.title": "Contactez-Nous",
      "contact.desc": "Une question ou prêt à démarrer ? Nous serions ravis de vous entendre.",
      "contact.info": "Informations de Contact",
      "contact.info_desc": "Contactez-nous via l'un des canaux ci-dessous. Notre équipe est prête à vous aider à propulser vos produits dans la réalité augmentée.",
      "contact.location": "Emplacement",
      "contact.email_label": "Email",
      "contact.phone_label": "Téléphone",
      "contact.hours_label": "Horaires",
      "contact.hours_value": "Lun-Ven: 9h - 19h",
      "contact.form_title": "Envoyez-Nous un Message",
      "contact.form_desc": "Remplissez le formulaire ci-dessous et notre équipe vous répondra sous 24 heures.",
      "contact.label_name": "Votre Nom",
      "contact.label_email": "Votre Email",
      "contact.label_subject": "Sujet",
      "contact.label_message": "Message",
      "contact.btn_send": "Envoyer le Message",
      "contact.whatsapp_badge": "Chat Rapide",
      "contact.whatsapp_title": "Préférez WhatsApp ?",
      "contact.whatsapp_desc": "Discutez avec nous directement !",
      "contact.whatsapp_btn": "Discuter sur WhatsApp",

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
      "nav.demo": "بورتفوليو",
      "nav.pricing": "الأسعار",
      "nav.clients": "العملاء",
      "nav.contact": "اتصل بنا",

      // Hero
      "hero.badge": "لا حاجة لتطبيق — امسح وشاهد",
      "hero.title_pre": "حيث يلتقي الملموس بـ",
      "hero.title_highlight": "الافتراضي",
      "hero.desc": "يحوّل NextGenAR منتجاتك المادية إلى تجارب ثلاثية الأبعاد وواقع معزز غامرة. يقوم العملاء بمسح رمز QR أو النقر على رابط — واستكشاف منتجاتك فوراً بالأبعاد الثلاثية والواقع المعزز مباشرة من متصفحهم.",
      "hero.btn_start": "ابدأ الآن",
      "hero.btn_demo": "عرض البورتفوليو",
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
      "about.page_title": "من نحن",
      "about.mission_badge": "من نحن",
      "about.mission_title": "مهمتنا ورؤيتنا",
      "about.mission_desc": "جسر الفجوة بين المنتجات المادية والتجارب الرقمية",
      "about.mission_h3": "مهمتنا",
      "about.mission_p1": "مهمتنا هي القضاء على الفجوة بين المنتجات المادية والتجارب الرقمية. كل منتج يستحق أن يتم استكشافه بالأبعاد الثلاثية والواقع المعزز قبل الشراء.",
      "about.mission_p2": "من خلال جعل الواقع المعزز متاحاً للشركات بجميع أحجامها، نحوّل كيفية تفاعل العملاء مع المنتجات — مما يزيد الثقة ويقلل الإرجاعات ويعزز المبيعات في كل صناعة.",
      "about.vision_h3": "رؤيتنا",
      "about.vision_p1": "نتخيل عالماً يكون لكل منتج فيه توأم رقمي. حيث يعيش العملاء التجربة قبل الشراء، وتتواصل الشركات مع جمهورها من خلال تقنية الواقع المعزز الغامرة.",
      "about.vision_p2": "مستقبل التجارة غامر وتفاعلي ومتاح — ونحن نبني المنصة لنجعل هذا المستقبل حقيقة اليوم، للشركات في كل مكان.",
      "about.stats_badge": "أرقام",
      "about.stats_title": "تأثيرنا",
      "about.stats_desc": "النتائج وراء التزامنا بالابتكار في الواقع المعزز",
      "about.stat1": "سنوات في الواقع المعزز",
      "about.stat2": "منتجات نمذجة ثلاثية الأبعاد",
      "about.stat3": "عملاء نشطون",
      "about.stat4": "مشاهدات الواقع المعزز",
      "about.values_badge": "القيم",
      "about.values_title": "ما نؤمن به",
      "about.values_desc": "المبادئ الأساسية التي توجه كل ما نبنيه",
      "about.value1": "الابتكار",
      "about.value1_desc": "نحن ندفع حدود ما هو ممكن مع تقنية الواقع المعزز والأبعاد الثلاثية، نستكشف دائماً طرقاً جديدة لتعزيز تجارب المنتجات.",
      "about.value2": "الجودة",
      "about.value2_desc": "كل نموذج ثلاثي الأبعاد ننشئه يلبي أعلى معايير الواقعية والأداء والتوافق عبر المنصات.",
      "about.value3": "إمكانية الوصول",
      "about.value3_desc": "الواقع المعزز يجب أن يعمل للجميع. لا تطبيقات، لا تحميلات — امسح وشاهد. نجعل التقنية الغامرة بلا جهد.",
      "about.value4": "الشراكة",
      "about.value4_desc": "نجاحك هو نجاحنا. نعمل عن كثب مع كل عميل لتقديم حلول تحقق نتائج حقيقية للأعمال.",
      "about.tech_badge": "الخبرة",
      "about.tech_title": "تقنيتنا",
      "about.tech_desc": "أدوات ومعايير رائدة في الصناعة تقود منصتنا ثلاثية الأبعاد والواقع المعزز",
      "about.tech_h3": "مبني على تقنية متطورة",
      "about.tech_p1": "فريقنا يجمع الخبرة في النمذجة ثلاثية الأبعاد وتطوير الويب وتقنية الواقع المعزز لتقديم تجارب سلسة عبر جميع الأجهزة والمنصات.",
      "about.tech_p2": "نستخدم تنسيقات ملفات وتقنيات ويب قياسية لضمان التوافق والأداء والاستدامة. كل نموذج ننشئه محسّن للتحميل السريع دون التضحية بالجودة البصرية.",
      "about.tech_p3": "من المسح الضوئي إلى العرض الفوري، خط الإنتاج لدينا يستفيد من أفضل الأدوات المتاحة لإحياء منتجاتك في الواقع المعزز.",

      // Services page
      "services.page_title": "الخدمات",
      "services.badge": "الخدمات",
      "services.title": "خدماتنا",
      "services.desc": "كل ما تحتاجه لإطلاق منتجاتك نحو العالم المعزز",
      "services.s1": "تحويل المنتجات ثلاثية الأبعاد",
      "services.s1_desc": "نحوّل منتجاتك المادية إلى نماذج ثلاثية الأبعاد واقعية. أرسل صوراً أو ملفات CAO أو عينات مادية — نسلم ملفات GLB محسّنة جاهزة للويب والواقع المعزز.",
      "services.s2": "تكامل WebAR",
      "services.s2_desc": "لا حاجة لتطبيق. تقنية WebAR لدينا تعمل مباشرة في متصفحات الجوال. يشاهد العملاء المنتجات بالواقع المعزز بنقرة واحدة.",
      "services.s3": "نظام رموز QR",
      "services.s3_desc": "يحصل كل منتج على رمز QR فريد. تتبع المسحات وأدِر الرموز وضعها على التغليف أو اللافتات أو المواد الرقمية. تحليلات كاملة مضمنة.",
      "services.step1_desc": "أرسل لنا صوراً أو ملفات CAO أو منتجك المادي. فنانونا ثلاثيو الأبعاد ينشئون نموذجاً واقعياً باستخدام أدوات قياسية مثل Blender، محسّن للتحميل السريع وعرض الواقع المعزز على أي جهاز.",
      "services.step2_desc": "يحصل كل منتج على رمز QR فريد مرتبط بنموذجه ثلاثي الأبعاد. ضعه على القوائم أو العلامات أو التغليف أو اللافتات أو المواد الرقمية — في أي مكان يتفاعل فيه عملاؤك مع منتجاتك.",
      "services.step3_desc": "مسحة واحدة تفتح عارض ثلاثي الأبعاد فوراً — لا حاجة لتحميل تطبيق. يستكشف العملاء ويكبّرون ويشاهدون المنتجات بالواقع المعزز، مما يزيد الثقة ويقلل الإرجاعات ويعزز المبيعات.",
      "services.details_badge": "تفاصيل",
      "services.details_title": "تفصيل الخطوات",
      "services.details_desc": "نظرة أعمق على كل مرحلة من عملية NextGenAR",
      "services.details_page_title": "تفاصيل الخدمة",
      "services.detail1_title": "النمذجة والتحويل ثلاثي الأبعاد",
      "services.detail1_desc": "عمليتنا تبدأ بمنتجك. سواء قدمت تصويراً احترافياً أو ملفات هندسية أو أرسلت عينة مادية، فريقنا ينشئ نموذجاً ثلاثي الأبعاد عالي التفاصيل وواقعياً. نستخدم المسح الضوئي وتقنيات النمذجة اليدوية في Blender، ثم نحسّن النموذج لأداء الويب — تقليل حجم الملف دون المساس بالجودة البصرية. المخرج النهائي هو ملف GLB متوافق مع جميع المتصفحات الحديثة ومنصات الواقع المعزز.",
      "services.detail2_title": "توليد ونشر رموز QR",
      "services.detail2_desc": "بمجرد أن يصبح نموذجك ثلاثي الأبعاد جاهزاً، ننشئ رمز QR فريد يربط مباشرة بعارض WebAR للنموذج. يمكنك تحميل أو طباعة أو تضمين رمز QR في أي مكان — تغليف المنتجات، لافتات التجزئة، الإعلانات الرقمية أو حملات البريد الإلكتروني. نظامنا يتتبع كل مسحة، مما يمنحك تحليلات فورية عن تفاعل العملاء والموقع الجغرافي ونوع الجهاز.",
      "services.detail3_title": "تجربة الواقع المعزز للعميل",
      "services.detail3_desc": "عندما يمسح العميل رمز QR، يفتح عارض ثلاثي الأبعاد فوراً في متصفح جواله — لا حاجة لتحميل تطبيق. يمكنه تدوير المنتج 360° والتكبير على التفاصيل والضغط على زر AR لوضع المنتج في بيئته الحقيقية باستخدام كاميرا هاتفه. التجربة تعمل بسلاسة على iOS (عبر Quick Look / USDZ) و Android (عبر WebXR)، مما يوفر تجربة متسقة وغامرة عبر جميع الأجهزة.",

      // Portfolio page
      "demo.badge": "بورتفوليو",
      "demo.title": "معرض النماذج ثلاثية الأبعاد",
      "demo.desc": "استكشف مجموعتنا من النماذج ثلاثية الأبعاد — تفاعل ودر وعرضها بالواقع المعزز",
      "demo.feature_badge": "بورتفوليو ثلاثي الأبعاد",
      "demo.hint": "اسحب للتدوير · مرر للتكبير · اضغط أيقونة AR للعرض في مساحتك",
      "demo.gallery_badge": "المعرض",
      "demo.gallery_title": "جميع النماذج ثلاثية الأبعاد",
      "demo.gallery_desc": "انقر على أي نموذج لتحميله في العارض أعلاه",
      "demo.guide_badge": "دليل",
      "demo.guide_title": "كيفية العرض بالواقع المعزز",
      "demo.guide_desc": "اتبع هذه الخطوات البسيطة لتجربة المنتجات بالواقع المعزز",
      "demo.step1_title": "1. افتح على هاتفك",
      "demo.step1_desc": "افتح هذه الصفحة على جهازك المحمول، أو امسح رمز QR بكاميرا هاتفك ل启动 العارض ثلاثي الأبعاد مباشرة.",
      "demo.step2_title": "2. اضغط أيقونة AR",
      "demo.step2_desc": "ابحث عن أيقونة AR في الزاوية السفلية اليمنى من العارض ثلاثي الأبعاد واضغط عليها لإطلاق تجربة الواقع المعزز.",
      "demo.step3_title": "3. وجّه نحو سطح مستوٍ",
      "demo.step3_desc": "حرّك هاتفك لمسح سطح مستوٍ مثل أرضية أو طاولة. سيظهر النموذج في مساحتك الحقيقية — اسحب لإعادة التموضع.",
      "demo.ar_note": "الواقع المعزز يعمل على iOS 12+ (Safari) و Android 8+ (Chrome)",
      "demo.cta_title": "تريد هذا لمنتجاتك؟",
      "demo.cta_desc": "اكتشف كيف يمكن لـ NextGenAR تحويل كتالوجك إلى تجارب ثلاثية الأبعاد وواقع معزز غامرة. احصل على نموذجك الأول مجاناً — بدون بطاقة ائتمان.",

      // Contact page
      "contact.page_title": "اتصل بنا",
      "contact.badge": "اتصل",
      "contact.title": "تواصل معنا",
      "contact.desc": "لديك سؤال أو مستعد للبدء؟ يسعدنا أن نسمع منك.",
      "contact.info": "معلومات الاتصال",
      "contact.info_desc": "تواصل معنا عبر أي من القنوات أدناه. فريقنا جاهز لمساعدتك في إطلاق منتجاتك نحو الواقع المعزز.",
      "contact.location": "الموقع",
      "contact.email_label": "البريد",
      "contact.phone_label": "الهاتف",
      "contact.hours_label": "الساعات",
      "contact.hours_value": "الإثن-الجم: 9ص - 7م",
      "contact.form_title": "أرسل لنا رسالة",
      "contact.form_desc": "املأ النموذج أدناه وسيرد عليك فريقنا خلال 24 ساعة.",
      "contact.label_name": "اسمك",
      "contact.label_email": "بريدك الإلكتروني",
      "contact.label_subject": "الموضوع",
      "contact.label_message": "الرسالة",
      "contact.btn_send": "إرسال الرسالة",
      "contact.whatsapp_badge": "محادثة سريعة",
      "contact.whatsapp_title": "تفضل واتساب؟",
      "contact.whatsapp_desc": "تحدث معنا مباشرة!",
      "contact.whatsapp_btn": "الدردشة على واتساب",

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
  }

  // Always apply saved language on DOM ready, even if the language
  // switcher UI is not present on the page.
  document.addEventListener("DOMContentLoaded", function () {
    applyTranslations(currentLang);
    initLanguageSwitcher();
  });
})();
