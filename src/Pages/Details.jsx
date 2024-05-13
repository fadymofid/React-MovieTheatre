import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../contexts/MovieContext";

const Details = () => {
  const { id } = useParams();
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectedMovie(data);
      });
  }, [id, setSelectedMovie]);

  if (!selectedMovie) {
    return <p>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{selectedMovie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`}
        alt={`${selectedMovie.title} Poster`}
        style={styles.poster}
      />
      <p style={styles.overview}>{selectedMovie.overview}</p>
      <p style={styles.info}>Release Date: {selectedMovie.release_date}</p>
      <p style={styles.info}>Popularity: {selectedMovie.popularity}</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color:"#025464"
  },
  poster: {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "10px",
  },
  overview: {
    fontSize: "16px",
    marginBottom: "10px",
    fontStyle:"oblique",
    color:"#025464"
  },
  info: {
    fontSize: "14px",
    marginBottom: "5px",
  },
};

export default Details;
