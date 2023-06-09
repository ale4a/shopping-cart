import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Container from "react-bootstrap/Container";
import { Store } from "./pages/Store";
import { About } from "./pages/About";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  );
}

export default App;
