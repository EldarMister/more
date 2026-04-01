const site = "https://www.moreislove.com";

const menuItems = [
  {
    label: "New In",
    children: [
      { label: "Clothing", href: `${site}/collections/clothing` },
      { label: "Jewelry", href: `${site}/collections/jewelry` },
      { label: "Bags", href: `${site}/collections/bags` },
      { label: "Shoes", href: `${site}/collections/shoes` },
      { label: "Accessories", href: `${site}/collections/accessories` }
    ]
  },
  {
    label: "Clothing",
    children: [
      { label: "Skirts", href: `${site}/collections/skirts` },
      { label: "Jackets", href: `${site}/collections/jackets` },
      { label: "Dresses", href: `${site}/collections/dresses` },
      { label: "Coats", href: `${site}/collections/coats` },
      { label: "Tops", href: `${site}/collections/tops` }
    ]
  },
  {
    label: "Jewelry",
    children: [
      { label: "Rings", href: `${site}/collections/rings` },
      { label: "Bracelets", href: `${site}/collections/necklaces-1` },
      { label: "Earrings", href: `${site}/collections/earrings` },
      { label: "Ear Cuffs", href: `${site}/collections/ear-cuffs` },
      { label: "Necklaces", href: `${site}/collections/necklaces` }
    ]
  },
  {
    label: "Bags",
    children: [
      { label: "Shoulder Bags", href: `${site}/collections/shoulder-bags` },
      { label: "Clutches", href: `${site}/collections/clutches` },
      { label: "Top Handle", href: `${site}/collections/top-handle` },
      { label: "Beach Bags", href: `${site}/collections/beach-bags` },
      { label: "Tote Bags", href: `${site}/collections/tote-bags` }
    ]
  },
  {
    label: "Accessories",
    children: [
      { label: "Belts", href: `${site}/collections/belts` },
      { label: "Sunglasses", href: `${site}/collections/sunglasses` },
      { label: "Hats", href: `${site}/collections/hats` },
      { label: "Hair Accessories", href: `${site}/collections/hair-accessories` }
    ]
  },
  { label: "Sale", href: `${site}/collections/sale` },
  { label: "Gift Card", href: `${site}/products/more-is-love-gift-card` },
  {
    label: "Designers",
    children: [
      { label: "0711 Tbilisi", href: `${site}/collections/0711-tbilisi` },
      { label: "Aleksandre Akhalkatsishvili", href: `${site}/collections/vendors?q=Aleksandre+Akhalkatsishvili` },
      { label: "Grand Tour Collection", href: `${site}/collections/vendors?q=GrandTour+Collection` },
      { label: "Moule", href: `${site}/collections/vendors?q=Moule` },
      { label: "Materiel", href: `${site}/collections/vendors?q=Materiel` }
    ]
  }
];

const handbagProducts = [
  {
    vendor: "0711 Tbilisi",
    vendorHref: `${site}/collections/0711-tbilisi`,
    title: "Beige & Khaki Medium Ibiza Beach Bag",
    price: "GEL970",
    href: `${site}/products/beige-khaki-ibiza-beach-bag`,
    primary: "assets/handbag-01-primary.jpg",
    secondary: "assets/handbag-01-secondary.jpg"
  },
  {
    vendor: "0711 Tbilisi",
    vendorHref: `${site}/collections/0711-tbilisi`,
    title: "Terracotta Large Ibiza Bag",
    price: "GEL1,481",
    href: `${site}/products/terracotta-large-ibiza-bag`,
    primary: "assets/handbag-02-primary.jpg",
    secondary: "assets/handbag-02-secondary.jpg"
  },
  {
    vendor: "0711 Tbilisi",
    vendorHref: `${site}/collections/0711-tbilisi`,
    title: "Navy Blue Leslie Shoulder Bag",
    price: "GEL1,072",
    href: `${site}/products/navy-blue-leslie-shoulder-bag`,
    primary: "assets/handbag-03-primary.jpg",
    secondary: "assets/handbag-03-secondary.jpg"
  },
  {
    vendor: "SITUATIONIST",
    vendorHref: `${site}/collections/vendors?q=SITUATIONIST`,
    title: "Black Bag",
    price: "GEL1,355",
    href: `${site}/products/brown-bag`,
    primary: "assets/handbag-04-primary.jpg",
    secondary: "assets/handbag-04-secondary.jpg"
  },
  {
    vendor: "0711 Tbilisi",
    vendorHref: `${site}/collections/0711-tbilisi`,
    title: "Ivory Strawberry Large Bag",
    price: "GEL800",
    href: `${site}/products/11480-ivory-strawberry-large-bag`,
    primary: "assets/handbag-05-primary.jpg",
    secondary: "assets/handbag-05-secondary.jpg"
  },
  {
    vendor: "0711 Tbilisi",
    vendorHref: `${site}/collections/0711-tbilisi`,
    title: "Champagne Thea Neck Bag",
    price: "GEL495",
    href: `${site}/products/13789-champagne-thea-neck-bag`,
    primary: "assets/handbag-06-primary.jpg",
    secondary: "assets/handbag-06-secondary.jpg"
  }
];

