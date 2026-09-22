import type { Movie } from "../gun-28/types";
import type { FetchState } from "./04-union/types";

// Sabit veri: bileşenin dışında, her çizimde yeniden oluşmasın
export const movies: Movie[] = [
  {
    id: 1,
    title: "Eşkıya",
    year: 1996,
    description:
      "35 yıl sonra cezaevinden çıkan Baran'ın İstanbul'daki arayışı.",
  },
  { id: 2, title: "Babam ve Oğlum", year: 2005 },
  {
    id: 3,
    title: "Kış Uykusu",
    year: 2014,
    description: "Kapadokya'da bir otelde geçen karakter dramı.",
  },
];



export const loadingState: FetchState<Movie[]> = { status: "loading" };
export const errorState: FetchState<Movie[]> = {
  status: "error",
  message: "Sunucuya ulaşılamadı.",
};
export const emptyState: FetchState<Movie[]> = { status: "success", data: [] };
export const successState: FetchState<Movie[]> = {
  status: "success",
  data: movies,
};
