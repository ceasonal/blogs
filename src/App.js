import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Post from "./pages/Post";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogcard from "./components/Blogcard";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/blog/:id" render={() => <Blogcard id="1" />} />
      </Routes>
    </>
  );
}

export default App;
