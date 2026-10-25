// قاعدة بيانات المنتجات الابتدائية
const API_BASE_URL = "https://alhamza-products-api.m939.workers.dev";
let communityProducts = [];
let products = [
    {
        id: 1,
        title: "سماعات بلوتوث لاسلكية مقاومة للماء TWS",
        price: "129 MAD",
        oldPrice: "350 MAD",
        platform: "aliexpress",
        category: "tech",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop",
        affLink: "https://s.click.aliexpress.com/e/_example1"
    },
    
    {
        id: 2,
        title: "كوب سفر معزول حراريًا من الفولاذ المقاوم للصدأ سعة 50 أونصة مع مقبض وقش، سعة كبيرة مناسب للسيارة، يحافظ على الحرارة لمدة 12-24 ساعة",
        price: "109 MAD",
        oldPrice: "100 MAD",
        platform: "Alibaba",
        category: "home",
        image: "https://s.alicdn.com/@sc04/kf/H658bbc5e1b8c4da4be5ae73e056e8aec4.png_960x960q80.jpg",
        affLink: "https://www.alibaba.com/product-detail/50oz-Stainless-Steel-Vacuum-Insulated-Tumbler_1601981778843.html?spm=a2700.shop_plgr.41413.1.38c12014Z7d8c5"
    },
    {
        id: 3,
        title: "أداة الفحص ثنائية الاتجاه AUTEL MaxiCOM MK900-TS بوظيفة TPMS الكاملة، بديل لـ MP900TS، 40+ خدمة تشخيص كاملة بجودة المصنع الأصلي، تدعم CAN FD وDoIP وFCA",
        price: "89 MAD",
        oldPrice: "6.968 MAD",
        platform: "Alibaba",
        category: "tech",
        image: "https://s.alicdn.com/@sc04/kf/A59cb133189494c54acfec3deb52ddfd4x.jpg_960x960q80.jpg",
        affLink: "https://www.alibaba.com/product-detail/AUTEL-MaxiCOM-MK900-TS-Full-TPMS_11000028246679.html?chatToken=WW1sUmRWRlNUR2xVYjJkc05XWk5hSGxTZUVSUFEwVXJPRzlLZDJ4SmVFOTBWR2t5YVZSVE5YbENkakpOUkRBMmJqUkNhVE5rUm1RelpHcDRVMjV4TUVwUlIyMXVVM001YUN0UlNWRnFPRk5TWm5OR1JHUnJVa0oxYzJoU1RrWmFNVU5yZEZWSlprbHRXbWRxU0VKUlF6RlJVVGx2VkdwbEsxbDBhelZKZUZSd00yNTVNVE5wYUdoMVJWQXdSU3N5UVVWNGNFUlhUelpZTWtKd1RXaDVSMVV3ZFV0U2RGUjRORGt4YzFaTmMzVlpRekJPZHk5WVkydDJUR3BwYW5FdyZ2ZXJzaW9uPTIuMC4w&encryptTargetLoginId=8pctgRBMALPcB3gOkRBpoYYfPFurBsgq6wdkfYSa%2Bs4%3Ds"
    },
    {
        id: 4,
        title: "سيارة تحكم عن بعد RZ001G-A بمقياس 1/10، شاحنة جديدة بمحرك بدون فرش، ناقل حركة تفاضلي مركزي، ممتصات صدمات ألومنيوم، جهاز إرسال، لعبة PVC جاهزة للتشغيل",
        price: "70000 MAD",
        oldPrice: "180 MAD",
        platform: "aliexpress",
        category: "fashion",
        image: "https://s.alicdn.com/@sc04/kf/H9039ddce488245589177ada99e726b54l.jpg_960x960q80.jpg",
        affLink: "https://www.alibaba.com/product-detail/RZ001G-A-1-10-Brushless-New_1601929153137.html?spm=a2700.8293689.ggs_just_for_you.5.54662cefCtyYOX&priceId=89ddb720e8f248daa2c5ffbd856bac8c"
    },
    {
        id: 5,
        title: "سترة رياضية خفيفة متعددة الاستخدامات للرجال والنساء، بحقيبة لحمل قنينة الماء والهاتف أثناء الجري والتمارين",
        price: "99 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        image: "https://img.kwcdn.com/product/fancy/7455f9d8-765a-460b-9ff9-f584170e0b2d.jpg",
        affLink: "https://www.temu.com/ma-en/new-lightweight-sports-vest-for-men-and-women-multi-functional-lightweight-storage-device-chest-bag-for-men-and-women--holds-a-water-bottle-and-phone-during-workouts-running-vest-outdoor-sports-gear-portable-storage-backpack-g-606215505586874.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F7455f9d8-765a-460b-9ff9-f584170e0b2d.jpg&spec_gallery_id=40823007246&_oak_page_source=10082&_x_ads_csite=search&_x_ads_channel=kol_affiliate&_x_cid=kol_affiliate&_x_vst_scene=adg&_x_campaign=affiliate&_x_sessn_id=nm6eukvy37&refer_page_name=afc_share_goods&refer_page_id=13788_1792954610260_hkbq658lyf&refer_page_sn=13788&__csr=1&__torl=1792954655173"
    },
    {
        id: 6,
        title: "بوت شتوي دافئ بنعل سميك وكعب، حذاء منزلي مريح للنساء، مقاسات كبيرة وتصميم موحد",
        price: "193 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        image: "https://img.kwcdn.com/product/fancy/6de6e9da-c6aa-47c8-9044-6d0f07ac7e61.jpg",
        affLink: "https://temu.to/k/ed6xedl4n2f"
    },
    {
        id: 7,
        title: "كاسكيطة رياضية خفيفة للرجال والنساء، سريعة الجفاف وقابلة للتهوية للأنشطة الخارجية",
        price: "72 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        image: "https://img.kwcdn.com/product/fancy/5c747c6e-526f-40c8-9f6a-1e8fca513102.jpg",
        affLink: "https://www.temu.com/ma-en/1pc-mens-outdoor-summer-breathable-quick-dry-duckbill-cap-outdoor-thin-mesh-cap-for-women-sports-baseball-cap-g-606053454454966.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F5c747c6e-526f-40c8-9f6a-1e8fca513102.jpg&spec_gallery_id=37780425804&_oak_page_source=10082&_x_ads_csite=pc_bottom_union&_x_sessn_id=nm6eukvy37&refer_page_name=afc_share_goods&refer_page_id=13788_1792955488829_ihf4oaff5q&refer_page_sn=13788"
    }
];

