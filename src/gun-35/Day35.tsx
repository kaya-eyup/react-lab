import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getProducts, toUserMessage } from "./api";
import ErrorMessage from "./ErrorMessage";
import Skeleton from "./Skeleton";
import ProductList from "./ProductList";

// TAHMİN 1: "phone" → "laptop" → tekrar "phone" yazınca
//   (a) ekranda ne görünür: skeleton / soluk eski liste / anında normal liste?
// anında phone listesi gelir, cache sağolsun
//   (b) Network'te "phone" için yeni istek gider mi? // direkt geldi, önbellekte ise gitmez heralde. anlamadım.

// staleTime ekledikten sonra: ne değişti anlamadım.

export function Day35() {
  const [query, setQuery] = useState("");
  const trimmed = query.trim();

  const productsQuery = useQuery({
    queryKey: ["products", trimmed],
    queryFn: ({ signal }) => getProducts(trimmed, signal),
    enabled: trimmed !== "",
    placeholderData: keepPreviousData,
    staleTime: 30_000,
  });

  const renderView = () => {
    // 1. Boş arama durumu. enabled: false olduğu için kütüphane pending'de bekler,
    // bu yüzden bu kontrolü isPending'den önce yapmak zorundayız.
    if (trimmed === "") {
      return <p>Aramak için yaz...</p>;
    }

    // 2. İstek atılıyor ve elimizde gösterecek eski bir veri yok
    if (productsQuery.isPending) {
      return <Skeleton />;
    }

    // 3. Hata durumu
    if (productsQuery.isError) {
      return <ErrorMessage message={toUserMessage(productsQuery.error)} />;
    }

    if (productsQuery.data.length === 0) {
      return <p>"{query}" için sonuç bulunamadı.</p>;
    }
    // 4. Veri var. Yukarıdaki isPending ve isError kontrollerini geçtiğimiz için,
    // TypeScript artık productsQuery.data'nın undefined olmadığını biliyor.
    // isPlaceholderData true ise (yani arka planda yeni veri beklenirken eski veri gösteriliyorsa) listeyi soluklaştır.
    return (
      <div style={{ opacity: productsQuery.isPlaceholderData ? 0.5 : 1 }}>
        <ProductList products={productsQuery.data} />
      </div>
    );
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ürün ara..."
        className="border p-2 mb-4 w-full"
      />
      {renderView()}
    </div>
  );
}
