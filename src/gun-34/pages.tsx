import { Link, useParams } from "react-router";

export const Home = () => <h2>Ana Sayfa</h2>;

const ITEM_IDS = ["kebap", "baklava", "doner"] as const;
type ItemId = (typeof ITEM_IDS)[number];

// Gelen değerin bizim üçlü dizimizde olup olmadığını kontrol eder
const isItemId = (value: string | undefined): value is ItemId => {
  return value !== undefined && (ITEM_IDS as readonly string[]).includes(value);
};

export const ItemList = () => {
  return (
    <div>
      <h2>Öğeler</h2>
      <ul>
        {ITEM_IDS.map((id) => (
          <li key={id}>
            <Link to={`/items/${id}`}>{id}</Link>
          </li>
        ))}
        {/* TS köşesi için bilerek eklenen geçersiz öğe */}
        <li>
          <Link to="/items/pizza">pizza</Link>
        </li>
      </ul>
    </div>
  );
};

export const ItemDetail = () => {
  const { id } = useParams();
  if (!isItemId(id)) return <NotFound />;
  isItemId(id);
  return (
    <div>
      <h2>Öğe Detayı</h2>
      <p>Gelen ID: {id}</p>
    </div>
  );
};
export const NotFound = () => {
  return (
    <div>
      <h2>Sayfa bulunamadı</h2>
      <Link to="/">Ana sayfaya dön</Link>
    </div>
  );
};
