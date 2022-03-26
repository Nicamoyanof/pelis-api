export const getMoviesPopular = async (page) => {
  const rawResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e70366b2637b3709a898c38f0bc5bfab&page=1&language=es`,
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

export const getMoviesSimilar = async (slug) => {
  const rawResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${slug}/similar?api_key=e70366b2637b3709a898c38f0bc5bfab&language=es&page=1`,
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

export const getMovieGenres = async (genre) => {
  const rawResponse = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e70366b2637b3709a898c38f0bc5bfab&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`,
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


export const getMovieTrailer = async () => {

  const randomNumPage = (Math.floor(Math.random() * (5 - 1 + 1) + 1))

  const rawResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e70366b2637b3709a898c38f0bc5bfab&page=${randomNumPage}&language=es-MX`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
  const response = await rawResponse.json();

  const randomNum = (Math.floor(Math.random() * (20 - 1 + 1) + 1))

  return response.results[randomNum]
};