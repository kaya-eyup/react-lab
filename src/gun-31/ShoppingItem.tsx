import type { Item } from "./types";

interface ShoppingItemProps {
  item: Item;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ShoppingItem({ item, onToggle, onDelete }: ShoppingItemProps) {
  return (
    <li>
      <label
        style={{
          textDecoration: item.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggle(item.id)}
        />
        <span>{item.name}</span>
      </label>

      <button type="button" onClick={() => onDelete(item.id)}>
        Sil
      </button>
    </li>
  );
}