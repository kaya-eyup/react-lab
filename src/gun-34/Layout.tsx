import { useState } from "react";
import { NavLink, Outlet } from "react-router";

export const Layout = () => {
  const [count, setCount] = useState(0); // Layout'un kendine ait state'i olabilir, gerçek projelerde de olur. Örneğin mobilde hamburger menünün açık/kapalı durumu ya da yan panelin daraltılmış olup olmadığı. Bu bilgiler layout'a ait ve orada durmaları doğru.

  const getStyle = ({ isActive }: { isActive: boolean }) => ({
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
    color: isActive ? "red" : "blue",
  });

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <nav
        style={{
          marginBottom: "20px",
          paddingBottom: "10px",
          borderBottom: "1px solid #ccc",
        }}
      >
        {/* NavLink'ler,/items adresi / ile başladığı için yönlendirici varsayılan olarak kapsayıcı davranıp iki linki birden aktif işaretliyordu; çözüm ise Ana Sayfa linkine end prop'unu ekleyerek eşleşmenin tam ve birebir olmasını zorunlu kılmaktı*/}
        <NavLink to="/" end style={getStyle}>
          Ana Sayfa (/)
        </NavLink>
        <NavLink to="/items" style={getStyle}>
          Öğeler (/items)
        </NavLink>
        <NavLink to="/nowhere" style={getStyle}>
          Olmayan Sayfa (/nowhere)
        </NavLink>

        {/* Adım 5 Deneyi için düz a etiketi, burada sabah konuştuğumuz durum. a etiketi komple yeniler, NavLink ise pushState+ bileşen değişimi yapar. */}
        <a href="/items" style={{ marginLeft: "20px", color: "green" }}>
          Düz Link (/items)
        </a>
      </nav>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setCount((c) => c + 1)}>Sayaç: {count}</button>
      </div>

      <main style={{ padding: "20px", border: "1px dashed #aaa" }}>
        <Outlet />
      </main>
    </div>
  );
};
