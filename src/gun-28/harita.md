# Gün 28 — Harita (318-324)

- **React:** arayüz için JS kütüphanesi (library), sadece görünüm katmanı. Yönlendirme ve veri çekme React'in işi değil.
- **Kurulum:** Vite (derleme aracı + geliştirme sunucusu) · Next.js (React üstüne çatı/framework: sunucuda sayfa, yönlendirme, sunucu kodu). React kodu ikisinde aynı. Biz: `npm create vite@latest` (react-ts).
- **Kök:** `index.html` (giriş kapısı, kökte: `#root` + `main.tsx` script'i) · `package.json` (bağımlılık + script) · `package-lock.json` (tam sürümler) · `node_modules/` (`npm i`, git'e girmez) · `vite.config.ts` · `tsconfig*.json` · `eslint.config.js` · `public/` (olduğu gibi sunulan dosyalar)
- **src:** `main.tsx` (React'i `#root`'a bağlar) → `App.tsx` (kök bileşen) · `index.css` · `App.css` · `assets/`
- **Zincir:** index.html → main.tsx → App.tsx → diğer bileşenler
- **Araçlar:** React Developer Tools (bileşen ağacı, prop, state) · Prettier = görünüm ≠ ESLint = hata/risk
- **Uzlaştırma (reconciliation):** bileşenler ekranın tarifini (JS nesnelerinden ağaç = sanal DOM) üretir; React yeniyi eskiyle karşılaştırır (diffing), DOM'a yalnızca farkı uygular. Kazanç hız değil, "her şeyi yeniden çiz" rahatlığının ucuza gelmesi.
- **Bileşen (component):** büyük harfle başlayan, JSX döndüren fonksiyon. Boyutu serbest.
- **Kompozisyon:** bileşen başka bileşenin içinde KULLANILIR; gövdesinde TANIMLANMAZ (her çizimde yeni tür → sökülüp kurulur, odak/state kaybolur).
- **Bağımsızlık sınırları:** normal `.css` importu küresel (çözüm: CSS Modules, Gün 29) · çizimde çöken bileşen tüm uygulamayı düşürür (çözüm: error boundary, Gün 39).
- **Tek kök:** bileşen tek değer döndürür → parça (Fragment) `<>…</>` (DOM'da iz yok) ya da `div` (gerçek eleman).
- **Props:** React bileşeni tek argümanla çağırır: özniteliklerin nesnesi. `<MovieCard title="X" />` → `MovieCard({ title: "X" })`. Tırnak = metin, `{}` = JS ifadesi.
- **JSX/TSX:** HTML'e benzeyen yazım; derlenince fonksiyon çağrısına dönüşür (deney: bugün).
