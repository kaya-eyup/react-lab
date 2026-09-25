import type { Filter } from "./types";

interface FilterBarProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

export function FilterBar({ filter, onFilterChange }: FilterBarProps) {
  // Parça 4'te bu tekrarı map() ile düzelteceğiz, şimdilik manuel.
  return (
    <div style={{ display: "flex", gap: "8px", margin: "1rem 0" }}>
      <button
        onClick={() => onFilterChange("all")}
        style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
        aria-pressed={filter === "all"}
        type="button"
      >
        Hepsi
      </button>
      <button
        onClick={() => onFilterChange("completed")}
        style={{ fontWeight: filter === "completed" ? "bold" : "normal" }}
        aria-pressed={filter === "completed"}
        type="button"
      >
        Alınanlar
      </button>
      <button
        onClick={() => onFilterChange("incomplete")}
        style={{ fontWeight: filter === "incomplete" ? "bold" : "normal" }}
        aria-pressed={filter === "incomplete"}
        type="button"
      >
        Alınacaklar
      </button>
    </div>
  );
}
