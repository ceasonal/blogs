import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogList } from "../config/data";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import user1 from "../images/user1.png"
import user2 from "../images/user2.jpg"
import user3 from "../images/user3.png"

const Comment = ({ userIcon, userName, commentText, value }) => (
  <Box display="flex" alignItems="center" marginTop="16px">
    <img
      src={userIcon}
      alt={userName}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginRight: "16px",
      }}
    />
    <div>
      <Typography variant="subtitle2" color="textPrimary">
        {userName}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {commentText}
      </Typography>
      <Rating name="read-only" value={value} readOnly />
    </div>
  </Box>
);

const Blog = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlogs(blog);
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
        <div style={{ backgroundColor: darkTheme.palette.background.default }}>
          {blogs ? (
            <section>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "#ff5733" }}
              >
                <ArrowBackIcon style={{ margin: "10px 10px" }} />
              </Link>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <img
                  src={blogs.cover}
                  alt=""
                  style={{ width: "80%", height: "300px" }}
                />
                <img
                  src={blogs.authoricon}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: `5px solid ${darkTheme.palette.background.default}`,
                  }}
                  alt={blogs.author}
                />
              </div>
              <Typography
                variant="subtitle2"
                align="center"
                color="textSecondary"
                style={{ marginTop: 50, color: "#ff5733" }}
              >
                {blogs.author}
              </Typography>
              <Typography
                variant="h3"
                gutterBottom
                align="center"
                color="textPrimary"
              >
                {blogs.title}
              </Typography>
              <div style={{ padding: "0 40px" }}>
                <Typography
                  variant="body1"
                  align="center"
                  color="textSecondary"
                  style={{ marginBottom: 40 }}
                >
                  {blogs.desc}
                </Typography>
                <Typography variant="subtitle" color="textSecondary">
                  {blogs.date}
                </Typography>
              </div>
              <Divider style={{ margin: "30px 45px" }} />
              <Typography
                variant="h5"
                color="textPrimary"
                style={{ paddingLeft: "40px" }}
              >
                Comments
              </Typography>
              <div style={{ paddingLeft: "40px" }}>
                <Comment
                  userIcon={user1}
                  userName="user1"
                  commentText={blogs.comments[0]}
                  value={4}
                />
                <br />
                <Comment
                  userIcon={user2}
                  userName="user2"
                  commentText={blogs.comments[1]}
                  value={4}
                />
                <br />
                <Comment
                  userIcon={user3}
                  userName="user3"
                  commentText={blogs.comments[2]}
                  value={5}
                />
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <TextField
                    fullWidth
                    label="Comment"
                    id="Comment"
                    style={{ width: "70%" }}
                  />
                  <Button>
                    <DoubleArrowIcon
                      style={{ height: "50px", color: "#ff5733" }}
                      fontSize="large"
                    />
                  </Button>
                </div>
                <br />
                <Divider style={{ margin: "0 45px" }} />
              </div>
            </section>
          ) : null}
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Blog;
