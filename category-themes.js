// Category page presentation and lightweight client-side routing.
// Firebase Hosting rewrites /category/* to index.html, so these routes need no framework.
(() => {
    const themes = {
        jewelry: {
            path: "/category/jewelry",
            icon: "✦",
            en: ["THE ATELIER EDIT", "Jewelry with a story.", "Discover considered pieces, warm gold tones, and elegant details selected for the moments you keep.", "Explore the collection", "FINE JEWELRY · EST. IN DETAIL", "Jewelry"],
            fr: ["LA SÉLECTION ATELIER", "Des bijoux qui racontent.", "Découvrez des pièces choisies, des tons dorés chaleureux et des détails élégants pour les moments précieux.", "Explorer la collection", "BIJOUX FINS · DÉTAILS SOIGNÉS", "Bijoux"],
            ar: ["اختيارات الأتيلييه", "مجوهرات عندها حكاية.", "اكتشف قطع مختارة بلمسات ذهبية دافئة وتفاصيل أنيقة للحظات اللي كتبقى.", "اكتشف المجموعة", "مجوهرات راقية · تفاصيل مميزة", "المجوهرات"]
        },
        digital: {
            path: "/category/digital",
            icon: "⌘",
            en: ["THE DIGITAL FRONTIER", "A smarter kind of upgrade.", "Explore technology, connected accessories, and digital services in one focused collection.", "Browse digital picks", "TECH · CONNECTIVITY · DIGITAL", "Digital & IPTV"],
            fr: ["L’UNIVERS NUMÉRIQUE", "Passez à la vitesse supérieure.", "Explorez la technologie, les accessoires connectés et les services numériques dans une seule sélection.", "Voir la sélection", "TECH · CONNECTIVITÉ · NUMÉRIQUE", "Numérique & IPTV"],
            ar: ["عالم رقمي جديد", "تجربة أذكى وأسهل.", "تسوق التكنولوجيا والإكسسوارات المتصلة والخدمات الرقمية في مجموعة واحدة.", "تسوق المنتجات الرقمية", "تكنولوجيا · اتصال · خدمات رقمية", "الرقمي و IPTV"]
        },
        general: {
            path: "/category/general",
            icon: "✳",
            en: ["THE EVERYDAY EDIT", "Good finds. Better days.", "Shop useful finds across fashion, home, accessories, and more, with clear links to the retailer.", "Explore the store", "EVERYDAY FINDS · SELECTED FOR YOU", "General store"],
            fr: ["LA SÉLECTION DU QUOTIDIEN", "De belles trouvailles, chaque jour.", "Découvrez des articles pour la mode, la maison et bien plus, avec un accès direct au marchand.", "Explorer la boutique", "TROUVAILLES DU QUOTIDIEN · POUR VOUS", "Boutique générale"],
            ar: ["اختيارات لكل نهار", "لقايات زوينة لحياتك اليومية.", "تسوق اختيارات مفيدة في الأزياء والمنزل والإكسسوارات وغيرها، بروابط واضحة للمتجر.", "اكتشف المتجر", "اختيارات يومية · على ذوقك", "المتجر العام"]
        }
    };

    function categoryFromPath(pathname = window.location.pathname) {
        const match = pathname.match(/^\/category\/(jewelry|digital|general)\/?$/i);
        return match ? match[1].toLowerCase() : null;
    }

    function getLanguage() {
        const language = document.documentElement.lang || "ar";
        return themes.jewelry[language] ? language : "en";
    }

    function renderHero(themeName, isCategoryRoute) {
        const hero = document.getElementById("categoryHero");
        if (!hero) return;

        hero.hidden = !isCategoryRoute;
        if (!isCategoryRoute) return;

        const copy = themes[themeName][getLanguage()];
        document.getElementById("categoryHeroEyebrow").textContent = copy[0];
        document.getElementById("categoryHeroTitle").textContent = copy[1];
        document.getElementById("categoryHeroDescription").textContent = copy[2];
        document.getElementById("categoryHeroCta").textContent = copy[3];
        document.getElementById("categoryHeroSymbol").textContent = themes[themeName].icon;
        document.getElementById("categoryHeroArtLabel").textContent = copy[4];
        document.title = `${copy[5]} · ALHAMZA`;
    }

    function applyPageState() {
        const routeTheme = categoryFromPath();
        const themeName = routeTheme || "general";
        const isCategoryRoute = Boolean(routeTheme);

        document.body.dataset.theme = themeName;
        document.body.toggleAttribute("data-category-route", isCategoryRoute);
        document.querySelectorAll("[data-theme-link]").forEach(link => {
            const active = isCategoryRoute && link.dataset.themeLink === themeName;
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
        });

        renderHero(themeName, isCategoryRoute);
        window.dispatchEvent(new CustomEvent("categorythemechange", {
            detail: { theme: themeName, isCategoryRoute }
        }));
    }

    function navigateTo(themeName) {
        if (!themes[themeName]) return;
        if (window.location.pathname !== themes[themeName].path) {
            window.history.pushState({}, "", themes[themeName].path);
        }
        applyPageState();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function navigateHome() {
        window.history.pushState({}, "", "/");
        applyPageState();
    }

    document.addEventListener("click", event => {
        const link = event.target.closest("[data-theme-link]");
        if (!link) return;
        event.preventDefault();
        navigateTo(link.dataset.themeLink);
    });

    window.addEventListener("popstate", applyPageState);
    window.addEventListener("categorylanguagechange", () => {
        const routeTheme = categoryFromPath();
        renderHero(routeTheme || "general", Boolean(routeTheme));
    });

    window.categoryThemes = {
        getCurrentPage() {
            const routeTheme = categoryFromPath();
            return { theme: routeTheme || "general", isCategoryRoute: Boolean(routeTheme) };
        },
        navigateTo,
        navigateHome
    };

    // Set the category theme before the main store script renders product cards.
    applyPageState();
})();
