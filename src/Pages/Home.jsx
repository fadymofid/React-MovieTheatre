import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../contexts/MovieContext";

const Home = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
<ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap" }}>     
   {movies.map((movie) => (
               <li key={movie.id} style={{ margin: "10px", textAlign: "center" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "#025464",
                fontWeight: "bold",
                
              }}
              to={`/details/${movie.id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;