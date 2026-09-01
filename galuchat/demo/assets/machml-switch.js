(() => {
  const STORAGE_KEY = "galuchat-demo-locale";
  const normalize = (value) => String(value || "").toLowerCase().startsWith("ja") ? "ja" : "en";
  function readStoredLocale() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (_error) {
      return null;
    }
  }

  function storeLocale(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (_error) {
      // Language switching still works when storage is unavailable.
    }
  }

  let locale = normalize(readStoredLocale() || navigator.language);

  function text(ja, en) {
    const element = document.createElement("ml-text");
    element.setAttribute("ja", ja);
    element.setAttribute("en", en);
    return element;
  }

  function replaceText(element, ja, en) {
    element.replaceChildren(text(ja, en));
  }

  function apply(nextLocale, persist = true) {
    locale = normalize(nextLocale);
    MachML.setLocale(locale);
    document.documentElement.lang = locale;
    if (document.documentElement.dataset[`title${locale === "ja" ? "Ja" : "En"}`]) {
      document.title = document.documentElement.dataset[`title${locale === "ja" ? "Ja" : "En"}`];
    }
    const description = document.querySelector('meta[name="description"]');
    if (description?.dataset[`description${locale === "ja" ? "Ja" : "En"}`]) {
      description.content = description.dataset[`description${locale === "ja" ? "Ja" : "En"}`];
    }
    for (const element of document.querySelectorAll("[data-aria-ja][data-aria-en]")) {
      element.setAttribute("aria-label", element.dataset[locale === "ja" ? "ariaJa" : "ariaEn"]);
    }
    for (const button of document.querySelectorAll("[data-machml-locale]")) {
      const active = button.dataset.machmlLocale === locale;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    }
    if (persist) storeLocale(locale);
    window.dispatchEvent(new CustomEvent("machml:localechange", { detail: { locale } }));
  }

  window.GaluchatLocale = {
    get locale() { return locale; },
    setLocale: apply,
    text,
    replaceText,
  };

  document.addEventListener("DOMContentLoaded", () => {
    for (const button of document.querySelectorAll("[data-machml-locale]")) {
      button.addEventListener("click", () => apply(button.dataset.machmlLocale));
    }
    apply(locale, false);
  });
})();
