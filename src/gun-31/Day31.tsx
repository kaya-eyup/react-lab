// App.tsx
import { useState } from "react";
import type { Item } from "./types";
import { ItemForm } from "./AddItemForm";
import { ItemList } from "./ItemList";

export function Day31() {
  const [items, setItems] = useState<Item[]>([]);

  function handleAddItem(name: string) {
    const newItem: Item = {
      id: crypto.randomUUID(),
      name,
    };
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>Alışveriş Listesi</h1>
      <ItemForm onAdd={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}

// kardeşten kardeşe yatay köprü yoktur, birşey kabul etmemeli. düzeltmek için parentta tanımlayalım stateyi.


//ItemForm (Child 1) ebeveyne veri bildirir: "Kullanıcı 'Süt' yazıp ekleye bastı!"

// Day31 (Parent) bunu duyar, items state'ini günceller.

// Day31 güncellenince re-render olur ve yeni listeyi prop olarak ItemList'e (Child 2) aşağıya doğru paslar.

// ItemList (Child 2) yukarıya hiçbir şey göndermez; sadece gelen listeyi ekrana çizen pasif bir ekrandır.