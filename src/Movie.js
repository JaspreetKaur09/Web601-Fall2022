import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Movie(props) {
  const [movieage, setMovieage] = useState(2022 - props.year);
  

  return (
    <React.Fragment>
      <CardContent>
        <Card title="Movie Info"style={{backgroundColor: "#00acc1", paddingLeft:'18px'}}>
          <h2>{props.title}</h2>
          <h2>{props.year}</h2>
          <h2>{props.genre}</h2>
          <h2>{props.director}</h2>
          <h2>{movieage}</h2>
        </Card>
      </CardContent>
    </React.Fragment>
  );
}
