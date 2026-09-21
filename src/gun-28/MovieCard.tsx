
export type MovieCardProps = {
  title: string;
  year: number;
  description?: string;
};


export function MovieCard({ title, year, description="no description" }: MovieCardProps) { // tipsiz any olabilir uyarısı.
  return (
    <article className="movie-card">
      <h2>{title} ({year})</h2>
      <p>{description}</p>
    </article>
  );
}

