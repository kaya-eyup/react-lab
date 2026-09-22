import type { Movie } from "../../gun-28/types";
import styles from "../05-css-modules/MovieDetails.module.css"

type MovieDetailsProps = {
  movie: Movie | undefined;
};
export function MovieDetails({ movie }: MovieDetailsProps) {
  if (!movie) {
    return <p>Movie not found.</p>;
  }
  const badge = movie.year < 2010 ? "Klasik" : "Yeni";
  return (
    <article className={styles.card}>
      <h3>
        {movie.title} — <span>{badge}</span>
      </h3>
      {movie.description && <p>{movie.description}</p>}
    </article>
  );
}
  