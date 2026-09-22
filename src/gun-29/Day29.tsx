import { Panel } from "./01-children/Panel";
import { MovieDetails } from "./03-conditional/MovieDetails";
import { CommentCount } from "./03-conditional/CommentCount";
import { movies } from "./data";

export function Day29() {
  return (
    <main>
      <Panel title="Koşullu Çizim">

        <MovieDetails movie={movies.find((m) => m.id === 1)} />
        <MovieDetails movie={movies.find((m) => m.id === 2)} />
        <MovieDetails movie={movies.find((m) => m.id === 3)} />
        <MovieDetails movie={movies.find((m) => m.id === 99)} />

        <hr/>

        <CommentCount count={5} />  
        <CommentCount count={0} />  
      </Panel>
    </main>
  );
}