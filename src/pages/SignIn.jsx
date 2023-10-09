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
import { useNavigate } from "react-router-dom";

const SignIn = () => {
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
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");

    if (email === "testuser@gmail.com" && password === "Sipher@4") {
      alert("Sign in successful!");
      navigate("/home");
    } else {
      alert("Invalid credentials!");
    }
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
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
                onSubmit={handleSubmit}
              >
                <TextField
                  color="warning"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  inputProps={{
                    style: {
                      color: "white",
                      borderBottom: "1px solid #ff5733",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "white",
                    },
                  }}
                />
                <TextField
                  color="warning"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputProps={{
                    style: {
                      color: "whitesmoke",
                      borderBottom: "1px solid #ff5733",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "whitesmoke",
                    },
                  }}
                />
                <FormControlLabel
                  style={{ color: "whitesmoke" }}
                  control={
                    <Checkbox
                      value="remember"
                      sx={{
                        color: "#ff5733",
                        "&.Mui-checked": {
                          color: "#ff5733",
                        },
                      }}
                    />
                  }
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#ff5733",
                    color: "white",
                  }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      "Don't have an account? Sign Up"
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

export default SignIn;