const lookProducts = [
  {
    vendor: "Aleksandre Akhalkatsishvili",
    vendorHref: `${site}/collections/vendors?q=Aleksandre%20Akhalkatsishvili`,
    title: "BAR BLAZER",
    price: "GEL2,349",
    href: `${site}/products/bar-blazer`,
    primary: "assets/look-01-primary.jpg",
    secondary: "assets/look-01-secondary.jpg"
  },
  {
    vendor: "Aleksandre Akhalkatsishvili",
    vendorHref: `${site}/collections/vendors?q=Aleksandre%20Akhalkatsishvili`,
    title: "Crystal Embellished Skirt Grey",
    price: "GEL2,698",
    href: `${site}/products/13774-crystal-embellished-skirt-grey`,
    primary: "assets/look-02-primary.jpg",
    secondary: "assets/look-02-secondary.jpg"
  },
  {
    vendor: "0711 Tbilisi",
    vendorHref: `${site}/collections/0711-tbilisi`,
    title: "Champagne Tebea Clutch",
    price: "GEL797",
    href: `${site}/products/11743-champagne-tebea-clutch`,
    primary: "assets/look-03-primary.jpg",
    secondary: "assets/look-03-secondary.jpg"
  }
];

const recentProducts = [
  {
    vendor: "0711 Tbilisi",
    vendorHref: `${site}/collections/0711-tbilisi`,
    title: "Champagne Tiny Nino Tote",
    price: "GEL577",
    href: `${site}/products/13779-champagne-tiny-nino-tote`,
    primary: "assets/recent-01-primary.jpg",
    secondary: ""
  },
  {
    vendor: "0711 Tbilisi",
    vendorHref: `${site}/collections/0711-tbilisi`,
    title: "Ivory & Champagne Medium Jodie Bag",
    price: "GEL962",
    href: `${site}/products/13755-ivory-26-champagne-medium-jodie-bag`,
    primary: "assets/recent-02-primary.jpg",
    secondary: "assets/recent-02-secondary.jpg"
  },
  {
    vendor: "0711 Tbilisi",
    vendorHref: `${site}/collections/0711-tbilisi`,
    title: "White Lizzie Clutch",
    price: "GEL742",
    href: `${site}/products/13735-white-lizzie-clutch`,
    primary: "assets/recent-03-primary.jpg",
    secondary: "assets/recent-03-secondary.jpg"
  },
  {
    vendor: "SITUATIONIST",
    vendorHref: `${site}/collections/vendors?q=SITUATIONIST`,
    title: "Burgundy Jacket",
    price: "GEL3,547",
    href: `${site}/products/burgundy-jacket`,
    primary: "assets/recent-04-primary.jpg",
    secondary: "assets/recent-04-secondary.jpg"
  }
];

const featuredProduct = {
  vendor: "SITUATIONIST",
  vendorHref: `${site}/collections/vendors?q=SITUATIONIST`,
  title: "Burgundy Jacket",
  price: "GEL3,547",
  href: `${site}/products/burgundy-jacket`,
  primary: "assets/section.webp"
};

