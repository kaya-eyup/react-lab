import { useEffect, useState } from "react";
import { getProducts } from "./api";
import type { FetchState } from "./types";
import type { Product } from "./api";

export function Day33() {
  const [state, setState] = useState<FetchState<Product[]>>({ status: "idle" });
  const [query, setQuery] = useState("");

  const view: FetchState<Product[]> =
    query.trim() === "" ? { status: "idle" } : state;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() !== "") {
      setState((prev) => ({
        status: "loading",
        previous:
          prev.status === "success"
            ? prev.data
            : prev.status === "loading"
              ? prev.previous
              : null,
      }));
    }
  };

  useEffect(() => {
    // query boşsa hiçbir yere istek atma
    if (query.trim() === "") return;

    console.log(`"${query}" için effect run`);
    const controller = new AbortController();

    const loadProducts = async () => {
      try {
        const data = await getProducts(query, controller.signal);
        if (controller.signal.aborted) return;

        setState({ status: "success", data });
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") {
          console.log(`İptal edildi: "${query}"`);
          return;
        }

        const message = err instanceof Error ? err.message : "Bilinmeyen hata";
        setState({ status: "error", message });
      }
    };

    loadProducts();

    return () => {
      console.log("cleanup");
      controller.abort();
    };
  }, [query]);

  return (
    <div>
      <h1>Gün 33 - Arama</h1>

      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Ürün ara (Örn: phone)..."
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      />

      <p>
        Şu anki durum: <strong>{view.status}</strong>
      </p>

      {view.status === "success" && (
        <ul>
          {view.data.map((p) => (
            <li key={p.id}>
              {p.title} - ${p.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
