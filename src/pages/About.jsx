import React from "react";
import ResponsiveAppBar from "../components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";
import AboutUsCard from "../components/Choosecard";
import TeamMemberCard from "../components/Teammembercard";
import Footer from "../components/Footer";

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
            backgroundColor: darkTheme.palette.background.default, // Use the theme's background color
            minHeight: "100vh", // Set a minimum height to fill the viewports
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
                src='https://www.rocksolid.com/hubfs/annie-spratt-hCb3lIB8L8E-unsplash-768x504-1.jpg'
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
              icon="https://cdn.discordapp.com/attachments/1012020961299664899/1160613172596707478/image.png?ex=65354c3f&is=6522d73f&hm=9bb90dbb7ccd57d31007fd43b72d3698dfdbdfba5a31f9e44f0ececfe4cf263d&"
            />
            <TeamMemberCard
              name="Shawn"
              title="Cybersecurity Expert"
              bio="Watching anime while hacking"
              icon= "https://i.pinimg.com/474x/11/e6/75/11e67578666ff4fd059bf39ebec29358.jpg"
              // icon= "https://cdn.discordapp.com/attachments/1012020961299664899/1160611838770286592/image.png?ex=65354b01&is=6522d601&hm=3834f0c5f85f88e750e356f5a0f863aba5f5176e18b20eafc14f87e529fc8320&"
            />
            <TeamMemberCard
              name="Ninad"
              title="Editor"
              bio="Eat Sleep Edit Repeat ♻ "
              icon="https://pps.whatsapp.net/v/t61.24694-24/363270656_3596646263900325_4253991315114160706_n.jpg?ccb=11-4&oh=01_AdQ2Lf4Ao6eOHdlDD8XouoJ_uCbF5GU6ccU7BpK1VMF-uw&oe=652FA5C1&_nc_sid=000000&_nc_cat=103"
            />
            <TeamMemberCard
              name="Hamja"
              title="Web Developer"
              bio="Drinking coffee and coding!!"
              icon="https://media.discordapp.net/attachments/1070680673049923694/1160564670466367569/53368643-d73b-4e99-bad4-37ae65245e41.jpg?ex=65351f13&is=6522aa13&hm=0a2f5cd2b381eaeabcb76e678f2d3e3387ea77b60be720d98941793eef3b0d59&=&width=431&height=473"
            />
            <TeamMemberCard
              name="Srinivas"
              title="Data Scientist"
              bio="Chelsea supporter!(I need help)"
              icon="https://cdn.discordapp.com/attachments/1012020961299664899/1160610817675366491/image.png?ex=65354a0e&is=6522d50e&hm=1ba7e6a57e974026519ec1ddcfe1df03204e7e60601f01b423e47345e1c8118a&"
            />
          </Grid>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};
export default About;
