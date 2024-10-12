import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { configureWeb3Modal } from "./connection";
import Feed from "./pages/dashboard/feed";
import AboutUs from "./pages/landingPage/about-us";
import Home from "./pages/landingPage/home";
import Support from "./pages/landingPage/support";

configureWeb3Modal();

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
