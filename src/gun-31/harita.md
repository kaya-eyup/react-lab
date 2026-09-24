# Gün 31 — Harita (335-340)

- hoca js ile yaptığı shopping listi aşağıdaki adımlar ile jsx'e çevirdi.
  ✏️ Değişen sadece sözdizimi (JSX) değil, düşünme biçimi. JS'te DOM'u elle
  güncelliyordun (createItem, appendChild). React'ta "state şu, ekran
  şöyle görünsün" diye tarif ediyorsun, DOM'u React güncelliyor.
- başlık, ekleme formu, liste boş uyarısı, filtre butonları, liste itemleri ve
  temizleme butonu ayrı dosyalarda komponent; App.tsx içinde çağrılıyor, App de
  main içinde. ağaç tamam.
  ➕ Ağacı kurmak kolay kısım. Asıl soru: veri (liste, seçili filtre) bu ağacın
  HANGİ kutusunda duracak, ve diğer kutular ona nasıl ulaşacak?
- dün yazdığımız ItemForm.tsx güzel bi temel, bi iki eksik hariç uygulamanın
  kendisi bile sayılabilir.
  ✏️ Tek parçayken öyle. Ama ItemForm listeyi kendi içinde tutuyor, ve bölünme
  başladığı an sorun tam bu olacak. Liste formun içindeyse, formun
  kardeşi olan ItemList o listeyi göremez.
- itemlere completed/incomplete için checkbox, silmek için çarpı işareti.
  ➕ Checkbox'ın controlled hâli `value` değil `checked` ile kurulur. Bu 4.
  sorudaki kuralın aynısı: `checked` verip `onChange` vermezsen tıklanmaz.
- hepsi ayrı komponentlerde olunca state yönetimi kafamı karıştırdı.
  ➕ Karışıklığın sebebi belli: veri tek yerde durmak zorunda, ama onu okuyan
  ve değiştiren birden çok bileşen var. Bugünkü KOD bloğu tam bunu kuruyor.