// بيانات الوصف والمنشور لكل صنف
const categoryDescriptions = {
    all: {
        title: "جميع الهمزات والعروض",
        desc: "تصفح كل المنتجات والصفقات المتاحة حالياً بأقوى الخصومات والتخفيضات بالمغرب."
    },
    tech: {
        title: "قسم التكنولوجيا والإلكترونيات",
        desc: "هنا كتلقى أحدث المنتجات الذكية، السماعات اللاسلكية، الساعات، الإكسسوارات والشواحن السريعة بأرخص الأسعار."
    },
    home: {
        title: "قسم الطبخ والمنزل العصري",
        desc: "أجهزة المطبخ الكهربائية، المقالي الهوائية، منظمات الثلاجة والمطبخ، وأدوات الطبخ الذكية للتسهيل من حياتك اليومية بأعلى جودة."
    },
    fashion: {
        title: "قسم الأناقة والموضة",
        desc: "أحدث صيحات الملابس، المحافظ الجلدية، الساعات الأنيقة والإكسسوارات بأسعار مخفضة للغاية."
    }
};

// معلومات الموقع
let siteConfig = {
    phone: "+212726294311",
    cleanPhone: "212726294311",
    email: "mehdiabbad993@gmail.com",
    slogan: "أحسن الصفقات وأقوى الهمزات بالمغرب"
};

