import { FILTERS, FILTER_LABELS, type Filter } from "./filters";

interface FilterBarProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

export function FilterBar({ filter, onFilterChange }: FilterBarProps) {
  return (
    <div style={{ display: "flex", gap: "8px", margin: "1rem 0" }}>
      {FILTERS.map((f) => (
        <button
          key={f}
          type="button"
          onClick={() => onFilterChange(f)}
          style={{ fontWeight: filter === f ? "bold" : "normal" }}
          aria-pressed={filter === f}
        >
          {FILTER_LABELS[f]}
        </button>
      ))}
    </div>
  );
}
