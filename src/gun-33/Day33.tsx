import { useEffect, useState } from "react";
import { getProducts, toUserMessage } from "./api";
import type { FetchState } from "./types";
import type { Product } from "./api";
import { assertNever } from "./types";
import ErrorMessage from "./ErrorMessage";
import Skeleton from "./Skeleton";
import ProductList from "./ProductList";

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
    if (query.trim() === "") return;

    const controller = new AbortController();

    const loadProducts = async () => {
      try {
        const data = await getProducts(query, controller.signal);
        if (controller.signal.aborted) return;
        setState({ status: "success", data });
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;

        console.error(err);
        setState({ status: "error", message: toUserMessage(err) });
      }
    };

    loadProducts();

    return () => {
      controller.abort();
    };
  }, [query]);

  // --- KUSURSUZ EKRAN YÖNETİMİ ---
  const renderView = () => {
    switch (view.status) {
      case "idle":
        return <p>Aramak için yaz...</p>;

      case "loading":
        // Önceki veri yoksa (ilk arama) veya boş dizi ise Skeleton göster
        if (!view.previous || view.previous.length === 0) {
          return <Skeleton />;
        }
        // Eski veri varsa soluk göster (Stale-while-revalidate)
        return <ProductList products={view.previous} dimmed={true} />;

      case "success":
        // Arama başarılı ama dönen dizi boş (Sonuç bulunamadı)
        if (view.data.length === 0) {
          return <p>"{query}" için sonuç bulunamadı.</p>;
        }
        return <ProductList products={view.data} />;

      case "error":
        return <ErrorMessage message={view.message} />;

      default:
        // Eğer FetchState tipine yarın 'paused' diye bir durum ekler ve
        // buraya case yazmayı unutursan, Typescript derleme anında patlar.
        return assertNever(view);
    }
  };

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

      {/* İşi renderView fonksiyonuna devrettik */}
      <div>{renderView()}</div>
    </div>
  );
}
