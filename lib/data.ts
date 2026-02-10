import { getLocale } from "next-intl/server";

/**
 * Dynamically loads a locale-specific JSON data file for Server Components.
 *
 * @example
 * ```ts
 * const data = await loadData<VenueData>("venue");
 * ```
 */
export async function loadData<T>(filename: string): Promise<T> {
  const locale = await getLocale();
  try {
    const mod = await import(`@/data/2026/${locale}/${filename}.json`);
    return mod.default as T;
  } catch {
    // Fallback to English if locale file doesn't exist
    const mod = await import(`@/data/2026/en/${filename}.json`);
    return mod.default as T;
  }
}

/**
 * Returns all locale-specific data file imports for Client Components.
 * Client Components cannot use async imports, so they must import both
 * locales statically and select at runtime.
 *
 * @example
 * ```tsx
 * import enData from "@/data/2026/en/venue.json";
 * import krData from "@/data/2026/kr/venue.json";
 * import { selectData } from "@/lib/data-client";
 *
 * const data = selectData(locale, enData, krData);
 * ```
 */
