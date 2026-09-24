import { useState, type ChangeEvent, type SubmitEvent } from "react";

interface AddItemFormProps {
  onAdd: (name: string) => void;
}

export function AddItemForm({ onAdd }: AddItemFormProps) {
  const [text, setText] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = text.trim();
    if (!name) return;

    onAdd(name);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Öğe adı: <input value={text} onChange={handleChange} />
      </label>
      <button type="submit" disabled={!text.trim()}>
        Ekle
      </button>
    </form>
  );
}
