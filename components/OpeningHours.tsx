import { siteConfig } from "@/lib/siteConfig";

export function OpeningHours() {
  return (
    <dl className="grid gap-1 text-sm text-ink-800/80">
      {siteConfig.openingHours.map((day) => (
        <div key={day.label} className="flex items-start justify-between gap-4">
          <dt className="font-medium text-ink-900">{day.label}</dt>
          <dd className="text-right">{day.hours}</dd>
        </div>
      ))}
    </dl>
  );
}

