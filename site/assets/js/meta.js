const SITE_BASE_URL = "https://ale-psych-crew.github.io";
const SITE_NAME = "ALE Psych";
const DEFAULTS = {
  main: {
    themeColor: "#a78bfa",
    image: `${SITE_BASE_URL}/site/assets/images/engine-branding/mainsitemetaimage.png`,
  },
  cookbook: {
    themeColor: "#f28b3c",
    image: `${SITE_BASE_URL}/site/assets/images/engine-branding/cookbookmetaimage.png`,
  },
};

const META_LIMIT = 160;
const state = {
  overrides: {},
};

const getSection = () => {
  const bodySection = document.body?.dataset?.metaSection;
  if (bodySection) return bodySection;
  return window.location.pathname.includes("/site/cookbook/") ? "cookbook" : "main";
};

const getI18nText = (key) => {
  if (!key) return null;
  return window.ALEPsychI18n?.getText?.(key) ?? null;
};

const truncate = (text, limit = META_LIMIT) => {
  if (!text) return "";
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= limit) return clean;
  return `${clean.slice(0, limit - 1).trim()}…`;
};

const inferTitle = () => {
  const heading = document.querySelector("main h1") || document.querySelector("h1");
  return heading?.textContent?.trim() ?? "";
};

const inferDescription = () => {
  const paragraph = document.querySelector("main p") || document.querySelector("p");
  return paragraph?.textContent?.trim() ?? "";
};

const buildTitle = (rawTitle) => {
  if (!rawTitle) return SITE_NAME;
  if (rawTitle.includes(SITE_NAME)) return rawTitle;
  return `${rawTitle} | ${SITE_NAME}`;
};

const toAbsoluteUrl = (value) => {
  if (!value) return "";
  if (/^https?:/i.test(value)) return value;
  try {
    return new URL(value, SITE_BASE_URL).toString();
  } catch (error) {
    return value;
  }
};

const buildCanonicalUrl = ({ includeHash = false } = {}) => {
  const current = new URL(window.location.href);
  const path = `${current.pathname}${current.search}${includeHash ? current.hash : ""}`;
  return new URL(path, SITE_BASE_URL).toString();
};

const getBodyMeta = () => {
  const body = document.body;
  if (!body) return {};
  const titleKey = body.dataset.metaTitleKey;
  const descriptionKey = body.dataset.metaDescriptionKey;
  const title = body.dataset.metaTitle || getI18nText(titleKey) || inferTitle();
  const description =
    body.dataset.metaDescription || getI18nText(descriptionKey) || inferDescription();
  return {
    title,
    description,
    image: body.dataset.metaImage,
    robots: body.dataset.metaRobots,
    includeHash: body.dataset.metaIncludeHash === "true",
  };
};

const ensureMetaTag = ({ name, property, content }) => {
  if (!content) return;
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    if (name) {
      element.setAttribute("name", name);
    } else {
      element.setAttribute("property", property);
    }
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const ensureLinkTag = ({ rel, href }) => {
  if (!href) return;
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const setJsonLd = (payload) => {
  if (!payload) return;
  let element = document.head.querySelector("script[data-meta-jsonld]");
  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.dataset.metaJsonld = "true";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(payload, null, 2);
};

const buildJsonLd = ({ title, description, url, type, language }) => {
  const base = {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    url,
  };
  if (description) {
    base.description = description;
  }
  if (language) {
    base.inLanguage = language;
  }
  if (type === "WebPage") {
    base.isPartOf = {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_BASE_URL,
    };
  }
  return base;
};

const applyMeta = ({
  title,
  description,
  canonicalUrl,
  image,
  themeColor,
  ogType,
  jsonLdType,
  robots,
}) => {
  const finalTitle = buildTitle(title);
  const finalDescription = truncate(description);
  const finalUrl = canonicalUrl || buildCanonicalUrl();
  const finalImage = toAbsoluteUrl(image);
  document.title = finalTitle;

  ensureMetaTag({ name: "description", content: finalDescription });
  ensureLinkTag({ rel: "canonical", href: finalUrl });
  ensureMetaTag({ property: "og:title", content: finalTitle });
  ensureMetaTag({ property: "og:description", content: finalDescription });
  ensureMetaTag({ property: "og:type", content: ogType || "website" });
  ensureMetaTag({ property: "og:url", content: finalUrl });
  ensureMetaTag({ property: "og:image", content: finalImage });
  ensureMetaTag({ property: "og:image:alt", content: finalTitle });
  ensureMetaTag({ property: "og:site_name", content: SITE_NAME });

  ensureMetaTag({ name: "twitter:card", content: "summary_large_image" });
  ensureMetaTag({ name: "twitter:title", content: finalTitle });
  ensureMetaTag({ name: "twitter:description", content: finalDescription });
  ensureMetaTag({ name: "twitter:image", content: finalImage });
  ensureMetaTag({ name: "twitter:image:alt", content: finalTitle });

  ensureMetaTag({ name: "theme-color", content: themeColor });

  if (robots) {
    ensureMetaTag({ name: "robots", content: robots });
  }

  const language = document.documentElement?.lang;
  const jsonLd = buildJsonLd({
    title: finalTitle,
    description: finalDescription,
    url: finalUrl,
    type: jsonLdType || "WebPage",
    language,
  });
  setJsonLd(jsonLd);
};

const getPageMeta = () => {
  const section = getSection();
  const defaults = DEFAULTS[section] || DEFAULTS.main;
  const bodyMeta = getBodyMeta();
  const jsonLdType = (() => {
    const path = window.location.pathname;
    if (!path.includes("/site/") && (path === "/" || path.endsWith("/index.html"))) {
      return "WebSite";
    }
    return "WebPage";
  })();

  return {
    title: bodyMeta.title,
    description: bodyMeta.description,
    canonicalUrl: buildCanonicalUrl({ includeHash: bodyMeta.includeHash }),
    image: bodyMeta.image || defaults.image,
    themeColor: defaults.themeColor,
    ogType: "website",
    jsonLdType,
    robots: bodyMeta.robots,
  };
};

const refreshMeta = () => {
  const pageMeta = getPageMeta();
  applyMeta({ ...pageMeta, ...state.overrides });
};

const setOverrides = (overrides = {}) => {
  state.overrides = { ...overrides };
  refreshMeta();
};

const updateOverrides = (overrides = {}) => {
  state.overrides = { ...state.overrides, ...overrides };
  refreshMeta();
};

window.ALEPsychMeta = {
  refresh: refreshMeta,
  setOverrides,
  updateOverrides,
  buildCanonicalUrl,
  toAbsoluteUrl,
  siteBaseUrl: SITE_BASE_URL,
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", refreshMeta);
} else {
  refreshMeta();
}
