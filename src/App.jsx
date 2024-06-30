import Artists from "./pages/Artist";
import Album from "./pages/Album";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/authcomponts/Signup";
import Login from "./components/authcomponts/Login";
import { Toaster } from "react-hot-toast";
import SongPlay from "./pages/SongPlay";
import Contact from "./pages/Contect";


const App = () => {
  
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={"kalfj"} /> */}
          <Route path="/discover" element={<Discover />} />
          <Route path="/albums" element={<Album />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:type/:id/" element={<SongPlay />} />
          <Route path="/:type/:typename/:id/" element={<SongPlay />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
