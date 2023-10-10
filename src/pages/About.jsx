import React from "react";
import ResponsiveAppBar from "../components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";
import AboutUsCard from "../components/Choosecard";
import TeamMemberCard from "../components/Teammembercard";
import Footer from "../components/Footer";
import officeteam from "../images/officeteam.jpg"
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const About = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <ResponsiveAppBar />
        <div
          style={{
            backgroundColor: darkTheme.palette.background.default, 
            minHeight: "100vh",
          }}
        >
          <br />
          <Typography align="center" color="textPrimary" variant="h3">
            About Us
            <Typography align="center" color="textSecondary" variant="h6">
              As a blog website, we are dedicated to sharing insightful content.
            </Typography>
          </Typography>
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <img
                src={officeteam}
                alt="team"
                style={{
                  maxWidth: "95%",
                  maxHeight: "95%",
                  marginLeft: "5%",
                  height: "auto",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p style={{ color: "white" }}>
                Welcome to MetaBlog! At Metablog, we are passionate about every
                topic. Our mission is to provide you with valuable insights,
                practical tips, and engaging content that will describe the
                benefit to your readers - e.g., "help you lead a healthier
                lifestyle," "inspire your creativity," "make your travel
                adventures unforgettable".
              </p>
              <p style={{ color: "white" }}>
                Our team of experienced writers and experts is dedicated to
                bringing you the latest information, trends, and inspiration in
                your favourite blog topic. Whether you're a "food enthusiast,"
                "travel lover," "fitness guru," "tech aficionado", we have
                something for everyone.
              </p>
              <p style={{ color: "white" }}>
                Thank you for joining us on this journey. We look forward to
                sharing our knowledge and experiences with you and becoming your
                go-to source for all things. Explore, learn, and enjoy!
              </p>
              <br />
              <Button variant="outlined" href="/contact">
                Get in Touch
              </Button>
            </Grid>
          </Grid>
          <br />
          <Typography align="center" color="textSecondary" variant="h5">
            Why Choose Us
          </Typography>
          <br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <AboutUsCard
              header="Expertise"
              para="Our team of experienced writers and industry experts brings a wealth of knowledge to our content."
            />
            <AboutUsCard
              header="Diverse-Content"
              para="We cater to a wide range of interests within our niche, offering a diverse selection of topics, from in-depth guides to the latest trends."
            />
            <AboutUsCard
              header="Engaging-Community"
              para="We foster an active and supportive community of like-minded individuals."
            />
          </div>
          <br />
          <br />
          <Typography align="center" color="textSecondary" variant="h5">
            Our Team
          </Typography>
          <br />
          <br />
          <Grid
            container
            spacing={3}
            style={{ justifyContent: "space-evenly" }}
          >
            <TeamMemberCard
              name="Kaustubh"
              title="CTO|Metablog"
              bio="Coding and playing football"
              icon='https://e1.pxfuel.com/desktop-wallpaper/909/106/desktop-wallpaper-one-piece-icons-%E2%9E%BA-roronoa-zoro-zoro-pfp.jpg'
            />
            <TeamMemberCard
              name="Shawn"
              title="Cybersecurity Expert"
              bio="Watching anime while hacking"
              icon='https://i.pinimg.com/474x/11/e6/75/11e67578666ff4fd059bf39ebec29358.jpg'
            />
            <TeamMemberCard
              name="Ninad"
              title="Editor"
              bio="Eat Sleep Edit Repeat ♻ "
              icon='https://i.pinimg.com/originals/1a/67/6d/1a676d658fd9b78fdaea59bb1bfeb83d.jpg'
            />
            <TeamMemberCard
              name="Hamza"
              title="Web Developer"
              bio="Drinking coffee and coding!!"
              icon='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg'
            />
            <TeamMemberCard
              name="Srinivas"
              title="Data Scientist"
              bio="Chelsea supporter!(I need help)"
              icon='https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png'
            />
          </Grid>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};
export default About;
