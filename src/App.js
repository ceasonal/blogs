import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Post from "./pages/Post";
import About from "./pages/About";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
