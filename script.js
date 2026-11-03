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
        catalogCategory: "gaming",
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
        catalogCategory: "shoes",
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
        catalogCategory: "beauty",
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
        catalogCategory: "beauty",
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
        catalogCategory: "beauty",
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
        catalogCategory: "shoes",
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
        catalogCategory: "accessories",
        image: "https://img.kwcdn.com/product/fancy/62e1a664-8a4d-4c93-bddb-ec7e22f10ead.jpg",
        affLink: "https://www.temu.com/ma-en/1-mens-vintage-credit-card-wallet--print-design--and-soft-multi-card-slot--id-card-holder--purse-great-gift---g-605915948393318.html?_oak_mp_inf=EObG%2BOa84okBGhZnb29kc19xdWhtcnBfcmVjb21tZW5kILC%2FvdGXNA%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F62e1a664-8a4d-4c93-bddb-ec7e22f10ead.jpg&spec_gallery_id=32600622619&refer_page_sn=10032&freesia_scene=11&_oak_freesia_scene=11&_oak_rec_ext_1=NDYwMA&_oak_gallery_order=1889977121%2C188015209%2C1200905879%2C1820568421%2C754588854&refer_page_el_sn=200444&ab_scene=1&_x_ads_csite=pc_bottom_union&_x_sessn_id=nm6eukvy37&refer_page_name=goods&refer_page_id=10032_1793050073878_mepzrjcgdx"
    },
    {
        id: 22,
        title: "سفينة خشبية مضيئة مصنوعة يدوياً للديكور",
        description: "تحفة فنية خشبية مضيئة مصنوعة يدوياً بعناية خلال يومين. تضيف لمسة من الفخامة إلى الصالون أو غرفة النوم أو المكتب، وتناسب كهدية مميزة.\nالكبيرة: الطول 60 سم × العرض 10 سم — 400 DH.\nالصغيرة: 40 × 10 سم — 350 DH.",
        descriptionFr: "Maquette décorative de bateau en bois illuminée, fabriquée à la main avec soin en deux jours. Grande : 60 × 10 cm — 400 DH. Petite : 40 × 10 cm — 350 DH.",
        descriptionEn: "A handcrafted illuminated wooden ship, made with care over two days. A decorative piece for the living room, bedroom, or office.\nLarge: 60 × 10 cm — 400 DH.\nSmall: 40 × 10 cm — 350 DH.",
        price: "350–400 DH",
        oldPrice: "500–600 DH",
        showFirstTimeOffer: false,
        freeDelivery: true,
        showWellWishes: true,
        platform: "ALHAMZA",
        category: "home",
        catalogCategory: "accessories",
        images: [
            "https://i.ibb.co/600CSmpw/Whats-App-Image-2026-10-29-at-14-03-47.jpg",
            "https://i.ibb.co/VpBYBnjQ/Whats-App-Image-2026-10-29-at-14-03-42.jpg"
        ],
        image: "https://i.ibb.co/600CSmpw/Whats-App-Image-2026-10-29-at-14-03-47.jpg",
        affLink: "https://api.whatsapp.com/send/?phone=212726294311"
    },
    {
        id: 16,
        title: "طبسيل الطاووس المغربي العتيق — Vintage Moroccan Taous Plate (Very Rare)",
        description: "طبق تقليدي مغربي عريق بنقشة الطاووس والأزهار باللون الأزرق الملوكي والذهبي. قطعة فنية وأنيقة للديكور أو للتقديم والضيافة المغربية الأصيلة.",
        descriptionEn: "A vintage Moroccan plate featuring peacock and floral motifs in royal blue and gold. An elegant decorative piece or serving plate for Moroccan hospitality.",
        descriptionFr: "Un ancien plat marocain orné de motifs de paon et de fleurs en bleu royal et doré. Une pièce élégante pour la décoration ou le service.",
        images: [
            "https://i.etsystatic.com/62845644/r/il/c5e544/7768904807/il_1588xN.7768904807_t789.jpg",
            "https://i.etsystatic.com/62845644/r/il/49d298/7720962570/il_1588xN.7720962570_h79y.jpg"
        ],
        price: "",
        oldPrice: "",
        platform: "ALHAMZA",
        category: "home",
        image: "https://i.etsystatic.com/62845644/r/il/c5e544/7768904807/il_1588xN.7768904807_t789.jpg",
        contactOnly: true
    },
    {
        id: 17,
        title: "سماعات أذن لاسلكية X15 للألعاب والاستعمال اليومي مع علبة شحن وشاشة رقمية",
        price: "55 DH",
        oldPrice: "",
        platform: "temu",
        category: "tech",
        image: "https://img.kwcdn.com/product/fancy/1b62b025-b9f0-4fb8-8470-45b7f140aed3.jpg",
        affLink: "https://www.temu.com/ma-en/x15-true-wireless-earbuds-cool-charging-case-in-ear-gaming-headset-with-hd-power-display-suitable-for-gaming-daily-use-no-latency-g-607117364837229.html?_oak_mp_inf=EO32%2BLa4hYoBGhZnb29kc19hMTY1YmNfcmVjb21tZW5kIIizvpuZNA%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F1b62b025-b9f0-4fb8-8470-45b7f140aed3.jpg&spec_gallery_id=46504571105&refer_page_sn=10032&freesia_scene=11&_oak_freesia_scene=11&_oak_rec_ext_1=NTUwMA&_oak_gallery_order=1460167737%2C1599284338%2C2134082724%2C810799752%2C903443386&refer_page_el_sn=200444&ab_scene=1&_x_sessn_id=88z338d3ap&refer_page_name=goods&refer_page_id=10032_1793474921675_kyb3o1bqc3"
    },
    {
        id: 18,
        title: "طقم أدوات وكابلات 9 في 1 للهاتف مع محول USB وعلبة تخزين",
        price: "55 DH",
        oldPrice: "",
        platform: "temu",
        category: "tech",
        image: "https://img.kwcdn.com/product/fancy/82dcc9a1-8b21-4d12-b92e-987bd03de59d.jpg",
        affLink: "https://www.temu.com/ma-en/9-in-1-cable-tool-kit-box-with-usb-adapter-cable-converter-storage-case-usb-type-c-to-micro-usb-lightning-usb-a-cables-supports-data-transfer-tools--sim-card-tray-ejector-pin--as-a-phone-stand-suitable-for-phones-tablets-g-601103111467066.html?_oak_mp_inf=ELrgusuz1ogBGhZnb29kc19hMTY1YmNfcmVjb21tZW5kIImzvpuZNA%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F82dcc9a1-8b21-4d12-b92e-987bd03de59d.jpg&spec_gallery_id=438485&refer_page_sn=10032&freesia_scene=11&_oak_freesia_scene=11&_oak_rec_ext_1=NTUwMA&_oak_gallery_order=1344948459%2C606895949%2C503141555%2C1488009720%2C1271182361&refer_page_el_sn=200444&ab_scene=1&_x_sessn_id=88z338d3ap&refer_page_name=goods&refer_page_id=10032_1793474921675_kyb3o1bqc3"
    },
    {
        id: 19,
        title: "سوار سيليكون رياضي 22 مم لساعات Huawei Watch GT 5 Pro وGT 5 مقاس 46 مم",
        price: "3 DH",
        oldPrice: "",
        platform: "temu",
        category: "tech",
        image: "https://img.kwcdn.com/product/fancy/15d64057-40ce-44ae-a8c7-e7089db051dd.jpg?imageView2/2/w/800/q/70/format/avif",
        affLink: "https://temu.to/k/e6zc5z0w50r"
    },
    {
        id: 20,
        title: "ساعة ذكية بشاشة HD ومكالمات لاسلكية وإشعارات ورسائل وأنماط رياضية متعددة",
        price: "199 DH",
        oldPrice: "",
        platform: "temu",
        category: "tech",
        image: "https://img.kwcdn.com/product/fancy/ef4eb946-e37a-4be6-be8f-506a0d1ef54b.jpg?imageView2/2/w/800/q/70/format/avif",
        affLink: "https://temu.to/k/e8khcp3tbq7"
    },
    {
        id: 21,
        title: "أقراط Goutte Invisible من الذهب عيار 18 قيراط",
        description: "أقراط مصنوعة يدوياً من مجموعة Goutte Invisible، متوفرة بالذهب الأبيض أو الأصفر أو الوردي عيار 18 قيراطاً حسب الصور.",
        descriptionFr: "Boucles d’oreilles Goutte Invisible, fabriquées à la main et disponibles en or blanc, jaune ou rose 18 carats selon les photos.",
        descriptionEn: "Handcrafted Goutte Invisible earrings, available in 18k white, yellow, or rose gold as shown in the product photos.",
        price: "2664 DH",
        oldPrice: "",
        platform: "Riana.ma",
        category: "jewelry",
        image: "https://www.riana.ma/assets/images/boucles-doreilles/design/goutte-invisible-yellow.png",
        affLink: "https://www.riana.ma/produit/goutte-invisible-126/"
    },
    {
        id: 23,
        title: "مندولين EKO فينتاج كهربائي-أكوستيكي",
        description: "مندولين فينتاج من ماركة EKO الإيطالية الشهيرة، بجسم على شكل دمعة وخشب طبيعي بلون عسلي دافئ. صوت أصيل مع بيكاب كهربائي ومخرج جاك للوصل بالأمبلي والعزف على المسرح أو في الحفلات.\n\nالمواصفات:\nالماركة: EKO\nالنوع: مندولين فينتاج بجسم دمعة\nالخشب: جسم خشبي طبيعي وزند بلون داكن\nالإلكترونيك: بيكاب فوق الفتحة ومخرج جاك على الجنب\nمفاتيح الضبط: 12 مفتاحاً معدنياً\nالزخرفة: علامات صدفية على الزند\nالذيل: قطعة ذيل معدنية\n\nعلاش تشريها:\nماركة EKO معروفة عند عشاق الآلات الفينتاج. شكل مميز وخشب زوين للعزف والتصوير والديكور. جاهزة للوصل بالأمبلي ومناسبة للعازفين المبتدئين والمحترفين وللمهتمين بجمع الآلات.\n\nالحالة: آلة مستعملة بحالة جيدة وبدون كسر في الجسم. الأوتار محتاجة تبديل قبل العزف. الصور كتعبر على الحالة الحقيقية.",
        descriptionFr: "Mandoline électro-acoustique vintage de la célèbre marque italienne EKO, avec une caisse en forme de larme en bois naturel couleur miel. Son authentique, micro intégré et sortie jack pour la brancher à un amplificateur, sur scène ou en concert.\n\nCaractéristiques :\nMarque : EKO\nType : mandoline vintage, caisse en forme de larme\nBois : caisse en bois naturel, manche foncé\nÉlectronique : micro au-dessus de l’ouverture et sortie jack latérale\nMécaniques : 12 mécaniques métalliques\nDécoration : repères nacrés sur le manche\nChevalet de cordier : métal\n\nPourquoi la choisir :\nLa marque EKO est appréciée des amateurs d’instruments vintage. Sa forme distinctive et son beau bois conviennent au jeu, à la photographie ou à la décoration. Prête à être branchée à un amplificateur, elle convient aux débutants, aux musiciens confirmés et aux collectionneurs.\n\nÉtat : instrument d’occasion en bon état, sans fissure sur la caisse. Les cordes sont à remplacer avant de jouer. Les photos montrent l’état réel.",
        descriptionEn: "Vintage electro-acoustic mandolin by the well-known Italian brand EKO, with a teardrop-shaped body in natural honey-colored wood. It has an authentic vintage sound, a pickup, and a side jack output for connecting to an amplifier and playing on stage or at events.\n\nSpecifications:\nBrand: EKO\nType: vintage teardrop-body mandolin\nWood: natural wood body with a dark-colored neck\nElectronics: pickup above the sound hole and side jack output\nTuning machines: 12 metal tuners\nDecoration: pearloid fretboard markers\nTailpiece: metal\n\nWhy choose it:\nEKO is well known among vintage instrument enthusiasts. Its distinctive shape and attractive wood make it suitable for playing, photography, or display. Ready to connect to an amplifier; suitable for beginners, experienced musicians, and collectors.\n\nCondition: used and in good condition, with no cracks in the body. The strings need replacing before playing. Photos show the actual condition.",
        price: "2500 DH",
        oldPrice: "",
        platform: "ALHAMZA",
        category: "tech",
        catalogCategory: "accessories",
        image: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fassets.catawiki.nl%2Fassets%2F2024%2F10%2F9%2F5%2Fd%2Fd%2F5dd3f9ee-6571-4d10-8e47-c36b4c836247.jpg&sp=1793567335Ta2c485a9cad521598b156f771a3969c8d4cb70bb47e3c7e9395d0ddd0ea87f2b",
        affLink: "https://api.whatsapp.com/send/?phone=212726294311"
    },
    {
        id: 24,
        title: "حامل هاتف مغناطيسي للسيارة بدوران 360 درجة، سهل التركيب والإزالة",
        description: "حامل هاتف مغناطيسي لأجهزة GPS، يدور 360 درجة ويسهل تركيبه وإزالته. مناسب لتثبيت الهاتف أو جهاز الملاحة داخل السيارة.",
        descriptionFr: "Support magnétique pour téléphone ou GPS, orientable à 360° et facile à installer et à retirer. Idéal pour fixer votre appareil dans la voiture.",
        descriptionEn: "Magnetic phone and GPS holder that rotates 360 degrees and is easy to install and remove. Designed to keep your device mounted in the car.",
        price: "3 DH",
        oldPrice: "",
        platform: "temu",
        category: "tech",
        catalogCategories: ["accessories", "electronics"],
        images: [
            "https://img.kwcdn.com/product/fancy/cb72fb57-2428-41e2-9b09-98727295df87.jpg?imageView2/2/w/800/q/70/format/avif",
            "https://img.kwcdn.com/product/fancy/b6d092bb-1ddd-462f-8ce1-4ca0cb67ba40.jpg?imageView2/2/w/800/q/70/format/avif",
            "https://img.kwcdn.com/product/fancy/58799c99-4806-465c-b08d-5d31e1546766.jpg?imageView2/2/w/800/q/70/format/avif"
        ],
        image: "https://img.kwcdn.com/product/fancy/cb72fb57-2428-41e2-9b09-98727295df87.jpg?imageView2/2/w/800/q/70/format/avif",
        affLink: "https://temu.to/k/e5i1l38m1my"
    },
    {
        id: 25,
        title: "مريول حلاقة اللحية للرجال، قماش غير لاصق لتسهيل التشذيب والتصفيف",
        description: "مريول عملي لالتقاط شعر اللحية أثناء الحلاقة والتشذيب، مصنوع من مادة غير لاصقة وبمقاس واحد يناسب الجميع. متوفر بقطعة واحدة أو ثلاث قطع.",
        descriptionFr: "Bavoir de rasage pour homme, en matière antiadhésive pour recueillir les poils pendant la taille et le coiffage. Taille unique, disponible en lot de 1 ou 3 pièces.",
        descriptionEn: "Men's beard-trimming bib made from non-stick material to catch hair while styling and trimming. One size fits all; available as a 1-piece or 3-piece set.",
        price: "3 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        catalogCategory: "beauty",
        images: [
            "https://img.kwcdn.com/product/fancy/09877b0c-c1b7-4fd6-a071-ce191dcec583.jpg?imageView2/2/w/800/q/70/format/avif",
            "https://img.kwcdn.com/product/algo_check/auto/6333567acd2ecea14545562da95d0817_1730444335681.jpg?imageView2/2/w/800/q/70/format/avif",
            "https://img.kwcdn.com/product/fancy/a0553a2c-eae4-4ac9-a3e8-d66617337be4.jpg?imageView2/2/w/800/q/70/format/avif"
        ],
        image: "https://img.kwcdn.com/product/fancy/09877b0c-c1b7-4fd6-a071-ce191dcec583.jpg?imageView2/2/w/800/q/70/format/avif",
        affLink: "https://temu.to/k/ebdc0y1wq2z"
    },
    {
        id: 26,
        title: "مدلك ركبة قابل للشحن مع خاصية التدفئة",
        description: "جهاز تدليك للركبة قابل للشحن، مصنوع من ألياف البوليستر ومصمم بتصميم مريح مع خاصية التدفئة. مناسب للاستخدام بعد يوم طويل أو أثناء الجلوس لفترات طويلة.",
        descriptionFr: "Masseur de genou rechargeable en fibres de polyester, avec conception ergonomique et fonction chauffante. Pratique après une longue journée ou en cas de position assise prolongée.",
        descriptionEn: "Rechargeable knee massager made of polyester fiber, with an ergonomic design and heating function. Suitable for use after a long day or during extended periods of sitting.",
        price: "257 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        catalogCategory: "beauty",
        images: [
            "https://img.kwcdn.com/product/fancy/afd7149f-f096-4d8e-8496-ae3fb738f735.jpg?imageView2/2/w/800/q/70/format/avif",
            "https://img.kwcdn.com/product/fancy/e0692043-e7b1-4505-ab98-0138a7dd25dd.jpg?imageView2/2/w/800/q/70/format/avif",
            "https://img.kwcdn.com/product/fancy/b40b839e-d2a2-449b-a35c-7ef7f2509419.jpg?imageView2/2/w/800/q/70/format/avif"
        ],
        image: "https://img.kwcdn.com/product/fancy/afd7149f-f096-4d8e-8496-ae3fb738f735.jpg?imageView2/2/w/800/q/70/format/avif",
        affLink: "https://temu.to/k/erjxyokcoo5"
    },
    {
        id: 27,
        title: "جوارب سيليكون مرطبة للقدمين مع جل الألوفيرا، عبوتان",
        description: "جوارب عناية بالقدمين من السيليكون مع جل ناعم مرطب بالألوفيرا، مناسبة للعناية المنزلية والباديكير. تساعد على ترطيب البشرة الجافة وتنعيم الكعبين. عبوة من زوجين.",
        descriptionFr: "Chaussettes de soin des pieds en silicone avec gel doux hydratant à l’aloe vera. Idéales pour les soins à domicile et la pédicure, elles aident à hydrater les pieds secs et à adoucir les talons. Lot de deux paires.",
        descriptionEn: "Silicone foot-care socks with soft aloe vera moisturizing gel, suitable for at-home spa and pedicure routines. Help moisturize dry feet and soften heels. Pack of two pairs.",
        price: "3 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        catalogCategory: "beauty",
        video: "https://goods-vod.kwcdn.com/goods-video/1e44d9af790a42c51fe049fcb79ced6f953dd7dags2CV.f30.mp4",
        images: [
            "https://img.kwcdn.com/product/fancy/d387e78b-f022-4dc9-99b5-454f112e7cad.jpg?imageView2/2/w/800/q/70/format/avif",
            "https://img.kwcdn.com/product/fancy/2466b58b-3766-493e-84b2-073867fa6c3f.jpg?imageView2/2/w/800/q/70/format/avif"
        ],
        image: "https://img.kwcdn.com/product/fancy/d387e78b-f022-4dc9-99b5-454f112e7cad.jpg?imageView2/2/w/800/q/70/format/avif",
        affLink: "https://temu.to/k/eq8n8w5z6dj"
    },
    {
        id: 28,
        title: "فواصل أصابع القدم من السيليكون الناعم، قطعتان بحلقتين للراحة والاسترخاء",
        description: "فواصل مرنة لأصابع القدم مصنوعة من جل السيليكون الناعم. تصميم بحلقتين قابل لإعادة الاستخدام، مناسب لليوغا والاسترخاء والعناية اليومية بالقدمين.",
        descriptionFr: "Séparateurs d’orteils souples en gel de silicone, lot de deux avec deux boucles. Flexibles et réutilisables, ils conviennent au yoga, à la détente et au soin quotidien des pieds.",
        descriptionEn: "Soft silicone gel toe separators, two pieces with two loops. Flexible and reusable, suitable for yoga, relaxation, and everyday foot care.",
        price: "18 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        catalogCategory: "beauty",
        image: "https://img.kwcdn.com/product/fancy/506ecb15-2798-4eed-bae8-5681ada03317.jpg",
        affLink: "https://www.temu.com/ma-en/2pcs-soft-gel-toe-separators-with-2-loops-silicone-toe-spacers-for-yoga-and-everyday-relaxation-flexible-durable-and-reusable-design-toe-spreaders-for--care-ideal-for-men-women-g-601099552915851.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F506ecb15-2798-4eed-bae8-5681ada03317.jpg&spec_gallery_id=1&sku_id=17592368390792&_oak_page_source=10082&_x_ads_csite=pc_bottom_union&_x_sessn_id=qxxrl2nkzv&refer_page_name=afc_share_goods&refer_page_id=13788_1793734751382_efargy34f0&refer_page_sn=13788"
    },
    {
        id: 29,
        title: "دعامة خفيفة للكاحل بتصميم ضاغط، رقيقة ومهوّاة للرياضة",
        description: "دعامة للكاحل بتصميم خفيف وضاغط، مصنوعة من نسيج رقيق ومهوّى لتوفير دعم ثابت أثناء التمرين دون التسبب بتعرّق زائد.",
        descriptionFr: "Chevillère légère à compression, fine et respirante, conçue pour offrir un maintien stable pendant l’exercice.",
        descriptionEn: "Lightweight compression ankle support with a thin, breathable design for stable support during exercise.",
        price: "40 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        catalogCategory: "beauty",
        image: "https://img.kwcdn.com/product/open/f74ea2f6ec5e4d589aa2c762b068333e-goods.jpeg",
        affLink: "https://www.temu.com/ma-en/-version-single-pack-professional-ankle-support-lightweight-compression-design-thin-and-breathable-doesnt-cause--sweating-provides-stable-support-during-exercise-reduces-the--of-ankles-g-605842061533360.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2Ff74ea2f6ec5e4d589aa2c762b068333e-goods.jpeg&spec_gallery_id=35541301110&_oak_page_source=10082&_x_ads_csite=pc_bottom_union&_x_sessn_id=qxxrl2nkzv&refer_page_name=afc_share_goods&refer_page_id=13788_1793734751382_efargy34f0&refer_page_sn=13788"
    },
    {
        id: 30,
        title: "فاصل أصابع القدم بأربع حلقات، مرن وخفيف للاستعمال اليومي",
        description: "فاصل أصابع قدم ناعم ومرن بأربع حلقات، خفيف وقابل للغسل. إكسسوار عملي للعناية اليومية بالقدمين ويمكن ارتداؤه في المنزل أو مع الأحذية.",
        descriptionFr: "Séparateur d’orteils souple à quatre boucles, léger et lavable, conçu pour le quotidien, à la maison ou avec des chaussures.",
        descriptionEn: "Soft, flexible four-loop toe separator. Lightweight and washable, designed for everyday foot care at home or with shoes.",
        price: "16 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        catalogCategory: "beauty",
        image: "https://img.kwcdn.com/product/open/4dca91046e1a4fdc8e7bfa8ffdbd3cc4-goods.jpeg",
        affLink: "https://www.temu.com/ma-en/4-loop-toe-separator-soft-flexible-toe-spacers-for-daily-wear-lightweight-washable--care-accessory-for-home-shoes-everyday--g-607143637966365.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F4dca91046e1a4fdc8e7bfa8ffdbd3cc4-goods.jpeg&spec_gallery_id=49685458257&_oak_page_source=10082&_x_ads_csite=pc_bottom_union&_x_sessn_id=qxxrl2nkzv&refer_page_name=afc_share_goods&refer_page_id=13788_1793734751382_efargy34f0&refer_page_sn=13788"
    },
    {
        id: 31,
        title: "ضوء نيون LED للسيارة يعمل بالاستشعار، متعدد الأوضاع",
        description: "ضوء LED زخرفي للسيارة يثبت بكوب شفط على الزجاج، مع استشعار ضوئي وأوضاع إضاءة متعددة. ثمن العرض 6 دراهم للمستخدمين الجدد في Temu فقط؛ تحقق من شروط العرض والسعر النهائي في صفحة المتجر.",
        descriptionFr: "Lumière décorative néon LED pour voiture, à ventouse pour vitre, avec détection lumineuse et plusieurs modes. Offre à 6 DH réservée aux nouveaux utilisateurs de Temu ; vérifiez les conditions et le prix final sur la boutique.",
        descriptionEn: "Decorative LED neon light for car windows with a suction cup, light sensor, and multiple modes. The 6 DH offer is for new Temu users only; check the offer terms and final price on the store page.",
        price: "6 DH",
        oldPrice: "",
        platform: "temu",
        category: "tech",
        catalogCategory: "electronics",
        image: "https://img.kwcdn.com/product/fancy/64566467-d4f7-4a9f-94d5-04a9a3ad01ec.jpg",
        affLink: "https://www.temu.com/ma-en/1pc-led--car-glass-decorative-neon-light-suction-cup--light-induction-dynamic-multi-mode-high-brightness-ambient-light--supply--car-accessories-g-606111704947257.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F64566467-d4f7-4a9f-94d5-04a9a3ad01ec.jpg&spec_gallery_id=38825752208&_oak_page_source=10082&_x_ads_csite=pc_bottom_union&_x_sessn_id=qxxrl2nkzv&refer_page_name=afc_share_goods&refer_page_id=13788_1793734751382_efargy34f0&refer_page_sn=13788"
    },
    {
        id: 32,
        title: "كابل شحن قابل للسحب 3 في 1 بثلاثة موصلات",
        description: "كابل شحن متعدد الاستخدامات قابل للسحب، يجمع موصلات Lightning وMicro USB وType-C، مناسب لشحن أجهزة iPhone وiPad وSamsung وأجهزة أخرى. ثمن العرض 3 دراهم للمستخدمين الجدد في Temu فقط؛ تحقق من شروط العرض والسعر النهائي في صفحة المتجر.",
        descriptionFr: "Câble de charge rétractable 3-en-1 avec connecteurs Lightning, Micro-USB et Type-C, compatible avec iPhone, iPad, Samsung et d’autres appareils. Offre à 3 DH réservée aux nouveaux utilisateurs de Temu ; vérifiez les conditions et le prix final sur la boutique.",
        descriptionEn: "Retractable 3-in-1 charging cable with Lightning, Micro-USB, and Type-C connectors for iPhone, iPad, Samsung, and more. The 3 DH offer is for new Temu users only; check the offer terms and final price on the store page.",
        price: "3 DH",
        oldPrice: "",
        platform: "temu",
        category: "tech",
        catalogCategory: "electronics",
        image: "https://img.kwcdn.com/product/fancy/c576a790-0609-41e3-b1e7-0f537d4cdbcd.jpg",
        affLink: "https://www.temu.com/ma-en/retractable--charging-cord-3-in-1-multi-charger-cable-charging-cable-retractable-charger-with-lightning-micro-type-c-for-iphone-ipad-samsung-ps-tablets-and-more-g-601099683578563.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fc576a790-0609-41e3-b1e7-0f537d4cdbcd.jpg&spec_gallery_id=1&sku_id=17592846321863&_oak_page_source=10082&_x_ads_csite=pc_bottom_union&_x_sessn_id=qxxrl2nkzv&refer_page_name=afc_share_goods&refer_page_id=13788_1793734751382_efargy34f0&refer_page_sn=13788"
    },
    {
        id: 33,
        title: "حزام خصر بسلسلة وزهور بطابع بوهيمي أنيق للنساء",
        titleFr: "Chaîne de taille florale vintage, ceinture bohème élégante pour femme",
        description: "حزام خصر أنيق على شكل سلسلة مزينة بالزهور، بطابع بوهيمي وفينتاج. مناسب للتجمعات اليومية والعطلات ومختلف المناسبات. عرض 6 دراهم متاح لمستخدمي التطبيق مرة واحدة فقط؛ قد يختلف التخفيض، تحقق من الثمن والشروط في صفحة Temu.",
        descriptionFr: "Chaîne de taille florale vintage au style bohème élégant, idéale pour les réunions quotidiennes, les vacances et diverses occasions. Offre à 6 DH utilisable une seule fois par utilisateur de l’application ; la réduction peut varier, vérifiez le prix et les conditions sur Temu.",
        descriptionEn: "Vintage floral waist chain with an elegant bohemian style, suitable for everyday gatherings, vacations, and various occasions. The 6 DH offer can be used once per app user; the discount may vary, so check the price and terms on Temu.",
        price: "6 DH",
        oldPrice: "",
        showFirstTimeOffer: false,
        platform: "temu",
        category: "jewelry",
        image: "https://img.kwcdn.com/product/fancy/f74dbe4c-d55c-4145-8fcf-63d64a0c91d9.jpg?imageView2/2/w/800/q/80",
        affLink: "https://temu.to/k/e3uzyylh5az"
    },
    {
        id: 34,
        title: "تيشيرت نسائي بطبعة موجات وحمار وحشي، تصميم كاجوال",
        description: "تيشيرت نسائي بطبعة موجات وحمار وحشي على خلفية بيضاء، مناسب للإطلالات اليومية الكاجوال. الثمن والتخفيض قابلان للتغيير حسب المقاس والتوفر؛ تأكدي من التفاصيل في صفحة Temu.",
        descriptionFr: "T-shirt femme à imprimé vagues et zèbre sur fond blanc, pour un style décontracté au quotidien. Le prix et la réduction peuvent varier selon la taille et la disponibilité ; vérifiez les détails sur Temu.",
        descriptionEn: "Women's T-shirt with a navy wave and zebra print on a white background, suited to casual daily wear. Price and discount may vary by size and availability; check the Temu page for details.",
        price: "85 DH",
        oldPrice: "148 DH",
        showFirstTimeOffer: false,
        platform: "temu",
        category: "fashion",
        catalogCategory: "women",
        image: "https://img.kwcdn.com/product/open/9fee9879b3654c81a8b83dc1a2af9d40-goods.jpeg",
        affLink: "https://www.temu.com/ma-en/printed-design-not-textured-womens-t-shirt-white-background-navy-irregular-wave-zebra--daily-wear-g-606700585216883.html?_x_ads_channel=kol_affiliate&_x_campaign=affiliate&_x_cid=4090376849kol_affiliate&_x_ads_csite=pc_bottom_union"
    },
    {
        id: 35,
        title: "سويتشيرت نسائي بياقة دائرية وطبعة ملونة، واسع ومريح",
        description: "سويتشيرت نسائي بياقة دائرية وطبعة ملونة، بأكمام طويلة وخطوط جانبية وقصة واسعة ومريحة. مناسب للأجواء الباردة والإطلالات الكاجوال. الثمن والتخفيض قابلان للتغيير؛ تحققي من صفحة Temu.",
        descriptionFr: "Sweat-shirt femme à col rond et imprimé coloré, manches longues, bandes latérales et coupe ample et confortable. Le prix et la réduction peuvent varier ; vérifiez la page Temu.",
        descriptionEn: "Women's crew-neck sweatshirt with a colorful print, long sleeves, side stripes, and a relaxed comfortable fit. Price and discount may change; check the Temu page for current details.",
        price: "204 DH",
        oldPrice: "341 DH",
        showFirstTimeOffer: false,
        platform: "temu",
        category: "fashion",
        catalogCategory: "women",
        image: "https://img.kwcdn.com/product/open/ee53227d84ac4e28859e5034c85b2f61-goods.jpeg",
        affLink: "https://www.temu.com/ma-en/womens-color-block-crew-neck-sweatshirt-with-beautiful-printed-pattern-new-autumn-winter-pullover-long-sleeves-with-dual-side-stripes-loose-fit-versatile-casual-comfortable-and-stylish-top-womens-apparel-machine-washable-and-easy-to-care-g-607106459628678.html?_x_ads_channel=kol_affiliate&_x_campaign=affiliate&_x_cid=4090376849kol_affiliate&_x_ads_csite=pc_bottom_union"
    },
    {
        id: 36,
        title: "فستان نسائي قصير الأكمام بطبعة جسر وجدول أسماك كوي",
        description: "فستان نسائي قصير الأكمام بطبعة مستوحاة من جسر وجدول أسماك كوي، مناسب للخروجات الصيفية والعطلات والاستعمال اليومي. الثمن والتخفيض قابلان للتغيير حسب المقاس والتوفر؛ تحققي من صفحة Temu.",
        descriptionFr: "Robe femme à manches courtes avec imprimé représentant un pont et un ruisseau de carpes koï. Adaptée aux sorties estivales, aux vacances et au quotidien. Le prix et la réduction peuvent varier selon la taille et la disponibilité ; vérifiez Temu.",
        descriptionEn: "Women's short-sleeve dress with a koi stream and bridge print, suitable for summer outings, vacations, and everyday wear. Price and discount may vary by size and availability; check Temu for current details.",
        price: "270 DH",
        oldPrice: "397 DH",
        showFirstTimeOffer: false,
        platform: "temu",
        category: "fashion",
        catalogCategory: "women",
        image: "https://img.kwcdn.com/product/open/d30a340e05374010a48fb2da11f6de16-goods.jpeg",
        affLink: "https://www.temu.com/ma-en/1pc-koi-stream-bridge-scenery-womens-dress-womens-versatile-trendy-short-sleeve-dress-suitable-for-summer--holiday-wear-casual-daily-wear--for-special-people-g-605556160983449.html?_x_ads_channel=kol_affiliate&_x_campaign=affiliate&_x_cid=4090376849kol_affiliate&_x_ads_csite=pc_bottom_union"
    },
    {
        id: 37,
        title: "سويتشيرت رجالي بقبعة ورباط وطبعة عصرية وجيب أمامي",
        description: "سويتشيرت رجالي بقبعة ورباط وطبعة حروف وجيب أمامي واسع، مناسب للإطلالات الكاجوال. الثمن والتخفيض قابلان للتغيير؛ تأكد من السعر والتوفر في صفحة Temu.",
        descriptionFr: "Sweat-shirt à capuche pour homme avec cordon, imprimé graphique et poche kangourou. Le prix et la réduction peuvent varier ; vérifiez le prix et la disponibilité sur Temu.",
        descriptionEn: "Men's hooded sweatshirt with drawstring, printed lettering, and a front kangaroo pocket. Price and discount may change; check the Temu page for current price and availability.",
        price: "180 DH",
        oldPrice: "266 DH",
        showFirstTimeOffer: false,
        platform: "temu",
        category: "fashion",
        image: "https://img.kwcdn.com/product/fancy/13a55e94-c79c-4993-87fb-23fc640bc6a7.jpg?imageView2/2/w/500/q/70/format/avif",
        affLink: "https://www.temu.com/ma-en/mens--hooded-sweatshirt-casual-drawstring-hoodie-with-prints-featuring-letter-designs-and--kangaroo-pocket-suitable-for-mens-tops-g-601103016735055.html"
    },
    {
        id: 38,
        title: "سويتشيرت رجالي محبوك بنقشة جاكار وقبعة وسحاب نصفي وجيب",
        description: "سويتشيرت رجالي جديد من نسيج جاكار محبوك، بقبعة وسحاب نصفي وجيب عملي. الثمن المعروض 256 درهم حسب العرض؛ قد يتغير التخفيض، تحقق من الثمن النهائي في صفحة Temu.",
        descriptionFr: "Sweat-shirt homme en maille jacquard, avec capuche, demi-zip et poche pratique. Le prix promotionnel indiqué est de 256 DH ; la remise peut varier, vérifiez le prix final sur Temu.",
        descriptionEn: "Men's jacquard-knit hooded sweatshirt with a half zip and practical pocket. The listed coupon price is 256 DH; discounts may vary, so check the final price on Temu.",
        price: "256 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        image: "https://img.kwcdn.com/product/fancy/c047daec-0602-4bf4-9b97-613fbd279131.jpg?imageView2/2/w/500/q/70/format/avif",
        affLink: "https://temu.to/k/ell5n41tmgq"
    },
    {
        id: 39,
        title: "هودي رجالي بطبعة عصرية على الظهر والأكمام، دافئ بجيب كنغر",
        description: "هودي رجالي بطبعة عصرية على الظهر والأكمام، بقبعة ورباط وجيب كنغر عملي. الثمن المعروض 205 دراهم حسب الكوبون؛ قد يتغير التخفيض، تحقق من الثمن النهائي في صفحة Temu.",
        descriptionFr: "Sweat à capuche homme avec imprimé tendance au dos et sur les manches, cordon et poche kangourou. Le prix avec coupon indiqué est de 205 DH ; la remise peut varier, vérifiez le prix final sur Temu.",
        descriptionEn: "Men's hoodie with a trendy back and sleeve print, drawstring hood, and kangaroo pocket. The listed coupon price is 205 DH; discounts may vary, so check the final price on Temu.",
        price: "205 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        image: "https://img.kwcdn.com/product/open/a51801db864c4e6793ff1496512da4c8-goods.jpeg?imageView2/2/w/500/q/70/format/avif",
        affLink: "https://temu.to/k/e7q3yc6aarb"
    },
    {
        id: 40,
        title: "قميص بولو رجالي بنقشة إيطالية وياقة وأكمام قصيرة، سريع الجفاف",
        description: "قميص بولو رجالي بنقشة إيطالية أنيقة، بياقة وأكمام قصيرة وقماش سريع الجفاف؛ مناسب للرياضة والخروجات الصيفية. الثمن المعروض 125 درهماً حسب الكوبون؛ قد يتغير التخفيض، تحقق من الثمن النهائي في صفحة Temu.",
        descriptionFr: "Polo homme à imprimé italien élégant, col et manches courtes, en tissu à séchage rapide. Idéal pour le sport et les sorties estivales. Le prix avec coupon indiqué est de 125 DH ; la remise peut varier, vérifiez le prix final sur Temu.",
        descriptionEn: "Men's Italian-pattern polo shirt with a collar, short sleeves, and quick-dry fabric, suitable for sports and summer outings. The listed coupon price is 125 DH; discounts may vary, so check the final price on Temu.",
        price: "125 DH",
        oldPrice: "",
        platform: "temu",
        category: "fashion",
        image: "https://img.kwcdn.com/product/open/b71a5a71490e4358a5af836838319f33-goods.jpeg?imageView2/2/w/500/q/70/format/avif",
        affLink: "https://temu.to/k/e2gyujc513v"
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
    },
    jewelry: {
        title: "قسم المجوهرات",
        desc: "تسوقوا المجوهرات الأنيقة مثل الخواتم والأساور والقلائد والأقراط."
    }
};