// نظام اللغات
const translations = {
    ar: {
        announcementText: "تخفيضات كبرى وصلت حتى لـ 80% على أروع المنتجات! التوصيل متوفر لجميع مدن المغرب.",
        adminPanel: "إدارة الموقع",
        suggestProduct: "اقترح منتج",
        reviewSubmissions: "مراجعة اقتراحات المنتجات",
        employeeWhatsapp: "WhatsApp الموظفة:",
        allDeals: "جميع الهمزات",
        catTech: "تكنولوجيا وواتساب",
        catHome: "طبخ والمنزل",
        catFashion: "أناقة وموضة",
        heroBadge: "همزات حصرية بالمغرب",
        heroTitle: "أقوى الهمزات والعروض الثرابية بأسعار خيالية!",
        heroDesc: "كنجمعو ليك أروع المنتجات من أمازون، أليكسبريس وجوميا، وبمساعدة الذكاء الاصطناعي كنعطيوك الخلاصة وأحسن ثمن.",
        statDeals: "همزة متوفرة",
        statSecure: "روابط مضمونة",
        statSupport: "دعم فوري",
        liveDeal: "صفقة ساخنة الآن!",
        orderWhatsapp: "اطلب عبر واتساب",
        latestDeals: "أحدث الهمزات اليوم",
        sortNew: "الأحدث إضافتاً",
        sortLow: "الثمن: من الأرخص للأغلى",
        sortHigh: "الثمن: من الأغلى للأرخص",
        temuOfferTitle: "سويتشيرت رجالي بقبعة وسحاب مزدوج — عرض بـ 29 درهم",
        temuOfferDisclaimer: "العرض متاح مرة واحدة لكل مستخدم للتطبيق. الثمن والتخفيض ممكن يتبدلو؛ تأكد من التفاصيل فالصفحة.",
        temuOfferCta: "اكتشف العرض والمكافآت",
        aiTitle: "مساعد الهمزة الذكي (Gemini AI)",
        aiDesc: "قل ليا ش بغيتي تشري ولا شحال الميزانية ديالك، وأنا نقترح عليك أحسن همزة كاين دابا:",
        footerDesc: "الوجهة الأولى للمغاربة لاكتشاف أفضل الصفقات، العروض الحصرية، وربط المشتريات العالمية والمحلية بكل سهولة وثقة.",
        contactTitle: "تواصل معنا المباشر",
        quickLinks: "روابط سريعة",
        viewDeal: "شاهد الهمزة"
    },
    fr: {
        announcementText: "Méga soldes jusqu'à -80% sur les meilleurs produits ! Livraison partout au Maroc.",
        adminPanel: "Admin",
        suggestProduct: "Proposer un produit",
        reviewSubmissions: "Vérifier les propositions",
        employeeWhatsapp: "WhatsApp de l’employée :",
        allDeals: "Tous les Bons Plans",
        catTech: "Tech & Gadgets",
        catHome: "Cuisine & Maison",
        catFashion: "Mode & Style",
        heroBadge: "Exclusif au Maroc",
        heroTitle: "Les meilleures offres et deals incroyables à prix cassés !",
        heroDesc: "Nous regroupons les meilleurs produits d'Amazon, AliExpress et Jumia avec des conseils IA.",
        statDeals: "Bons plans dispo",
        statSecure: "Liens sécurisés",
        statSupport: "Support 24/7",
        liveDeal: "Deal Chaud Actuel !",
        orderWhatsapp: "Commander via WhatsApp",
        latestDeals: "Derniers Bons Plans",
        sortNew: "Plus récents",
        sortLow: "Prix: Croissant",
        sortHigh: "Prix: Décroissant",
        temuOfferTitle: "Sweat-shirt homme à capuche et double fermeture — offre à 29 DH",
        temuOfferDisclaimer: "Offre disponible une seule fois par utilisateur de l’application. Le prix et la réduction peuvent varier ; vérifiez les détails sur la page.",
        temuOfferCta: "Découvrir l’offre et les récompenses",
        aiTitle: "Assistant IA Lhamzza",
        aiDesc: "Dites-moi ce que vous cherchez ou votre budget, et je vous trouve la meilleure offre :",
        footerDesc: "La première destination des Marocains pour découvrir les meilleures offres et produits exclusifs.",
        contactTitle: "Contact Direct",
        quickLinks: "Liens Rapides",
        viewDeal: "Voir le Deal"
    },
    en: {
        announcementText: "Mega sales up to 80% off on top products! Delivery available across Morocco.",
        adminPanel: "Admin",
        suggestProduct: "Suggest a product",
        reviewSubmissions: "Review product suggestions",
        employeeWhatsapp: "Employee WhatsApp:",
        allDeals: "All Deals",
        catTech: "Tech & Gadgets",
        catHome: "Kitchen & Home",
        catFashion: "Fashion & Style",
        heroBadge: "Exclusive in Morocco",
        heroTitle: "The Best Deals & Discounts at Incredible Prices!",
        heroDesc: "We bring you top products from Amazon, AliExpress, and Jumia with AI-powered insights.",
        statDeals: "Active Deals",
        statSecure: "Secure Links",
        statSupport: "24/7 Support",
        liveDeal: "Hot Deal Now!",
        orderWhatsapp: "Order via WhatsApp",
        latestDeals: "Latest Deals Today",
        sortNew: "Newest Added",
        sortLow: "Price: Low to High",
        sortHigh: "Price: High to Low",
        temuOfferTitle: "Men's hooded sweatshirt with double zipper — 29 DH offer",
        temuOfferDisclaimer: "Available once per app user. Price and discount may vary; check the offer page for details.",
        temuOfferCta: "Explore the offer and rewards",
        aiTitle: "Lhamzza AI Assistant",
        aiDesc: "Tell me what you want to buy or your budget, and I'll recommend the best deal:",
        footerDesc: "Morocco's premier destination to discover the best deals, exclusive offers, and trusted links.",
        contactTitle: "Direct Contact",
        quickLinks: "Quick Links",
        viewDeal: "View Deal"
    }
};

