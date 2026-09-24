import type { Item } from "./types";
import { ShoppingItem } from "./ShoppingItem";

interface ItemListProps {
  items: readonly Item[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ItemList({ items, onToggle, onDelete }: ItemListProps) {
  if (items.length === 0) {
    return <p>Henüz listede eleman yok.</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <ShoppingItem
          key={item.id} 
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