const panels = Array.from(document.querySelectorAll("[data-panel]"));
const overlay = document.querySelector("[data-overlay]");
const heroSlides = Array.from(document.querySelectorAll("[data-slide]"));
const heroDots = Array.from(document.querySelectorAll("[data-dot]"));
const heroImages = Array.from(document.querySelectorAll("[data-image]"));
const featuredSlides = Array.from(document.querySelectorAll("[data-featured-slide]"));
const featuredDots = Array.from(document.querySelectorAll("[data-featured-dot]"));

let overlayHideTimer = null;
let activeLookIndex = 0;
let activeHeroIndex = 0;
let heroTimer = null;
let handbagPageIndex = 0;
let handbagAnimationTimer = null;
let isHandbagAnimating = false;
const cartState = {
  items: []
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function renderMenuPanel() {
  const menuPanelBody = document.getElementById("menuPanelBody");

  if (!menuPanelBody) {
    return;
  }

  const markup = menuItems
    .map((item, index) => {
      if (!item.children) {
        return `
          <li class="menu-item" style="--menu-item-delay:${index * 55}ms;">
            <a class="menu-link" href="${item.href}">${escapeHtml(item.label)}</a>
          </li>
        `;
      }

      const submenuId = `submenu-${index}`;
      const submenuLinks = item.children
        .map((child) => `<li><a href="${child.href}">${escapeHtml(child.label)}</a></li>`)
        .join("");

      return `
        <li class="menu-item" style="--menu-item-delay:${index * 55}ms;">
          <button class="menu-button" type="button" data-menu-trigger aria-expanded="false" aria-controls="${submenuId}">
            <span>${escapeHtml(item.label)}</span>
            <span>+</span>
          </button>
          <ul class="submenu" id="${submenuId}" hidden>
            ${submenuLinks}
          </ul>
        </li>
      `;
    })
    .join("");

  menuPanelBody.innerHTML = `<ul class="menu-list">${markup}</ul>`;

  menuPanelBody.querySelectorAll("[data-menu-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      const submenu = document.getElementById(button.getAttribute("aria-controls"));

      if (!submenu) {
        return;
      }

      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      button.querySelector("span:last-child").textContent = expanded ? "+" : "-";
      submenu.hidden = expanded;
    });
  });

  menuPanelBody.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", closePanels);
  });
}

function productCardTemplate(product) {
  const secondaryImage = product.secondary
    ? `<img class="product-card__image product-card__image--secondary" src="${product.secondary}" alt="${escapeHtml(product.title)}" loading="lazy">`
    : "";

  return `
    <article class="product-card">
      <div class="product-card__figure">
        <a class="product-card__media" href="${product.href}">
          <img class="product-card__image product-card__image--primary" src="${product.primary}" alt="${escapeHtml(product.title)}">
          ${secondaryImage}
        </a>
        <button
          class="product-card__quick"
          type="button"
          aria-label="Add ${escapeHtml(product.title)} to cart"
          data-quick-add="true"
          data-product-title="${escapeHtml(product.title)}"
          data-product-price="${escapeHtml(product.price)}"
          data-product-href="${escapeHtml(product.href)}"
          data-product-vendor="${escapeHtml(product.vendor)}"
          data-product-vendor-href="${escapeHtml(product.vendorHref)}"
          data-product-image="${escapeHtml(product.primary)}"
        ></button>
      </div>
      <div class="product-card__body">
        <a class="product-card__vendor" href="${product.vendorHref}">${escapeHtml(product.vendor)}</a>
        <a class="product-card__title" href="${product.href}">${escapeHtml(product.title)}</a>
        <p class="product-card__price">${escapeHtml(product.price)}</p>
      </div>
    </article>
  `;
}

function renderProductSections() {
  const recentGrid = document.getElementById("recentGrid");

  if (recentGrid) {
    recentGrid.innerHTML = recentProducts.map(productCardTemplate).join("");
  }
}

function getHandbagPageSize() {
  if (window.innerWidth >= 1000) {
    return 3;
  }

  if (window.innerWidth >= 700) {
    return 2;
  }

  return 1;
}

function isHandbagManualMode() {
  return window.innerWidth < 700;
}

