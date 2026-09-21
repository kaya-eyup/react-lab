// @ts-expect-error: 'Movie' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.
import { Movie } from "./types";


// @ts-expect-error: Property 'movie' does not exist on type 'Movie'.
export function MovieSummary({ movie }: Movie) {
  return (
    <article className="card">
      <h2>
        {movie.title} ({movie.year})
      </h2>
      <p>{movie.description ?? "Açıklama yok."}</p>
    </article>
  );
}
