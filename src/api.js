const topRated = [
  {
    id: 1,
    title: "Inception",
    poster_path: "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    vote_average: 8.8,
    releaseDate: "2010-07-16",
    description:
      "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets ",
  },
  {
    id: 2,
    title: "Interstellar",
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    vote_average: 8.6,
    releaseDate: "2014-11-07",
    description:
      "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    vote_average: 9.0,
    releaseDate: "2008-07-18",
    description:
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to  dismantle the remaining criminal organizations that plague the city streets.",
  },
  {
    id: 4,
    title: "The Matrix",
    poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    vote_average: 8.7,
    description:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    releaseDate: "1999-03-30",
  },
  {
    id: 5,
    title: "Fight Club",
    poster_path: "/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    vote_average: 8.8,
    description: "A ticking-time-bomb insomniac and a slippery soap salesman",
    releaseDate: "1999-10-15",
  },
];
const popular = [
  {
    id: 11,
    title: "Shang-Chi and the Legend of the Ten Rings",
    poster_path: "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
    vote_average: 7.9,
    description:
      "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
  },
  {
    id: 12,
    title: "Free Guy",
    poster_path: "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
    vote_average: 7.8,
    description:
      "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
  },
  {
    id: 13,
    title: "Black Widow",
    poster_path: "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    vote_average: 7.4,
    description:
      "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
  },
  {
    id: 14,
    title: "Jungle Cruise",
    poster_path: "/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
    vote_average: 7.5,
    description:
      "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat ",
  },
  {
    id: 15,
    title: "The Suicide Squad",
    poster_path: "/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
    vote_average: 7.6,
    description: "",
  },
];

const upcoming = [
  {
    id: 6,
    title: "Dune",
    poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    releaseDate: "2021-10-22",
    description: "",
  },
  {
    id: 7,
    title: "No Time to Die",
    poster_path: "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    releaseDate: "2021-10-08",
  },
  {
    id: 8,
    title: "The French Dispatch",
    poster_path: "/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
    releaseDate: "2021-10-22",
    description: "",
  },
  {
    id: 9,
    title: "Eternals",
    poster_path: "/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
    releaseDate: "2021-11-05",
    description: "",
  },
  {
    id: 10,
    title: "Ghostbusters: Afterlife",
    poster_path: "/sg4xJaufDiQl7caFEskBtQXfD4x.jpg",
    releaseDate: "2021-11-19",
    description: "",
  },
];

export const fetchTopRatedMovies = async () => {
  return [...topRated, ...topRated, ...topRated];
};

export const fetcComingMovies = async () => {
  return [...upcoming, ...upcoming, ...upcoming];
};

export const fetchPopularMovies = async () => {
  return [...popular, ...popular, ...popular];
};
