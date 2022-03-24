export const getGenres = async () => {
  const rawResponse = await fetch(
    "https://api.themoviedb.org/3/genre/tv/list?api_key=e70366b2637b3709a898c38f0bc5bfab&language=es",
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

export const getTotalList = async (list) => {
  const rawResponse = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=e70366b2637b3709a898c38f0bc5bfab&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${list}&with_watch_monetization_types=flatrate`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
  const response = await rawResponse.json();

  return response;
};