function getHandbagPageCount() {
  if (isHandbagManualMode()) {
    return 1;
  }

  return Math.max(1, Math.ceil(handbagProducts.length / getHandbagPageSize()));
}

function getHandbagPageItems() {
  if (isHandbagManualMode()) {
    return handbagProducts;
  }

  const pageSize = getHandbagPageSize();
  const startIndex = handbagPageIndex * pageSize;
  return handbagProducts.slice(startIndex, startIndex + pageSize);
}

function updateHandbagButtons() {
  const previousButton = document.querySelector('[data-scroll-target="handbagScroller"][data-scroll-dir="-1"]');
  const nextButton = document.querySelector('[data-scroll-target="handbagScroller"][data-scroll-dir="1"]');
  const pageCount = getHandbagPageCount();

  if (previousButton) {
    previousButton.disabled = handbagPageIndex <= 0;
  }

  if (nextButton) {
    nextButton.disabled = handbagPageIndex >= pageCount - 1;
  }
}

function drawHandbagPage() {
  const handbagGrid = document.getElementById("handbagGrid");
  const handbagScroller = document.getElementById("handbagScroller");

  if (!handbagGrid) {
    return;
  }

  handbagGrid.innerHTML = getHandbagPageItems().map(productCardTemplate).join("");

  if (handbagScroller && isHandbagManualMode()) {
    handbagScroller.scrollLeft = 0;
  }

  updateHandbagButtons();
}

function animateHandbagPage(direction) {
  const handbagGrid = document.getElementById("handbagGrid");

  if (!handbagGrid) {
    return;
  }

  isHandbagAnimating = true;
  window.clearTimeout(handbagAnimationTimer);
  handbagGrid.classList.remove(
    "is-transition-out-next",
    "is-transition-out-prev",
    "is-transition-in-next",
    "is-transition-in-prev"
  );

  handbagGrid.classList.add(direction > 0 ? "is-transition-out-next" : "is-transition-out-prev");

  handbagAnimationTimer = window.setTimeout(() => {
    handbagGrid.classList.remove("is-transition-out-next", "is-transition-out-prev");
    drawHandbagPage();
    handbagGrid.classList.add(direction > 0 ? "is-transition-in-next" : "is-transition-in-prev");

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        handbagGrid.classList.remove("is-transition-in-next", "is-transition-in-prev");
      });
    });

    handbagAnimationTimer = window.setTimeout(() => {
      isHandbagAnimating = false;
    }, 240);
  }, 220);
}

function initHandbagSlider() {
  const handbagGrid = document.getElementById("handbagGrid");

  if (!handbagGrid) {
    return;
  }

  const previousButton = document.querySelector('[data-scroll-target="handbagScroller"][data-scroll-dir="-1"]');
  const nextButton = document.querySelector('[data-scroll-target="handbagScroller"][data-scroll-dir="1"]');

  const clampHandbagPageIndex = () => {
    if (isHandbagManualMode()) {
      handbagPageIndex = 0;
      return;
    }

    handbagPageIndex = Math.min(handbagPageIndex, getHandbagPageCount() - 1);
    handbagPageIndex = Math.max(handbagPageIndex, 0);
  };

  if (previousButton) {
    previousButton.addEventListener("click", () => {
      if (isHandbagAnimating || handbagPageIndex <= 0) {
        return;
      }

      handbagPageIndex -= 1;
      animateHandbagPage(-1);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (isHandbagAnimating || handbagPageIndex >= getHandbagPageCount() - 1) {
        return;
      }

      handbagPageIndex += 1;
      animateHandbagPage(1);
    });
  }

  window.addEventListener("resize", () => {
    isHandbagAnimating = false;
    clampHandbagPageIndex();
    drawHandbagPage();
  });

  drawHandbagPage();
}

