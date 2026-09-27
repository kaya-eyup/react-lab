import { z } from "zod";
import { HttpError } from "./types";
// --- 1. HATA SINIFLARI ---

export class NetworkError extends Error {
  constructor() {
    super("Ağ bağlantısı koptu veya kurulamadı.");
    this.name = "NetworkError";
  }
}

// --- 2. ŞEMALAR VE TİPLER ---
const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  thumbnail: z.string(),
});

const responseSchema = z.object({
  products: z.array(productSchema),
});

export type Product = z.infer<typeof productSchema>;

// --- 3. ANA FETCH FONKSİYONU ---
export async function getProducts(
  query: string,
  signal: AbortSignal,
): Promise<Product[]> {
  if (import.meta.env.DEV) {
    await sleep(700, signal);
  }
  const url = new URL("https://dummyjson.com/products/search");
  url.searchParams.set("q", query);
  url.searchParams.set("limit", "12");
  url.searchParams.set("select", "title,price,thumbnail");

  let response: Response;

  // DİKKAT: Sadece fetch işlemini sarıyoruz!
  try {
    response = await fetch(url.toString(), { signal });
  } catch (err: unknown) {
    // İptal durumu bir ağ hatası değildir, yukarıya pasla
    if (err instanceof Error && err.name === "AbortError") {
      throw err;
    }
    // Geri kalan tüm fetch başarısızlıkları ağ kopmasıdır
    throw new NetworkError();
  }

  // Fetch başardı ama sunucu hata döndü (404, 500)
  if (!response.ok) {
    throw new HttpError(response.status);
  }

  const rawData: unknown = await response.json();
  const parsedData = responseSchema.parse(rawData);
  return parsedData.products;
}

// --- 4. KULLANICIYA ÇEVİRİ FONKSİYONU ---
export function toUserMessage(err: unknown): string {
  if (err instanceof NetworkError) {
    return "Bağlantı kurulamadı. İnternetini kontrol edip tekrar dene.";
  }
  if (err instanceof HttpError) {
    if (err.status === 404) return "Aradığın kaynak bulunamadı.";
    if (err.status >= 500 && err.status < 600)
      return "Sunucu şu an cevap vermiyor. Biraz sonra tekrar dene.";
    return `Beklenmeyen bir hata oluştu (kod: ${err.status}).`;
  }
  if (err instanceof z.ZodError) {
    return "Sunucudan beklenmeyen bir veri geldi.";
  }
  return "Bilinmeyen bir hata oluştu.";
}

function sleep(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) return reject(signal.reason);
    const id = setTimeout(resolve, ms);
    signal.addEventListener(
      "abort",
      () => {
        clearTimeout(id);
        reject(signal.reason);
      },
      { once: true },
    );
  });
}
