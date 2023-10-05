import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const SignUp = () => {
  const overlayStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
  };

  const backgroundImageStyle = {
    backgroundImage:
      'url("https://uhdwallpapers.org/uploads/cache/101493263/3d-dark-shapes_600x338-mm-90.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    });
  };

  return (
    <div style={backgroundImageStyle}>
      <div style={overlayStyle}>
        <CssBaseline />
        <Container component="main" maxWidth="xs">
          <Box>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                style={{ color: "whitesmoke" }}
              >
                Sign Up
              </Typography>
              <Box
                component="form"
                noValidate
                sx={{ mt: 3 }}
                onSubmit={handleSubmit}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      inputProps={{
                        style: {
                          color: "white",
                          borderBottom: "1px solid white",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      inputProps={{
                        style: {
                          color: "white",
                          borderBottom: "1px solid white",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      inputProps={{
                        style: {
                          color: "white",
                          borderBottom: "1px solid white",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      inputProps={{
                        style: {
                          color: "white",
                          borderBottom: "1px solid white",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      style={{ color: "whiteSmoke" }}
                      control={
                        <Checkbox
                          value="allowExtraEmails"
                          sx={{ color: "whiteSmoke" }}
                        />
                      }
                      label="I want to receive websites updates via Email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/signin" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
