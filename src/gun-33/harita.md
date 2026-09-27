# Gün 33 — Kurs haritası (348-353)

- Render gövdesinde fetch → setState → yeni render → yine fetch = sonsuz döngü. Yan etki render'da çalışmaz.
- useEffect: render ekrana basıldıktan SONRA çalışır; bileşeni dış dünyayla (ağ, zamanlayıcı, DOM) eşitlemek için var.
- Dependency array = effect'in kullandığı render değerlerinin dökümü; ayar değil. Yok → her render, [] → sadece mount, [x] → x değişince.
- Eksik bağımlılık = stale closure: effect eski fotoğrafla yaşar, hata vermez, sessizce yanlış çalışır. Denetçi: react-hooks/exhaustive-deps.
- Karşılaştırma referansla (Object.is): render'da yeni doğan nesne/dizi listede → effect her render'da.
- Yaşam döngüsü: mount (ilk yerleşme) · re-render (state/prop değişimi) · unmount (DOM'dan kalkma).
- StrictMode: YALNIZCA geliştirmede mount → unmount → mount yapar; istek iki kez gider. Canlıda bir kez.
- Effect fonksiyonu async olamaz; içeride async fonksiyon tanımlanıp çağrılır.
- fetch 404/500'de reddetmez → response.ok kontrolü (200 değil, 200-299).
- setLoading(false) → finally'de bir kez.
- Kursun eksiği: cleanup yok → yarış durumu. Bugün AbortController ile kapatılacak.
- Kursun eksiği: loading/error/movies üç ayrı state → imkânsız kombinasyonlar. Bizde FetchState<T>.
- Status → mesaj eşleştirmesi saf fonksiyon (veri katmanı); ErrorMessage sadece gösterir.
- Backend hata KODU verir (RFC 9457 Problem Details), metni frontend seçer; ağ/zaman aşımı/iptal sadece frontend'in bildiği hatalar.
- API anahtarı frontend'de gizlenemez; VITE_ env sadece git'ten gizler.
