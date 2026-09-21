import type { Movie } from "./types";
import { MovieSummary } from "./MovieSummary";
import { SiteHeader } from "./SiteHeader";
import { MovieCard } from "./MovieCard";

const A: Movie = {
  id: 1,
  title: "Inception",
  year: 2010,
  description: "dream inside of dream.",
};
const B: Movie = { id: 2, title: "Interstellar", year: 2014 }; // açıklamasız, bu da geçerli

export function Day28() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* MovieCard: Değerler tek tek (primitive) geçiliyor */}
        <MovieCard title={A.title} year={A.year} description={A.description} />
        <MovieCard title={B.title} year={B.year} description={B.description} />

        {/* MovieSummary: Objenin tamamı tek prop olarak geçiliyor */}
        <MovieSummary movie={A} />
        <MovieSummary movie={B} />
      </main>
    </>
  );
}
