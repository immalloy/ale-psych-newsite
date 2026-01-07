import { NAV_SECTIONS, WHY_SLIDES, SHOWCASE } from "./data.js";

const AUTO_INTERVAL_MS = 5200;

const yearSpan = document.getElementById("yearSpan");
if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const openSidebarBtn = document.getElementById("openSidebarBtn");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const sidebarNav = document.getElementById("sidebarNav");

const setSidebarOpen = (open) => {
  if (!sidebar || !overlay) return;
  sidebar.hidden = !open;
  overlay.hidden = !open;
  sidebar.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
};

if (sidebarNav) {
  sidebarNav.innerHTML = NAV_SECTIONS.map(
    (label) => `
        <button class="nav-item" type="button">
          <span>${escapeHtml(label)}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      `
  ).join("");
}

if (openSidebarBtn) openSidebarBtn.addEventListener("click", () => setSidebarOpen(true));
if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", () => setSidebarOpen(false));
if (overlay) overlay.addEventListener("click", () => setSidebarOpen(false));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setSidebarOpen(false);
});

let whyIdx = 0;
let whyTimer = null;

const whyKicker = document.getElementById("whyKicker");
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
    button.addEventListener("click", () => setWhyIndex(Number(button.getAttribute("data-i"))));
  });
};

const setWhyIndex = (next) => {
  if (!whyKicker || !whyTitle || !whyText) return;
  whyIdx = ((next % WHY_SLIDES.length) + WHY_SLIDES.length) % WHY_SLIDES.length;
  const slide = WHY_SLIDES[whyIdx];

  if (whyContent) {
    whyContent.classList.remove("fade");
    void whyContent.offsetWidth;
    whyContent.classList.add("fade");
  }

  whyKicker.textContent = slide.kicker;
  whyTitle.textContent = slide.title;
  whyText.textContent = slide.blurb;
  renderWhyDots();
};

const startWhyTimer = () => {
  if (whyTimer) window.clearInterval(whyTimer);
  whyTimer = window.setInterval(() => setWhyIndex(whyIdx + 1), AUTO_INTERVAL_MS);
};

const stopWhyTimer = () => {
  if (!whyTimer) return;
  window.clearInterval(whyTimer);
  whyTimer = null;
};

if (whyPrev) whyPrev.addEventListener("click", () => setWhyIndex(whyIdx - 1));
if (whyNext) whyNext.addEventListener("click", () => setWhyIndex(whyIdx + 1));
renderWhyDots();
setWhyIndex(0);
startWhyTimer();

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopWhyTimer();
    return;
  }
  startWhyTimer();
});

let prevIdx = 0;
const prevImg = document.getElementById("prevImg");
const prevTitle = document.getElementById("prevTitle");
const prevDesc = document.getElementById("prevDesc");
const prevCount = document.getElementById("prevCount");
const prevChips = document.getElementById("prevChips");
const prevPrev = document.getElementById("prevPrev");
const prevNext = document.getElementById("prevNext");

const renderChips = () => {
  if (!prevChips) return;
  prevChips.innerHTML = SHOWCASE.map((item, i) => {
    const isActive = i === prevIdx;
    return `<button class="chip ${isActive ? "active" : ""}" type="button" data-i="${i}">${escapeHtml(item.title)}</button>`;
  }).join("");

  [...prevChips.querySelectorAll("button")].forEach((button) => {
    button.addEventListener("click", () => setPrevIndex(Number(button.getAttribute("data-i"))));
  });
};

const setPrevIndex = (next) => {
  prevIdx = ((next % SHOWCASE.length) + SHOWCASE.length) % SHOWCASE.length;
  const slide = SHOWCASE[prevIdx];

  if (prevImg) {
    prevImg.classList.add("swap");
    window.setTimeout(() => {
      prevImg.src = slide.src;
      prevImg.alt = slide.title;
      prevImg.classList.remove("swap");
    }, 120);
  }
  if (prevTitle) prevTitle.textContent = slide.title;
  if (prevDesc) prevDesc.textContent = slide.desc;
  if (prevCount) prevCount.textContent = `${prevIdx + 1} / ${SHOWCASE.length}`;
  renderChips();
};

if (prevPrev) prevPrev.addEventListener("click", () => setPrevIndex(prevIdx - 1));
if (prevNext) prevNext.addEventListener("click", () => setPrevIndex(prevIdx + 1));
renderChips();
setPrevIndex(0);

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
