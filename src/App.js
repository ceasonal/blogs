
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" exact element={<SignIn/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
    </>
  );
}

export default App;
