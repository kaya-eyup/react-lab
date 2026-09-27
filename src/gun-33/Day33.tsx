import { useEffect, useState } from "react";
import { getProducts } from "./api";
import type { FetchState } from "./types";
import type { Product } from "./api";

export function Day33() {
  const [state, setState] = useState<FetchState<Product[]>>({ status: "idle" });

  useEffect(() => {
    console.log("effect run");

    const controller = new AbortController();

    const fetchInitial = async () => {
      setState({ status: "loading", previous: null });
      try {
        const data = await getProducts("phone", controller.signal);
        setState({ status: "success", data });
      } catch (err: unknown) {
        // Hata ne olursa olsun (404, 500 veya ağ kesintisi) state güncellenir, sonsuz loading biter.
        const message = err instanceof Error ? err.message : "Bilinmeyen hata";
        setState({ status: "error", message });
      }
    };

    fetchInitial();

    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <div>
      <h1>Gün 33 - Arama</h1>
      <p>
        Şu anki durum: <strong>{state.status}</strong>
      </p>

      {state.status === "success" && (
        <ul>
          {state.data.map((p) => (
            <li key={p.id}>
              {p.title} - ${p.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
