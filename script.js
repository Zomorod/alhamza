// قاعدة بيانات المنتجات الابتدائية
const API_BASE_URL = "https://alhamza-products-api.m939.workers.dev";
let communityProducts = [];
let products = [
    {
        id: 1,
        title: "سماعات بلوتوث لاسلكية TA210 رياضية، مع عزل ENC وأربعة ميكروفونات للمكالمات",
        price: "132 DH",
        oldPrice: "",
        platform: "temu",
        category: "tech",
        image: "https://img.kwcdn.com/product/fancy/90a25bfe-3d69-46ab-8ba8-c93989cef6a5.jpg",
        affLink: "https://www.temu.com/ma-en/-ta210-wireless-bluetooth-earbuds-long--sports-in-ear-enc-intelligent-noise-cancellation-for-4-mic-calls--white-black-gift-design-g-605886336571370.html?_oak_mp_inf=EOqv9r7O4YkBGhhiZXN0X3NlbGxlcnNfbGlzdF96c3I5bTkg3Ovep5c0&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F90a25bfe-3d69-46ab-8ba8-c93989cef6a5.jpg&spec_gallery_id=43565064869&refer_page_sn=10125&freesia_scene=114&_oak_freesia_scene=114&_oak_rec_ext_1=MTMyMDA&refer_page_el_sn=201345&ab_scene=1&_x_ads_csite=pc_bottom_union&_x_sessn_id=nm6eukvy37&refer_page_name=best_sellers&refer_page_id=10125_1792963742773_0r0chldzav"
    },
    
    {
        id: 2,
        title: "كوب سفر معزول حراريًا من الفولاذ المقاوم للصدأ سعة 50 أونصة مع مقبض وقش، سعة كبيرة مناسب للسيارة، يحافظ على الحرارة لمدة 12-24 ساعة",
        price: "",
        oldPrice: "",
        priceVerified: false,
        platform: "Alibaba",
        category: "home",
        image: "https://s.alicdn.com/@sc04/kf/H658bbc5e1b8c4da4be5ae73e056e8aec4.png_960x960q80.jpg",
        affLink: "https://www.alibaba.com/product-detail/50oz-Stainless-Steel-Vacuum-Insulated-Tumbler_1601981778843.html?spm=a2700.shop_plgr.41413.1.38c12014Z7d8c5"
    },
    {
        id: 3,
        title: "أداة الفحص ثنائية الاتجاه AUTEL MaxiCOM MK900-TS بوظيفة TPMS الكاملة، بديل لـ MP900TS، 40+ خدمة تشخيص كاملة بجودة المصنع الأصلي، تدعم CAN FD وDoIP وFCA",
        price: "",
        oldPrice: "",
        priceVerified: false,
        platform: "Alibaba",
        category: "tech",
        image: "https://s.alicdn.com/@sc04/kf/A59cb133189494c54acfec3deb52ddfd4x.jpg_960x960q80.jpg",
        affLink: "https://www.alibaba.com/product-detail/AUTEL-MaxiCOM-MK900-TS-Full-TPMS_11000028246679.html?chatToken=WW1sUmRWRlNUR2xVYjJkc05XWk5hSGxTZUVSUFEwVXJPRzlLZDJ4SmVFOTBWR2t5YVZSVE5YbENkakpOUkRBMmJqUkNhVE5rUm1RelpHcDRVMjV4TUVwUlIyMXVVM001YUN0UlNWRnFPRk5TWm5OR1JHUnJVa0oxYzJoU1RrWmFNVU5yZEZWSlprbHRXbWRxU0VKUlF6RlJVVGx2VkdwbEsxbDBhelZKZUZSd00yNTVNVE5wYUdoMVJWQXdSU3N5UVVWNGNFUlhUelpZTWtKd1RXaDVSMVV3ZFV0U2RGUjRORGt4YzFaTmMzVlpRekJPZHk5WVkydDJUR3BwYW5FdyZ2ZXJzaW9uPTIuMC4w&encryptTargetLoginId=8pctgRBMALPcB3gOkRBpoYYfPFurBsgq6wdkfYSa%2Bs4%3Ds"
    },
    {
        id: 4,
        title: "سيارة تحكم عن بعد مزدوجة الجوانب بالتحكم بالإيماءات، دفع رباعي مع انجراف وأضواء وموسيقى",
        price: "490 DH",
        oldPrice: "",
        platform: "temu",
        category: "tech",
        image: "https://img.kwcdn.com/product/fancy/72673517-37db-41c5-bc39-47015d9fcc5e.jpg",
        affLink: "https://www.temu.com/ma-en/-spray-double-sided-remote-control-car-gesture-2-4-wheel-drive-drift-light-music-toys-g-601099553415589.html?_oak_mp_inf=EKXD7Kqm1ogBGiA2ZTZlNThhZjJlM2E0ZTUxOWJiNmRlNzBlMjQzOWI2YyCNgdunlzQ%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F72673517-37db-41c5-bc39-47015d9fcc5e.jpg&spec_gallery_id=3698&refer_page_sn=10009&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=NDkwMDA&_oak_gallery_order=150052637&search_key=car%20game&refer_page_el_sn=200049&ab_scene=1&_x_ads_csite=pc_bottom_union&_x_sessn_id=nm6eukvy37&refer_page_name=search_result&refer_page_id=10009_1792963691316_57urb1j3kc"
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
    },
    {
        id: 8,
        title: "دعامة خفيفة وقابلة للتعديل للأصابع وأصابع القدم، بتصميم مهوّى لدعم الوضعية",
        price: "76 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        image: "https://img.kwcdn.com/product/fancy/6b5c1f59-29d1-46f0-bef6-0a8cabd3ae98.jpg",
        affLink: "https://www.temu.com/ma-en/adjustable-unisex-lightweight-and-sturdy-finger-and-toe-support-breathable-design-suitable-for--use-posture-support-ideal-gift-for-fathers-day-mothers-day-and-valentines-day--essentials-and-suitable-g-601101585341280.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F6b5c1f59-29d1-46f0-bef6-0a8cabd3ae98.jpg&spec_gallery_id=224105&_oak_page_source=10082&_x_ads_csite=pc_bottom_union&_x_sessn_id=nm6eukvy37&refer_page_name=afc_share_goods&refer_page_id=13788_1792960718880_b1vq59ydnf&refer_page_sn=13788"
    },
    {
        id: 9,
        title: "طقم مفكات دقيقة من 115 قطعة، مغناطيسي لإصلاح الهواتف والحواسيب والساعات",
        price: "169 DH",
        oldPrice: "",
        platform: "temu",
        category: "tech",
        image: "https://img.kwcdn.com/product/fancy/30d164ab-b1ad-44af-9316-9683eb2b32df.jpg",
        affLink: "https://www.temu.com/ma-en/115pcs-precision-screwdriver-set-made-of-vanadium-magnetic-repair-tool-kit-non-slip-ergonomic-handle-suitable-for-electronics-phones-laptops-watches-shockproof-round-dome-head-hexagonal--phillips-head-silvery-gray-g-601100079348477.html?_oak_mp_inf=EP310KWo1ogBGi5jYXRlZ29yeV9saXN0XzNiZTk4MWQzMDFjNTQ0NzFhMmNiMGZhNWY4NmY4ODA4IJajsaaXNA%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F30d164ab-b1ad-44af-9316-9683eb2b32df.jpg&spec_gallery_id=601100079348477&refer_page_sn=10012&freesia_scene=3&_oak_freesia_scene=3&_oak_rec_ext_1=MTY5MDA&_oak_gallery_order=1835469549%2C1191912542%2C1851876603%2C419386715%2C1420387295&refer_page_el_sn=200064&ab_scene=1&_x_ads_csite=pc_bottom_union&_x_sessn_id=nm6eukvy37&refer_page_name=category&refer_page_id=10012_1792960910820_7v5gq6ex9a"
    },
    {
        id: 10,
        title: "ماكينة صغيرة محمولة لتشذيب شعر الأنف، قابلة للشحن عبر USB",
        price: "76 DH",
        oldPrice: "",
        platform: "temu",
        category: "tech",
        image: "https://img.kwcdn.com/product/fancy/6309e6ef-7a5c-42c3-b418-8cd6785a9b79.jpg",
        affLink: "https://www.temu.com/ma-en/1pc-nose-hair-trimmer-mini-portable-fashion--display-usb-charging-g-601103681288943.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F6309e6ef-7a5c-42c3-b418-8cd6785a9b79.jpg&spec_gallery_id=21312515987&_oak_page_source=10082&_x_ads_csite=pc_bottom_union&_x_sessn_id=nm6eukvy37&refer_page_name=afc_share_goods&refer_page_id=13788_1792960718880_b1vq59ydnf&refer_page_sn=13788"
    },
    {
        id: 11,
        title: "كاميرا سيارة مزدوجة العدسة، أمامية بدقة 1080p وخلفية بدقة 720p، مع تسجيل ومراقبة أثناء الوقوف",
        price: "280 DH",
        oldPrice: "",
        platform: "temu",
        category: "tech",
        image: "https://img.kwcdn.com/product/fancy/1759a634-3e19-4850-869d-11c637e21637.jpg",
        affLink: "https://www.temu.com/ma-en/dual-lens-dashcam-high-definition-1080p-front-camera-720p-built-in-camera-24-hour-parking-monitoring--loop-recording--12-24-with-motion-detection-parking-assist-and-front-and-rear-dual-recording-g-601104621733414.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F1759a634-3e19-4850-869d-11c637e21637.jpg&spec_gallery_id=33390805795&_oak_page_source=10082&_x_ads_csite=pc_bottom_union&_x_sessn_id=nm6eukvy37&refer_page_name=afc_share_goods&refer_page_id=13788_1792960718880_b1vq59ydnf&refer_page_sn=13788"
    },
    {
        id: 12,
        title: "ماكينة احترافية قابلة للشحن لتشذيب شعر الأنف والأذن، أداة عناية شخصية للرجال 3 في 1 و4 في 1",
        price: "140 DH",
        oldPrice: "",
        platform: "temu",
        category: "tech",
        image: "https://img.kwcdn.com/product/fancy/1c7b828f-88d2-4ab9-9e81-b341256faa0c.jpg",
        affLink: "https://www.temu.com/ma-en/km-6630--3in1-4in1-professional-rechargeable-nose-ear-hair-trimmer-mens-personal-care-tool-g-601099542275155.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F1c7b828f-88d2-4ab9-9e81-b341256faa0c.jpg&spec_gallery_id=2476&_oak_page_source=10082&_x_ads_csite=pc_bottom_union&_x_sessn_id=nm6eukvy37&refer_page_name=afc_share_goods&refer_page_id=13788_1792960718880_b1vq59ydnf&refer_page_sn=13788"
    },
    {
        id: 13,
        title: "حقيبة ظهر للدراجات النارية مضادة للسرقة، قابلة للتحويل إلى حقيبة كتف بقفل وجيوب آمنة",
        price: "126 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        image: "https://img.kwcdn.com/product/fancy/c3e9d06d-565b-45ee-9c4c-0fd819eccdaa.jpg",
        affLink: "https://www.temu.com/ma-en/anti-theft-motorcycle-backpack-with-lock-convertible-crossbody-bag-zipper-closure-anti-theft-compartment-adjustable-shoulder-strap-suitable-for-commuting-travel-motorcycling-large-small-size-options-mens-secure-motorcycle-crossbody-bag-g-601103889089327.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc3e9d06d-565b-45ee-9c4c-0fd819eccdaa.jpg&spec_gallery_id=22209525617&_oak_page_source=10082&_x_ads_csite=pc_bottom_union&_x_sessn_id=nm6eukvy37&refer_page_name=afc_share_goods&refer_page_id=13788_1792960718880_b1vq59ydnf&refer_page_sn=13788"
    },
    {
        id: 14,
        title: "ميدالية مفاتيح NFC إيبوكسي للمس، قابلة للبرمجة لروابط Google Reviews وFacebook وInstagram",
        price: "19 DH",
        oldPrice: "",
        platform: "temu",
        category: "tech",
        image: "https://img.kwcdn.com/product/open/869e106833fb4d94a44037bfef614fb3-goods.jpeg",
        affLink: "https://www.temu.com/ma-en/nfc-tap-epoxy-keychain-for-google-reviews-facebook-instagram-programmable-url-tag-for-iphone--customer----promotion-grow-your--g-607095453747405.html?_oak_mp_inf=EM2R9ubmhIoBGiBiZTVlNDliNTlhMmU0MjRiOGRmMDY0YzE0MmMzZDI1NCD8pu7QlzQ%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F869e106833fb4d94a44037bfef614fb3-goods.jpeg&spec_gallery_id=51516970173&refer_page_sn=10009&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=MTkwMA&_oak_gallery_order=1542843125%2C2104623216%2C768287810%2C1803272858%2C2072511815&search_key=afililate&refer_page_el_sn=200049&ab_scene=1&_x_ads_csite=pc_bottom_union&_x_sessn_id=nm6eukvy37&refer_page_name=search_result&refer_page_id=10009_1793049859077_buuepffc26"
    },
    {
        id: 15,
        title: "محفظة رجالية بتصميم كلاسيكي مطبوع، ناعمة وبخانات متعددة للبطاقات والهوية",
        price: "46 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        image: "https://img.kwcdn.com/product/fancy/62e1a664-8a4d-4c93-bddb-ec7e22f10ead.jpg",
        affLink: "https://www.temu.com/ma-en/1-mens-vintage-credit-card-wallet--print-design--and-soft-multi-card-slot--id-card-holder--purse-great-gift---g-605915948393318.html?_oak_mp_inf=EObG%2BOa84okBGhZnb29kc19xdWhtcnBfcmVjb21tZW5kILC%2FvdGXNA%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F62e1a664-8a4d-4c93-bddb-ec7e22f10ead.jpg&spec_gallery_id=32600622619&refer_page_sn=10032&freesia_scene=11&_oak_freesia_scene=11&_oak_rec_ext_1=NDYwMA&_oak_gallery_order=1889977121%2C188015209%2C1200905879%2C1820568421%2C754588854&refer_page_el_sn=200444&ab_scene=1&_x_ads_csite=pc_bottom_union&_x_sessn_id=nm6eukvy37&refer_page_name=goods&refer_page_id=10032_1793050073878_mepzrjcgdx"
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

const localizedCategoryDescriptions = {
    fr: {
        all: { title: "Toutes les offres", desc: "Parcourez les produits et offres disponibles au Maroc." },
        tech: { title: "Technologie et électronique", desc: "Découvrez des produits connectés, des écouteurs, des montres et des accessoires." },
        home: { title: "Cuisine et maison", desc: "Des appareils de cuisine et des accessoires pratiques pour la maison." },
        fashion: { title: "Mode et style", desc: "Découvrez des vêtements, accessoires et articles de mode à prix réduits." }
    },
    en: {
        all: { title: "All deals and offers", desc: "Browse all products and deals currently available in Morocco." },
        tech: { title: "Technology and electronics", desc: "Explore smart products, wireless earbuds, watches, accessories, and chargers." },
        home: { title: "Kitchen and home", desc: "Discover kitchen appliances and practical accessories for your home." },
        fashion: { title: "Fashion and style", desc: "Browse clothing, accessories, and fashion finds at great prices." }
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
        employeeWhatsapp: "WhatsApp الموظف:",
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
        firstTimeOffer: "عرض خاص للمستخدمين لأول مرة — حسب شروط المتجر",
        temuOfferTitle: "سويتشيرت رجالي بقبعة وسحاب مزدوج — عرض بـ 29 درهم",
        temuOfferDisclaimer: "العرض متاح مرة واحدة لكل مستخدم للتطبيق. الثمن والتخفيض ممكن يتبدلو؛ تأكد من التفاصيل فالصفحة.",
        temuOfferCta: "اكتشف العرض والمكافآت",
        detailBack: "رجوع للمنتجات",
        detailNotFound: "المنتج غير موجود",
        detailNotFoundText: "يمكن تحيد أو الرابط ما بقاش صالح.",
        detailShare: "مشاركة عبر واتساب",
        shareFacebook: "Facebook",
        shareSnapchat: "Snapchat / تطبيقات أخرى",
        copyProductLink: "نسخ رابط المنتج",
        productLinkCopied: "تنسخ رابط صفحة المنتج. تقدر تلصقو فـ Snapchat أو أي تطبيق.",
        productLinkCopyFailed: "ما قدرناش ننسخو الرابط تلقائياً. ها هو باش تنسخو:",
        shareCancelled: "تلغات المشاركة.",
        shareFailed: "ما قدرناش نشاركو المنتج. جرب تنسخ الرابط.",
        viewDetails: "تفاصيل المنتج",
        checkoutAtStore: "كمل الشراء والدفع فالمتجر",
        purchaseOnStore: "منين تضغط على زر الشراء، غادي تمشي لمتجر المنتج باش تكمل الطلب وتخلص تما. الثمن النهائي والشحن كيتأكدو فصفحة المتجر.",
        aiTitle: "مساعد AL_HAMZZA الذكي (Gemini AI)",
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
        heroDesc: "Nous sélectionnons des produits utiles et de bonnes offres sur les grandes plateformes, avec des prix clairs et des liens directs.",
        statDeals: "Bons plans dispo",
        statSecure: "Liens sécurisés",
        statSupport: "Support 24/7",
        liveDeal: "Deal Chaud Actuel !",
        orderWhatsapp: "Commander via WhatsApp",
        latestDeals: "Derniers Bons Plans",
        sortNew: "Plus récents",
        sortLow: "Prix: Croissant",
        sortHigh: "Prix: Décroissant",
        firstTimeOffer: "Offre spéciale pour les nouveaux utilisateurs — selon les conditions de la boutique",
        temuOfferTitle: "Sweat-shirt homme à capuche et double fermeture — offre à 29 DH",
        temuOfferDisclaimer: "Offre disponible une seule fois par utilisateur de l’application. Le prix et la réduction peuvent varier ; vérifiez les détails sur la page.",
        temuOfferCta: "Découvrir l’offre et les récompenses",
        detailBack: "Retour aux produits",
        detailNotFound: "Produit introuvable",
        detailNotFoundText: "Ce produit a peut-être été retiré ou le lien n’est plus valide.",
        detailShare: "Partager sur WhatsApp",
        shareFacebook: "Facebook",
        shareSnapchat: "Snapchat / autres applications",
        copyProductLink: "Copier le lien du produit",
        productLinkCopied: "Lien de la page produit copié. Vous pouvez le coller dans Snapchat ou une autre application.",
        productLinkCopyFailed: "Impossible de copier automatiquement. Voici le lien à copier :",
        shareCancelled: "Partage annulé.",
        shareFailed: "Impossible de partager le produit. Essayez de copier le lien.",
        viewDetails: "Détails du produit",
        checkoutAtStore: "Continuer l’achat et payer sur la boutique",
        purchaseOnStore: "Le bouton vous redirigera vers la boutique du produit pour finaliser et payer la commande. Le prix final et la livraison sont confirmés sur sa page.",
        aiTitle: "Assistant IA AL_HAMZZA",
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
        heroDesc: "We curate useful products and great deals from popular shopping platforms, with clear prices and direct store links.",
        statDeals: "Active Deals",
        statSecure: "Secure Links",
        statSupport: "24/7 Support",
        liveDeal: "Hot Deal Now!",
        orderWhatsapp: "Order via WhatsApp",
        latestDeals: "Latest Deals Today",
        sortNew: "Newest Added",
        sortLow: "Price: Low to High",
        sortHigh: "Price: High to Low",
        firstTimeOffer: "Special offer for first-time users — subject to store terms",
        temuOfferTitle: "Men's hooded sweatshirt with double zipper — 29 DH offer",
        temuOfferDisclaimer: "Available once per app user. Price and discount may vary; check the offer page for details.",
        temuOfferCta: "Explore the offer and rewards",
        detailBack: "Back to products",
        detailNotFound: "Product not found",
        detailNotFoundText: "This product may have been removed or the link is no longer valid.",
        detailShare: "Share on WhatsApp",
        shareFacebook: "Facebook",
        shareSnapchat: "Snapchat / other apps",
        copyProductLink: "Copy product link",
        productLinkCopied: "Product page link copied. You can paste it into Snapchat or another app.",
        productLinkCopyFailed: "Couldn't copy automatically. Copy this link:",
        shareCancelled: "Sharing cancelled.",
        shareFailed: "Couldn't share the product. Try copying the link.",
        viewDetails: "Product details",
        checkoutAtStore: "Continue to the store to buy and pay",
        purchaseOnStore: "The button will take you to the product store to complete and pay for your order. Confirm the final price and shipping on the store page.",
        aiTitle: "AL_HAMZZA AI Assistant",
        aiDesc: "Tell me what you want to buy or your budget, and I'll recommend the best deal:",
        footerDesc: "Morocco's premier destination to discover the best deals, exclusive offers, and trusted links.",
        contactTitle: "Direct Contact",
        quickLinks: "Quick Links",
        viewDeal: "View Deal"
    }
};

const additionalTranslations = {
    ar: {
        siteTitle: "AL_HAMZZA - أحسن الصفقات وأقوى الهمزات",
        siteSlogan: "أحسن الصفقات وأقوى الهمزات بالمغرب",
        brandName: "AL_HAMZZA",
        searchPlaceholder: "قلّب على أي همزة، منتج، أو عرض...",
        aiSearchButton: "مساعد AI",
        themeToggle: "تغيير المظهر",
        homeLinkAria: "العودة إلى الصفحة الرئيسية",
        aliexpressLive: "AliExpress مباشر",
        jumiaLive: "Jumia مباشر",
        alibabaLive: "Alibaba مباشر",
        temuLive: "Temu مباشر",
        amazonLive: "Amazon مباشر",
        categoryDetails: "تفاصيل الصنف",
        categoryDescription: "وصف شامل ومفصل للهمزات المتاحة فـ هذا القسم...",
        temuOfferPrice: "29 DH",
        catalogLoading: "",
        aiGreeting: "أهلاً بك! أنا جاهز باش نعاونك تلقى أحسن المنتجات والصفقات. شنو بغيتي تقلب عليه اليوم؟",
        aiPlaceholder: "مثال: بغيت مقلاة هوائية ولا سماعات أقل من 200 درهم...",
        sendMessage: "إرسال",
        close: "إغلاق",
        suggestTitle: "اقترح منتجاً",
        submissionNote: "اقتراحك غادي يبقى قيد المراجعة وما غاديش يبان فالموقع حتى تتم الموافقة عليه.",
        productTitleLabel: "عنوان المنتج والوصف",
        productTitlePlaceholder: "مثال: سماعات لاسلكية",
        currentPrice: "الثمن الحالي",
        oldPrice: "الثمن القديم (اختياري)",
        platform: "المنصة",
        category: "الصنف",
        catTechShort: "تكنولوجيا",
        catFashionShort: "أناقة",
        imageUrl: "رابط صورة المنتج (HTTPS)",
        productUrl: "رابط المنتج أو الأفلييت (HTTPS)",
        submitForReview: "إرسال للمراجعة",
        adminLoginTitle: "دخول مراجعة الاقتراحات",
        adminPassword: "كلمة سر الإدارة",
        login: "دخول",
        image: "الصورة",
        productAndPrice: "المنتج والثمن",
        actions: "الإجراءات",
        whatsapp: "WhatsApp:",
        email: "البريد الإلكتروني:",
        copyright: "© 2026 AL_HAMZZA - صُمم بكل حب لـ Mehdi Abbad. جميع الحقوق محفوظة.",
        contactWhatsapp: "تواصل معنا عبر واتساب",
        whatsappContactMessage: "سلام، بغيت نسول على شي منتج فموقع الهمزة",
        emptyProducts: "ما كاين حتى منتج حالياً بهذا المعيار.",
        productDetailsAria: "تفاصيل",
        whatsappShare: "مشاركة عبر واتساب",
        suggestionSending: "كنرسلو الاقتراح...",
        suggestionSubmitted: "وصلنا اقتراحك، غادي يبقى قيد المراجعة حتى تتم الموافقة عليه.",
        noPendingSuggestions: "ما كايناش اقتراحات معلقة دابا.",
        openProductLink: "فتح رابط المنتج",
        approve: "موافقة",
        reject: "رفض",
        adminUpdating: "كنحدّثو الاقتراح...",
        productApproved: "توافق على المنتج وتزاد للموقع.",
        productRejected: "ترفض الاقتراح.",
        aiDefaultReply: "شوف المنتجات المتوفرة فالموقع، أو تواصل معنا عبر واتساب إلا بغيتي مساعدة.",
        aiEarbudsReply: "تقدر تشوف السماعات اللاسلكية المتوفرة فالموقع وتأكد من الثمن الحالي فصفحة المتجر.",
        aiKitchenReply: "تصفح قسم الطبخ والمنزل باش تشوف المنتجات والعروض المتوفرة حالياً.",
        priceAtStore: "راجع الثمن الحالي في المتجر"
    },
    fr: {
        siteTitle: "AL_HAMZZA - Les meilleures offres et promotions",
        siteSlogan: "Les meilleures offres au Maroc",
        brandName: "AL_HAMZZA",
        searchPlaceholder: "Rechercher des offres et des produits...",
        aiSearchButton: "Assistant IA",
        themeToggle: "Changer le thème",
        homeLinkAria: "Retour à la page d’accueil",
        aliexpressLive: "AliExpress en direct",
        jumiaLive: "Jumia en direct",
        alibabaLive: "Alibaba en direct",
        temuLive: "Temu en direct",
        amazonLive: "Amazon en direct",
        categoryDetails: "Détails de la catégorie",
        categoryDescription: "Découvrez les offres disponibles dans cette catégorie.",
        temuOfferPrice: "29 DH",
        catalogLoading: "",
        aiGreeting: "Bonjour ! Je peux vous aider à trouver les meilleurs produits et offres. Que recherchez-vous ?",
        aiPlaceholder: "Exemple : une friteuse ou des écouteurs à moins de 200 DH...",
        sendMessage: "Envoyer",
        close: "Fermer",
        suggestTitle: "Proposer un produit",
        submissionNote: "Votre proposition sera examinée et ne sera publiée qu’après approbation.",
        productTitleLabel: "Nom et description du produit",
        productTitlePlaceholder: "Exemple : écouteurs sans fil",
        currentPrice: "Prix actuel",
        oldPrice: "Ancien prix (facultatif)",
        platform: "Plateforme",
        category: "Catégorie",
        catTechShort: "Technologie",
        catFashionShort: "Mode",
        imageUrl: "Lien de l’image du produit (HTTPS)",
        productUrl: "Lien du produit ou d’affiliation (HTTPS)",
        submitForReview: "Envoyer pour examen",
        adminLoginTitle: "Connexion à la modération",
        adminPassword: "Mot de passe administrateur",
        login: "Connexion",
        image: "Image",
        productAndPrice: "Produit et prix",
        actions: "Actions",
        whatsapp: "WhatsApp :",
        email: "E-mail :",
        copyright: "© 2026 AL_HAMZZA - Créé avec soin pour Mehdi Abbad. Tous droits réservés.",
        contactWhatsapp: "Contactez-nous sur WhatsApp",
        whatsappContactMessage: "Bonjour, j’aimerais poser une question sur un produit de Lhamzza",
        emptyProducts: "Aucun produit ne correspond à ce critère.",
        productDetailsAria: "Détails de",
        whatsappShare: "Partager sur WhatsApp",
        suggestionSending: "Envoi de votre proposition...",
        suggestionSubmitted: "Votre proposition a été reçue et sera examinée avant publication.",
        noPendingSuggestions: "Aucune proposition en attente.",
        openProductLink: "Ouvrir le lien du produit",
        approve: "Approuver",
        reject: "Refuser",
        adminUpdating: "Mise à jour de la proposition...",
        productApproved: "Produit approuvé et ajouté au site.",
        productRejected: "Proposition refusée.",
        aiDefaultReply: "Consultez les produits disponibles ou contactez-nous sur WhatsApp pour obtenir de l’aide.",
        aiEarbudsReply: "Consultez les écouteurs sans fil disponibles et vérifiez le prix actuel sur la boutique.",
        aiKitchenReply: "Parcourez la catégorie cuisine et maison pour découvrir les offres disponibles.",
        priceAtStore: "Voir le prix actuel en boutique"
    },
    en: {
        siteTitle: "AL_HAMZZA - The Best Deals and Shopping Offers",
        siteSlogan: "The best deals and offers in Morocco",
        brandName: "AL_HAMZZA",
        searchPlaceholder: "Search deals, products, and offers...",
        aiSearchButton: "AI Assistant",
        themeToggle: "Change theme",
        homeLinkAria: "Return to the homepage",
        aliexpressLive: "AliExpress Store",
        jumiaLive: "Jumia Store",
        alibabaLive: "Alibaba Store",
        temuLive: "Temu Store",
        amazonLive: "Amazon Store",
        categoryDetails: "Category details",
        categoryDescription: "Explore the offers available in this category.",
        temuOfferPrice: "29 DH",
        catalogLoading: "",
        aiGreeting: "Welcome! I can help you find great products and deals. What are you looking for today?",
        aiPlaceholder: "For example: an air fryer or earbuds under 200 DH...",
        sendMessage: "Send",
        close: "Close",
        suggestTitle: "Suggest a product",
        submissionNote: "Your suggestion will be reviewed and will not appear on the site until approved.",
        productTitleLabel: "Product title and description",
        productTitlePlaceholder: "For example: wireless earbuds",
        currentPrice: "Current price",
        oldPrice: "Old price (optional)",
        platform: "Store",
        category: "Category",
        catTechShort: "Technology",
        catFashionShort: "Fashion",
        imageUrl: "Product image URL (HTTPS)",
        productUrl: "Product or affiliate URL (HTTPS)",
        submitForReview: "Submit for review",
        adminLoginTitle: "Moderator sign in",
        adminPassword: "Admin password",
        login: "Sign in",
        image: "Image",
        productAndPrice: "Product and price",
        actions: "Actions",
        whatsapp: "WhatsApp:",
        email: "Email:",
        copyright: "© 2026 AL_HAMZZA - Made with care for Mehdi Abbad. All rights reserved.",
        contactWhatsapp: "Contact us on WhatsApp",
        whatsappContactMessage: "Hello, I have a question about a product on Lhamzza",
        emptyProducts: "No products match this filter.",
        productDetailsAria: "Details for",
        whatsappShare: "Share on WhatsApp",
        suggestionSending: "Submitting your suggestion...",
        suggestionSubmitted: "Your suggestion was received and will be reviewed before publication.",
        noPendingSuggestions: "There are no pending suggestions.",
        openProductLink: "Open product link",
        approve: "Approve",
        reject: "Reject",
        adminUpdating: "Updating suggestion...",
        productApproved: "Product approved and added to the site.",
        productRejected: "Suggestion rejected.",
        aiDefaultReply: "Browse the products currently available, or contact us on WhatsApp if you need help.",
        aiEarbudsReply: "Browse the wireless earbuds available on the site and confirm the current price on the store page.",
        aiKitchenReply: "Browse the Kitchen & Home category to see the products and offers currently available.",
        priceAtStore: "Check the current price in the store"
    }
};
Object.assign(translations.ar, additionalTranslations.ar);
Object.assign(translations.fr, additionalTranslations.fr);
Object.assign(translations.en, additionalTranslations.en);

const englishProductTitles = {
    1: "TA210 wireless Bluetooth sports earbuds with ENC noise cancellation and four microphones",
    2: "50 oz insulated stainless steel travel tumbler with handle and straw",
    3: "AUTEL MaxiCOM MK900-TS bidirectional diagnostic scanner with TPMS",
    4: "Double-sided gesture-controlled remote-control car with 4WD, drift, lights, and music",
    5: "Lightweight multi-purpose sports vest with storage for a water bottle and phone",
    6: "Warm winter slippers with thick soles, comfortable indoor shoes",
    7: "Lightweight quick-dry breathable sports cap for outdoor activities",
    8: "Adjustable lightweight finger and toe support with breathable design",
    9: "115-piece magnetic precision screwdriver set for phones, computers, and watches",
    10: "Portable USB-rechargeable mini nose hair trimmer",
    11: "Dual-lens dash camera with 1080p front and 720p rear recording",
    12: "Rechargeable 3-in-1 / 4-in-1 nose and ear hair trimmer for men",
    13: "Anti-theft motorcycle backpack that converts to a secure crossbody bag",
    14: "Programmable NFC epoxy keychain for Google Reviews, Facebook, Instagram, and custom URLs",
    15: "Men's vintage-style wallet with a printed design and multiple card and ID slots"
};

let currentLang = 'ar';
let currentCategory = 'all';
let isAdminAuthenticated = false;
let adminSessionToken = "";

// التشغيل الأولي
document.addEventListener('DOMContentLoaded', () => {
    const productId = new URLSearchParams(window.location.search).get('product');
    if (productId) {
        document.querySelector('.hero-banner').hidden = true;
        document.querySelector('.products-section').hidden = true;
        document.getElementById('categoryDescBox').hidden = true;
        document.getElementById('productDetailView').hidden = false;
        document.querySelector('#productDetailView .product-detail-back span').textContent =
            translations[currentLang].detailBack;
    }

    const savedLanguage = getSavedLanguage();
    if (savedLanguage && translations[savedLanguage]) setLanguage(savedLanguage);
    renderProducts(getAllProducts());
    updateStats();

    loadApprovedProducts().catch(error => {
        console.error('Failed to load approved products:', error);
        document.getElementById('catalogStatus').textContent = error.message;
    }).finally(() => {
        if (productId) renderProductDetail(productId);
    });

    if (!productId && new URLSearchParams(window.location.search).get('admin') === '1') {
        openAdminModal();
    }
});

function getAllProducts() {
    return [...products, ...communityProducts];
}

function getSavedLanguage() {
    try {
        return localStorage.getItem('siteLanguage');
    } catch (error) {
        console.error('Could not read saved language preference:', error);
        return null;
    }
}

function getProductTitle(product) {
    if (currentLang === 'en') {
        return englishProductTitles[product.id] || product.title;
    }
    return product.title;
}

function getProductPrice(product) {
    return product.priceVerified === false
        ? translations[currentLang].priceAtStore
        : product.price;
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

function renderProductDetail(productId) {
    const product = getAllProducts().find(item => String(item.id) === productId);
    const container = document.getElementById('productDetailContent');

    if (!product) {
        container.innerHTML = `
            <div class="product-detail-not-found">
                <h1>${escapeHtml(translations[currentLang].detailNotFound)}</h1>
                <p>${escapeHtml(translations[currentLang].detailNotFoundText)}</p>
            </div>
        `;
        return;
    }

    const title = getProductTitle(product);
    const description = currentLang === 'en'
        ? (englishProductTitles[product.id] || product.description || title)
        : (product.description || product.title);
    container.innerHTML = `
        <article class="product-detail-card">
            <div class="product-detail-image-wrap">
                <img class="product-detail-image" src="${escapeHtml(product.image)}" alt="${escapeHtml(title)}">
            </div>
            <div class="product-detail-content">
                <span class="product-detail-badge">${escapeHtml(product.platform)}</span>
                <h1>${escapeHtml(title)}</h1>
                <p class="product-detail-description">${escapeHtml(description)}</p>
                <div class="price-box product-detail-price">
                    ${product.oldPrice ? `<span class="old-price">${escapeHtml(product.oldPrice)}</span>` : ''}
                    <span class="new-price">${escapeHtml(getProductPrice(product))}</span>
                    <span class="first-time-offer">${escapeHtml(translations[currentLang].firstTimeOffer)}</span>
                </div>
                <p class="product-detail-purchase-note">${escapeHtml(translations[currentLang].purchaseOnStore)}</p>
                <div class="product-detail-actions">
                    <a class="product-detail-buy" href="${escapeHtml(product.affLink)}" target="_blank" rel="noopener noreferrer">
                        <i class="ri-shopping-bag-line" aria-hidden="true"></i>
                        ${escapeHtml(translations[currentLang].checkoutAtStore)}
                    </a>
                </div>
                <div class="product-detail-share-actions" aria-label="${escapeHtml(translations[currentLang].detailShare)}">
                    <button class="product-detail-share" type="button">
                        <i class="ri-whatsapp-line" aria-hidden="true"></i>
                        ${escapeHtml(translations[currentLang].detailShare)}
                    </button>
                    <a class="product-detail-share product-detail-share-facebook" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getProductPageUrl(product.id))}" target="_blank" rel="noopener noreferrer">
                        <i class="ri-facebook-fill" aria-hidden="true"></i>
                        ${escapeHtml(translations[currentLang].shareFacebook)}
                    </a>
                    <button class="product-detail-share product-detail-share-snapchat" type="button">
                        <i class="ri-snapchat-fill" aria-hidden="true"></i>
                        ${escapeHtml(translations[currentLang].shareSnapchat)}
                    </button>
                    <button class="product-detail-share product-detail-copy-link" type="button">
                        <i class="ri-links-line" aria-hidden="true"></i>
                        ${escapeHtml(translations[currentLang].copyProductLink)}
                    </button>
                </div>
                <p class="product-share-feedback" role="status" aria-live="polite"></p>
            </div>
        </article>
    `;
    container.querySelector('.product-detail-share').addEventListener('click', () => {
        shareToWhatsApp(product);
    });
    container.querySelector('.product-detail-share-snapchat').addEventListener('click', () => {
        shareProductWithApps(product, container.querySelector('.product-share-feedback'));
    });
    container.querySelector('.product-detail-copy-link').addEventListener('click', () => {
        copyProductLink(product, container.querySelector('.product-share-feedback'));
    });
}

// عرض المنتجات
function renderProducts(items) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    if (items.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">${escapeHtml(translations[currentLang].emptyProducts)}</p>`;
        return;
    }

    items.forEach(product => {
        const title = getProductTitle(product);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <span class="product-badge">${escapeHtml(product.platform)}</span>
            <a class="product-image-link" href="?product=${encodeURIComponent(product.id)}" aria-label="${escapeHtml(translations[currentLang].productDetailsAria)} ${escapeHtml(title)}">
                <div class="product-img-wrap">
                    <img src="${escapeHtml(product.image)}" alt="${escapeHtml(title)}" loading="lazy">
                </div>
            </a>
            <div class="product-body">
                <h3 class="product-title"><a class="product-title-link" href="?product=${encodeURIComponent(product.id)}">${escapeHtml(title)}</a></h3>
                <div class="product-footer">
                    <div class="price-box">
                        ${product.oldPrice ? `<span class="old-price">${escapeHtml(product.oldPrice)}</span>` : ''}
                        <span class="new-price">${escapeHtml(getProductPrice(product))}</span>
                        <span class="first-time-offer">${escapeHtml(translations[currentLang].firstTimeOffer)}</span>
                    </div>
                    <div class="product-actions">
                        <a href="?product=${encodeURIComponent(product.id)}" class="affiliate-btn">${escapeHtml(translations[currentLang].viewDetails)}</a>
                        <button class="whatsapp-share-btn" type="button" title="${escapeHtml(translations[currentLang].whatsappShare)}" aria-label="${escapeHtml(translations[currentLang].whatsappShare)}">
                            <i class="ri-whatsapp-line"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        card.querySelector('.whatsapp-share-btn').addEventListener('click', () => {
            shareToWhatsApp(product);
        });
        grid.appendChild(card);
    });
}

// الفلترة وإظهار وصف المنشور الصنف عند الضغط
function filterCategory(cat, element) {
    currentCategory = cat;
    document.querySelectorAll('.cat-chip').forEach(chip => chip.classList.remove('active'));
    element.classList.add('active');

    const descBox = document.getElementById('categoryDescBox');
    const titleEl = document.getElementById('catDescTitle');
    const textEl = document.getElementById('catDescText');

    const descriptions = localizedCategoryDescriptions[currentLang] || categoryDescriptions;
    if (descriptions[cat]) {
        descBox.style.display = 'block';
        titleEl.innerHTML = `<i class="ri-information-fill"></i> ${escapeHtml(descriptions[cat].title)}`;
        textEl.innerText = descriptions[cat].desc;
    } else {
        descBox.style.display = 'none';
    }

    if (cat === 'all') {
        renderProducts(getAllProducts());
    } else if (['aliexpress', 'amazon', 'jumia', 'alibaba', 'temu'].includes(cat)) {
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
        cell.textContent = translations[currentLang].noPendingSuggestions;
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
        price.textContent = `${submission.price}${submission.oldPrice ? ` (${translations[currentLang].oldPrice}: ${submission.oldPrice})` : ''}`;
        const link = document.createElement('a');
        link.href = submission.affLink;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = translations[currentLang].openProductLink;
        productCell.append(title, price, link);

        const platformCell = document.createElement('td');
        platformCell.textContent = submission.platform;
        const actionsCell = document.createElement('td');
        const approveButton = document.createElement('button');
        approveButton.type = 'button';
        approveButton.className = 'approve-btn';
        approveButton.textContent = translations[currentLang].approve;
        approveButton.addEventListener('click', () => reviewSubmission(submission.id, 'approve'));
        const rejectButton = document.createElement('button');
        rejectButton.type = 'button';
        rejectButton.className = 'delete-btn';
        rejectButton.textContent = translations[currentLang].reject;
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
    if (!translations[lang]) return;
    currentLang = lang;
    try {
        localStorage.setItem('siteLanguage', lang);
    } catch (error) {
        console.error('Could not save language preference:', error);
    }
    const root = document.getElementById('htmlRoot');
    root.setAttribute('lang', lang);
    root.setAttribute('dir', (lang === 'ar' ? 'rtl' : 'ltr'));

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.setAttribute('placeholder', translations[lang][el.dataset.i18nPlaceholder]);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        el.setAttribute('title', translations[lang][el.dataset.i18nTitle]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        el.setAttribute('aria-label', translations[lang][el.dataset.i18nAria]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        el.setAttribute('alt', translations[lang][el.dataset.i18nAlt]);
    });
    document.title = translations[lang].siteTitle;
    document.getElementById('floatingWhatsappBtn').href =
        `https://wa.me/${siteConfig.cleanPhone}?text=${encodeURIComponent(translations[lang].whatsappContactMessage)}`;
    const visibleProducts = currentCategory === 'all'
        ? getAllProducts()
        : getAllProducts().filter(product =>
            ['aliexpress', 'amazon', 'jumia', 'alibaba', 'temu'].includes(currentCategory)
                ? product.platform.toLowerCase() === currentCategory
                : product.category === currentCategory
        );
    renderProducts(visibleProducts);
    document.getElementById('announcementText').textContent = translations[lang].announcementText;
    const productId = new URLSearchParams(window.location.search).get('product');
    if (productId) {
        document.querySelector('#productDetailView .product-detail-back span').textContent =
            translations[lang].detailBack;
        document.querySelector('#productDetailView .product-detail-back i').className =
            lang === 'ar' ? 'ri-arrow-right-line' : 'ri-arrow-left-line';
        renderProductDetail(productId);
    }
    const visibleCategory = document.querySelector('.cat-chip.active')?.dataset.category;
    if (visibleCategory && visibleCategory !== 'all') {
        const categoryInfo = (localizedCategoryDescriptions[lang] || categoryDescriptions)[visibleCategory];
        if (categoryInfo && document.getElementById('categoryDescBox').style.display !== 'none') {
            document.getElementById('catDescTitle').innerHTML =
                `<i class="ri-information-fill"></i> ${escapeHtml(categoryInfo.title)}`;
            document.getElementById('catDescText').textContent = categoryInfo.desc;
        }
    }
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
    renderProducts(getAllProducts().filter(p =>
        getProductTitle(p).toLowerCase().includes(query) || p.platform.toLowerCase().includes(query)
    ));
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
function getProductPageUrl(productId) {
    const url = new URL(window.location.href);
    url.search = '';
    url.hash = '';
    url.searchParams.set('product', productId);
    return url.href;
}

function shareToWhatsApp(product) {
    const link = getProductPageUrl(product.id);
    const greeting = currentLang === 'en'
        ? "Hi, I found this deal on AL_HAMZZA:"
        : currentLang === 'fr'
            ? "Bonjour, j’ai trouvé cette offre sur AL_HAMZZA :"
            : "سلام، عجبني هاد العرض ف موقع AL_HAMZZA:";
    const title = getProductTitle(product);
    const priceLabel = currentLang === 'en' ? "Price" : currentLang === 'fr' ? "Prix" : "الثمن";
    const linkLabel = currentLang === 'en' ? "Link" : currentLang === 'fr' ? "Lien" : "الرابط";
    const text = `${greeting}\n\n*${title}*\n${priceLabel}: *${getProductPrice(product)}*\n${linkLabel}: ${link}`;
    window.open(`https://wa.me/${siteConfig.cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
}

async function shareProductWithApps(product, feedback) {
    const url = getProductPageUrl(product.id);
    const data = {
        title: getProductTitle(product),
        text: `${getProductTitle(product)} - ${getProductPrice(product)}`,
        url
    };

    if (!navigator.share) {
        await copyProductLink(product, feedback);
        return;
    }

    try {
        await navigator.share(data);
    } catch (error) {
        if (error.name === 'AbortError') {
            feedback.textContent = translations[currentLang].shareCancelled;
            return;
        }
        console.error('Product sharing failed:', error);
        feedback.textContent = translations[currentLang].shareFailed;
    }
}

async function copyProductLink(product, feedback) {
    const url = getProductPageUrl(product.id);
    try {
        await navigator.clipboard.writeText(url);
        feedback.textContent = translations[currentLang].productLinkCopied;
    } catch (error) {
        console.error('Copying product link failed:', error);
        feedback.textContent = `${translations[currentLang].productLinkCopyFailed} ${url}`;
    }
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
    feedback.textContent = translations[currentLang].suggestionSending;
    try {
        const result = await apiRequest('/api/submissions', {
            method: 'POST',
            body: JSON.stringify(suggestion)
        });
        feedback.classList.add('success');
        feedback.textContent = translations[currentLang].suggestionSubmitted;
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
    feedback.textContent = translations[currentLang].adminUpdating;
    try {
        await apiRequest(`/api/admin/submissions/${id}/${action}`, {
            method: 'PATCH',
            token: adminSessionToken
        });
        if (action === 'approve') await loadApprovedProducts();
        await renderAdminProductsTable();
        feedback.classList.add('success');
        feedback.textContent = action === 'approve'
            ? translations[currentLang].productApproved
            : translations[currentLang].productRejected;
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
        let reply = translations[currentLang].aiDefaultReply;
        const lower = query.toLowerCase();
        if (['سماع', 'earbud', 'headphone', 'headphone', 'écouteur'].some(term => lower.includes(term))) {
            reply = translations[currentLang].aiEarbudsReply;
        } else if (['طبخ', 'مقلاة', 'kitchen', 'cuisine', 'air fryer'].some(term => lower.includes(term))) {
            reply = translations[currentLang].aiKitchenReply;
        }

        chatBox.innerHTML += `<div class="ai-msg bot">${reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
}
