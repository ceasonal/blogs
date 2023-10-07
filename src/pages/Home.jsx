import React from "react";
import Navbar from "../components/Navbar";
import Blogcard from "../components/Blogcard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";
import MainFeaturedPost from "../components/Mainfeatured";
import { blog, blog2, blog3 } from "../config/data";
; // Import the blog data from data.js

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Home = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <div
          style={{
            backgroundColor: darkTheme.palette.background.default,
            minHeight: "100vh",
          }}
        >
          <br />
          <MainFeaturedPost />
          <br />
          <Typography align="center" color="textPrimary">
            Trending Now
          </Typography>
          <br />

          {/* Map through the blog data and create Blogcard components */}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {blog.map((post) => (
              <Blogcard
                key={post.id}
                id={post.id}
                title={post.title}
                desc={post.desc.slice(0, 50)}
                category={post.category}
                cover={post.cover}
                date={post.date}
              />
            ))}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {blog2.map((post) => (
              <Blogcard
                key={post.id}
                id={post.id}
                title={post.title}
                desc={post.desc.slice(0, 50)}
                category={post.category}
                cover={post.cover}
                date={post.date}
              />
            ))}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {blog3.map((post) => (
              <Blogcard
                key={post.id}
                id={post.id}
                title={post.title}
                desc={post.desc.slice(0, 50)}
                category={post.category}
                cover={post.cover}
                date={post.date}
              />
            ))}
          </div>

          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Home;
