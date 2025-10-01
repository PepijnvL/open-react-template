# Internationalization (i18n) Implementation Plan

## Current Status
- ✅ Currency localization implemented (EUR/USD based on IP geolocation)
- ⏳ Language translations not yet implemented

## Recommended Approach for Multiple Languages

### Option 1: Next.js Built-in i18n (Recommended)
Next.js 13+ with App Router supports internationalization natively.

**Implementation:**
1. Update `next.config.js`:
```js
module.exports = {
  i18n: {
    locales: ['en', 'nl', 'de', 'fr'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}
```

2. Create localized routes:
```
app/
  [lang]/
    page.tsx
    for-developers/page.tsx
    for-ecommerce/page.tsx
    etc.
```

3. Create translation files:
```
locales/
  en.json
  nl.json
  de.json
  fr.json
```

### Option 2: next-intl (More Flexible)
For more advanced features like message formatting, pluralization, etc.

**Installation:**
```bash
npm install next-intl
```

**Benefits:**
- Type-safe translations
- Rich message formatting
- Server and client component support
- Automatic locale detection

### Recommended Translation Keys Structure

```json
{
  "homepage": {
    "hero": {
      "badge": "5-10x faster than n8n",
      "title": "The automation platform",
      "titleHighlight": "that's actually free",
      "subtitle": "500 free executions...",
      "cta": {
        "primary": "Get Started Free",
        "secondary": "Book Consultation"
      }
    }
  },
  "pricing": {
    "free": {
      "name": "Free",
      "description": "Perfect for developers and side projects",
      "features": [...]
    }
  },
  "navigation": {
    "solutions": "Solutions",
    "pricing": "Pricing",
    "bookDemo": "Book Demo",
    "getStarted": "Get Started"
  }
}
```

### Languages to Support
1. **English (en)** - Default, primary market
2. **Dutch (nl)** - Netherlands market
3. **German (de)** - Germany/DACH market
4. **French (fr)** - France/Belgium market

### Implementation Steps
1. Choose i18n library (recommend next-intl)
2. Extract all hardcoded strings to translation files
3. Create translation files for each language
4. Update components to use translation hooks
5. Add language selector to header
6. Configure locale detection based on:
   - User preference (cookie)
   - Accept-Language header
   - IP geolocation (fallback)

### Cost Estimate
- Professional translation services: ~€150-200 per language
- Alternative: DeepL API for automated translation (cheaper but less accurate)
- Development time: 2-3 days

### SEO Considerations
- Use `lang` attribute in HTML tag
- Implement `hreflang` tags for alternate languages
- Create localized URLs (/en/, /nl/, /de/, /fr/)
- Submit language-specific sitemaps to Google
