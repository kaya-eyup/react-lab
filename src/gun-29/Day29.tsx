import { Panel } from "./01-children/Panel.tsx";

export function Day29() {
  return (
    <main>
      {/* 0 */}
      <h1>Gün 29</h1>
      {/* 1. Sadece metin */}
      <Panel title="Metin">Sadece yazı</Panel>

      {/* 2. Tek etiket */}
      <Panel title="Tek Etiket">
        <p>KPSS Tarih notu: 1921 Anayasası ilk teşkilat-ı esasiyedir.</p>
      </Panel>

      {/* 3. İki etiket: bir p ve bir button */}
      <Panel title="İki Etiket">
        <p>Bu soruyu ezber listene eklemek ister misin?</p>
        <button type="button">Listeye Ekle</button>
      </Panel>

      {/* 4. Sayı */}
      <Panel title="Sayı">{42}</Panel>
    </main>
  );
}
