export const getMovieId = async (slug) => {
  const rawResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${slug}?api_key=e70366b2637b3709a898c38f0bc5bfab&language=es-MX`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response = await rawResponse.json();
  return response;
};

export const getMovieCredits = async (slug) => {
const rawResponse = await fetch(
  `https://api.themoviedb.org/3/movie/${slug}/credits?api_key=e70366b2637b3709a898c38f0bc5bfab&language=es-MX`,
  {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }
);
const response = await rawResponse.json();
return response;
};
