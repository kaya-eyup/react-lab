import type { Item } from "./types"; 

interface ItemListProps {
  items: Item[];
}

export function ItemList({ items }: ItemListProps) {
  if (items.length === 0) {
    return <p>Henüz listede eleman yok.</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}