let currentLang = 'ar';
let isAdminAuthenticated = false;
let adminSessionToken = "";

// التشغيل الأولي
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(getAllProducts());
    updateStats();
    loadApprovedProducts().catch(error => {
        console.error('Failed to load approved products:', error);
        document.getElementById('catalogStatus').textContent = error.message;
    });

    if (new URLSearchParams(window.location.search).get('admin') === '1') {
        openAdminModal();
    }
});

function getAllProducts() {
    return [...products, ...communityProducts];
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
}

async function apiRequest(path, options = {}) {
    if (!API_BASE_URL) {
        throw new Error("خدمة اقتراح المنتجات مازال ما تجهزاتش. عاود المحاولة من بعد.");
    }

    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        headers: {
            ...(options.body ? { "Content-Type": "application/json" } : {}),
            ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
            ...options.headers
        }
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "تعذر إكمال الطلب. عاود المحاولة.");
    return result;
}

async function loadApprovedProducts() {
    if (!API_BASE_URL) return;
    const result = await apiRequest("/api/products");
    communityProducts = result.products;
    renderProducts(getAllProducts());
    updateStats();
}

// عرض المنتجات
function renderProducts(items) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    if (items.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">ما كاين حتى منتج حالياً بهذا المعيار.</p>`;
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <span class="product-badge">${escapeHtml(product.platform)}</span>
            <div class="product-img-wrap">
                <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.title)}">
            </div>
            <div class="product-body">
                <h3 class="product-title">${escapeHtml(product.title)}</h3>
                <div class="product-footer">
                    <div class="price-box">
                        ${product.oldPrice ? `<span class="old-price">${escapeHtml(product.oldPrice)}</span>` : ''}
                        <span class="new-price">${escapeHtml(product.price)}</span>
                    </div>
                    <div class="product-actions">
                        <a href="${escapeHtml(product.affLink)}" target="_blank" rel="noopener noreferrer" class="affiliate-btn">${translations[currentLang].viewDeal}</a>
                        <button class="whatsapp-share-btn" type="button" title="مشاركة عبر واتساب">
                            <i class="ri-whatsapp-line"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        card.querySelector('.whatsapp-share-btn').addEventListener('click', () => {
            shareToWhatsApp(product.title, product.price, product.affLink);
        });
        grid.appendChild(card);
    });
}

// الفلترة وإظهار وصف المنشور الصنف عند الضغط
function filterCategory(cat, element) {
    document.querySelectorAll('.cat-chip').forEach(chip => chip.classList.remove('active'));
    element.classList.add('active');

    const descBox = document.getElementById('categoryDescBox');
    const titleEl = document.getElementById('catDescTitle');
    const textEl = document.getElementById('catDescText');

    if (categoryDescriptions[cat]) {
        descBox.style.display = 'block';
        titleEl.innerHTML = `<i class="ri-information-fill"></i> ${categoryDescriptions[cat].title}`;
        textEl.innerText = categoryDescriptions[cat].desc;
    } else {
        descBox.style.display = 'none';
    }

    if (cat === 'all') {
        renderProducts(getAllProducts());
    } else if (['aliexpress', 'amazon', 'jumia', 'alibaba'].includes(cat)) {
        renderProducts(getAllProducts().filter(p => p.platform === cat));
    } else {
        renderProducts(getAllProducts().filter(p => p.category === cat));
    }
}

