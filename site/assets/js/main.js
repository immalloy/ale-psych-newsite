import { NAV_SECTIONS, WHY_SLIDES, SHOWCASE } from "./data.js";

const AUTO_INTERVAL_MS = 5200;
const PREVIEW_INTERVAL_MS = 6200;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const LANGUAGE_KEY = "alePsychLanguage";
const SUPPORTED_LANGS = ["es", "en"];

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

const I18N_COPY = {
  en: {
    common: {
      languageLabel: "Language",
      brandSubtitle: "FNF modding engine",
      sidebarTitle: "navigation",
      sidebarSections: "sections",
      footerCredit: "Website by Malloy",
    },
    meta: {
      home: {
        title: "Home",
        description:
          "ALE Psych is a Friday Night Funkin' modding engine that lets you build mods fast without wrestling the source code.",
      },
      downloads: {
        title: "Downloads",
        description: "Get the latest ALE Psych builds for Windows, macOS, Linux, Android, and iOS.",
      },
      mods: {
        title: "Mods",
        description: "Browse mods built with ALE Psych and filter by tags or status.",
      },
      modDetails: {
        title: "Mod Details",
        description: "Explore details, downloads, and status for ALE Psych community mods.",
      },
    },
    home: {
      heroTitle: "Make FNF mods with",
      heroHighlight: "style and ease",
      heroDesc:
        "A Friday Night Funkin' engine designed so you <strong>don't have to wrestle with the source code</strong>: based on <a href=\"https://gamebanana.com/mods/309789\" target=\"_blank\" rel=\"noopener\">Psych</a>, but with its own personality.",
      primaryCta: "Get started",
      secondaryCta: "Documentation",
      sectionWhyTitle: "Why it feels right",
      sectionFeaturesTitle: "Features",
      ctaTitle: "Ready to start?",
      ctaSubtitle: "Start making mods in minutes.",
      ctaPrimary: "Get started",
      ctaSecondary: "Read docs",
    },
    downloads: {
      heroTitle: "Download",
      heroHighlight: "ALE Psych",
      heroDesc:
        "Choose between engine versions.<br>Pick the installer you need and <strong>jump right in</strong>.",
      githubButton: "GitHub Releases",
      sectionTitle: "Choose your platform",
      sectionSubtitle:
        "All downloads in one place. The engine updates frequently, so stay tuned for the latest stable release.",
      cards: {
        windows64: {
          title: "Windows 64-bit",
          desc: "For Windows users. Recommended for most users.",
          button: "Download Windows 64-bit",
        },
        windows32: {
          title: "Windows 32-bit",
          desc:
            "Compatible with older 32-bit machines. (Once <a href=\"https://haxe.org/download/version/5.0.0-preview.1/\" target=\"_blank\" rel=\"noopener\">Haxe 5</a> ships, this won't be available.)",
          button: "Download Windows 32-bit",
        },
        android: {
          title: "Android",
          desc: "APK build.",
          button: "Download Android build",
        },
        ios: {
          title: "iOS",
          desc: "IPA build. (Untested.)",
          button: "Download iOS build",
        },
        macos: {
          title: "macOS",
          desc: "Build for recent Apple hardware.",
          button: "Download macOS build",
        },
        macos64: {
          title: "macOS 64-bit",
          desc: "Build for Intel-based Apple hardware.",
          button: "Download macOS 64-bit",
        },
        linux: {
          title: "Linux",
          desc: "Linux build.",
          button: "Download Linux build",
        },
      },
    },
    mods: {
      heroTitle: "Mods built with",
      heroHighlight: "ALE Psych",
      primaryCta: "Download ALE Psych",
      secondaryCta: "Back to home",
      sectionTitle: "Find your next mod",
      sectionSubtitle: "Search by name and tags",
      searchLabel: "Search mods",
      searchPlaceholder: "Search by title, author, tags, or status...",
      tagsLegend: "Tags",
      emptyState: "No mods match the current filters.",
      viewDetails: "View Details",
      byLabel: "By",
      statusAvailable: "Available",
      statusComing: "Coming Soon",
      comingSoonNote: "Coming Soon - downloads will appear here once available.",
      errorNoId: "No mod id found in the URL.",
      errorNotFound: "Mod not found.",
      backToMods: "Back to mods",
      tagLabels: {
        Featured: "Featured",
        Original: "Original",
        Tool: "Tool",
      },
    },
  },
  es: {
    common: {
      languageLabel: "Idioma",
      brandSubtitle: "Motor de modding de FNF",
      sidebarTitle: "navegación",
      sidebarSections: "secciones",
      footerCredit: "Sitio web por Malloy",
    },
    meta: {
      home: {
        title: "Inicio",
        description:
          "ALE Psych es un motor de modding de Friday Night Funkin' que te permite crear mods rápido sin pelear con el código fuente.",
      },
      downloads: {
        title: "Descargas",
        description: "Obtén las últimas builds de ALE Psych para Windows, macOS, Linux, Android e iOS.",
      },
      mods: {
        title: "Mods",
        description: "Explora mods creados con ALE Psych y filtra por etiquetas o estado.",
      },
      modDetails: {
        title: "Detalles del Mod",
        description: "Revisa detalles, descargas y estado de los mods de la comunidad ALE Psych.",
      },
    },
    home: {
      heroTitle: "Haz Mods para FNF con",
      heroHighlight: "Estilo y Facilidad",
      heroDesc:
        "Un Motor de Friday Night Funkin' Diseñado para <strong>No Lidiar con el Código Fuente</strong>: Basado en <a href=\"https://gamebanana.com/mods/309789\" target=\"_blank\" rel=\"noopener\">Psych</a>, pero con su propia personalidad",
      primaryCta: "Primeros Pasos",
      secondaryCta: "Documentación",
      sectionWhyTitle: "¿Cuál es su Encanto?",
      sectionFeaturesTitle: "Características",
      ctaTitle: "¿Listo para Empezar?",
      ctaSubtitle: "Empieza a hacer Mods en Minutos.",
      ctaPrimary: "Primeros Pasos",
      ctaSecondary: "Documentación",
    },
    downloads: {
      heroTitle: "Descarga",
      heroHighlight: "ALE Psych",
      heroDesc:
        "Elige entre las versiones del Motor.<br>Escoge el instalador que necesites y <strong>empieza de inmediato</strong>.",
      githubButton: "GitHub Releases",
      sectionTitle: "Eljie tu Plataforma",
      sectionSubtitle:
        "Todas las Descargas en una pestaña. El Engine se Actualiza con Frecuencia, mantente al tanto para tener la Última Versión Estable.",
      cards: {
        windows64: {
          title: "Windows 64-bit",
          desc: "Para usuarios de Windows. Recomendado para la mayoría de Usuarios.",
          button: "Descargar Windows 64-bit",
        },
        windows32: {
          title: "Windows 32-bit",
          desc:
            "Compatible para máquinas antiguas de 32-bit. (Una vez <a href=\"https://haxe.org/download/version/5.0.0-preview.1/\" target=\"_blank\" rel=\"noopener\">Haxe 5</a> salga, esto no estará disponible)",
          button: "Descargar Windows 32-bit",
        },
        android: {
          title: "Android",
          desc: "Build en APK.",
          button: "Descargar Android",
        },
        ios: {
          title: "iOS",
          desc: "Build en IPA. (No Testeada)",
          button: "Descargar iOS",
        },
        macos: {
          title: "macOS",
          desc: "Build para Hardware Reciente de Apple.",
          button: "Descargar macOS",
        },
        macos64: {
          title: "macOS 64-bit",
          desc: "Build para Hardware de Intel de Apple.",
          button: "Descargar macOS 64-bit",
        },
        linux: {
          title: "Linux",
          desc: "Build para Linux.",
          button: "Descargar Linux",
        },
      },
    },
    mods: {
      heroTitle: "Mods Construidos con",
      heroHighlight: "ALE Psych",
      primaryCta: "Descarga ALE Psych",
      secondaryCta: "Página Principal",
      sectionTitle: "Encuentra tu Próximo Mod",
      sectionSubtitle: "Busca por Nombre y Etiquetas",
      searchLabel: "Buscar Mods",
      searchPlaceholder: "Buscar por título, autor, etiquetas o estado...",
      tagsLegend: "Etiquetas",
      emptyState: "No hay mods que coincidan con los filtros actuales.",
      viewDetails: "Ver Detalles",
      byLabel: "Por",
      statusAvailable: "Disponible",
      statusComing: "Próximamente",
      comingSoonNote: "Próximamente - las descargas aparecerán aquí cuando estén disponibles.",
      errorNoId: "No se encontró el id del mod en la URL.",
      errorNotFound: "Mod no encontrado.",
      backToMods: "Volver a mods",
      tagLabels: {
        Featured: "Destacados",
        Original: "Original",
        Tool: "Herramienta",
      },
    },
  },
};