const localizedCategoryDescriptions = {
    fr: {
        all: { title: "Toutes les offres", desc: "Parcourez les produits et offres disponibles au Maroc." },
        tech: { title: "Technologie et électronique", desc: "Découvrez des produits connectés, des écouteurs, des montres et des accessoires." },
        home: { title: "Cuisine et maison", desc: "Des appareils de cuisine et des accessoires pratiques pour la maison." },
        fashion: { title: "Mode et style", desc: "Découvrez des vêtements, accessoires et articles de mode à prix réduits." },
        jewelry: { title: "Bijoux", desc: "Découvrez des bijoux élégants : bagues, bracelets, colliers et boucles d’oreilles." }
    },
    en: {
        all: { title: "All deals and offers", desc: "Browse all products and deals currently available in Morocco." },
        tech: { title: "Technology and electronics", desc: "Explore smart products, wireless earbuds, watches, accessories, and chargers." },
        home: { title: "Kitchen and home", desc: "Discover kitchen appliances and practical accessories for your home." },
        fashion: { title: "Fashion and style", desc: "Browse clothing, accessories, and fashion finds at great prices." },
        jewelry: { title: "Jewelry", desc: "Browse elegant jewelry, including rings, bracelets, necklaces, and earrings." }
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
        freeDelivery: "توصيل مجاني",
        productWellWishes: "بصحتك",
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
        aiTitle: "مساعد ALHAMZA الذكي",
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
        freeDelivery: "Livraison gratuite",
        productWellWishes: "Bon achat !",
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
        aiTitle: "Assistant IA ALHAMZA",
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
        freeDelivery: "Free delivery",
        productWellWishes: "Enjoy!",
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
        aiTitle: "ALHAMZA AI Assistant",
        aiDesc: "Tell me what you want to buy or your budget, and I'll recommend the best deal:",
        footerDesc: "Morocco's premier destination to discover the best deals, exclusive offers, and trusted links.",
        contactTitle: "Direct Contact",
        quickLinks: "Quick Links",
        viewDeal: "View Deal"
    }
};

