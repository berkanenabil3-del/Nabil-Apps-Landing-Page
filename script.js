/* =========================================================
   NABIL APPS - SCRIPT.JS
   ---------------------------------------------------------
   Features:
   - Dark / Light Mode
   - FR / EN / AR
   - Arabic RTL
   - Language persistence
   - Theme persistence
   - Pricing translation
   - Portfolio translation
   - Contact Form -> WhatsApp
   - Smooth scrolling
   - Language dropdown
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CONFIGURATION
    ===================================================== */

    const WHATSAPP_NUMBER = "213661106568";

    const DEFAULT_LANGUAGE = "fr";
    const DEFAULT_THEME = "light";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body = document.body;

    const themeToggle =
        document.getElementById("theme-toggle");

    const languageBtn =
        document.getElementById("languageBtn");

    const languageDropdown =
        document.querySelector(".language-dropdown");

    const languageMenu =
        document.getElementById("languageMenu");

    const currentLanguage =
        document.getElementById("currentLanguage");

    const contactForm =
        document.getElementById("contactForm");


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        /* =================================================
           FRENCH
        ================================================= */

        fr: {

            navHome: "Accueil",
            navServices: "Services",
            navPortfolio: "Portfolio",
            navAbout: "À propos",
            navContact: "Contact",
            navPricing: "Tarifs",

            quote: "Demander un devis",

            heroTitle:
                'Développement <span>Desktop</span>, <span>Web</span> & <span>Mobile</span>',

            heroText:
                "Nous développons des applications professionnelles, modernes et sécurisées pour les entreprises, commerces, cliniques et particuliers.",

            heroProjects:
                "Voir nos réalisations",

            whyTitle:
                "Pourquoi choisir Nabil Apps ?",

            whySpeed:
                "Rapidité",

            whySpeedText:
                "Livraison rapide et respect des délais.",

            whySecurity:
                "Sécurité",

            whySecurityText:
                "Applications fiables, modernes et sécurisées.",

            whySupport:
                "Support",

            whySupportText:
                "Assistance technique avant et après livraison.",

            servicesTitle:
                "Nos Services",

            servicesSubtitle:
                "Des solutions informatiques adaptées à vos besoins.",

            desktop:
                "Desktop",

            desktopText:
                "Applications Windows professionnelles pour la gestion d'entreprise.",

            web:
                "Web",

            webText:
                "Sites Web modernes et applications développées avec Django.",

            mobile:
                "Mobile",

            mobileText:
                "Applications Android rapides, modernes et intuitives.",

            saas:
                "SaaS",

            saasText:
                "Solutions Cloud sécurisées accessibles partout.",

            database:
                "Base de données",

            databaseText:
                "Conception et gestion de bases de données performantes.",

            maintenance:
                "Maintenance",

            maintenanceText:
                "Maintenance informatique, assistance et optimisation.",

            portfolioTitle:
                "Nos Réalisations",

            portfolioSubtitle:
                "Découvrez quelques applications développées par Nabil Apps.",

            gstockText:
                "Gestion de stock, ventes, achats et facturation.",

            mobilemanagerText:
                "Gestion des magasins de téléphones et ateliers de réparation.",

            medrdvText:
                "Gestion des rendez-vous médicaux.",

            gymmanagerText:
                "Gestion des abonnements, paiements et adhérents.",

            coutureText:
                "Gestion complète des ateliers de couture.",

            patisserieText:
                "Gestion des commandes, clients et production.",

            restaurantText:
                "Solution complète pour les commerçants et les petites entreprises.",

            viewProject:
                "Voir le projet",

            aboutTitle:
                "À propos de Nabil Apps",

            aboutText1:
                "Nabil Apps est spécialisé dans le développement d'applications Desktop, Web et Mobile.",

            aboutText2:
                "Nous créons des solutions innovantes pour les entreprises, commerces, cliniques, restaurants, salles de sport et ateliers.",

            aboutDesktop:
                "Développement Desktop",

            aboutWeb:
                "Développement Web",

            aboutAndroid:
                "Applications Android",

            aboutSaas:
                "Solutions SaaS",

            aboutSupport:
                "Maintenance & Support",

            testimonialsTitle:
                "Ce que disent nos clients",

            testimonial1:
                "Excellent travail, application moderne et support technique rapide.",

            testimonial2:
                "Très satisfait du développement de notre application de gestion.",

            testimonial3:
                "Une équipe sérieuse, professionnelle et à l'écoute.",

            company:
                "Entreprise",

            professionalClient:
                "Client Professionnel",

            sme:
                "PME",

            contactTitle:
                "Contactez-nous",

            contactText:
                "Besoin d'une application ? Contactez Nabil Apps dès aujourd'hui.",

            namePlaceholder:
                "Votre nom",

            emailPlaceholder:
                "Votre email",

            phonePlaceholder:
                "Téléphone",

            projectPlaceholder:
                "Décrivez votre projet...",

            send:
                "Envoyer via WhatsApp",

            location:
                "Sétif - Algérie",

            footerDescription:
                "Développement Desktop • Web • Mobile",

            copyright:
                "© 2026 Nabil Apps. Tous droits réservés.",

            pricingTitle:
                "Nos tarifs",

            pricingSubtitle:
                "Des solutions professionnelles adaptées à votre budget.",

            landingPage:
                "Landing Page",

            landingPrice:
                "À partir de 15 000 DA",

            modernDesign:
                "✓ Design moderne",

            responsiveMobile:
                "✓ Responsive Mobile",

            contactForm:
                "✓ Formulaire de contact",

            whatsappIntegration:
                "✓ Intégration WhatsApp",

            seoOptimization:
                "✓ Optimisation SEO",

            requestQuote:
                "Demander un devis",

            popular:
                "POPULAIRE",

            website:
                "Site Web",

            websitePrice:
                "À partir de 30 000 DA",

            professionalDesign:
                "✓ Design professionnel",

            multiplePages:
                "✓ Plusieurs pages",

            mobileApp:
                "Application Mobile",

            mobilePrice:
                "À partir de 40 000 DA",

            androidApp:
                "✓ Application Android",

            modernInterface:
                "✓ Interface moderne",

            authentication:
                "✓ Authentification",

            technicalSupport:
                "✓ Support technique",

            pricingNote:
                "* Les tarifs sont indicatifs. Le prix final dépend des fonctionnalités, de la complexité et des besoins spécifiques du projet.",

            alertName:
                "Veuillez saisir votre nom.",

            alertEmail:
                "Veuillez saisir votre adresse email.",

            alertEmailInvalid:
                "Veuillez saisir une adresse email valide."

        },


        /* =================================================
           ENGLISH
        ================================================= */

        en: {

            navHome: "Home",
            navServices: "Services",
            navPortfolio: "Portfolio",
            navAbout: "About",
            navContact: "Contact",
            navPricing: "Pricing",

            quote: "Request a Quote",

            heroTitle:
                'Desktop, <span>Web</span> & <span>Mobile</span> Development',

            heroText:
                "We develop professional, modern and secure applications for businesses, shops, clinics and individuals.",

            heroProjects:
                "View Our Projects",

            whyTitle:
                "Why Choose Nabil Apps?",

            whySpeed:
                "Fast",

            whySpeedText:
                "Fast delivery while respecting deadlines.",

            whySecurity:
                "Security",

            whySecurityText:
                "Reliable, modern and secure applications.",

            whySupport:
                "Support",

            whySupportText:
                "Technical assistance before and after delivery.",

            servicesTitle:
                "Our Services",

            servicesSubtitle:
                "IT solutions tailored to your needs.",

            desktop:
                "Desktop",

            desktopText:
                "Professional Windows applications for business management.",

            web:
                "Web",

            webText:
                "Modern websites and applications developed with Django.",

            mobile:
                "Mobile",

            mobileText:
                "Fast, modern and intuitive Android applications.",

            saas:
                "SaaS",

            saasText:
                "Secure Cloud solutions accessible from anywhere.",

            database:
                "Database",

            databaseText:
                "Design and management of high-performance databases.",

            maintenance:
                "Maintenance",

            maintenanceText:
                "IT maintenance, assistance and optimization.",

            portfolioTitle:
                "Our Projects",

            portfolioSubtitle:
                "Discover some applications developed by Nabil Apps.",

            gstockText:
                "Stock management, sales, purchases and invoicing.",

            mobilemanagerText:
                "Management of phone stores and repair workshops.",

            medrdvText:
                "Medical appointment management.",

            gymmanagerText:
                "Management of memberships, payments and members.",

            coutureText:
                "Complete management solution for sewing workshops.",

            patisserieText:
                "Management of orders, customers and production.",

            restaurantText:
                "Complete solution for merchants and small businesses.",

            viewProject:
                "View Project",

            aboutTitle:
                "About Nabil Apps",

            aboutText1:
                "Nabil Apps specializes in Desktop, Web and Mobile application development.",

            aboutText2:
                "We create innovative solutions for businesses, shops, clinics, restaurants, gyms and workshops.",

            aboutDesktop:
                "Desktop Development",

            aboutWeb:
                "Web Development",

            aboutAndroid:
                "Android Applications",

            aboutSaas:
                "SaaS Solutions",

            aboutSupport:
                "Maintenance & Support",

            testimonialsTitle:
                "What Our Clients Say",

            testimonial1:
                "Excellent work, modern application and fast technical support.",

            testimonial2:
                "Very satisfied with the development of our management application.",

            testimonial3:
                "A serious, professional and attentive team.",

            company:
                "Company",

            professionalClient:
                "Professional Client",

            sme:
                "SME",

            contactTitle:
                "Contact Us",

            contactText:
                "Need an application? Contact Nabil Apps today.",

            namePlaceholder:
                "Your Name",

            emailPlaceholder:
                "Your Email",

            phonePlaceholder:
                "Phone",

            projectPlaceholder:
                "Describe your project...",

            send:
                "Send via WhatsApp",

            location:
                "Setif - Algeria",

            footerDescription:
                "Desktop • Web • Mobile Development",

            copyright:
                "© 2026 Nabil Apps. All rights reserved.",

            pricingTitle:
                "Our Pricing",

            pricingSubtitle:
                "Professional solutions adapted to your budget.",

            landingPage:
                "Landing Page",

            landingPrice:
                "Starting from 15,000 DA",

            modernDesign:
                "✓ Modern Design",

            responsiveMobile:
                "✓ Mobile Responsive",

            contactForm:
                "✓ Contact Form",

            whatsappIntegration:
                "✓ WhatsApp Integration",

            seoOptimization:
                "✓ SEO Optimization",

            requestQuote:
                "Request a Quote",

            popular:
                "POPULAR",

            website:
                "Website",

            websitePrice:
                "Starting from 30,000 DA",

            professionalDesign:
                "✓ Professional Design",

            multiplePages:
                "✓ Multiple Pages",

            mobileApp:
                "Mobile Application",

            mobilePrice:
                "Starting from 40,000 DA",

            androidApp:
                "✓ Android Application",

            modernInterface:
                "✓ Modern Interface",

            authentication:
                "✓ Authentication",

            technicalSupport:
                "✓ Technical Support",

            pricingNote:
                "* Prices are indicative. The final price depends on the features, complexity and specific requirements of the project.",

            alertName:
                "Please enter your name.",

            alertEmail:
                "Please enter your email address.",

            alertEmailInvalid:
                "Please enter a valid email address."

        },


        /* =================================================
           ARABIC
        ================================================= */

        ar: {

            navHome: "الرئيسية",
            navServices: "الخدمات",
            navPortfolio: "أعمالنا",
            navAbout: "من نحن",
            navContact: "اتصل بنا",
            navPricing: "الأسعار",

            quote: "طلب عرض سعر",

            heroTitle:
                'تطوير تطبيقات <span>سطح المكتب</span> و<span>الويب</span> و<span>الهاتف</span>',

            heroText:
                "نقوم بتطوير تطبيقات احترافية وعصرية وآمنة للشركات والمحلات والعيادات والأفراد.",

            heroProjects:
                "شاهد أعمالنا",

            whyTitle:
                "لماذا تختار Nabil Apps؟",

            whySpeed:
                "السرعة",

            whySpeedText:
                "تسليم سريع واحترام المواعيد.",

            whySecurity:
                "الأمان",

            whySecurityText:
                "تطبيقات موثوقة وعصرية وآمنة.",

            whySupport:
                "الدعم",

            whySupportText:
                "دعم تقني قبل وبعد تسليم المشروع.",

            servicesTitle:
                "خدماتنا",

            servicesSubtitle:
                "حلول معلوماتية مصممة حسب احتياجاتك.",

            desktop:
                "تطبيقات سطح المكتب",

            desktopText:
                "تطبيقات Windows احترافية لتسيير المؤسسات.",

            web:
                "تطبيقات الويب",

            webText:
                "مواقع وتطبيقات ويب عصرية مطورة باستخدام Django.",

            mobile:
                "تطبيقات الهاتف",

            mobileText:
                "تطبيقات Android سريعة وعصرية وسهلة الاستخدام.",

            saas:
                "SaaS",

            saasText:
                "حلول سحابية آمنة يمكن الوصول إليها من أي مكان.",

            database:
                "قواعد البيانات",

            databaseText:
                "تصميم وإدارة قواعد بيانات عالية الأداء.",

            maintenance:
                "الصيانة",

            maintenanceText:
                "الصيانة المعلوماتية والدعم وتحسين الأنظمة.",

            portfolioTitle:
                "أعمالنا",

            portfolioSubtitle:
                "اكتشف بعض التطبيقات التي تم تطويرها بواسطة Nabil Apps.",

            gstockText:
                "تسيير المخزون والمبيعات والمشتريات والفواتير.",

            mobilemanagerText:
                "تسيير محلات بيع الهواتف وورشات الإصلاح.",

            medrdvText:
                "تسيير المواعيد الطبية.",

            gymmanagerText:
                "تسيير الاشتراكات والمدفوعات والمنخرطين.",

            coutureText:
                "حل متكامل لتسيير ورشات الخياطة.",

            patisserieText:
                "تسيير الطلبات والزبائن والإنتاج.",

            restaurantText:
                "حل متكامل للتجار والمؤسسات الصغيرة.",

            viewProject:
                "عرض المشروع",

            aboutTitle:
                "من نحن - Nabil Apps",

            aboutText1:
                "Nabil Apps متخصصة في تطوير تطبيقات سطح المكتب والويب والهاتف.",

            aboutText2:
                "نقوم بإنشاء حلول مبتكرة للشركات والمحلات والعيادات والمطاعم وقاعات الرياضة وورشات العمل.",

            aboutDesktop:
                "تطوير تطبيقات سطح المكتب",

            aboutWeb:
                "تطوير تطبيقات الويب",

            aboutAndroid:
                "تطبيقات Android",

            aboutSaas:
                "حلول SaaS",

            aboutSupport:
                "الصيانة والدعم",

            testimonialsTitle:
                "ماذا يقول عملاؤنا؟",

            testimonial1:
                "عمل ممتاز، تطبيق عصري ودعم تقني سريع.",

            testimonial2:
                "راضٍ جدًا عن تطوير تطبيق التسيير الخاص بنا.",

            testimonial3:
                "فريق جاد ومحترف ويهتم باحتياجات العميل.",

            company:
                "مؤسسة",

            professionalClient:
                "عميل محترف",

            sme:
                "مؤسسة صغيرة ومتوسطة",

            contactTitle:
                "اتصل بنا",

            contactText:
                "تحتاج إلى تطبيق؟ اتصل بـ Nabil Apps اليوم.",

            namePlaceholder:
                "اسمك",

            emailPlaceholder:
                "البريد الإلكتروني",

            phonePlaceholder:
                "رقم الهاتف",

            projectPlaceholder:
                "صف لنا مشروعك...",

            send:
                "إرسال عبر WhatsApp",

            location:
                "سطيف - الجزائر",

            footerDescription:
                "تطوير تطبيقات سطح المكتب • الويب • الهاتف",

            copyright:
                "© 2026 Nabil Apps. جميع الحقوق محفوظة.",

            pricingTitle:
                "أسعارنا",

            pricingSubtitle:
                "حلول احترافية مناسبة لميزانيتك.",

            landingPage:
                "صفحة هبوط",

            landingPrice:
                "ابتداءً من 15,000 دج",

            modernDesign:
                "✓ تصميم عصري",

            responsiveMobile:
                "✓ متوافق مع الهاتف",

            contactForm:
                "✓ نموذج اتصال",

            whatsappIntegration:
                "✓ دمج WhatsApp",

            seoOptimization:
                "✓ تحسين محركات البحث",

            requestQuote:
                "طلب عرض سعر",

            popular:
                "الأكثر طلبًا",

            website:
                "موقع ويب",

            websitePrice:
                "ابتداءً من 30,000 دج",

            professionalDesign:
                "✓ تصميم احترافي",

            multiplePages:
                "✓ عدة صفحات",

            mobileApp:
                "تطبيق جوال",

            mobilePrice:
                "ابتداءً من 40,000 دج",

            androidApp:
                "✓ تطبيق Android",

            modernInterface:
                "✓ واجهة عصرية",

            authentication:
                "✓ نظام المصادقة",

            technicalSupport:
                "✓ الدعم الفني",

            pricingNote:
                "* الأسعار تقريبية. السعر النهائي يعتمد على الوظائف المطلوبة وتعقيد المشروع واحتياجات العميل الخاصة.",

            alertName:
                "يرجى إدخال اسمك.",

            alertEmail:
                "يرجى إدخال بريدك الإلكتروني.",

            alertEmailInvalid:
                "يرجى إدخال بريد إلكتروني صحيح."

        }

    };


    /* =====================================================
       DARK MODE
    ===================================================== */

    function updateThemeIcon(isDark) {

        if (!themeToggle) {
            return;
        }

        const icon =
            themeToggle.querySelector("i");

        if (!icon) {
            return;
        }

        if (isDark) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

            themeToggle.setAttribute(
                "aria-label",
                "Mode clair"
            );

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

            themeToggle.setAttribute(
                "aria-label",
                "Mode sombre"
            );
        }
    }


    function setTheme(theme) {

        const isDark =
            theme === "dark";

        body.classList.toggle(
            "dark",
            isDark
        );

        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );

        updateThemeIcon(isDark);
    }


    if (themeToggle) {

        const savedTheme =
            localStorage.getItem("theme") ||
            DEFAULT_THEME;

        setTheme(savedTheme);

        themeToggle.addEventListener(
            "click",
            function () {

                const isDark =
                    body.classList.contains("dark");

                setTheme(
                    isDark
                        ? "light"
                        : "dark"
                );
            }
        );
    }


    /* =====================================================
       UPDATE ELEMENT WITH ICON
    ===================================================== */

    function setElementText(element, text) {

        if (!element) {
            return;
        }

        element.textContent = text;
    }


    function setElementHTML(element, html) {

        if (!element) {
            return;
        }

        element.innerHTML = html;
    }


    /* =====================================================
       SET LANGUAGE
    ===================================================== */

    function setLanguage(lang) {

        if (!translations[lang]) {
            lang = DEFAULT_LANGUAGE;
        }

        const t =
            translations[lang];


        /* -----------------------------------------------
           HTML LANGUAGE
        ------------------------------------------------ */

        document.documentElement.lang =
            lang;


        /* -----------------------------------------------
           RTL / LTR
        ------------------------------------------------ */

        if (lang === "ar") {

            document.documentElement.dir =
                "rtl";

            body.classList.add("rtl");

        } else {

            document.documentElement.dir =
                "ltr";

            body.classList.remove("rtl");
        }


        /* =================================================
           DATA-I18N
        ================================================= */

        document
            .querySelectorAll("[data-i18n]")
            .forEach(function (element) {

                const key =
                    element.getAttribute("data-i18n");

                if (
                    t[key] !== undefined
                ) {

                    element.textContent =
                        t[key];
                }
            });


        /* =================================================
           HEADER NAVIGATION
        ================================================= */

        const navLinks =
            document.querySelectorAll(
                "nav ul li a"
            );

        if (navLinks.length >= 6) {

            setElementText(
                navLinks[0],
                t.navHome
            );

            setElementText(
                navLinks[1],
                t.navServices
            );

            setElementText(
                navLinks[2],
                t.navPortfolio
            );

            setElementText(
                navLinks[3],
                t.navAbout
            );

            setElementText(
                navLinks[4],
                t.navContact
            );

            setElementText(
                navLinks[5],
                t.navPricing
            );
        }


        /* =================================================
           HEADER QUOTE BUTTON
        ================================================= */

        const headerButton =
            document.querySelector(
                ".btn-header"
            );

        if (headerButton) {

            setElementText(
                headerButton,
                t.quote
            );
        }


        /* =================================================
           HERO
        ================================================= */

        const heroTitle =
            document.querySelector(
                ".hero h1"
            );

        if (heroTitle) {

            setElementHTML(
                heroTitle,
                t.heroTitle
            );
        }


        const heroText =
            document.querySelector(
                ".hero-content > p"
            );

        if (heroText) {

            setElementText(
                heroText,
                t.heroText
            );
        }


        const heroButtons =
            document.querySelectorAll(
                ".hero-buttons a"
            );

        if (heroButtons.length >= 2) {

            setElementText(
                heroButtons[0],
                t.heroProjects
            );

            setElementText(
                heroButtons[1],
                t.quote
            );
        }


        /* =================================================
           WHY US
        ================================================= */

        const whySection =
            document.querySelector(
                ".why-us"
            );

        if (whySection) {

            setElementText(
                whySection.querySelector("h2"),
                t.whyTitle
            );

            const cards =
                whySection.querySelectorAll(
                    ".why-card"
                );

            const data = [

                [
                    t.whySpeed,
                    t.whySpeedText
                ],

                [
                    t.whySecurity,
                    t.whySecurityText
                ],

                [
                    t.whySupport,
                    t.whySupportText
                ]

            ];

            cards.forEach(
                function (card, index) {

                    if (!data[index]) {
                        return;
                    }

                    setElementText(
                        card.querySelector("h3"),
                        data[index][0]
                    );

                    setElementText(
                        card.querySelector("p"),
                        data[index][1]
                    );
                }
            );
        }


        /* =================================================
           SERVICES
        ================================================= */

        const services =
            document.querySelector(
                ".services"
            );

        if (services) {

            setElementText(
                services.querySelector("h2"),
                t.servicesTitle
            );

            setElementText(
                services.querySelector(
                    ".section-subtitle"
                ),
                t.servicesSubtitle
            );

            const cards =
                services.querySelectorAll(
                    ".service-card"
                );

            const serviceData = [

                [
                    t.desktop,
                    t.desktopText
                ],

                [
                    t.web,
                    t.webText
                ],

                [
                    t.mobile,
                    t.mobileText
                ],

                [
                    t.saas,
                    t.saasText
                ],

                [
                    t.database,
                    t.databaseText
                ],

                [
                    t.maintenance,
                    t.maintenanceText
                ]

            ];

            cards.forEach(
                function (card, index) {

                    if (!serviceData[index]) {
                        return;
                    }

                    setElementText(
                        card.querySelector("h3"),
                        serviceData[index][0]
                    );

                    setElementText(
                        card.querySelector("p"),
                        serviceData[index][1]
                    );
                }
            );
        }


        /* =================================================
           PORTFOLIO
        ================================================= */

        const portfolio =
            document.querySelector(
                ".portfolio"
            );

        if (portfolio) {

            setElementText(
                portfolio.querySelector("h2"),
                t.portfolioTitle
            );

            setElementText(
                portfolio.querySelector(
                    ".portfolio-subtitle"
                ),
                t.portfolioSubtitle
            );

            const cards =
                portfolio.querySelectorAll(
                    ".portfolio-card"
                );

            const portfolioTexts = [

                t.gstockText,
                t.mobilemanagerText,
                t.medrdvText,
                t.gymmanagerText,
                t.coutureText,
                t.patisserieText,
                t.restaurantText

            ];

            cards.forEach(
                function (card, index) {

                    if (portfolioTexts[index]) {

                        setElementText(
                            card.querySelector("p"),
                            portfolioTexts[index]
                        );
                    }

                    setElementText(
                        card.querySelector(".btn-project"),
                        t.viewProject
                    );
                }
            );
        }


        /* =================================================
           ABOUT
        ================================================= */

        const about =
            document.querySelector(
                ".about"
            );

        if (about) {

            setElementText(
                about.querySelector("h2"),
                t.aboutTitle
            );

            const paragraphs =
                about.querySelectorAll(
                    ".about-content > p"
                );

            if (paragraphs.length >= 2) {

                setElementText(
                    paragraphs[0],
                    t.aboutText1
                );

                setElementText(
                    paragraphs[1],
                    t.aboutText2
                );
            }


            const list =
                about.querySelectorAll(
                    ".about-list div"
                );

            const aboutItems = [

                t.aboutDesktop,
                t.aboutWeb,
                t.aboutAndroid,
                t.aboutSaas,
                t.aboutSupport

            ];

            list.forEach(
                function (item, index) {

                    const icon =
                        item.querySelector("i");

                    item.textContent = "";

                    if (icon) {
                        item.appendChild(icon);
                    }

                    if (aboutItems[index]) {

                        item.appendChild(
                            document.createTextNode(
                                " " +
                                aboutItems[index]
                            )
                        );
                    }
                }
            );


            setElementText(
                about.querySelector(
                    ".btn-primary"
                ),
                t.quote
            );
        }


        /* =================================================
           TESTIMONIALS
        ================================================= */

        const testimonials =
            document.querySelector(
                ".testimonials"
            );

        if (testimonials) {

            setElementText(
                testimonials.querySelector("h2"),
                t.testimonialsTitle
            );

            const cards =
                testimonials.querySelectorAll(
                    ".testimonial-card"
                );

            const texts = [

                t.testimonial1,
                t.testimonial2,
                t.testimonial3

            ];

            const labels = [

                t.company,
                t.professionalClient,
                t.sme

            ];

            cards.forEach(
                function (card, index) {

                    setElementText(
                        card.querySelector("p"),
                        texts[index]
                    );

                    setElementText(
                        card.querySelector("span"),
                        labels[index]
                    );
                }
            );
        }


        /* =================================================
           CONTACT
        ================================================= */

        const contact =
            document.querySelector(
                ".contact"
            );

        if (contact) {

            setElementText(
                contact.querySelector("h2"),
                t.contactTitle
            );

            setElementText(
                contact.querySelector("h2 + p"),
                t.contactText
            );


            const inputs =
                contact.querySelectorAll(
                    ".contact-form input"
                );

            if (inputs.length >= 3) {

                inputs[0].placeholder =
                    t.namePlaceholder;

                inputs[1].placeholder =
                    t.emailPlaceholder;

                inputs[2].placeholder =
                    t.phonePlaceholder;
            }


            const textarea =
                contact.querySelector(
                    ".contact-form textarea"
                );

            if (textarea) {

                textarea.placeholder =
                    t.projectPlaceholder;
            }


            /* ---------------------------------------------
               WhatsApp button
            --------------------------------------------- */

            const sendButton =
                contact.querySelector(
                    "#sendWhatsAppBtn"
                );

            if (sendButton) {

                sendButton.innerHTML =
                    '<i class="fab fa-whatsapp"></i> ' +
                    t.send;
            }


            /* ---------------------------------------------
               Location
            --------------------------------------------- */

            const locationElements =
                contact.querySelectorAll(
                    ".contact-info p"
                );

            if (locationElements.length >= 3) {

                const locationElement =
                    locationElements[2];

                const icon =
                    locationElement.querySelector("i");

                locationElement.textContent = "";

                if (icon) {
                    locationElement.appendChild(icon);
                }

                locationElement.appendChild(
                    document.createTextNode(
                        " " + t.location
                    )
                );
            }
        }


        /* =================================================
           PRICING
        ================================================= */

        const pricing =
            document.querySelector(
                ".pricing"
            );

        if (pricing) {

            setElementText(
                pricing.querySelector("h2"),
                t.pricingTitle
            );

            setElementText(
                pricing.querySelector(
                    ".section-subtitle"
                ),
                t.pricingSubtitle
            );
        }


        /* =================================================
           FOOTER
        ================================================= */

        const footer =
            document.querySelector(
                "footer"
            );

        if (footer) {

            const footerDescription =
                footer.querySelector(
                    ".footer-logo + p"
                );

            if (footerDescription) {

                setElementText(
                    footerDescription,
                    t.footerDescription
                );
            }


            const copyright =
                footer.querySelector(
                    ".copyright"
                );

            if (copyright) {

                setElementText(
                    copyright,
                    t.copyright
                );
            }
        }


        /* =================================================
           LANGUAGE BUTTON
        ================================================= */

        if (currentLanguage) {

            const languageNames = {

                fr: "FR",
                en: "EN",
                ar: "AR"

            };

            currentLanguage.textContent =
                languageNames[lang];
        }


        /* =================================================
           ACTIVE LANGUAGE
        ================================================= */

        document
            .querySelectorAll(".lang-btn")
            .forEach(
                function (button) {

                    button.classList.toggle(
                        "active",
                        button.dataset.lang === lang
                    );
                }
            );


        /* =================================================
           SAVE LANGUAGE
        ================================================= */

        localStorage.setItem(
            "nabilAppsLanguage",
            lang
        );
    }


    /* =====================================================
       LANGUAGE DROPDOWN
    ===================================================== */

    if (languageBtn) {

        languageBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                if (languageDropdown) {

                    languageDropdown.classList.toggle(
                        "active"
                    );
                }
            }
        );
    }


    /* =====================================================
       LANGUAGE BUTTONS
    ===================================================== */

    document
        .querySelectorAll(".lang-btn")
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();
                        event.stopPropagation();

                        const lang =
                            this.dataset.lang;

                        setLanguage(lang);

                        if (languageDropdown) {

                            languageDropdown.classList.remove(
                                "active"
                            );
                        }
                    }
                );
            }
        );


    /* =====================================================
       CLOSE LANGUAGE MENU
    ===================================================== */

    document.addEventListener(
        "click",
        function () {

            if (languageDropdown) {

                languageDropdown.classList.remove(
                    "active"
                );
            }
        }
    );


    /* =====================================================
       LOAD SAVED LANGUAGE
    ===================================================== */

    const savedLanguage =
        localStorage.getItem(
            "nabilAppsLanguage"
        );

    setLanguage(
        savedLanguage || DEFAULT_LANGUAGE
    );


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        const targetId =
                            this.getAttribute("href");

                        if (
                            targetId &&
                            targetId !== "#"
                        ) {

                            const target =
                                document.querySelector(
                                    targetId
                                );

                            if (target) {

                                event.preventDefault();

                                target.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });
                            }
                        }
                    }
                );
            }
        );


    /* =====================================================
       CONTACT FORM -> WHATSAPP
    ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();
                event.stopPropagation();


                /* -----------------------------------------
                   FIELDS
                ----------------------------------------- */

                const nameInput =
                    document.getElementById(
                        "contactName"
                    );

                const emailInput =
                    document.getElementById(
                        "contactEmail"
                    );

                const phoneInput =
                    document.getElementById(
                        "contactPhone"
                    );

                const projectInput =
                    document.getElementById(
                        "contactProject"
                    );


                /* -----------------------------------------
                   VALUES
                ----------------------------------------- */

                const name =
                    nameInput
                        ? nameInput.value.trim()
                        : "";

                const email =
                    emailInput
                        ? emailInput.value.trim()
                        : "";

                const phone =
                    phoneInput
                        ? phoneInput.value.trim()
                        : "";

                const project =
                    projectInput
                        ? projectInput.value.trim()
                        : "";


                /* -----------------------------------------
                   CURRENT LANGUAGE
                ----------------------------------------- */

                const lang =
                    localStorage.getItem(
                        "nabilAppsLanguage"
                    ) || DEFAULT_LANGUAGE;

                const t =
                    translations[lang];


                /* -----------------------------------------
                   VALIDATION
                ----------------------------------------- */

                if (!name) {

                    alert(
                        t.alertName
                    );

                    if (nameInput) {
                        nameInput.focus();
                    }

                    return;
                }


                if (!email) {

                    alert(
                        t.alertEmail
                    );

                    if (emailInput) {
                        emailInput.focus();
                    }

                    return;
                }


                /* -----------------------------------------
                   EMAIL VALIDATION
                ----------------------------------------- */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (
                    !emailPattern.test(email)
                ) {

                    alert(
                        t.alertEmailInvalid
                    );

                    if (emailInput) {
                        emailInput.focus();
                    }

                    return;
                }


                /* -----------------------------------------
                   WHATSAPP MESSAGE
                ----------------------------------------- */

                let message = "";


                if (lang === "ar") {

                    message =
                        "📩 طلب مشروع جديد\n\n" +

                        "👤 الاسم: " +
                        name +
                        "\n\n" +

                        "📧 البريد الإلكتروني: " +
                        email +
                        "\n\n" +

                        "📱 الهاتف: " +
                        (phone || "غير محدد") +
                        "\n\n" +

                        "💻 المشروع:\n" +
                        (project || "غير محدد") +
                        "\n\n" +

                        "━━━━━━━━━━━━━━━━━━━━\n" +

                        "Nabil Apps\n" +
                        "تطوير تطبيقات سطح المكتب • الويب • الهاتف";

                } else if (lang === "en") {

                    message =
                        "📩 NEW PROJECT REQUEST\n\n" +

                        "👤 Name: " +
                        name +
                        "\n\n" +

                        "📧 Email: " +
                        email +
                        "\n\n" +

                        "📱 Phone: " +
                        (phone || "Not provided") +
                        "\n\n" +

                        "💻 Project:\n" +
                        (project || "Not provided") +
                        "\n\n" +

                        "━━━━━━━━━━━━━━━━━━━━\n" +

                        "Nabil Apps\n" +
                        "Desktop • Web • Mobile Development";

                } else {

                    message =
                        "📩 NOUVELLE DEMANDE DE PROJET\n\n" +

                        "👤 Nom : " +
                        name +
                        "\n\n" +

                        "📧 Email : " +
                        email +
                        "\n\n" +

                        "📱 Téléphone : " +
                        (phone || "Non renseigné") +
                        "\n\n" +

                        "💻 Projet :\n" +
                        (project || "Non renseigné") +
                        "\n\n" +

                        "━━━━━━━━━━━━━━━━━━━━\n" +

                        "Nabil Apps\n" +
                        "Développement Desktop • Web • Mobile";
                }


                /* -----------------------------------------
                   WHATSAPP URL
                ----------------------------------------- */

                const whatsappURL =
                    "https://wa.me/" +
                    WHATSAPP_NUMBER +
                    "?text=" +
                    encodeURIComponent(
                        message
                    );


                /* -----------------------------------------
                   DEBUG
                ----------------------------------------- */

                console.log(
                    "NABIL APPS - WHATSAPP"
                );

                console.log(
                    "URL:",
                    whatsappURL
                );


                /* -----------------------------------------
                   OPEN WHATSAPP
                ----------------------------------------- */

                window.location.href =
                    whatsappURL;

            }
        );
    }


    /* =====================================================
       WHATSAPP FLOATING BUTTON
    ===================================================== */

    const whatsappFloat =
        document.querySelector(
            ".whatsapp-float"
        );

    if (whatsappFloat) {

        whatsappFloat.href =
            "https://wa.me/" +
            WHATSAPP_NUMBER;
    }


    /* =====================================================
       PREVENT EMPTY HASH JUMP
    ===================================================== */

    document
        .querySelectorAll(
            'a[href="#"]'
        )
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();
                    }
                );
            }
        );


    /* =====================================================
       FINISHED
    ===================================================== */

    console.log(
        "Nabil Apps - Script chargé avec succès."
    );

});