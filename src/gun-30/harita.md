# Gün 30 — Dersler 331-334: useState'e giriş

## State neden var?
- Normal değişken (`let index = 0`) iki yüzden işe yaramaz:
  1. Değişince React haberdar olmaz → ekran güncellenmez
  2. Component fonksiyonu her çizimde baştan çalışır → değer yine 0'a döner
- State: component'in çizimler arasında hatırladığı veri. Değişince React component'i yeniden çalıştırır (re-render).
- Re-render ≠ sayfayı sıfırdan yazmak. React eski ve yeni sonucu karşılaştırır, DOM'da yalnız farkı değiştirir.

## Hoca ne yaptı?
- `const [index, setIndex] = useState(0)` → [şu anki değer, değiştirme fonksiyonu]
- `const sculpture = sculptureList[index]` → her render'da index'e göre seçiliyor (ayrıca state'e konmadı)
- İleri/geri butonlarının onClick'i setIndex'i çağırıyor
- Tuzak: sınır kontrolü yoksa son elemandan sonra `undefined.name` → çökme

## Kural
- `use` ile başlayan React fonksiyonları (hook) component'in en üst seviyesinde çağrılır, if veya döngü içinde çağrılmaz.

## Bu derslerde olmayan (KOD bloğunda gelecek)
- Input okuma (controlled input), form submit + preventDefault, olay tipleri