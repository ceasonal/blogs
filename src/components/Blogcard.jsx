import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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
          <CardContent>
            <Chip
              label={props.category}
              variant="outlined"
              style={{ marginBottom: 10, borderColor: "#ff5733" }}
            />
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.desc.slice(0, 180)}...
            </Typography>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={props.authorIcon}
                  alt={props.author}
                  style={{
                    width: "10%",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                <div>
                  <Typography variant="subtitle" style={{ color: "#ff5733" }}>
                    {props.author}
                  </Typography>
                  <br />
                  <Typography variant="caption" color="textSecondary">
                    {props.date}
                  </Typography>
                </div>
              </div>
              <span style={{ marginLeft: "5px" }}>
                <Link to={`/blog/${props.id}`} style={{ color: "#ff5733" }}>
                  <ArrowRightAltIcon />
                </Link>
              </span>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
