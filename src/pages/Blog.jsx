import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogList } from "../config/data";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

// Component for rendering an individual comment
const Comment = ({ userIcon, userName, commentText, value }) => (
  <Box display="flex" alignItems="center" marginTop="16px">
    <img src={userIcon} alt={userName} style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "16px" }} />
    <div>
      <Typography variant="subtitle2" color="textPrimary">{userName}</Typography>
      <Typography variant="body2" color="textSecondary">{commentText}</Typography>
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
          {/* <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <ArrowBackIcon />
            </Link> */}
          {blogs ? (
            <section>
              <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <ArrowBackIcon />
            </Link>
              <div style={{ display: "flex", justifyContent:"center", alignItems:"center"}}>
                <img src={blogs.authoricon} style={{ width: "35px", height: "30px", borderRadius: "50%", marginRight: "10px" }} />
                <Typography variant="subtitle2" align="center" color="textSecondary">
                  {blogs.author}
                </Typography>
              </div>
              <Typography variant="h3" gutterBottom align="center" color="textPrimary">
                {blogs.title}
              </Typography>
              <Typography variant="body1" gutterBottom align="center" color="textSecondary">
                {blogs.date}
              </Typography>
              <img src={blogs.cover} alt="" style={{ width: "60%", height: "80%", paddingLeft: "240px" }} /> <br /><br />
              <Typography variant="body1" align="center" color="textSecondary" style={{ margin: "0 16px" }}>{blogs.desc}</Typography>
              <br /><br />
              <br />
              <br />
              <Divider style={{ margin: "0 45px" }} />
              <br />
              <br />
              <Typography variant="h5" color="textPrimary" style={{ paddingLeft: "20px" }}>Comments</Typography>
              <div style={{ paddingLeft: "40px" }}>
                <Comment
                  userIcon="https://cdn.discordapp.com/attachments/1012020961299664899/1160635168428662864/image.png?ex=653560bb&is=6522ebbb&hm=353086cab2145782e93d041c387fa01a85aa8be226ea0601bac845edccdf90bf&"
                  userName="Harvey Specter"
                  commentText={blogs.comments[0]}
                  value={4}
                />
                <br />
                <Comment
                  userIcon="https://cdn.discordapp.com/attachments/1012020961299664899/1160632884281999491/image.png?ex=65355e9b&is=6522e99b&hm=0ddbea3c28d8212a23d8c165e670e139ac555d1a893b22cf22d59725d6d20064&"
                  userName="Digvijay Johar"
                  commentText={blogs.comments[1]}
                  value={4}
                />
                <br />
                <Comment
                  userIcon="https://cdn.discordapp.com/attachments/1012020961299664899/1160633000166445097/image.png?ex=65355eb6&is=6522e9b6&hm=17102fed18af39a8ef1e71ba78a233b751f4b7fd1ec9ab73cfe109b241f908ff&"
                  userName="Rahul Chavan"
                  commentText={blogs.comments[2]}
                  value={5}
                />
                <br />
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <TextField fullWidth label="Comment" id="Comment" style={{width:"70%"}}/>
                <DoubleArrowIcon style={{height:"50px"}} color="primary" fontSize="large"/>
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
