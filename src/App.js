import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Componets/Navbar';
import Home1 from './Pages/Home';
import Projects from './Pages/Projects';
import Acchivement from './Pages/Acchivement';
import Experience from './Pages/Experience';
import Footer from "./Componets/Footer";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
     
      <Route path='/' exact Component={Home1}></Route>
      <Route path="/projects" element={<Projects />} />
      <Route path="/Acchivement" element={<Acchivement />} />
      <Route path="/experience" element={<Experience />} />
      

      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
