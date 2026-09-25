import { useState } from "react";
import type { Item } from "./types";
import type { Filter } from "./filters";
import { FILTER_LABELS } from "./filters";
import { AddItemForm } from "./AddItemForm";
import { ItemList } from "./ItemList";
import { Header } from "./Header";
import { FilterBar } from "./FilterBar";
import { Panel } from "./Panel";

export function Day32() {
  // 1) STATE: sadece hesaplanamayan şeyler
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  // 2) TÜRETİLENLER: her render'da state'ten hesaplanır, state'e konmaz
  const visibleItems = items.filter((item) => {
    switch (filter) {
      case "all":
        return true;
      case "completed":
        return item.completed;
      case "incomplete":
        return !item.completed;
      default:
        return assertNever(filter);
    }
  });
  const completedCount = items.filter((item) => item.completed).length;
  const emptyMessage =
    items.length === 0
      ? "Listede henüz ürün yok."
      : "Bu filtreye uyan ürün yok.";
  // 3) HANDLER'LAR

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
  function handleClearCompleted() {
    setItems((prev) => prev.filter((item) => !item.completed));
  }

  // 4) JSX
  return (
    <main>
      <Header total={items.length} completed={completedCount} />
      <Panel title="Yeni ürün">
        <AddItemForm onAdd={handleAddItem} />
      </Panel>
      <FilterBar filter={filter} onFilterChange={setFilter} />
      <Panel title={FILTER_LABELS[filter]}>
        <ItemList
          items={visibleItems}
          emptyMessage={emptyMessage}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </Panel>
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
function assertNever(x: never): never {
  throw new Error(`Karşılanmamış filtre durumu: ${JSON.stringify(x)}`);
}
