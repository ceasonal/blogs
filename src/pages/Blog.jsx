import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogList } from "../config/data";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";

const Blog = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    let blogs = blogList.find((blogs) => blogs.id === parseInt(id));
    if (blogs) {
      setBlogs(blogs);
    }
  }, [id]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        {blogs ? (
          <>
            <section>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <img src={blogs.cover} alt="" style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Link to="/home" style={{ textDecoration: "none" }}>
                    <Typography variant="button" color="primary">
                      &lt; Back to Home
                    </Typography>
                  </Link>
                  <Typography variant="h4" gutterBottom>
                    {blogs.title}
                  </Typography>
                  <Typography variant="body1">{blogs.desc}</Typography>
                  <Typography variant="body1">
                    {/* Add your blogs content here */}
                  </Typography>
                  <Typography variant="subtitle2">
                    Author: {blogs.authorName}
                  </Typography>
                </Grid>
              </Grid>
            </section>
          </>
        ) : null}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Blog;
