// قاعدة بيانات المنتجات الابتدائية
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
        affLink: "https://s.click.aliexpress.com/e/_example4"
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
        aiTitle: "Lhamzza AI Assistant",
        aiDesc: "Tell me what you want to buy or your budget, and I'll recommend the best deal:",
        footerDesc: "Morocco's premier destination to discover the best deals, exclusive offers, and trusted links.",
        contactTitle: "Direct Contact",
        quickLinks: "Quick Links",
        viewDeal: "View Deal"
    }
};

let currentLang = 'ar';

// التشغيل الأولي
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    renderAdminProductsTable();
    updateStats();
});

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
            <span class="product-badge">${product.platform}</span>
            <div class="product-img-wrap">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-body">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-footer">
                    <div class="price-box">
                        ${product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : ''}
                        <span class="new-price">${product.price}</span>
                    </div>
                    <div class="product-actions">
                        <a href="${product.affLink}" target="_blank" class="affiliate-btn">${translations[currentLang].viewDeal}</a>
                        <button class="whatsapp-share-btn" onclick="shareToWhatsApp('${product.title}', '${product.price}', '${product.affLink}')" title="مشاركة عبر واتساب">
                            <i class="ri-whatsapp-line"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
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
        renderProducts(products);
    } else if (['aliexpress', 'amazon', 'jumia', 'alibaba'].includes(cat)) {
        renderProducts(products.filter(p => p.platform === cat));
    } else {
        renderProducts(products.filter(p => p.category === cat));
    }
}

// جدول الإدارة
function renderAdminProductsTable() {
    const tbody = document.getElementById('adminProductsList');
    tbody.innerHTML = '';

    products.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="${p.image}" alt="img"></td>
            <td><strong>${p.title}</strong></td>
            <td><span style="color:var(--accent);">${p.price}</span></td>
            <td><span class="product-badge" style="position:static;">${p.platform}</span></td>
            <td>
                <button class="delete-btn" onclick="deleteProduct(${p.id})"><i class="ri-delete-bin-line"></i> حذف</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// حذف منتج
function deleteProduct(id) {
    if (confirm("واش متأكد بغيتي تمسح هاد الهمزة؟")) {
        products = products.filter(p => p.id !== id);
        renderProducts(products);
        renderAdminProductsTable();
        updateStats();
    }
}

// تبديل تبويبات الإدارة
function switchAdminTab(tabId, element) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    
    element.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// حفظ إعدادات الموقع
function saveSiteSettings(e) {
    e.preventDefault();
    const slogan = document.getElementById('settingSlogan').value;
    const phone = document.getElementById('settingPhone').value;
    const email = document.getElementById('settingEmail').value;

    siteConfig.slogan = slogan;
    siteConfig.phone = phone;
    siteConfig.cleanPhone = phone.replace(/[^0-9]/g, '');
    siteConfig.email = email;

    document.getElementById('siteSlogan').innerText = slogan;
    document.getElementById('footerPhoneLink').innerText = phone;
    document.getElementById('footerPhoneLink').href = `https://wa.me/${siteConfig.cleanPhone}`;
    document.getElementById('footerEmailText').innerText = email;
    document.getElementById('floatingWhatsappNum').innerText = phone;
    document.getElementById('floatingWhatsappBtn').href = `https://wa.me/${siteConfig.cleanPhone}?text=سلام%20مهدي،%20بغيست%20نسول على شي منتج ف موقع الهمزة`;

    alert("تم حفظ إعدادات الموقع بنجاح!");
}

// تحديث الإحصائيات
function updateStats() {
    document.getElementById('totalDealsCount').innerText = products.length + '+';
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
    renderProducts(products);
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
    renderProducts(products.filter(p => p.title.toLowerCase().includes(query) || p.platform.toLowerCase().includes(query)));
}

function sortProducts() {
    const sortBy = document.getElementById('sortSelect').value;
    let sorted = [...products];

    if (sortBy === 'price-low') {
        sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortBy === 'price-high') {
        sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
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

// التحكم بالـ Modals
function openAiAssistant() { document.getElementById('aiModal').classList.add('active'); }
function closeAiAssistant() { document.getElementById('aiModal').classList.remove('active'); }
function toggleAdminModal() { document.getElementById('adminModal').classList.toggle('active'); }

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

// إضافة منتج جديد
function addNewProduct(e) {
    e.preventDefault();
    const newProd = {
        id: Date.now(),
        title: document.getElementById('newTitle').value,
        price: document.getElementById('newPrice').value.includes('MAD') ? document.getElementById('newPrice').value : document.getElementById('newPrice').value + ' MAD',
        oldPrice: document.getElementById('newOldPrice').value ? (document.getElementById('newOldPrice').value.includes('MAD') ? document.getElementById('newOldPrice').value : document.getElementById('newOldPrice').value + ' MAD') : '',
        platform: document.getElementById('newPlatform').value,
        category: document.getElementById('newCategory').value,
        image: document.getElementById('newImage').value,
        affLink: document.getElementById('newAffLink').value
    };

    products.unshift(newProd);
    renderProducts(products);
    renderAdminProductsTable();
    updateStats();
    document.getElementById('addProductForm').reset();
    switchAdminTab('productsTab', document.querySelectorAll('.tab-btn')[0]);
    alert("تمت إضافة الهمزة بنجاح للواجهة الرئيسية!");
}