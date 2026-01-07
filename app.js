(() => {
  const SIDE_SECTIONS = ["Home", "Downloads", "Mods", "Scripts", "Wiki", "API (Lua)"];

  const FEATURES = [
    "Ease of Use",
    "Clean Code",
    "Easy to use for people from the old psych engine",
    "New Features",
    "More Freedom",
    "More Support",
    "Originallity",
  ];

  const FEATURE_COPY = {
    "Ease of Use": {
      kicker: "No friction",
      blurb:
        "You shouldn’t need a tutorial marathon to start charting. ALE PSYCH stays out of your way and lets you build.",
    },
    "Clean Code": {
      kicker: "Actually readable",
      blurb:
        "Projects don’t turn into spaghetti. It’s structured so you can come back later and still understand everything.",
    },
    "Easy to use for people from the old psych engine": {
      kicker: "Familiar, not copied",
      blurb:
        "If you’ve modded before, you’ll recognize the flow — but it still feels fresh and fun, not like a rebrand.",
    },
    "New Features": {
      kicker: "More toys",
      blurb:
        "Quality-of-life stuff you want is built in, so you spend more time making cool scenes and less time patching tools.",
    },
    "More Freedom": {
      kicker: "Do it your way",
      blurb: "Script it, swap it, bend it. ALE PSYCH is made to be customized without fighting the engine.",
    },
    "More Support": {
      kicker: "Not a dead end",
      blurb:
        "Clear direction, cleaner docs, and a community vibe that makes it easier to get unstuck and keep moving.",
    },
    "Originallity": {
      kicker: "Own identity",
      blurb:
        "It’s not an upgrade of something else. It has its own look, its own rules, and its own personality.",
    },
  };

  const SHOWCASE = [
    // Engine banner exists on hero; preview carousel excludes it
    {
      title: "Ingame console",
      desc: "Debug faster with an in-game console overlay.",
      src: "https://ale-psych-crew.github.io/ALE-Psych-Website/assets/images/features/feature4.png",
    },
    {
      title: "Scripted menus and submenus",
      desc: "Flexible UI flow: script your menus without pain.",
      src: "https://ale-psych-crew.github.io/ALE-Psych-Website/assets/images/features/feature1.png",
    },
    {
      title: "Unique Mod Support and Ease of Use",
      desc: "Better structure so projects stay organized as they grow.",
      src: "https://ale-psych-crew.github.io/ALE-Psych-Website/assets/images/features/feature3.png",
    },
    {
      title: "Community Driven",
      desc: "Built with feedback and room to evolve.",
      src: "https://ale-psych-crew.github.io/ALE-Psych-Website/assets/images/features/feature6.png",
    },
  ];

  // Year
  const yearSpan = document.getElementById("yearSpan");
  if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());

  // Sidebar
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
    sidebarNav.innerHTML = SIDE_SECTIONS.map(
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
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setSidebarOpen(false);
  });

  // Why carousel (auto-cycle)
  const whySlides = FEATURES.map((t) => ({ title: t, ...FEATURE_COPY[t] }));
  let whyIdx = 0;

  const whyKicker = document.getElementById("whyKicker");
  const whyTitle = document.getElementById("whyTitle");
  const whyText = document.getElementById("whyText");
  const whyContent = document.getElementById("whyContent");
  const whyDots = document.getElementById("whyDots");
  const whyPrev = document.getElementById("whyPrev");
  const whyNext = document.getElementById("whyNext");

  const renderWhyDots = () => {
    if (!whyDots) return;
    whyDots.innerHTML = whySlides
      .map(
        (_, i) =>
          `<button class="dot-btn ${i === whyIdx ? "active" : ""}" type="button" aria-label="Show item ${i + 1}" data-i="${i}"></button>`
      )
      .join("");
    [...whyDots.querySelectorAll("button")].forEach((b) => {
      b.addEventListener("click", () => setWhyIndex(Number(b.getAttribute("data-i"))));
    });
  };

  const setWhyIndex = (next) => {
    if (!whyKicker || !whyTitle || !whyText) return;
    whyIdx = ((next % whySlides.length) + whySlides.length) % whySlides.length;
    const s = whySlides[whyIdx];

    if (whyContent) {
      whyContent.classList.remove("fade");
      void whyContent.offsetWidth; // force reflow
      whyContent.classList.add("fade");
    }

    whyKicker.textContent = s.kicker;
    whyTitle.textContent = s.title;
    whyText.textContent = s.blurb;
    renderWhyDots();
  };

  if (whyPrev) whyPrev.addEventListener("click", () => setWhyIndex(whyIdx - 1));
  if (whyNext) whyNext.addEventListener("click", () => setWhyIndex(whyIdx + 1));
  renderWhyDots();
  setWhyIndex(0);

  let whyTimer = window.setInterval(() => setWhyIndex(whyIdx + 1), 5200);

  // Preview carousel
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
    prevChips.innerHTML = SHOWCASE.map((s, i) => {
      const on = i === prevIdx;
      return `<button class="chip ${on ? "active" : ""}" type="button" data-i="${i}">${escapeHtml(s.title)}</button>`;
    }).join("");

    [...prevChips.querySelectorAll("button")].forEach((b) => {
      b.addEventListener("click", () => setPrevIndex(Number(b.getAttribute("data-i"))));
    });
  };

  const setPrevIndex = (next) => {
    prevIdx = ((next % SHOWCASE.length) + SHOWCASE.length) % SHOWCASE.length;
    const s = SHOWCASE[prevIdx];

    if (prevImg) {
      prevImg.classList.add("swap");
      window.setTimeout(() => {
        prevImg.src = s.src;
        prevImg.alt = s.title;
        prevImg.classList.remove("swap");
      }, 120);
    }
    if (prevTitle) prevTitle.textContent = s.title;
    if (prevDesc) prevDesc.textContent = s.desc;
    if (prevCount) prevCount.textContent = `${prevIdx + 1} / ${SHOWCASE.length}`;
    renderChips();
  };

  if (prevPrev) prevPrev.addEventListener("click", () => setPrevIndex(prevIdx - 1));
  if (prevNext) prevNext.addEventListener("click", () => setPrevIndex(prevIdx + 1));
  renderChips();
  setPrevIndex(0);

  // Tiny util
  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();

