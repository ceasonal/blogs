import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from '@mui/icons-material/Send';
import testimage from "../images/featured.png";

export default function MainFeaturedPost() {

  return (
    <Paper
      sx={{
        position: "relative",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${testimage})`,
        marginLeft: "35px",
        marginRight: "35px",
      }}
    >
      {<img style={{ display: "none" }} src={testimage} alt={"abc"} />}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Got something to say?
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              Write a blog post and share it with the world!
            </Typography> <br/>
            <Button  variant="outlined" endIcon={<SendIcon />} href="/create">
              Create Post
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