async function renderAdminProductsTable() {
    const tbody = document.getElementById('pendingSubmissionsList');
    tbody.replaceChildren();
    const result = await apiRequest('/api/admin/submissions', { token: adminSessionToken });

    if (result.submissions.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 4;
        cell.textContent = 'ما كايناش اقتراحات معلقة دابا.';
        row.appendChild(cell);
        tbody.appendChild(row);
        return;
    }

    result.submissions.forEach(submission => {
        const row = document.createElement('tr');
        const imageCell = document.createElement('td');
        const image = document.createElement('img');
        image.src = submission.image;
        image.alt = submission.title;
        imageCell.appendChild(image);

        const productCell = document.createElement('td');
        const title = document.createElement('strong');
        title.textContent = submission.title;
        const price = document.createElement('p');
        price.textContent = `${submission.price}${submission.oldPrice ? ` (قديم: ${submission.oldPrice})` : ''}`;
        const link = document.createElement('a');
        link.href = submission.affLink;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'فتح رابط المنتج';
        productCell.append(title, price, link);

        const platformCell = document.createElement('td');
        platformCell.textContent = submission.platform;
        const actionsCell = document.createElement('td');
        const approveButton = document.createElement('button');
        approveButton.type = 'button';
        approveButton.className = 'approve-btn';
        approveButton.textContent = 'موافقة';
        approveButton.addEventListener('click', () => reviewSubmission(submission.id, 'approve'));
        const rejectButton = document.createElement('button');
        rejectButton.type = 'button';
        rejectButton.className = 'delete-btn';
        rejectButton.textContent = 'رفض';
        rejectButton.addEventListener('click', () => reviewSubmission(submission.id, 'reject'));
        actionsCell.append(approveButton, rejectButton);

        row.append(imageCell, productCell, platformCell, actionsCell);
        tbody.appendChild(row);
    });
}

// تحديث الإحصائيات
function updateStats() {
    document.getElementById('totalDealsCount').innerText = getAllProducts().length + '+';
}

// تغيير اللغة
function setLanguage(lang) {
    currentLang = lang;
    const root = document.getElementById('htmlRoot');
    root.setAttribute('lang', lang);
    root.setAttribute('dir', (lang === 'ar' ? 'rtl' : 'ltr'));

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    document.getElementById('announcementText').innerText = translations[lang].announcementText;
    renderProducts(getAllProducts());
}

// تبديل المظهر
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('themeIcon');
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        icon.className = 'ri-moon-line';
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.className = 'ri-sun-line';
    }
}

function filterProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    renderProducts(getAllProducts().filter(p => p.title.toLowerCase().includes(query) || p.platform.toLowerCase().includes(query)));
}

function sortProducts() {
    const sortBy = document.getElementById('sortSelect').value;
    let sorted = getAllProducts();

    if (sortBy === 'price-low') {
        sorted.sort((a, b) => {
            const priceA = parseFloat(a.price);
            const priceB = parseFloat(b.price);
            if (Number.isNaN(priceA)) return 1;
            if (Number.isNaN(priceB)) return -1;
            return priceA - priceB;
        });
    } else if (sortBy === 'price-high') {
        sorted.sort((a, b) => {
            const priceA = parseFloat(a.price);
            const priceB = parseFloat(b.price);
            if (Number.isNaN(priceA)) return 1;
            if (Number.isNaN(priceB)) return -1;
            return priceB - priceA;
        });
    } else {
        sorted.reverse();
    }
    renderProducts(sorted);
}

