export default function calculateLocale(
  availableLocales = [],
  fallbackLang = 'en-us'
) {
  const locale = _navigatorLanguage(fallbackLang);
  return _getClosest(locale, availableLocales, fallbackLang);
}

function _navigatorLanguage(fallbackLang) {
  const navigatorLang = window.navigator
    ? window.navigator.languages[0] ||
      window.navigator.language ||
      window.navigator.userLanguage
    : fallbackLang;
  return navigatorLang;
}

function _getClosest(locale, availableLocales, fallbackLang) {
  let closestLocale;
  const localeString = locale.toLowerCase();
  const localeSubstring = localeString.slice(0, 2);

  if (availableLocales.includes(localeString)) {
    closestLocale = localeString;
  } else {
    closestLocale = availableLocales.includes(localeSubstring)
      ? localeSubstring
      : fallbackLang;
  }

  return closestLocale;
}
