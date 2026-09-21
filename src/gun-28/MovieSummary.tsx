import type { Movie } from "./types";

export function MovieSummary({ movie }: { movie: Movie }) {
  return (
    <article className="card">
      <h2>
        {movie.title} ({movie.year})
      </h2>
      <p>{movie.description ?? "No description."}</p>
    </article>
  );
}
