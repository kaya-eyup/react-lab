# Gün 35 — Kurs haritası

- MovieDetails sayfası: çoğu süre HTML/CSS düzeni (bizim projede zaten var, atlandı)
- Veri çekme: async/await + fetch, res.ok değilse throw
- useParams ile URL'deki id alınıp o id'ye göre detay çekiliyor
- Liste → detay akışı: kart tıklanır → /movies/:id → detay sayfası kendi verisini kendi çeker

## Hocanın kodunda olmayanlar (Gün 33'te benim yazdıklarım)

| Eksik           | Sonucu                                                   | TanStack Query'de                |
| --------------- | -------------------------------------------------------- | -------------------------------- |
| Cleanup / iptal | Hızlı geçişte eski cevap yeni ekranın üstüne yazılabilir | queryFn'e gelen signal ile iptal |
| Hata ekranı     | throw var ama yakalayıp gösteren yok                     | status === "error"               |
| Yarış durumu    | id hızlı değişirse yanlış filmin detayı kalabilir        | Her id ayrı queryKey             |
| Önbellek        | Detaydan listeye dönünce liste yeniden iner              | Aynı key → depodan anında        |

Not: throw etmek doğru (veri katmanı fırlatır), eksik olan yakalayan katman.
