import { useState, type ChangeEvent, type FormEvent } from "react";

type Item = { id: string; name: string };

export function ItemForm() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<Item[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = text.trim();
    if (!name) {
      return;
    }
    const newItem: Item = { id: crypto.randomUUID(), name };
    setItems((prev) => [...prev, newItem]);
    setText("");
  }

  return (
    <div>
      <h2>Liste</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Öğe adı: <input value={text} onChange={handleChange} />
        </label>
        <button type="submit" disabled={!text.trim()}>
          Ekle
        </button>
      </form>
      <p>Yazdığın: {text}</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
