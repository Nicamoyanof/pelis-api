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


export const getMovieTrailer = async (num) => {


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

  const randomNum = response.results[randomize(response.results)]

  return randomNum!=undefined?randomNum:null
};

export const getMovieTrailerError = async () => {

  const rawResponse = await fetch(
    `https://api.themoviedb.org/3/movie/297761?api_key=e70366b2637b3709a898c38f0bc5bfab&language=es-MX`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
  const response = await rawResponse.json();

  return response
};



export const getPageMovieTotal = async (genre) => {

  let arrListSeries = [];

  const rawResponse = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e70366b2637b3709a898c38f0bc5bfab&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      1
    }&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response1 = await rawResponse.json();
  arrListSeries.push(response1.results)

  const rawResponse2 = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e70366b2637b3709a898c38f0bc5bfab&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      2
    }&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response2 = await rawResponse2.json();
  arrListSeries.push(response2.results)

  const rawResponse3 = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e70366b2637b3709a898c38f0bc5bfab&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      3
    }&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response3 = await rawResponse3.json();
  arrListSeries.push(response3.results)

  const rawResponse4 = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e70366b2637b3709a898c38f0bc5bfab&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      4
    }&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response4 = await rawResponse4.json();
  arrListSeries.push(response4.results)

  const rawResponse5 = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e70366b2637b3709a898c38f0bc5bfab&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      5
    }&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response5 = await rawResponse5.json();
  arrListSeries.push(response5.results)

  const rawResponse6 = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e70366b2637b3709a898c38f0bc5bfab&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      6
    }&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response6 = await rawResponse6.json();
  arrListSeries.push(response6.results)

  const rawResponse7 = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e70366b2637b3709a898c38f0bc5bfab&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      7
    }&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response7 = await rawResponse7.json();
  arrListSeries.push(response7.results)

  const rawResponse8 = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e70366b2637b3709a898c38f0bc5bfab&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      8
    }&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response8 = await rawResponse8.json();
  arrListSeries.push(response8.results)

  const rawResponse9 = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e70366b2637b3709a898c38f0bc5bfab&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      9
    }&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response9 = await rawResponse9.json();
  arrListSeries.push(response9.results)

  const rawResponse10 = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e70366b2637b3709a898c38f0bc5bfab&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      10
    }&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response10 = await rawResponse10.json();
  arrListSeries.push(response10.results);

  const arrFinal = [];

  arrListSeries.forEach((item) => {
    item.forEach((element) => {
      arrFinal.push(element);
    });
  });


  return arrFinal

};



export const randomize = data => (
  Math.floor(Math.random() * data.length - 1)
);







export const getPopMovieTotal = async (genre) => {

  let arrListSeries = [];
  
  const rawResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e70366b2637b3709a898c38f0bc5bfab&page=1&language=es`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response1 = await rawResponse.json();
  arrListSeries.push(response1.results)

  const rawResponse2 = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e70366b2637b3709a898c38f0bc5bfab&page=2&language=es`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response2 = await rawResponse2.json();
  arrListSeries.push(response2.results)

  const rawResponse3 = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e70366b2637b3709a898c38f0bc5bfab&page=3&language=es`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response3 = await rawResponse3.json();
  arrListSeries.push(response3.results)

  const rawResponse4 = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e70366b2637b3709a898c38f0bc5bfab&page=4&language=es`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response4 = await rawResponse4.json();
  arrListSeries.push(response4.results)

  const rawResponse5 = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e70366b2637b3709a898c38f0bc5bfab&page=5&language=es`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response5 = await rawResponse5.json();
  arrListSeries.push(response5.results)

  const rawResponse6 = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e70366b2637b3709a898c38f0bc5bfab&page=6&language=es`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response6 = await rawResponse6.json();
  arrListSeries.push(response6.results)

  const rawResponse7 = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e70366b2637b3709a898c38f0bc5bfab&page=7&language=es`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response7 = await rawResponse7.json();
  arrListSeries.push(response7.results)

  const rawResponse8 = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e70366b2637b3709a898c38f0bc5bfab&page=8&language=es`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response8 = await rawResponse8.json();
  arrListSeries.push(response8.results)

  const rawResponse9 = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e70366b2637b3709a898c38f0bc5bfab&page=9&language=es`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response9 = await rawResponse9.json();
  arrListSeries.push(response9.results)

  const rawResponse10 = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e70366b2637b3709a898c38f0bc5bfab&page=10&language=es`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const response10 = await rawResponse10.json();
  arrListSeries.push(response10.results);

  const arrFinal = [];

  arrListSeries.forEach((item) => {
    item.forEach((element) => {
      arrFinal.push(element);
    });
  });

  return arrFinal
}