import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//Pages
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contacts from "./components/pages/Contacts";
import Newproject from "./components/pages/Newproject";
import Projects from "./components/pages/Projects";
//Layout
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>

      <div>
        <Navbar/>
      </div>

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/newproject" element={<Newproject />} />
        </Routes>
      </Container>

      <Footer/>
    </Router>
  );
}

export default App;
