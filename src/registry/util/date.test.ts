import { expect, test, describe } from "bun:test";
import { formatDate, formatDateTime, formatTime } from "./date";

// Fixed reference date: 15 June 2024 13:45:00 UTC
// Using a time with minutes ensures hour/minute formatting is exercised.
const date = new Date("2024-06-15T13:45:00Z");

// Helper to produce baseline using the same options the implementation relies on
const baseline = (options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-AU", options).format(date);

describe("date", () => {
  test("formatDate short", () => {
    expect(formatDate(date, "short")).toBe(baseline({ dateStyle: "short" }));
  });

  test("formatDate medium", () => {
    expect(formatDate(date, "medium")).toBe(baseline({ dateStyle: "medium" }));
  });

  test("formatDate long", () => {
    expect(formatDate(date, "long")).toBe(baseline({ dateStyle: "long" }));
  });

  test("formatTime", () => {
    // Implementation uses hour/minute, 2-digit, 12-hour clock
    expect(formatTime(date)).toBe(
      baseline({ hour: "2-digit", minute: "2-digit", hour12: true }),
    );
  });

  test("formatDateTime", () => {
    expect(formatDateTime(date)).toBe(
      baseline({ dateStyle: "medium", timeStyle: "short" }),
    );
  });
});
