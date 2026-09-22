import type { Movie } from "../../gun-28/types";
import { MovieList } from "../02-list/MovieList";
import { type FetchState, assertNever } from "./types";

type MovieListViewProps = {
  state: FetchState<Movie[]>;
};

export function MovieListView({ state }: MovieListViewProps) {
  switch (state.status) {
    case "loading":
      return <p>Yükleniyor…</p>;

    case "error":
      return <p>Hata: {state.message}</p>;

    case "success":
      if (state.data.length === 0) {
        return <p>Henüz film yok.</p>;
      }
      return <MovieList movies={state.data} />;

    default:
      return assertNever(state);
  }
}