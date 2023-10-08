import React from "react";
import Navbar from "../components/Navbar";
import Blogcard from "../components/Blogcard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "../components/Footer";
import MainFeaturedPost from "../components/Mainfeatured";
import { blogList } from "../config/data";
import Grid from "@mui/material/Grid";

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
          <div style={{ marginLeft: 50 }}>
            {" "}
            <Grid container spacing={3}>
              {blogList.map((post) => (
                <Grid item key={post.id} xs={12} sm={6} md={4}>
                  <Blogcard
                    id={post.id}
                    title={post.title}
                    desc={post.desc.slice(0, 50)}
                    category={post.category}
                    cover={post.cover}
                    date={post.date}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
          <br />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Home;
