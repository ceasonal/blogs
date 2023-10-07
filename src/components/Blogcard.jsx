import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { blog } from "../config/data";

export default function Blogcard() {
  return (
    <div className="container grid3">
      {blog.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345 }} className="box boxItems">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.cover}
              alt={item.title}
            />
            <CardContent className="details">
              <div>

                <a href="/">#{item.category}</a>
              </div>
              <Link to={`/blog/${item.id}`}> 
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
              </Link>
              <Typography variant="body2" color="text.secondary">
                {item.desc.slice(0, 180)}...
              </Typography>
              <div className="date">

                <label htmlFor="">{item.date}</label>
                
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
