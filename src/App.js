import Movie from "./Movie";
import { BsCameraReelsFill } from "react-icons/bs";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


function App() {
  const movieList = [
    {
      title: "The Godfather",
      year: "1972",
      genre: "Drama",
      director: "Francis Ford Capolla",
    },
    {
      title: "Superbad",
      year: "2007",
      genre: "Comedy",
      director: "Greg Mottola",
    },
    {
      title: "The Departed",
      year: "2006",
      genre: "Drama",
      director: "Martin Scorsese",
    },
    {
      title: "Saving Private Ryan",
      year: "1998",
      genre: "Action",
      director: "Steven Spielberg",
    },
    {
      title: "The Expendables",
      year: "2010",
      genre: "Action",
      director: "Sylvester Stallone",
    },
  ];

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <h1>
            <em>
              <BsCameraReelsFill /> Movie Villa
            </em>
          </h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 14 }}
          
        >


          {movieList.map((movieObj) => {
            return (
              <Grid item xs={2} sm={3} md={3} key={movieObj}>
              <Movie
                title={movieObj.title}
                year={movieObj.year}
                genre={movieObj.genre}
                director={movieObj.director}
              />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
