import type { Movie } from "../../gun-28/types";

type MovieDetailsProps = {
  movie: Movie | undefined;
};
export function MovieDetails({ movie }: MovieDetailsProps) {
  if (!movie) {
    return <p>Movie not found.</p>;
  }
  const badge = movie.year < 2010 ? "Klasik" : "Yeni";
  return (
    <article style={{ marginBottom: "12px" }}>
      <h3>
        {movie.title} — <span>{badge}</span>
      </h3>
      {movie.description && <p>{movie.description}</p>}
    </article>
  );
}