const getLangCopy = (lang) => I18N_COPY[lang] ?? I18N_COPY.en;
const getLangData = (dataset, lang) => dataset[lang] ?? dataset.en;

const languageSelect = document.getElementById("language-select");
const languageLabel = document.querySelector("[data-language-label]");
const languageListeners = new Set();
let activeLanguage = "en";

const getTranslation = (key, lang = activeLanguage) => {
  const copy = getLangCopy(lang);
  return key.split(".").reduce((acc, segment) => (acc ? acc[segment] : undefined), copy);
};

const getTagLabel = (tag, lang = activeLanguage) => {
  const labels = getTranslation("mods.tagLabels", lang);
  return labels?.[tag] ?? tag;
};

const applyTranslations = (lang) => {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = getTranslation(el.dataset.i18n, lang);
    if (text) el.textContent = text;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const html = getTranslation(el.dataset.i18nHtml, lang);
    if (html) el.innerHTML = html;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const rules = el.dataset.i18nAttr.split(";").map((rule) => rule.trim()).filter(Boolean);
    rules.forEach((rule) => {
      const [attr, key] = rule.split(":").map((item) => item.trim());
      const value = getTranslation(key, lang);
      if (value) el.setAttribute(attr, value);
    });
  });
};

const notifyLanguageChange = () => {
  languageListeners.forEach((callback) => callback(activeLanguage));
};

