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
                  src="https://cdn.discordapp.com/attachments/1070680673049923694/1160566269087596574/e73d50dab94fcb7332fb6f9a69f4d1de.png?ex=65352090&is=6522ab90&hm=784d657ea4ae0b4c6d170b032913737a9d7de50074da2fec29b5c5af13769dee&"
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
                      src="https://camo.githubusercontent.com/3f25b6424caae35df1ece08cea4313947ac5ffd21930babb98a7d5ded88de764/68747470733a2f2f646973636f72642d63617264732e6b7572697a752e7265706c2e636f2f6170692f636f6d706163742f3738343134313835363432363033333233333f61626f75743d476f7474612532306c6f76652532306f6c696761726368792662616e6e65723d68747470733a2f2f692e657473797374617469632e636f6d2f34303935373734382f722f696c2f6534656661612f343831303132353135322f696c5f66756c6c7866756c6c2e343831303132353135325f323369722e6a7067"
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
