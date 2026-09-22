import type { Movie } from "../../gun-28/types";

type MovieListProps = {
  movies: Movie[];
};

export function MovieList({ movies }: MovieListProps) {
  return (
    <ul>
      {movies.map((movie) => (
          <li key={movie.id}>{movie.title} { movie.year}</li>
      ))}
    </ul>
  );
}
