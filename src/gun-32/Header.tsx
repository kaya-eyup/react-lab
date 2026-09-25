interface HeaderProps {
  total: number;
  completed: number;
}

export function Header({ total, completed }: HeaderProps) {
  return (
    <header>
      <h1>Alışveriş Listesi</h1>
      <p>
        {total} üründen {completed} tanesi alındı
      </p>
    </header>
  );
}
