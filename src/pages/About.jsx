import React from 'react'
import ResponsiveAppBar from '../components/Navbar'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Grid, Paper, Typography } from '@mui/material';
import team from '../images/officeteam.jpg'
import AboutUsCard from '../components/Choosecard';
import TeamMemberCard from '../components/Teammembercard';
import Footer from '../components/Footer';


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
                <div style={{
                    backgroundColor: darkTheme.palette.background.default, // Use the theme's background color
                    minHeight: "100vh", // Set a minimum height to fill the viewports
                }}>
                    <br />
                    <Typography align="center" color="textPrimary" variant='h3'>
                        About Us
                        <Typography align="center" color="textSecondary" variant='h6'>As a blog website, we are dedicated to sharing insightful content.</Typography>
                    </Typography>
                    <br />
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <img src={team} alt="team" style={{ maxWidth: '95%', maxHeight: '95%', marginLeft: '5%', height: 'auto' }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p style={{ color: 'white' }}>
                                Welcome to MetaBlog! At Metablog, we are passionate
                                about every topic. Our mission is to provide you
                                with valuable insights, practical tips, and engaging content that
                                will describe the benefit to your readers - e.g., "help you lead a
                                healthier lifestyle," "inspire your creativity," "make your travel
                                adventures unforgettable".
                            </p>
                            <p style={{ color: 'white' }}>
                                Our team of experienced writers and experts is dedicated to bringing
                                you the latest information, trends, and inspiration in your favourite blog topic. Whether you're a "food enthusiast,"
                                "travel lover," "fitness guru," "tech aficionado", we have something
                                for everyone.
                            </p>
                            <p style={{ color: 'white' }}>
                                Thank you for joining us on this journey. We look forward to sharing
                                our knowledge and experiences with you and becoming your go-to source
                                for all things. Explore, learn, and enjoy!
                            </p>
                            <br />
                            <Button variant="outlined">Get in Touch</Button>
                        </Grid>
                    </Grid>
                    <br />
                    <Typography align='center' color="textSecondary" variant='h5'>
                        Why Choose Us
                    </Typography>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <AboutUsCard header="Expertise" para="Our team of experienced writers and industry experts brings a wealth of knowledge to our content." />
                        <AboutUsCard header="Diverse-Content" para="We cater to a wide range of interests within our niche, offering a diverse selection of topics, from in-depth guides to the latest trends." />
                        <AboutUsCard header="Engaging-Community" para="We foster an active and supportive community of like-minded individuals." />
                    </div>
                    <br /><br />
                    <Typography align='center' color="textSecondary" variant='h5'>
                        Our Team
                    </Typography>
                    <br />
                    <br />
                    <Grid container spacing={3} style={{justifyContent: "space-evenly"}}>
                        <TeamMemberCard name="Kaustubh" title="CTO|Metablog" bio="Coding and playing football"/>
                        <TeamMemberCard name="Shawn" title="Cybersecurity Expeert" bio="Watching anime while hacking"/>
                        <TeamMemberCard name="Ninad" title="Editor" bio="Eat Sleep Edit Repeat ♻ "/>
                        <TeamMemberCard name="Hamja" title="Web Developer" bio="Drinking coffee and coding!!"/>
                        <TeamMemberCard name="Srinivas" title="Data Scientist" bio="Chelsea supporter!(I need help)"/>     
                    </Grid>
                </div>
                <Footer />
            </ThemeProvider>
        </>
    )
}
export default About;