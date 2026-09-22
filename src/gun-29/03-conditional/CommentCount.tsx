type CommentCountProps = {
  count: number;
};

export function CommentCount({ count }: CommentCountProps) {
  return (
    <p>
      {count > 0 ? `${count} yorum` : "Henüz yorum yok"}
    </p>
  );
}


