// Courtesy TMDB Movie database API

const API_KEYY = "f1f50d42b515c8ba85e1478b56a4d418";

const requests = {
  fetchTrending: `/trending/all/week?language=en-US&api_key=${API_KEYY}`,
  fetchNetflixOriginals: `/discover/tv?with_networks=213&api_key=${process.env.REACT_APP_API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEYY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEYY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEYY}&with_genres=99`,
};

export default requests;
