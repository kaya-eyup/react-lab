// 1) Tek Doğruluk Kaynağı (Runtime değeri)
export const FILTERS = ["all", "completed", "incomplete"] as const;
// string üzerinden tip çıkartılamaz

// 2) Tip Türetme (Compile-time tipi)
export type Filter = (typeof FILTERS)[number];

// 3) Etiketler (Record ile sıkı bağlı sözlük)
export const FILTER_LABELS: Record<Filter, string> = {
  all: "Hepsi",
  completed: "Alınanlar",
  incomplete: "Alınacaklar",
};
