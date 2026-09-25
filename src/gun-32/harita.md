# Gün 32 — Kurs haritası (341-347)

## Hocanın ShoppingList / MovieApp çözümü

- Filtre butonları elle, tek tek yazılmış (tip ve seçenekler tek kaynaktan türetilmiyor)
- "Temizle" listenin tamamını siliyor, onay istemiyor
- Boş durum tek: sadece hiç öğe yoksa mesaj; "filtreye uyan yok" ayrımı yok
- Ekleme: önce listede var mı diye bakıyor (map ile id'leri çıkarıp includes), yoksa spread ile ekliyor
- Silme: filter ile, id'si eşleşmeyenlerden yeni dizi (bizimkiyle aynı)

## Yeni kavram: prop drilling ve composition

- Prop drilling: bir prop'un, onu kullanmayan ara bileşenlerden sırf aşağıya ulaşmak için geçirilmesi
- Composition: ara bileşen içeriği kendisi çizmez, children olarak dışarıdan alır → ara bileşen o prop'ları taşımak zorunda kalmaz
- Bedeli: JSX, verinin olduğu üst bileşene taşınır, üst bileşen uzar. Bu bir yan etki değil, takasın kendisi

## Benim çözümümle fark

- Ben filtreyi render sırasında türettim, boş durumları ayırdım, "alınanları temizle" yaptım
- Hoca iki yerde varlık kontrolü yaptı (ekleme öncesi), bende yok: aynı ürün iki kez eklenebiliyor
