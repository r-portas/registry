const LOCALE = "en-AU";

const shortDateFormatter = new Intl.DateTimeFormat(LOCALE, {
  dateStyle: "short",
});

const mediumDateFormatter = new Intl.DateTimeFormat(LOCALE, {
  dateStyle: "medium",
});

const longDateFormatter = new Intl.DateTimeFormat(LOCALE, {
  dateStyle: "long",
});

const timeFormatter = new Intl.DateTimeFormat(LOCALE, {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

const dateTimeFormatter = new Intl.DateTimeFormat(LOCALE, {
  dateStyle: "medium",
  timeStyle: "short",
});

export function formatDate(
  date: Date,
  style: "short" | "medium" | "long",
): string {
  switch (style) {
    case "short":
      return shortDateFormatter.format(date);
    case "medium":
      return mediumDateFormatter.format(date);
    default:
      return longDateFormatter.format(date);
  }
}

export function formatTime(date: Date): string {
  return timeFormatter.format(date);
}

export function formatDateTime(date: Date): string {
  return dateTimeFormatter.format(date);
}
