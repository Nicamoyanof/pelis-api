export const getSeriesPopular = async () => {
  const rawResponse = await fetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=e70366b2637b3709a898c38f0bc5bfab&page=1&language=es",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response = await rawResponse.json();
  return response.results;
};

export const getSeriesSimilar = async (slug) => {
    const rawResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${slug}/similar?api_key=e70366b2637b3709a898c38f0bc5bfab&language=es&page=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    const response = await rawResponse.json();
    return response.results
  };


export const getSerieGenres = async (genre) => {
    const rawResponse = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=e70366b2637b3709a898c38f0bc5bfab&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    const response = await rawResponse.json();
    return response.results
  };