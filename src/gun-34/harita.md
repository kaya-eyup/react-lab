# Gün 34 — React Router (357-359)

- Kurulum: `react-router` (hoca 7.5.2, biz v8 — bugünkü API aynı)
- `createBrowserRouter(routes)` → fonksiyon; rota nesneleri dizisini alır, `router` nesnesi döndürür
- Rota nesnesi: `{ path, element }` · dinamik parça `:id` → bileşende `useParams()` ile okunur
- `<RouterProvider router={router} />` → uygulamanın kökünde, router'ı devreye sokar
- `router` bileşen DIŞINDA oluşturulur (içinde olursa her render'da yeni router → state sıfırlanır)
- `<a href>` = sunucuya gider, sayfa sıfırdan yüklenir, JS state'i silinir
- `<Link to>` = sunucuya gitmez; pushState + bileşen değişimi (Gün 15'te elle yaptığımız şey)
- `<NavLink>` = Link + `isActive` → aktif sekme stili; kök (`/`) için `end` gerekir
- Layout = her sayfada tekrarlanan kısım (navbar/footer) → üst rota, sayfalar `children`
- `<Outlet />` = layout içinde "alt rota buraya çizilsin" yer tutucusu
- `index: true` = üst rotanın kendi adresinde (`/`) çizilecek alt rota
- `path: "*"` = hiçbir rota eşleşmezse → 404
- BrowserRouter temiz URL kullanır → sunucu her adrese index.html vermeli (Vercel rewrite)
