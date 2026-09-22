import { Panel } from "./01-children/Panel.tsx";
import { movies } from "./data.ts";
import { MovieList } from "./02-list/MovieList.tsx";

export function Day29() {
  return (
    <main>
      <Panel title="Movies">
        <MovieList movies={movies} />
      </Panel>
    </main>
  );
}
