import { useState } from "react";
import type { Item } from "../gun-31/types";
import { AddItemForm } from "../gun-31/AddItemForm";
import { ItemList } from "../gun-31/ItemList";
import { Header } from "../gun-31/Header";

export function Day32() {
  // 1) STATE: sadece hesaplanamayan şeyler
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

    
      // 2) TÜRETİLENLER: her render'da state'ten hesaplanır, state'e konmaz
  const visibleItems = /* items + filter'dan */;
  const completedCount = /* items'tan */;
  const emptyMessage = /* items.length ve filter'a göre */;
    
    // 3) HANDLER'LAR: handleAddItem, handleToggle, handleDelete (dünden)
  
  function handleAddItem(name: string) {
    const newItem: Item = {
      id: crypto.randomUUID(),
      name,
      completed: false,
    };
    setItems((prev) => [...prev, newItem]);
  }
  function handleToggle(id: string) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }
  function handleDelete(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }
    //    + handleClearCompleted (yeni)
    
  // 4) JSX
  return (
    <main>
      <Header total={} completed={} />
      <AddItemForm onAdd={handleAddItem} />
      <FilterBar filter={filter} onFilterChange={setFilter} />
      <ItemList items={visibleItems} emptyMessage={emptyMessage}  />
      <button ...>Alınanları temizle</button>
    </main>
  );
}
