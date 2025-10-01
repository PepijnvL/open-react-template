"use client";

import { useState, useEffect } from "react";

interface CurrencyInfo {
  code: "USD" | "EUR";
  symbol: string;
  rate: number;
}

export function useCurrency() {
  const [currency, setCurrency] = useState<CurrencyInfo>({
    code: "USD",
    symbol: "$",
    rate: 1,
  });

  useEffect(() => {
    // Try to detect user's location
    async function detectCurrency() {
      try {
        // Try using CloudFlare's IP geolocation header or fetch an API
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        // List of EU countries
        const euCountries = [
          "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR",
          "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
          "PL", "PT", "RO", "SK", "SI", "ES", "SE"
        ];

        if (euCountries.includes(data.country_code)) {
          // European user - show EUR
          // Exchange rate: 1 USD = ~0.92 EUR (approximate, update as needed)
          setCurrency({
            code: "EUR",
            symbol: "€",
            rate: 0.92,
          });
        }
      } catch (error) {
        // Fallback to USD if geolocation fails
        console.log("Currency detection failed, defaulting to USD");
      }
    }

    detectCurrency();
  }, []);

  const formatPrice = (usdPrice: number | string): string => {
    if (usdPrice === "Custom") return usdPrice as string;

    const numericPrice = typeof usdPrice === "string" ? parseFloat(usdPrice) : usdPrice;
    const localPrice = Math.round(numericPrice * currency.rate);

    return currency.code === "EUR"
      ? `€${localPrice}`
      : `$${localPrice}`;
  };

  return { currency, formatPrice };
}
