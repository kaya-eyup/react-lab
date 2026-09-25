import { useState } from "react";
import type { Item, Filter } from "./types";
import { AddItemForm } from "./AddItemForm";
import { ItemList } from "./ItemList";
import { Header } from "./Header";
import { FilterBar } from "./FilterBar";

export function Day32() {
  // 1) STATE: sadece hesaplanamayan şeyler
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  // 2) TÜRETİLENLER: her render'da state'ten hesaplanır, state'e konmaz
  const visibleItems = items.filter((item) => {
    if (filter === "completed") return item.completed;
    if (filter === "incomplete") return !item.completed;
    return true;
  });
  const completedCount = items.filter((item) => item.completed).length;
  const emptyMessage =
    items.length === 0
      ? "Listede henüz ürün yok."
      : "Bu filtreye uyan ürün yok.";
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
  function handleClearCompleted() {
    // Sadece "completed: false" olanları (tamamlanmamışları) bırakıyoruz
    setItems((prev) => prev.filter((item) => !item.completed));
  }

  // 4) JSX
  return (
    <main>
      <Header total={items.length} completed={completedCount} />
      <AddItemForm onAdd={handleAddItem} />
      <FilterBar filter={filter} onFilterChange={setFilter} />

      {/* ItemList'e items yerine visibleItems veriyoruz */}
      <ItemList
        items={visibleItems}
        emptyMessage={emptyMessage}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />

      {/* Adım 3.5: disabled mantığıyla buton */}
      <button
        onClick={handleClearCompleted}
        disabled={completedCount === 0}
        style={{ marginTop: "1rem" }}
        type="button"
      >
        Alınanları temizle
      </button>
    </main>
  );
}
