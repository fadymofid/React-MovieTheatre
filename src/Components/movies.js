import React from "react";
import axios from "axios";
import { Container, Typography, Card, CardContent, CardMedia } from "@mui/material";
import '../components/Movie.css'
class Movies extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      movie: null,
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      )
      .then((res) => this.setState({ movie: res.data }));
  }

  render() {
    const { movie } = this.state;

    if (!movie) return <div>Loading...</div>;

    return (
      <div className="page-container">
   <Container maxWidth="lg">
        
        <div>
          {movie.results.map((m) => (
            <Card key={m.id} >
              <CardMedia
                component="img"
                alt={m.title}
                height="80%"
                image={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
              />
              <CardContent style={{backgroundColor:"midnightblue"}}>
                <Typography variant="h6" >{m.title}</Typography>
                <Typography variant="body2">{m.overview}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
      </div>
   
    );
  }
}

export default Movies;