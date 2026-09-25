import { useState } from "react";
import type { Item } from "./types";
import { AddItemForm } from "./AddItemForm";
import { ItemList } from "./ItemList";
import { Header } from "./Header";
export function Day31() {
  const [items, setItems] = useState<Item[]>([]);

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
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)),
    );
  }
  function handleDelete(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <main style={{ padding: "20px" }}>
      <Header/>
      <AddItemForm onAdd={handleAddItem} />
      <ItemList items={items} onToggle={handleToggle} onDelete={handleDelete} />
    </main>
  );
}

// kardeşten kardeşe yatay köprü yoktur, birşey kabul etmemeli. düzeltmek için parentta tanımlayalım stateyi.

//ItemForm (Child 1) ebeveyne veri bildirir: "Kullanıcı 'Süt' yazıp ekleye bastı!"

// Day31 (Parent) bunu duyar, items state'ini günceller.

// Day31 güncellenince re-render olur ve yeni listeyi prop olarak ItemList'e (Child 2) aşağıya doğru paslar.

// ItemList (Child 2) yukarıya hiçbir şey göndermez; sadece gelen listeyi ekrana çizen pasif bir ekrandır.
