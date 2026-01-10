import { NAV_SECTIONS, WHY_SLIDES, SHOWCASE } from "./data.js";

const AUTO_INTERVAL_MS = 5200;
const PREVIEW_INTERVAL_MS = 6200;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const { pathname } = window.location;
const isRootIndex = !pathname.includes("/site/") && (pathname === "/" || pathname.endsWith("/index.html"));
const isModsPage = pathname.includes("/site/mods/");
const siteRoot = isRootIndex ? "site" : isModsPage ? ".." : ".";
const assetRoot = siteRoot === "." ? "./assets" : `${siteRoot}/assets`;
const resolveHref = (href) => {
  if (href.startsWith("/") || href.startsWith("http")) return href;
  return siteRoot === "." ? `./${href}` : `${siteRoot}/${href}`;
};
const resolveAsset = (path) => `${assetRoot}/${path}`;

const yearSpan = document.getElementById("yearSpan");
if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const openSidebarBtn = document.getElementById("openSidebarBtn");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const sidebarNav = document.getElementById("sidebarNav");
let sidebarCloseTimer = null;
const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

const setSidebarOpen = (open) => {
  if (!sidebar || !overlay) return;
  if (open) {
    if (sidebarCloseTimer) {
      window.clearTimeout(sidebarCloseTimer);
      sidebarCloseTimer = null;
    }
    sidebar.hidden = false;
    overlay.hidden = false;
    requestAnimationFrame(() => {
      sidebar.classList.add("open");
      overlay.classList.add("visible");
    });
    document.body.style.overflow = "hidden";
    const scrollbarWidth = getScrollbarWidth();
    document.body.style.paddingRight = scrollbarWidth ? `${scrollbarWidth}px` : "";
    return;
  }

  sidebar.classList.remove("open");
  overlay.classList.remove("visible");
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
  sidebarCloseTimer = window.setTimeout(() => {
    sidebar.hidden = true;
    overlay.hidden = true;
  }, 220);
};

if (sidebarNav) {
  sidebarNav.innerHTML = NAV_SECTIONS.map(
    ({ label, href }) => `
        <a class="nav-item" href="${encodeURI(resolveHref(href))}">
          <span>${escapeHtml(label)}</span>
          <img src="${resolveAsset("svgs/arrow-right.svg")}" alt="" aria-hidden="true" />
        </a>
      `
  ).join("");
  [...sidebarNav.querySelectorAll("a")].forEach((link) => {
    link.addEventListener("click", () => setSidebarOpen(false));
  });
}

if (openSidebarBtn) openSidebarBtn.addEventListener("click", () => setSidebarOpen(true));
if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", () => setSidebarOpen(false));
if (overlay) overlay.addEventListener("click", () => setSidebarOpen(false));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setSidebarOpen(false);
});

let whyIdx = 0;
let whyTimer = null;

const whyTitle = document.getElementById("whyTitle");
const whyText = document.getElementById("whyText");
const whyContent = document.getElementById("whyContent");
const whyDots = document.getElementById("whyDots");
const whyPrev = document.getElementById("whyPrev");
const whyNext = document.getElementById("whyNext");

const renderWhyDots = () => {
  if (!whyDots) return;
  whyDots.innerHTML = WHY_SLIDES
    .map(
      (_, i) =>
        `<button class="dot-btn ${i === whyIdx ? "active" : ""}" type="button" aria-label="Show item ${i + 1}" data-i="${i}"></button>`
    )
    .join("");
  [...whyDots.querySelectorAll("button")].forEach((button) => {
    button.addEventListener("click", () => {
      setWhyIndex(Number(button.getAttribute("data-i")));
      startWhyTimer();
    });
  });
};

const setWhyIndex = (next) => {
  if (!whyTitle || !whyText) return;
  whyIdx = ((next % WHY_SLIDES.length) + WHY_SLIDES.length) % WHY_SLIDES.length;
  const slide = WHY_SLIDES[whyIdx];

  if (whyContent) {
    whyContent.classList.remove("fade");
    void whyContent.offsetWidth;
    whyContent.classList.add("fade");
  }

  whyTitle.textContent = slide.title;
  whyText.textContent = slide.blurb;
  renderWhyDots();
};

