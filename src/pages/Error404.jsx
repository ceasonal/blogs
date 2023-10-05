import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar";

const Error404 = () => {
  const backgroundStyle = {
    backgroundImage: `url('https://w0.peakpx.com/wallpaper/104/618/HD-wallpaper-anime-error-female-dress-black-cute-hair-windows-girl-anime-page.jpg')`,
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div style={backgroundStyle}>
          <Navbar />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Error404;
