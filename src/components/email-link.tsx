"use client";

import { useState } from "react";

// mailto: открывает только почтовую программу по умолчанию, а её часто нет.
// Поэтому по клику ещё и копируем адрес, чтобы его можно было вставить в Gmail и т. п.
export function EmailLink({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Буфер обмена недоступен: остаётся обычное поведение mailto
    }
  };

  return (
    <a href={`mailto:${email}`} onClick={handleClick} className={className}>
      {copied ? "адрес скопирован ✓" : email}
    </a>
  );
}