const additionalTranslations = {
    ar: {
        siteTitle: "ALHAMZA - أحسن الصفقات وأقوى الهمزات",
        siteSlogan: "أحسن الصفقات وأقوى الهمزات بالمغرب",
        brandName: "ALHAMZA",
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
        categoriesHeading: "تسوق حسب الصنف",
        catalogFashion: "أزياء رجالية",
        catalogWomen: "الملابس النسائية",
        catalogJewelry: "المجوهرات",
        catalogAccessories: "الإكسسوارات",
        catJewelry: "مجوهرات",
        catJewelryShort: "مجوهرات",
        catalogElectronics: "الإلكترونيات والتكنولوجيا",
        catalogHome: "المنزل والمطبخ",
        catalogBeauty: "الجمال والعناية الشخصية",
        catalogShoes: "الأحذية والحقائب",
        catalogGaming: "الألعاب والأجهزة",
        backToCategories: "العودة إلى الأصناف",
        searchResults: "نتائج البحث",
        emptyProducts: "لا توجد منتجات في هذا الصنف حالياً.",
        temuOfferPrice: "29 DH",
        topDealsHeading: "أحسن 10 همزات",
        topDealsDescription: "تفرج على أقوى 10 منتجات — ضغط على أي منتج باش تشوف التفاصيل.",
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
        copyright: "© 2026 ALHAMZA - صُمم بكل حب لـ Mehdi Abbad. جميع الحقوق محفوظة.",
        contactWhatsapp: "تواصل معنا عبر واتساب",
        contactUsButton: "تواصل معنا",
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
        priceAtStore: "راجع الثمن الحالي في المتجر",
        contactForPrice: "تواصل معنا لمعرفة الثمن",
        contactForProduct: "للطلب أو الاستفسار على هاد المنتوج، تواصل معنا عبر واتساب.",
        contactViaWhatsapp: "تواصل معنا عبر واتساب"
    },
    fr: {
        siteTitle: "ALHAMZA - Les meilleures offres et promotions",
        siteSlogan: "Les meilleures offres au Maroc",
        brandName: "ALHAMZA",
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
        categoriesHeading: "Acheter par catégorie",
        catalogFashion: "Mode homme",
        catalogWomen: "Mode femme",
        catalogJewelry: "Bijoux",
        catalogAccessories: "Accessoires",
        catJewelry: "Bijoux",
        catJewelryShort: "Bijoux",
        catalogElectronics: "Électronique et technologie",
        catalogHome: "Maison et cuisine",
        catalogBeauty: "Beauté et soins personnels",
        catalogShoes: "Chaussures et sacs",
        catalogGaming: "Jeux et gadgets",
        backToCategories: "Retour aux catégories",
        searchResults: "Résultats de recherche",
        emptyProducts: "Aucun produit n’est encore disponible dans cette catégorie.",
        temuOfferPrice: "29 DH",
        topDealsHeading: "Top 10 des bonnes affaires",
        topDealsDescription: "Découvrez les 10 meilleures offres — sélectionnez un produit pour voir les détails.",
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
        copyright: "© 2026 ALHAMZA - Créé avec soin pour Mehdi Abbad. Tous droits réservés.",
        contactWhatsapp: "Contactez-nous sur WhatsApp",
        contactUsButton: "Contactez-nous",
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
        priceAtStore: "Voir le prix actuel en boutique",
        contactForPrice: "Contactez-nous pour connaître le prix",
        contactForProduct: "Pour commander ou obtenir des informations sur ce produit, contactez-nous sur WhatsApp.",
        contactViaWhatsapp: "Nous contacter sur WhatsApp"
    },
    en: {
        siteTitle: "ALHAMZA - The Best Deals and Shopping Offers",
        siteSlogan: "The best deals and offers in Morocco",
        brandName: "ALHAMZA",
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
        categoriesHeading: "Shop by category",
        catalogFashion: "Mens fashions",
        catalogWomen: "Women's Fashion",
        catalogJewelry: "Jewelry",
        catalogAccessories: "Accessories",
        catJewelry: "Jewelry",
        catJewelryShort: "Jewelry",
        catalogElectronics: "Electronics & Technology",
        catalogHome: "Home & Kitchen",
        catalogBeauty: "Beauty & Personal Care",
        catalogShoes: "Shoes & Bags",
        catalogGaming: "Gaming & Gadgets",
        backToCategories: "Back to categories",
        searchResults: "Search results",
        emptyProducts: "No products are available in this category yet.",
        temuOfferPrice: "29 DH",
        topDealsHeading: "Top 10 Deals",
        topDealsDescription: "Explore the top 10 deals — select a product to see its details.",
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
        copyright: "© 2026 ALHAMZA - Made with care for Mehdi Abbad. All rights reserved.",
        contactWhatsapp: "Contact us on WhatsApp",
        contactUsButton: "Contact us",
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
        priceAtStore: "Check the current price in the store",
        contactForPrice: "Contact us for the price",
        contactForProduct: "To order or ask about this product, contact us on WhatsApp.",
        contactViaWhatsapp: "Contact us on WhatsApp"
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
    15: "Men's vintage-style wallet with a printed design and multiple card and ID slots",
    16: "Vintage Moroccan Taous Plate (Very Rare)",
    19: "22mm soft silicone sport strap for Huawei Watch GT 5 and GT 5 Pro (46mm)",
    20: "2026 smartwatch with HD display, wireless calling, message notifications, multiple sports modes and languages",
    17: "X15 wireless gaming earbuds with digital charging case",
    18: "9-in-1 cable and phone tool kit with USB adapters",
    21: "Goutte Invisible 18k gold earrings",
    22: "Handcrafted illuminated wooden ship decoration",
    23: "Vintage EKO electro-acoustic mandolin",
    24: "360-degree magnetic car phone and GPS holder",
    25: "Men's beard-trimming bib, non-stick and one size fits all",
    26: "Rechargeable heated knee massager",
    27: "Two pairs of silicone moisturizing foot-care socks with aloe vera gel",
    33: "Vintage floral waist chain, an elegant bohemian dress belt for women",
    34: "Women's T-shirt with navy wave and zebra print",
    35: "Women's colorful printed crew-neck sweatshirt",
    36: "Women's short-sleeve koi stream print dress",
    37: "Men's hooded sweatshirt with printed lettering and kangaroo pocket",
    38: "Men's jacquard-knit hooded sweatshirt with half zip and pocket",
    39: "Men's printed hoodie with kangaroo pocket",
    40: "Men's Italian-pattern quick-dry polo shirt"
};

const frenchProductTitles = {
    1: "Écouteurs Bluetooth sport TA210 avec réduction de bruit ENC et quatre microphones",
    2: "Gobelet de voyage isotherme de 50 oz en acier inoxydable, avec poignée et paille",
    3: "Valise de diagnostic bidirectionnelle AUTEL MaxiCOM MK900-TS avec TPMS",
    4: "Voiture télécommandée réversible à quatre roues motrices, avec contrôle gestuel, dérapage, lumières et musique",
    5: "Gilet de sport léger multifonction avec rangement pour bouteille et téléphone",
    6: "Chaussons d’hiver chauds à semelle épaisse, confortables pour la maison",
    7: "Casquette de sport légère, respirante et à séchage rapide",
    8: "Support réglable et respirant pour les doigts et les orteils",
    9: "Kit de 115 tournevis de précision magnétiques pour téléphones, ordinateurs et montres",
    10: "Mini tondeuse portable pour le nez, rechargeable par USB",
    11: "Caméra embarquée à double objectif : 1080p à l’avant et 720p à l’arrière",
    12: "Tondeuse rechargeable 3-en-1 / 4-en-1 pour le nez et les oreilles",
    13: "Sac à dos antivol pour moto convertible en sac bandoulière sécurisé",
    14: "Porte-clés NFC programmable pour Google Avis, Facebook, Instagram et autres liens",
    15: "Portefeuille vintage pour homme avec motif imprimé et plusieurs emplacements pour cartes",
    16: "Ancienne assiette marocaine Taous — pièce rare",
    17: "Écouteurs sans fil X15 pour le gaming et le quotidien, avec boîtier de recharge à écran numérique",
    18: "Kit 9-en-1 de câbles et d’outils pour téléphone avec adaptateurs USB",
    19: "Bracelet sport souple en silicone 22 mm pour Huawei Watch GT 5 et GT 5 Pro (46 mm)",
    20: "Montre connectée 2026 avec écran HD, appels sans fil, notifications et modes sportifs",
    21: "Boucles d’oreilles Goutte Invisible en or 18 carats",
    33: "Chaîne de taille florale vintage, ceinture bohème élégante pour femme",
    34: "T-shirt femme à imprimé vagues et zèbre",
    35: "Sweat-shirt femme imprimé à col rond",
    36: "Robe femme à manches courtes et imprimé de carpes koï",
    37: "Sweat-shirt homme à capuche avec imprimé et poche kangourou",
    38: "Sweat-shirt homme en maille jacquard à capuche, demi-zip et poche",
    39: "Sweat à capuche homme imprimé avec poche kangourou",
    40: "Polo homme à imprimé italien et séchage rapide",
    22: "Maquette décorative de bateau en bois illuminée, fabriquée à la main",
    23: "Mandoline électro-acoustique vintage EKO",
    24: "Support magnétique pour téléphone et GPS, orientable à 360°",
    25: "Bavoir de rasage pour homme, antiadhésif, taille unique",
    26: "Masseur de genou rechargeable avec fonction chauffante",
    27: "Deux paires de chaussettes de soin hydratantes en silicone au gel d’aloe vera"
};

let currentLang = 'ar';
let currentCategory = 'all';
let selectedCatalogCategory = null;
let isAdminAuthenticated = false;
let adminSessionToken = "";
// التشغيل الأولي
document.addEventListener('DOMContentLoaded', () => {
    const productId = new URLSearchParams(window.location.search).get('product');
    if (productId) {
        document.querySelector('.products-section').hidden = true;
        document.querySelector('.top-deals').hidden = true;
        document.getElementById('categoryDescBox').hidden = true;
        document.getElementById('productDetailView').hidden = false;
        document.querySelector('#productDetailView .product-detail-back span').textContent =
            translations[currentLang].detailBack;
    }

    const savedLanguage = getSavedLanguage();
    if (savedLanguage && translations[savedLanguage]) setLanguage(savedLanguage);
    renderProducts(getVisibleProducts());
    renderTopDeals();

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

function getCatalogCategoryProducts(categoryKey) {
    return getAllProducts().filter(product => {
        switch (categoryKey) {
            case 'fashion':
                return product.category === 'fashion' && !product.catalogCategory;
            case 'jewelry':
                return product.category === 'jewelry' && !product.catalogCategory;
            case 'accessories':
            case 'beauty':
            case 'shoes':
            case 'gaming':
            case 'women':
                return product.catalogCategory === categoryKey || product.catalogCategories?.includes(categoryKey);
            case 'electronics':
                return product.category === 'tech' &&
                    (!product.catalogCategory || product.catalogCategory === categoryKey || product.catalogCategories?.includes(categoryKey));
            case 'home':
                return product.category === 'home' && !product.catalogCategory;
            default:
                return false;
        }
    });
}

function getCurrentCategoryProducts() {
    if (selectedCatalogCategory) {
        return getCatalogCategoryProducts(selectedCatalogCategory);
    }
    if (currentCategory === 'all') return getAllProducts();
    if (['aliexpress', 'amazon', 'jumia', 'alibaba', 'temu', 'riana.ma'].includes(currentCategory)) {
        return getAllProducts().filter(product =>
            product.platform.toLowerCase() === currentCategory
        );
    }
    return getAllProducts().filter(product =>
        product.category === currentCategory &&
        (!product.catalogCategory || (currentCategory === 'tech' && product.catalogCategories?.includes('electronics')))
    );
}

function getVisibleProducts() {
    const query = document.getElementById('searchInput')?.value.trim().toLowerCase() || '';
    const visibleProducts = getCurrentCategoryProducts();
    if (!query) return visibleProducts;
    return visibleProducts.filter(product =>
        getProductTitle(product).toLowerCase().includes(query) ||
        product.platform.toLowerCase().includes(query)
    );
}

function updateProductViewTitle() {
    const title = document.querySelector('#sectionTitle span');
    if (!title) return;
    if (selectedCatalogCategory) {
        const categoryTranslationKey = {
            fashion: 'catalogFashion',
            women: 'catalogWomen',
            jewelry: 'catalogJewelry',
            accessories: 'catalogAccessories',
            electronics: 'catalogElectronics',
            home: 'catalogHome',
            beauty: 'catalogBeauty',
            shoes: 'catalogShoes',
            gaming: 'catalogGaming'
        }[selectedCatalogCategory];
        title.textContent = translations[currentLang][categoryTranslationKey];
    } else if (document.getElementById('searchInput').value.trim()) {
        title.textContent = translations[currentLang].searchResults;
    } else if (currentCategory !== 'all') {
        const description = (localizedCategoryDescriptions[currentLang] || categoryDescriptions)[currentCategory];
        title.textContent = description?.title || translations[currentLang].allDeals;
    } else {
        title.textContent = translations[currentLang].categoriesHeading;
    }
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
    if (currentLang === 'fr') {
        return product.titleFr || frenchProductTitles[product.id] || product.title;
    }
    return product.title;
}

function getProductPrice(product) {
    if (product.contactOnly) {
        return translations[currentLang].contactForPrice;
    }
    return product.priceVerified === false
        ? translations[currentLang].priceAtStore
        : product.price;
}

function renderTopDeals() {
    const track = document.getElementById('topDealsTrack');
    if (!track) return;

    const deals = [...communityProducts, ...products.slice().reverse()].slice(0, 10);
    const cards = deals.map((product, index) => {
        const title = getProductTitle(product);
        const image = product.images?.[0] || product.image;
        const productUrl = getProductPageUrl(product.id);

        return `
            <a class="top-deal-card" href="${escapeHtml(productUrl)}" style="--deal-index:${index}" aria-label="${escapeHtml(title)} — ${escapeHtml(getProductPrice(product))}">
                <span class="top-deal-image">
                    <img src="${escapeHtml(image || '')}" alt="" loading="${index < 4 ? 'eager' : 'lazy'}">
                    <span class="top-deal-rank">${String(index + 1).padStart(2, '0')}</span>
                </span>
                <span class="top-deal-info">
                    <strong>${escapeHtml(title)}</strong>
                    <span class="top-deal-price">${escapeHtml(getProductPrice(product))}</span>
                </span>
                <i class="ri-arrow-left-line top-deal-arrow" aria-hidden="true"></i>
            </a>
        `;
    }).join('');
    const shouldAnimate = deals.length > 1
        && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duplicateSet = shouldAnimate
        ? `<div class="top-deals-set" aria-hidden="true" inert>${cards}</div>`
        : '';
    track.innerHTML = `<div class="top-deals-set">${cards}</div>${duplicateSet}`;
    track.classList.toggle('is-animated', shouldAnimate);
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
    renderProducts(getVisibleProducts(), Boolean(selectedCatalogCategory));
    renderTopDeals();
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
        ? (product.descriptionEn || englishProductTitles[product.id] || product.description || title)
        : currentLang === 'fr'
            ? (product.descriptionFr || frenchProductTitles[product.id] || product.description || title)
            : (product.description || product.title);
    const productImages = product.images || [product.image];
    const contactOnly = product.contactOnly === true;
    const whatsappOrder = contactOnly || product.platform === 'ALHAMZA';
    container.innerHTML = `
        <article class="product-detail-card">
            <div class="product-detail-gallery">
                <div class="product-detail-image-wrap">
                    <img class="product-detail-image" src="${escapeHtml(product.image)}" alt="${escapeHtml(title)}">
                    ${product.video ? `<video class="product-detail-video" src="${escapeHtml(product.video)}" controls playsinline preload="metadata" poster="${escapeHtml(product.image)}" hidden></video>` : ''}
                </div>
                ${productImages.length > 1 || product.video ? `
                    <div class="product-detail-thumbnails" aria-label="${escapeHtml(title)}">
                        ${product.video ? `
                            <button class="product-detail-thumbnail product-detail-video-thumbnail" type="button" data-video="true" aria-label="${escapeHtml(title)} video">
                                <img src="${escapeHtml(product.image)}" alt="">
                                <i class="ri-play-fill" aria-hidden="true"></i>
                            </button>
                        ` : ''}
                        ${productImages.map((image, index) => `
                            <button class="product-detail-thumbnail${index === 0 && !product.video ? ' active' : ''}" type="button" data-image="${escapeHtml(image)}" aria-label="${escapeHtml(title)} ${index + 1}">
                                <img src="${escapeHtml(image)}" alt="">
                            </button>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="product-detail-content">
                <span class="product-detail-badge">${escapeHtml(product.platform)}</span>
                <h1>${escapeHtml(title)}</h1>
                <p class="product-detail-description">${escapeHtml(description)}</p>
                <div class="price-box product-detail-price">
                    ${product.oldPrice ? `<span class="old-price">${escapeHtml(product.oldPrice)}</span>` : ''}
                    <span class="new-price">${escapeHtml(getProductPrice(product))}</span>
                    ${product.freeDelivery ? `<span class="free-delivery-note">${escapeHtml(translations[currentLang].freeDelivery)}</span>` : ''}
                    ${contactOnly || product.showFirstTimeOffer === false ? '' : `<span class="first-time-offer">${escapeHtml(translations[currentLang].firstTimeOffer)}</span>`}
                </div>
                <div class="product-detail-actions">
                    <a class="product-detail-buy${whatsappOrder ? ' product-detail-contact' : ''}" href="${escapeHtml(contactOnly ? getContactProductUrl(product) : product.affLink)}" target="_blank" rel="noopener noreferrer">
                        <i class="${whatsappOrder ? 'ri-whatsapp-line' : 'ri-shopping-bag-line'}" aria-hidden="true"></i>
                        ${escapeHtml(translations[currentLang][whatsappOrder ? 'contactViaWhatsapp' : 'checkoutAtStore'])}
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
    container.querySelectorAll('.product-detail-thumbnail').forEach(button => {
        button.addEventListener('click', () => {
            const image = container.querySelector('.product-detail-image');
            const video = container.querySelector('.product-detail-video');
            const showVideo = button.dataset.video === 'true';
            if (video) {
                video.hidden = !showVideo;
                if (!showVideo) video.pause();
            }
            image.hidden = showVideo;
            if (!showVideo) image.src = button.dataset.image;
            container.querySelectorAll('.product-detail-thumbnail').forEach(thumbnail => {
                thumbnail.classList.toggle('active', thumbnail === button);
            });
        });
    });
    container.querySelector('.product-detail-share').addEventListener('click', () => {
        if (contactOnly) {
            window.open(getContactProductUrl(product), '_blank', 'noopener,noreferrer');
        } else {
            shareToWhatsApp(product);
        }
    });
    container.querySelector('.product-detail-share-snapchat').addEventListener('click', () => {
        shareProductWithApps(product, container.querySelector('.product-share-feedback'));
    });
    container.querySelector('.product-detail-copy-link').addEventListener('click', () => {
        copyProductLink(product, container.querySelector('.product-share-feedback'));
    });
}

// عرض المنتجات
function renderProducts(items, directDealLinks = false) {
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
                        ${product.freeDelivery ? `<span class="free-delivery-note">${escapeHtml(translations[currentLang].freeDelivery)}</span>` : ''}
                        ${product.showWellWishes ? `<span class="product-well-wishes">${escapeHtml(translations[currentLang].productWellWishes)}</span>` : ''}
                        ${product.contactOnly || product.showFirstTimeOffer === false ? '' : `<span class="first-time-offer">${escapeHtml(translations[currentLang].firstTimeOffer)}</span>`}
                    </div>
                    <div class="product-actions">
                        ${directDealLinks
                            ? `<a href="${escapeHtml(product.contactOnly ? getContactProductUrl(product) : (product.affLink || `?product=${encodeURIComponent(product.id)}`))}" class="affiliate-btn" ${product.contactOnly || product.affLink ? 'target="_blank" rel="noopener noreferrer"' : ''}>${escapeHtml(translations[currentLang].viewDeal)}</a>`
                            : `<a href="?product=${encodeURIComponent(product.id)}" class="affiliate-btn">${escapeHtml(translations[currentLang].viewDetails)}</a>`}
                        <button class="whatsapp-share-btn" type="button" title="${escapeHtml(translations[currentLang].whatsappShare)}" aria-label="${escapeHtml(translations[currentLang].whatsappShare)}">
                            <i class="ri-whatsapp-line"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        card.querySelector('.whatsapp-share-btn').addEventListener('click', () => {
            if (product.contactOnly) {
                window.open(getContactProductUrl(product), '_blank', 'noopener,noreferrer');
            } else {
                shareToWhatsApp(product);
            }
        });
        grid.appendChild(card);
    });
}

function openCatalogCategory(categoryKey) {
    selectedCatalogCategory = categoryKey;
    currentCategory = 'all';
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryLanding').hidden = true;
    document.getElementById('categoryProductsPanel').hidden = false;
    document.getElementById('categoryDescBox').style.display = 'none';
    document.querySelectorAll('.cat-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.category === 'all');
    });
    updateProductViewTitle();
    renderProducts(getVisibleProducts(), true);
}

function returnToCategories() {
    selectedCatalogCategory = null;
    currentCategory = 'all';
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryLanding').hidden = false;
    document.getElementById('categoryProductsPanel').hidden = true;
    document.getElementById('categoryDescBox').style.display = 'none';
    document.querySelectorAll('.cat-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.category === 'all');
    });
}

// Keep the existing navigation filters while showing the category landing by default.
function filterCategory(cat, element) {
    currentCategory = cat;
    selectedCatalogCategory = null;
    document.querySelectorAll('.cat-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.category === cat);
    });
    if (element && element.classList && !element.classList.contains('cat-chip')) {
        element.classList.add('active');
    }

    const descBox = document.getElementById('categoryDescBox');
    const titleEl = document.getElementById('catDescTitle');
    const textEl = document.getElementById('catDescText');
    const descriptions = localizedCategoryDescriptions[currentLang] || categoryDescriptions;

    if (cat !== 'all' && descriptions[cat]) {
        descBox.style.display = 'block';
        titleEl.innerHTML = `<i class="ri-information-fill"></i> ${escapeHtml(descriptions[cat].title)}`;
        textEl.innerText = descriptions[cat].desc;
    } else {
        descBox.style.display = 'none';
    }

    const hasSearch = document.getElementById('searchInput').value.trim().length > 0;
    const showLanding = cat === 'all' && !hasSearch;
    document.getElementById('categoryLanding').hidden = !showLanding;
    document.getElementById('categoryProductsPanel').hidden = showLanding;
    updateProductViewTitle();
    if (!showLanding) renderProducts(getVisibleProducts());
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
    renderProducts(getVisibleProducts(), Boolean(selectedCatalogCategory));
    renderTopDeals();
    updateProductViewTitle();
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
    const query = document.getElementById('searchInput').value.trim();
    if (!query && !selectedCatalogCategory && currentCategory === 'all') {
        document.getElementById('categoryLanding').hidden = false;
        document.getElementById('categoryProductsPanel').hidden = true;
        updateProductViewTitle();
        return;
    }
    document.getElementById('categoryLanding').hidden = true;
    document.getElementById('categoryProductsPanel').hidden = false;
    updateProductViewTitle();
    renderProducts(getVisibleProducts(), Boolean(selectedCatalogCategory));
}

function sortProducts() {
    const sortBy = document.getElementById('sortSelect').value;
    let sorted = getVisibleProducts();

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
    renderProducts(sorted, Boolean(selectedCatalogCategory));
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
        ? "Hi, I found this deal on ALHAMZA:"
        : currentLang === 'fr'
            ? "Bonjour, j’ai trouvé cette offre sur ALHAMZA :"
            : "سلام، عجبني هاد العرض ف موقع ALHAMZA:";
    const title = getProductTitle(product);
    const priceLabel = currentLang === 'en' ? "Price" : currentLang === 'fr' ? "Prix" : "الثمن";
    const linkLabel = currentLang === 'en' ? "Link" : currentLang === 'fr' ? "Lien" : "الرابط";
    const text = `${greeting}\n\n*${title}*\n${priceLabel}: *${getProductPrice(product)}*\n${linkLabel}: ${link}`;
    window.open(`https://wa.me/${siteConfig.cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
}

function getContactProductUrl(product) {
    const message = currentLang === 'en'
        ? `Hi, I'm interested in this product: ${getProductTitle(product)}. Please share the price and details.`
        : currentLang === 'fr'
            ? `Bonjour, je suis intéressé(e) par ce produit : ${getProductTitle(product)}. Merci de m’indiquer le prix et les détails.`
            : `سلام، بغيت نسول على ${getProductTitle(product)}. عافاك عطيني الثمن والتفاصيل.`;
    return `https://wa.me/${siteConfig.cleanPhone}?text=${encodeURIComponent(message)}`;
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

    appendAiMessage(chatBox, 'user', query);
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

        appendAiMessage(chatBox, 'bot', reply);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
}

function appendAiMessage(chatBox, type, message) {
    const element = document.createElement('div');
    element.className = `ai-msg ${type}`;
    element.textContent = message;
    chatBox.appendChild(element);
}
