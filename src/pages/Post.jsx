import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});


export default function CreateBlog() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      blogTitle: data.get('blogTitle'),
      categoryName: data.get('categoryName'),
      authorName: data.get('authorName'),
      content: data.get('content'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3">
            Create Your <span style={{color:'#ff5733'}}>Blog</span>
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                color="warning"
                  autoComplete="given-name"
                  name="blogTitle"
                  required
                  fullWidth
                  id="blogTitle"
                  label="Title of the Blog"
                  placeholder="Write the title of your blog here"
                  autoFocus
                  sx={{ borderBottom: "1px solid #ff5733" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                color='warning'
                  required
                  fullWidth
                  name="categoryName"
                  label="Category of the Blog"
                  placeholder="Write the category of your blog here"
                  id="categoryName"
                  sx={{ borderBottom: "1px solid #ff5733" }}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  component="label"
                  variant="contained"
                  style={{ height: '56px' }}
                  startIcon={<CloudUploadIcon />}
                  sx={{ backgroundColor: "#ff5733", color: "white", "&:focus": { backgroundColor: "#ff5733", color: "white", }, "&:hover": { backgroundColor: "rgba(255, 87, 51, 0.2)", color: "white", } }}
                >
                  Upload Image
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                color='warning'
                  required
                  fullWidth
                  name="authorName"
                  label="Author of the Blog"
                  placeholder="Write the author name here"
                  id="authorName"
                  sx={{ borderBottom: "1px solid #ff5733" }}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                color='warning'
                  required
                  fullWidth
                  id="content"
                  label="Content of the Blog"
                  placeholder="Write your blog here"
                  multiline
                  sx={{ borderBottom: "1px solid #ff5733" }}

                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 , backgroundColor: "#ff5733", color: "white", "&:focus": { backgroundColor: "#ff5733", color: "white", }, "&:hover": { backgroundColor: "rgba(255, 87, 51, 0.2)", color: "white", }}}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}