const jewelryProducts = [
    {
        name: "Gopala Pearl & Diamond Ring",
        category: "rings",
        label: "The heirloom edit",
        image: "https://www.dishisjewels.com/image/cache/catalog/4999-Gopala%20pearl%20gold%20diamond%20ring-01-545x545.jpg",
        alt: "Gopala gold ring with pearl and diamonds",
        url: "https://www.dishisjewels.com/gopala-pearl-gold-diamond-ring"
    },
    {
        name: "Blaise Diamond Pendant",
        category: "necklaces",
        label: "Sculptural light",
        image: "https://www.dishisjewels.com/image/cache/catalog/Blaise%20Diamond%20Pendant1-545x545.jpeg",
        alt: "Blaise diamond pendant",
        url: "https://www.dishisjewels.com/blaise-diamond-pendant"
    },
    {
        name: "Aahna Emerald & Diamond Pendant",
        category: "necklaces",
        label: "A touch of color",
        image: "https://www.dishisjewels.com/image/cache/catalog/74-545x545.jpg",
        alt: "Aahna gold pendant with diamond and synthetic emerald",
        url: "https://www.dishisjewels.com/aahna-gold-and-diamond-pendant"
    },
    {
        name: "Bhawana Garnet & Diamond Pendant",
        category: "necklaces",
        label: "Modern heirloom",
        image: "https://www.dishisjewels.com/image/cache/catalog/sophia-9-545x545.jpg",
        alt: "Bhawana gold pendant with diamonds and garnet",
        url: "https://www.dishisjewels.com/bhawana-gold-and-diamond-pendant"
    }
];

const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const filterButtons = [...document.querySelectorAll("[data-filter]")];

function createProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.category = product.category;

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image-wrap";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.alt;
    image.loading = "lazy";
    imageWrap.append(image);

    const label = document.createElement("span");
    label.className = "product-label";
    label.textContent = product.label;
    imageWrap.append(label);
    card.append(imageWrap);

    const info = document.createElement("div");
    info.className = "product-info";

    const type = document.createElement("p");
    type.className = "product-type";
    type.textContent = product.category;
    info.append(type);

    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = product.name;
    info.append(title);

    const rating = document.createElement("div");
    rating.className = "rating-row";
    rating.setAttribute("aria-label", "Customer ratings are not available");

    const stars = document.createElement("span");
    stars.className = "rating-stars";
    stars.setAttribute("aria-hidden", "true");
    stars.textContent = "☆☆☆☆☆";
    rating.append(stars);

    const reviewNote = document.createElement("span");
    reviewNote.textContent = "Reviews coming soon";
    rating.append(reviewNote);
    info.append(rating);

    const priceRow = document.createElement("div");
    priceRow.className = "price-row";
    const currentPrice = document.createElement("span");
    currentPrice.className = "price-current";
    currentPrice.textContent = "Current price";
    const priceNote = document.createElement("span");
    priceNote.className = "price-note";
    priceNote.textContent = "View at store";
    priceRow.append(currentPrice, priceNote);
    info.append(priceRow);

    const customization = document.createElement("form");
    customization.className = "customization";
    customization.addEventListener("submit", event => event.preventDefault());

    const controls = [
        ["Metal", ["Yellow gold", "White gold", "Rose gold"]],
        ["Gold purity", ["14KT", "18KT"]],
        ["Diamond clarity", ["SI", "VS", "VVS"]]
    ];

    controls.forEach(([labelText, values]) => {
        const labelElement = document.createElement("label");
        labelElement.append(document.createTextNode(labelText));
        const select = document.createElement("select");
        select.setAttribute("aria-label", `${labelText} preference for ${product.name}`);
        values.forEach(value => {
            const option = document.createElement("option");
            option.value = value;
            option.textContent = value;
            select.append(option);
        });
        select.addEventListener("change", () => updateSelectionNote(card));
        labelElement.append(select);
        customization.append(labelElement);
    });
    info.append(customization);

    const selectionNote = document.createElement("p");
    selectionNote.className = "selection-note";
    selectionNote.textContent = "Preferences selected here must be confirmed with the retailer.";
    info.append(selectionNote);

    const link = document.createElement("a");
    link.className = "product-link";
    link.href = product.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Check options & price";
    const arrow = document.createElement("i");
    arrow.className = "ri-arrow-right-up-line";
    arrow.setAttribute("aria-hidden", "true");
    link.append(arrow);
    info.append(link);

    card.append(info);
    return card;
}

function updateSelectionNote(card) {
    const values = [...card.querySelectorAll(".customization select")].map(select => select.value);
    const note = card.querySelector(".selection-note");
    note.textContent = `Your preference: ${values.join(" · ")}. Confirm availability with the retailer.`;
}

function renderProducts(category = "all") {
    const visibleProducts = category === "all"
        ? jewelryProducts
        : jewelryProducts.filter(product => product.category === category);
    productGrid.replaceChildren(...visibleProducts.map(createProductCard));
    emptyState.hidden = visibleProducts.length > 0;
    productGrid.hidden = visibleProducts.length === 0;
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item => {
            const isActive = item === button;
            item.classList.toggle("is-active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });
        renderProducts(button.dataset.filter);
    });
});

renderProducts();
