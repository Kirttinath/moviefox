const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=4c9ee7f4edf4c053c1c98c62bbb6b11b";

const fetchMovieData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchMovieData;