const setLanguage = (lang, { persist = true, updateUrl = true } = {}) => {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  activeLanguage = lang;
  document.documentElement.lang = lang;
  if (languageSelect) languageSelect.value = lang;
  if (languageLabel) languageLabel.textContent = getTranslation("common.languageLabel", lang);
  applyTranslations(lang);
  updateSidebarNav(lang);
  window.ALEPsychMeta?.refresh();
  if (persist) localStorage.setItem(LANGUAGE_KEY, lang);
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  }
  notifyLanguageChange();
};

window.ALEPsychI18n = {
  getText: (key, lang) => getTranslation(key, lang),
  getTagLabel: (tag, lang) => getTagLabel(tag, lang),
  getLanguage: () => activeLanguage,
  onChange: (callback) => {
    languageListeners.add(callback);
  },
};

const resolveInitialLanguage = () => {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("lang");
  if (SUPPORTED_LANGS.includes(fromQuery)) return fromQuery;
  const stored = localStorage.getItem(LANGUAGE_KEY);
  if (SUPPORTED_LANGS.includes(stored)) return stored;
  if (navigator.language?.toLowerCase().startsWith("es")) return "es";
  return "en";
};

const yearSpan = document.getElementById("yearSpan");
if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const openSidebarBtn = document.getElementById("openSidebarBtn");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const sidebarNav = document.getElementById("sidebarNav");
let sidebarCloseTimer = null;
const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

const updateSidebarNav = (lang) => {
  if (!sidebarNav) return;
  const navItems = getLangData(NAV_SECTIONS, lang);
  sidebarNav.innerHTML = navItems
    .map(
      ({ label, href }) => `
        <a class="nav-item" href="${encodeURI(resolveHref(href))}">
          <span>${escapeHtml(label)}</span>
          <img src="${resolveAsset("svgs/arrow-right.svg")}" alt="" aria-hidden="true" />
        </a>
      `
    )
    .join("");
  [...sidebarNav.querySelectorAll("a")].forEach((link) => {
    link.addEventListener("click", () => setSidebarOpen(false));
  });
};

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

if (openSidebarBtn) openSidebarBtn.addEventListener("click", () => setSidebarOpen(true));
if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", () => setSidebarOpen(false));
if (overlay) overlay.addEventListener("click", () => setSidebarOpen(false));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setSidebarOpen(false);
});

activeLanguage = resolveInitialLanguage();
setLanguage(activeLanguage, { persist: false, updateUrl: false });

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
}

const whySlidesForLang = (lang = activeLanguage) => getLangData(WHY_SLIDES, lang);
const showcaseForLang = (lang = activeLanguage) => getLangData(SHOWCASE, lang);

let whySlides = whySlidesForLang(activeLanguage);
let showcaseSlides = showcaseForLang(activeLanguage);
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
  whyDots.innerHTML = whySlides
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
  whyIdx = ((next % whySlides.length) + whySlides.length) % whySlides.length;
  const slide = whySlides[whyIdx];

  if (whyContent) {
    whyContent.classList.remove("fade");
    void whyContent.offsetWidth;
    whyContent.classList.add("fade");
  }

  whyTitle.textContent = slide.title;
  whyText.innerHTML = slide.blurb;
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
  prevChips.innerHTML = showcaseSlides.map((item, i) => {
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
  prevIdx = ((next % showcaseSlides.length) + showcaseSlides.length) % showcaseSlides.length;
  const slide = showcaseSlides[prevIdx];

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
  if (prevCount) prevCount.textContent = `${prevIdx + 1} / ${showcaseSlides.length}`;
  renderChips();
};

languageListeners.add((lang) => {
  whySlides = whySlidesForLang(lang);
  showcaseSlides = showcaseForLang(lang);
  whyIdx = 0;
  prevIdx = 0;
  renderWhyDots();
  setWhyIndex(0);
  renderChips();
  setPrevIndex(0);
});

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
