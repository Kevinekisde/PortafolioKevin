import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Components/Screens/HomeScreen";
import Navbar from "./Components/Utils/Navbar";
import Footer from "./Components/Utils/Footer";
import ProjectScreen from "./Components/Screens/Proyects";
import ContactoScreen from "./Components/Screens/ContactoScreen";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/projects/:id" element={<ProjectScreen/>} />
        <Route path="/contact" element={<ContactoScreen/>} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
