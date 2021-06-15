import Card from "../components/Card";
import { useEffect, useState } from "react";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    requestMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestMovies() {
    const res = await fetch(
      "https://data-imdb1.p.rapidapi.com/movie/order/byPopularity/",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3f3b6c3a54msh8638430a53898abp134a43jsnaea9a46de60f",
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        },
      }
    );
    const json = await res.json();
    setMovies(json);
  }

  return (
    <div className="popular">
      <h1>Popular na Netflix</h1>
      {movies.length === 0 ? (
        <h1>No Movies Found</h1>
      ) : (
        <div className="container">
          {movies["Movie Order By Popularity"].slice(0, 10).map((movie) => {
            return (
              <Card
                key={movie.imdb_id}
                imdb_id={movie.imdb_id}
                title={movie.title}
                popularity={movie.popularity}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Popular;
