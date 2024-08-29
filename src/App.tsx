import { Home, People, Planets, Species, Starships, Vehicles, Films } from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme";
import "./App.css";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/People" element={<People />} />
          <Route path="/Planets" element={<Planets />} />
          <Route path="/Species" element={<Species />} />
          <Route path="/Starships" element={<Starships />} />
          <Route path="/Vehicles" element={<Vehicles />} />
          <Route path="/Films" element={<Films />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