function updateLookSection(index) {
  activeLookIndex = index;

  const lookCard = document.getElementById("lookCard");
  const lookButton = document.getElementById("lookButton");
  const lookDots = document.getElementById("lookDots");
  const activeProduct = lookProducts[index];

  if (!lookCard || !lookButton || !lookDots || !activeProduct) {
    return;
  }

  lookCard.innerHTML = `<div class="look-card">${productCardTemplate(activeProduct)}</div>`;
  lookButton.href = activeProduct.href;
  lookButton.textContent = "View product";

  lookDots.innerHTML = lookProducts
    .map(
      (_, dotIndex) => `
        <button
          class="page-dots__dot ${dotIndex === index ? "is-active" : ""}"
          type="button"
          data-look-dot="${dotIndex}"
          aria-label="Show look item ${dotIndex + 1}"
        ></button>
      `
    )
    .join("");

  document.querySelectorAll("[data-look-index]").forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
  });

  lookDots.querySelectorAll("[data-look-dot]").forEach((button) => {
    button.addEventListener("click", () => {
      updateLookSection(Number(button.dataset.lookDot));
    });
  });
}

function updateCartUI() {
  const cartLink = document.querySelector('[data-open-panel="cart"]');
  const cartBody = document.querySelector(".panel__body--cart");

  if (cartLink) {
    cartLink.textContent = `Cart (${cartState.items.length})`;
    cartLink.setAttribute("aria-label", `Cart (${cartState.items.length})`);
  }

  if (!cartBody) {
    return;
  }

  if (!cartState.items.length) {
    cartBody.innerHTML = `
      <p class="cart-empty-title">Your bag is empty</p>
      <p class="cart-empty-copy">Use the sections below to browse the featured products from the home page.</p>
    `;
    return;
  }

  const itemsMarkup = cartState.items
    .map((item) => `
      <article class="cart-item">
        <img class="cart-item__image" src="${item.primary}" alt="${escapeHtml(item.title)}">
        <div class="cart-item__meta">
          <a class="cart-item__vendor" href="${item.vendorHref}">${escapeHtml(item.vendor)}</a>
          <a class="cart-item__title" href="${item.href}">${escapeHtml(item.title)}</a>
          <span class="cart-item__price">${escapeHtml(item.price)}</span>
        </div>
      </article>
    `)
    .join("");

  cartBody.innerHTML = `
    <div class="cart-list">${itemsMarkup}</div>
    <div class="cart-summary">
      <span>Items</span>
      <span>${cartState.items.length}</span>
    </div>
  `;
}

function addProductToCart(product) {
  cartState.items.push(product);
  updateCartUI();
}

function setHeroSlide(index, stopTimer = true) {
  activeHeroIndex = index;

  heroSlides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === index;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  heroDots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === index;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-pressed", String(isActive));
  });

  if (stopTimer && heroTimer) {
    window.clearTimeout(heroTimer);
    heroTimer = null;
  }
}

function initHeroSlider() {
  if (heroSlides.length < 2 || heroDots.length < 2) {
    return;
  }

  heroDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      setHeroSlide(index, true);
    });
  });

  heroTimer = window.setTimeout(() => {
    setHeroSlide(1, false);
    heroTimer = null;
  }, 10000);
}

function initHeroImages() {
  heroImages.forEach((image) => {
    const slide = image.closest("[data-slide]");

    if (!slide) {
      return;
    }

    const markLoaded = () => {
      slide.classList.add("is-loaded");
    };

    if (image.complete && image.naturalWidth > 0) {
      markLoaded();
    }

    image.addEventListener("load", markLoaded);
    image.addEventListener("error", () => {
      const fallback = image.dataset.fallbackSrc;

      if (fallback && image.dataset.fallbackApplied !== "true") {
        image.dataset.fallbackApplied = "true";
        image.src = fallback;
        return;
      }

      slide.classList.remove("is-loaded");
    });
  });
}

function initAnnouncementRotation() {
  const messages = Array.from(document.querySelectorAll("[data-announcement-message]"));

  if (messages.length < 2) {
    return;
  }

  let activeIndex = 0;

  window.setInterval(() => {
    messages[activeIndex].classList.remove("is-active");
    activeIndex = (activeIndex + 1) % messages.length;
    messages[activeIndex].classList.add("is-active");
  }, 5000);
}

function showOverlay() {
  if (!overlay) {
    return;
  }

  window.clearTimeout(overlayHideTimer);
  overlay.hidden = false;
  window.requestAnimationFrame(() => {
    overlay.classList.add("is-visible");
  });
}

