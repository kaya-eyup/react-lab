# Gün 36 — Arama + sayfalama (354, 363, 364)

- Hoca: controlled input → state → `useEffect([searchQuery])` ile her tuşta istek; min harf şartını debounce yerine kullandı
- Min uzunluk meşru ama debounce'un yerini tutmaz → ikisi birlikte: önce bekle, sonra uzunluk kontrolü
- TanStack yarış/iptali çözer, debounce'u çözmez: anahtar her tuşta değişir → her tuşta istek
- Arama URL'ye taşındı: `useSearchParams` ile oku → paylaşılabilir, geri tuşu çalışır, yenilemeye dayanır (URL state)
- Sınır: `get()` → `string | null`; `Number(null)` = 0, `Number("abc")` = NaN → sınırda doğrula
- `setSearchParams({...})` tüm parametreleri ezer → hoca `query`'yi prop'la taşıdı; çözüm: fonksiyonlu güncelleme
- Sayfalama: page/totalPages → ileri/geri + disabled; senior: butonlar link olmalı, Pagination URL'yi bilmemeli
- Tuzak: `q` değişince sayfa 1'e dönmeli
- Ekrandaki kod: cleanup/iptal yok, `encodeURIComponent` yok, 3 ayrı state (imkânsız durumlar), anahtar frontend'de
- Frontend'de sır saklanamaz (`VITE_` bundle'a girer) → backend proxy, Ekim'in işi
