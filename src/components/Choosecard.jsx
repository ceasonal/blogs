import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {  CardActionArea } from "@mui/material";

export default function AboutUsCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {props.header}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.para}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
