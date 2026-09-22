import { Panel } from "./01-children/Panel";
import { MovieDetails } from "./03-conditional/MovieDetails";
// import { CommentCount } from "./03-conditional/CommentCount";
import { movies } from "./data";
// import { MovieListView } from "./04-union/MovieListView";
// import { loadingState, errorState, emptyState, successState } from "./data";
export function Day29() {
  return (
    <main>
      <Panel title="CSS"> 
        <MovieDetails movie={movies.find((m) => m.id === 1)} />{" "}
      </Panel>
    </main>
  );
}
