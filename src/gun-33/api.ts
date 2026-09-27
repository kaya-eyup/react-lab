import { z } from "zod";

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

export async function getProducts(
  query: string,
  signal: AbortSignal,
): Promise<Product[]> {
  if (import.meta.env.DEV) {
    await new Promise((resolve) => setTimeout(resolve, 700));
  }

  // query parametresini URL'ye güvenli bir şekilde enjekte ediyoruz
  const url = new URL("https://dummyjson.com/products/search");
  url.searchParams.set("q", query);
  url.searchParams.set("limit", "12");
  url.searchParams.set("select", "title,price,thumbnail");

  const response = await fetch(url.toString(), { signal });

  if (!response.ok) {
    throw new Error(`API Hatası: ${response.status} - ${response.statusText}`);
  }

  const rawData: unknown = await response.json();

  const parsedData = responseSchema.parse(rawData);

  return parsedData.products;
}
