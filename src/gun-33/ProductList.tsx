import type { Product } from "./api";

interface Props {
  products: readonly Product[];
  dimmed?: boolean;
}

export default function ProductList({ products, dimmed }: Props) {
  // Bileşen boş liste mantığını bilmez, sadece kendine verileni çizer.
  return (
    <ul
      aria-busy={dimmed ? "true" : "false"}
      style={{
        opacity: dimmed ? 0.5 : 1,
        transition: "opacity 0.2s",
        listStyle: "none",
        padding: 0,
      }}
    >
      {products.map((p) => (
        <li key={p.id}>
          {p.title} - ${p.price}
        </li>
      ))}
    </ul>
  );
}