const startWhyTimer = () => {
  if (prefersReducedMotion.matches) return;
  if (whyTimer) window.clearInterval(whyTimer);
  whyTimer = window.setInterval(() => setWhyIndex(whyIdx + 1), AUTO_INTERVAL_MS);
};

const stopWhyTimer = () => {
  if (!whyTimer) return;
  window.clearInterval(whyTimer);
  whyTimer = null;
};

if (whyPrev)
  whyPrev.addEventListener("click", () => {
    setWhyIndex(whyIdx - 1);
    startWhyTimer();
  });
if (whyNext)
  whyNext.addEventListener("click", () => {
    setWhyIndex(whyIdx + 1);
    startWhyTimer();
  });
renderWhyDots();
setWhyIndex(0);
startWhyTimer();

const whyCard = document.getElementById("whyCard");
if (whyCard) {
  whyCard.addEventListener("pointerenter", stopWhyTimer);
  whyCard.addEventListener("pointerleave", startWhyTimer);
}

let prevIdx = 0;
let prevTimer = null;
let prevSwapTimeout = null;
const prevImg = document.getElementById("prevImg");
const prevTitle = document.getElementById("prevTitle");
const prevDesc = document.getElementById("prevDesc");
const prevCount = document.getElementById("prevCount");
const prevChips = document.getElementById("prevChips");
const prevPrev = document.getElementById("prevPrev");
const prevNext = document.getElementById("prevNext");
const previewCard = document.getElementById("previewCard");

const renderChips = () => {
  if (!prevChips) return;
  prevChips.innerHTML = SHOWCASE.map((item, i) => {
    const isActive = i === prevIdx;
    return `<button class="chip ${isActive ? "active" : ""}" type="button" data-i="${i}">${escapeHtml(item.title)}</button>`;
  }).join("");

  [...prevChips.querySelectorAll("button")].forEach((button) => {
    button.addEventListener("click", () => {
      setPrevIndex(Number(button.getAttribute("data-i")));
      startPrevTimer();
    });
  });
};

const setPrevIndex = (next) => {
  prevIdx = ((next % SHOWCASE.length) + SHOWCASE.length) % SHOWCASE.length;
  const slide = SHOWCASE[prevIdx];

  if (prevImg) {
    prevImg.classList.add("swap");
    if (prevSwapTimeout) window.clearTimeout(prevSwapTimeout);
    prevSwapTimeout = window.setTimeout(() => {
      prevImg.src = resolveAsset(slide.src);
      prevImg.alt = slide.title;
      prevImg.classList.remove("swap");
    }, 120);
  }
  if (prevTitle) prevTitle.textContent = slide.title;
  if (prevDesc) prevDesc.textContent = slide.desc;
  if (prevCount) prevCount.textContent = `${prevIdx + 1} / ${SHOWCASE.length}`;
  renderChips();
};

const startPrevTimer = () => {
  if (prefersReducedMotion.matches) return;
  if (prevTimer) window.clearInterval(prevTimer);
  prevTimer = window.setInterval(() => setPrevIndex(prevIdx + 1), PREVIEW_INTERVAL_MS);
};

const stopPrevTimer = () => {
  if (!prevTimer) return;
  window.clearInterval(prevTimer);
  prevTimer = null;
};

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopWhyTimer();
    stopPrevTimer();
    return;
  }
  startWhyTimer();
  startPrevTimer();
});

if (prevPrev)
  prevPrev.addEventListener("click", () => {
    setPrevIndex(prevIdx - 1);
    startPrevTimer();
  });
if (prevNext)
  prevNext.addEventListener("click", () => {
    setPrevIndex(prevIdx + 1);
    startPrevTimer();
  });
renderChips();
setPrevIndex(0);
startPrevTimer();

if (previewCard) {
  previewCard.addEventListener("pointerenter", stopPrevTimer);
  previewCard.addEventListener("pointerleave", startPrevTimer);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