function hideOverlay() {
  if (!overlay) {
    return;
  }

  overlay.classList.remove("is-visible");
  overlayHideTimer = window.setTimeout(() => {
    const hasOpenPanel = panels.some((panel) => panel.classList.contains("is-open"));

    if (!hasOpenPanel) {
      overlay.hidden = true;
    }
  }, 280);
}

function closePanels() {
  panels.forEach((panel) => {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
  });

  document.querySelectorAll("[data-open-panel]").forEach((trigger) => {
    trigger.setAttribute("aria-expanded", "false");
  });

  document.body.classList.remove("is-locked");
  hideOverlay();
}

function openPanel(panelName) {
  const targetPanel = panels.find((panel) => panel.dataset.panel === panelName);

  if (!targetPanel) {
    return;
  }

  closePanels();
  targetPanel.classList.add("is-open");
  targetPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  showOverlay();

  document.querySelectorAll(`[data-open-panel="${panelName}"]`).forEach((trigger) => {
    trigger.setAttribute("aria-expanded", "true");
  });

  if (panelName === "search") {
    document.getElementById("searchInput")?.focus();
  }
}

function initPanels() {
  document.querySelectorAll("[data-open-panel]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const panelName = trigger.dataset.openPanel;
      const targetPanel = panels.find((panel) => panel.dataset.panel === panelName);

      if (!targetPanel) {
        return;
      }

      if (targetPanel.classList.contains("is-open")) {
        closePanels();
        return;
      }

      openPanel(panelName);
    });
  });

  document.querySelectorAll("[data-close-panel]").forEach((button) => {
    button.addEventListener("click", closePanels);
  });

  overlay?.addEventListener("click", closePanels);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePanels();
    }
  });
}

function initLookControls() {
  updateLookSection(0);

  document.querySelectorAll("[data-look-index]").forEach((button) => {
    button.addEventListener("click", () => {
      updateLookSection(Number(button.dataset.lookIndex));
    });
  });
}

function setFeaturedSlide(index) {
  featuredSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === index);
  });

  featuredDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === index);
  });
}

function initFeaturedGallery() {
  if (!featuredSlides.length || !featuredDots.length) {
    return;
  }

  featuredDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      setFeaturedSlide(index);
    });
  });
}

function initQuantityControls() {
  const quantityInput = document.querySelector(".quantity-picker__input");

  if (!quantityInput) {
    return;
  }

  document.querySelectorAll("[data-quantity-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const step = Number(button.dataset.quantityStep);
      const currentValue = Number(quantityInput.value) || 1;
      const nextValue = Math.max(1, currentValue + step);
      quantityInput.value = String(nextValue);
    });
  });
}

function initSizePicker() {
  document.querySelectorAll("[data-size-option]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-size-option]").forEach((option) => {
        option.classList.remove("is-active");
      });

      button.classList.add("is-active");
    });
  });
}

function initAddToBagButton() {
  const button = document.querySelector("[data-add-to-bag]");

  if (!button) {
    return;
  }

  const defaultText = button.textContent;

  button.addEventListener("click", () => {
    addProductToCart(featuredProduct);
    button.textContent = "Added to cart";
    button.disabled = true;

    window.setTimeout(() => {
      button.textContent = defaultText;
      button.disabled = false;
    }, 1400);
  });
}

function initQuickAddButtons() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-quick-add]");

    if (!button) {
      return;
    }

    addProductToCart({
      vendor: button.dataset.productVendor,
      vendorHref: button.dataset.productVendorHref,
      title: button.dataset.productTitle,
      price: button.dataset.productPrice,
      href: button.dataset.productHref,
      primary: button.dataset.productImage
    });

    button.classList.add("is-added");
    button.disabled = true;

    window.setTimeout(() => {
      button.classList.remove("is-added");
      button.disabled = false;
    }, 700);
  });
}

renderMenuPanel();
renderProductSections();
updateCartUI();
initAnnouncementRotation();
initPanels();
initHeroImages();
initHeroSlider();
initLookControls();
initFeaturedGallery();
initQuantityControls();
initSizePicker();
initAddToBagButton();
initQuickAddButtons();
initHandbagSlider();
