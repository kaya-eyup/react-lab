# Gün 29 — harita (325-330)

## Props
- ✏️ Hoca prop'ları doğrudan fonksiyonun parametresine alıyor; JS yazdığı için tip yok.
- İki yazım var: `props.title` ya da parametrede destructuring `{ title, year }`. Hoca destructuring'in daha yaygın olduğunu söyledi.
  ➕ Sebebi: imza, bileşenin hangi prop'ları kullandığını tek bakışta gösterir; varsayılan değer de orada yazılır (`{ year = 2000 }`).
- ➕ `children` haritada yok → Parça 1'de sıfırdan kuruyoruz.

## Listeler
- Nesne dizisi `map` ile elemanlara çevriliyor: `(m, index) => <X key={index} obj={m} />`. Hoca `key={index}` kullandı.
- ✏️ Bence `id` daha güvenilir. Sıra kaydığında (başa ekleme, silme, sıralama, süzme) `index` artık aynı satırı göstermiyor → 6. parçadaki deney bunu sınıyor.
- ➕ `key` yalnızca kardeşler arasında benzersiz olmalı, tüm uygulamada değil.

## Koşullu çizim
- `&&`: şart doğruysa çizer, değilse hiçbir şey çizmez.
  ✏️ `undefined`, `null`, `true`, `false` → ekrana hiçbir şey basılmaz. Ama `&&` solundaki değeri döndürür ve bazı değerler ekrana basılır → Parça 3.
- `? :` iki farklı sonuç için.
- ➕ `{}` içine yalnızca değer üreten şey (ifade / expression) girer. `if` değer üretmez, karar verir (deyim / statement). Bu yüzden `if-else` JSX'in içine yazılamaz, `return`'den önce yazılır. JSX'te üçlü operatörün bu kadar yaygın olmasının sebebi bu.
- ✏️ Durum sayısı 3 ya da daha fazlaysa (bizim `FetchState`): `switch` + `assertNever` ya da erken `return`. İç içe `? :` okunmaz hâle gelir.

## Stiller
- ➕ JSX'te `class` değil `className` yazılır. JSX JS nesnesine dönüşüyor, `class` ise JS'te ayrılmış bir kelime.
- Hoca stilleri `.css`'te tanımlayıp şarta göre sınıf ekledi. Örnek: yeni filmin resminin sağ üstüne "new" rozeti.
  ➕ Yazımı: ``className={`card ${isNew ? "card--new" : ""}`}``
- ➕ Normal `.css` importu küresel: bir dosyadaki `.card` her yerdeki `.card`'ı boyar → Parça 5.
- Bootstrap npm paketi olarak kuruldu ve `main`'de import edildi.
  ➕ Bootstrap'in CSS'i React'le sorunsuz çalışır. JS'i (açılır menü, modal) ise DOM'a doğrudan dokunduğu için React'le çatışabilir. React projelerinde bu yüzden `react-bootstrap` gibi sarmalayıcılar kullanılır.

## Dosya yapısı
- Bileşenler `src` altında ayrı bir klasörde duruyor (capstone #1'deki `views` gibi). Hepsi `App.jsx`'te toplanıp `main`'e veriliyor.
- ✏️ Hiçbir şey otomatik değil, her dosya kapalı bir kutu. Bir bileşen başka dosyada ancak orada `export`, burada `import` edilirse görünür. JS'te import'u unutursan hatayı tarayıcıda, sayfa çizilirken alırsın; TS'te ise editörde, yazarken.
- ➕ `export default`: dosya başına bir tane olur ve alan taraf adı istediği gibi koyar, bu yüzden adlar dosyadan dosyaya kayabilir. Biz adlandırılmış dışa aktarma kullanıyoruz (Gün 28 kararı).