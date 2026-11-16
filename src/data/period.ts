import type { CvEntry } from './cv';

const monthMap: Record<string, number> = {
  jan: 0,
  feb: 1,
  mrt: 2,
  apr: 3,
  mei: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  okt: 9,
  nov: 10,
  dec: 11,
};

const monthYear = /^([a-z]{3})\s+(\d{4})$/;

/**
 * End date of a period like "sep 2022 - jul 2024"; "heden" (present) is
 * today. Throws on anything else, so a typo fails the build instead of
 * silently sorting the entry last.
 */
export function parseEndDate(timePeriod: string): Date {
  const parts = timePeriod.trim().toLowerCase().split(/\s*[-–—]\s*/);
  const end = parts.length === 2 ? parts[1] : undefined;
  if (end === 'heden') return new Date();

  const m = end ? monthYear.exec(end) : null;
  const month = m ? monthMap[m[1]] : undefined;
  if (!m || month === undefined) {
    throw new Error(
      `Unreadable timePeriod "${timePeriod}": expected "<mmm> <yyyy> - <mmm> <yyyy>" or "<mmm> <yyyy> - heden" with Dutch months (${Object.keys(monthMap).join(' ')}).`,
    );
  }
  return new Date(Number(m[2]), month, 1);
}

/** Copy of `entries`, newest end date first. */
export function byEndDateDesc<T extends CvEntry>(entries: T[]): T[] {
  return [...entries].sort(
    (a, b) =>
      parseEndDate(b.timePeriod).getTime() -
      parseEndDate(a.timePeriod).getTime(),
  );
}
