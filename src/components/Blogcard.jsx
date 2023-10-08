import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function Blogcard(props) {
  return (
    <div className="container grid3">
      <Card key={props.id} sx={{ maxWidth: 345 }} className="box boxItems">
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={props.cover}
            alt={props.title}
          />
          <CardContent className="details">
            <div>
              <a href="/">#{props.category}</a>
            </div>
            <Link to={`/blog/${props.id}`}>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary">
              {props.desc.slice(0, 180)}...
            </Typography>
            <div className="date">
              <label htmlFor="">{props.date}</label>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
