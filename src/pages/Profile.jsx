import React from "react";
import {
  Container,
  Typography,
  Paper,
  Avatar,
  Grid,
  Stack,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GithubIcon from "@mui/icons-material/GitHub";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Blogcard from "../components/Blogcard";
import { blogList } from "../config/data";
import kurizu from "../images/kurizu.png";
import discCard from "../images/discCard.svg"
const Profile = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.background.default }}>
        <Navbar />
        <Container>
          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Avatar
                  alt="Profile Picture"
                  src={kurizu}
                  sx={{ width: 250, height: 250 }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ marginTop: 3, marginLeft: 8 }}
                >
                  Social Media Links
                </Typography>
                <Stack direction="row" spacing={2} sx={{ marginLeft: 7 }}>
                  <IconButton href="https://instagram.com/criz_595">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton href="https://x.com/kurizuTaz">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton href="https://github.com/crizmo">
                    <GithubIcon />
                  </IconButton>
                </Stack>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="h4">Kurizu Taz</Typography>
                <Typography variant="h6">Coder and Artist</Typography>
                <Typography variant="subtite1">
                  <span style={{ color: "#ff5733" }}>323 </span>Posts
                  &nbsp;&nbsp; &nbsp;{" "}
                  <span style={{ color: "#ff5733" }}>3.5K </span> Followers
                  &nbsp; &nbsp; &nbsp;{" "}
                  <span style={{ color: "#ff5733" }}>323 </span>Following
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: 5 }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h5">📝 About me </Typography>
                    <ul>
                      <li>🐱 Gato</li>
                      <li>👨‍💻 Currently working on 3 projects</li>
                      <li>✏️ Likes drawing & coding</li>
                      <li>🔭 Trying to learn new things every day</li>
                    </ul>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <img
                      src={discCard}
                      alt="disc card"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={12}></Grid>
            </Grid>
          </Paper>
          <Typography variant="h5" sx={{ marginTop: 5, color: "#fff" }}>
            My Posts
          </Typography>
          <Grid container spacing={3}>
            {blogList.slice(0, 2).map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Blogcard
                  id={post.id}
                  title={post.title}
                  desc={post.desc.slice(0, 50)}
                  category={post.category}
                  cover={post.cover}
                  date={post.date}
                  authorIcon={post.authoricon}
                  authorName={post.author}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Profile;
