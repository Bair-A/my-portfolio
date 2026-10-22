import { cn } from "@/lib/utils";

// Плашка для выдуманных данных: убери `mock: true` в src/data/resume.tsx,
// когда заменишь пример на реальную информацию
export function MockBadge({ className }: { className?: string }) {
  return (
    <span
      title="Моковые данные — замените на реальные"
      className={cn(
        "inline-flex items-center rounded-md border border-dashed border-amber-500/60 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-medium leading-none text-amber-600 dark:text-amber-400",
        className
      )}
    >
      пример
    </span>
  );
}