// مشاركة الواتساب
function shareToWhatsApp(title, price, link) {
    const text = `سلام مهدي، عجبني هاد العرض ف موقع الهمزة:\n\n*${title}*\nالثمن: *${price}*\nالرابط: ${link}`;
    window.open(`https://wa.me/${siteConfig.cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
}

// التحكم بالنوافذ وإرسال اقتراحات المنتجات
function openAiAssistant() { document.getElementById('aiModal').classList.add('active'); }
function closeAiAssistant() { document.getElementById('aiModal').classList.remove('active'); }

function openSubmissionModal() {
    document.getElementById('submissionFeedback').textContent = '';
    document.getElementById('productSubmitModal').classList.add('active');
}

function closeSubmissionModal() {
    document.getElementById('productSubmitModal').classList.remove('active');
}

async function submitProductSuggestion(event) {
    event.preventDefault();
    const form = document.getElementById('productSubmitForm');
    const feedback = document.getElementById('submissionFeedback');
    const submitButton = form.querySelector('button[type="submit"]');
    const suggestion = {
        title: document.getElementById('newTitle').value.trim(),
        price: document.getElementById('newPrice').value.trim(),
        oldPrice: document.getElementById('newOldPrice').value.trim(),
        platform: document.getElementById('newPlatform').value,
        category: document.getElementById('newCategory').value,
        image: document.getElementById('newImage').value.trim(),
        affLink: document.getElementById('newAffLink').value.trim()
    };

    submitButton.disabled = true;
    feedback.className = 'form-feedback';
    feedback.textContent = 'كنرسلو الاقتراح...';
    try {
        const result = await apiRequest('/api/submissions', {
            method: 'POST',
            body: JSON.stringify(suggestion)
        });
        feedback.classList.add('success');
        feedback.textContent = result.message;
        form.reset();
    } catch (error) {
        feedback.classList.add('error');
        feedback.textContent = error.message;
    } finally {
        submitButton.disabled = false;
    }
}

function openAdminModal() {
    if (isAdminAuthenticated) {
        document.getElementById('adminModal').classList.add('active');
        renderAdminProductsTable().catch(error => {
            document.getElementById('adminFeedback').textContent = error.message;
        });
        return;
    }
    document.getElementById('adminPassword').value = '';
    document.getElementById('adminLoginError').textContent = '';
    document.getElementById('adminLoginModal').classList.add('active');
    document.getElementById('adminPassword').focus();
}

function toggleAdminModal() {
    document.getElementById('adminModal').classList.remove('active');
    document.getElementById('adminLoginModal').classList.remove('active');
    isAdminAuthenticated = false;
    adminSessionToken = '';
}

async function authenticateAdmin(event) {
    event.preventDefault();
    const passwordInput = document.getElementById('adminPassword');
    const error = document.getElementById('adminLoginError');
    error.textContent = '';

    let result;
    try {
        result = await apiRequest('/api/admin/login', {
            method: 'POST',
            body: JSON.stringify({ password: passwordInput.value })
        });
    } catch (loginError) {
        error.textContent = loginError.message;
        passwordInput.value = '';
        passwordInput.focus();
        return;
    }

    adminSessionToken = result.token;
    isAdminAuthenticated = true;
    document.getElementById('adminLoginModal').classList.remove('active');
    document.getElementById('adminModal').classList.add('active');
    document.getElementById('adminFeedback').textContent = '';
    try {
        await renderAdminProductsTable();
    } catch (loadError) {
        document.getElementById('adminFeedback').textContent = loadError.message;
    }
}

function closeAdminLogin() {
    document.getElementById('adminLoginModal').classList.remove('active');
    document.getElementById('adminLoginError').textContent = '';
    document.getElementById('adminPassword').value = '';
}

async function reviewSubmission(id, action) {
    const feedback = document.getElementById('adminFeedback');
    feedback.className = 'form-feedback';
    feedback.textContent = 'كنحدّثو الاقتراح...';
    try {
        await apiRequest(`/api/admin/submissions/${id}/${action}`, {
            method: 'PATCH',
            token: adminSessionToken
        });
        if (action === 'approve') await loadApprovedProducts();
        await renderAdminProductsTable();
        feedback.classList.add('success');
        feedback.textContent = action === 'approve' ? 'توافق على المنتج وتزاد للموقع.' : 'ترفض الاقتراح.';
    } catch (error) {
        feedback.classList.add('error');
        feedback.textContent = error.message;
        if (error.message.includes('سجل الدخول')) {
            toggleAdminModal();
            openAdminModal();
        }
    }
}

// AI Assistant
function handleAiKey(e) { if (e.key === 'Enter') askAiAssistant(); }

function askAiAssistant() {
    const input = document.getElementById('aiUserInput');
    const chatBox = document.getElementById('aiChatBox');
    const query = input.value.trim();

    if (!query) return;

    chatBox.innerHTML += `<div class="ai-msg user">${query}</div>`;
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        let reply = "بناءً على طلبك، كنقترح عليك تشوف المنتجات المتوفرة حالياً فـ الهمزة ولا تواصل مع مهدي المباشر فالواتساب باش يعطيك الهمزة اللي حبت خاطرك!";
        const lower = query.toLowerCase();
        if (lower.includes('سماع')) reply = "لقيت ليك سماعات TWS بـ 129 درهم فقط عوض 350 درهم! صفقة ممتازة بزاف وموجودة فالتصنيف الأول.";
        else if (lower.includes('طبخ') || lower.includes('مقلاة')) reply = "قسم الطبخ فيه مقلاة هوائية 5 لتر بدون زيت بـ 499 درهم فقط فـ Jumia!";
        else if (lower.includes('ساعة')) reply = "الساعات الذكية عليها تخفيض كبير حالياً، تواصل مع مهدي ف الواتساب يعطيك أحسن عرض.";

        chatBox.innerHTML += `<div class="ai-msg bot">${reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
}
