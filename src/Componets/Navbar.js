import  {Link}  from "react-router-dom";
import  {useState}  from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import Home1 from '../Pages/Home';
import Acchivements from '../Pages/Acchivement';
import Education from '../Pages/Experience';
import Projects from '../Pages/Projects';
import './Styles/Navbar.css';
import { Button } from '@mui/material';
import Contact from '../Pages/Contact';

export default function Navbar() {
  const [openLinks, setOpenlinks]=useState(false)
  const togleNavbar=()=>{
    setOpenlinks(! openLinks)
  };
  
  return (
    <div className='navbar'> 

      <div className='leftSide'id={openLinks ? "open" : "close"}>
      <h1><i>Anton Fonseka</i></h1>
       <div className='hiddenLinks' >
       <Link to ='/' element={<Home1/>}>Home</Link>
      <Link to ='experience' element={<Education/>}>Education & Experience</Link>
      <Link to ='acchivement' element={<Acchivements/>}>Certificates & Acchivements</Link>      
      <Link to ='projects' element={<Projects/>}>Projects</Link>
      <Link to ='contact' element={<Contact/>}>Contacts</Link>
      </div>
      </div>
    
   
      
      <div className='rightSide'>

                
      <Link to ='/' element={<Home1/>}>Home</Link>
      <Link to ='experience' element={<Education/>}>Education & Experience</Link>
      <Link to ='acchivement' element={<Acchivements/>}>Certificates & Acchivements</Link>      
      <Link to ='projects' element={<Projects/>}>Projects</Link>
      <Link to ='contact' element={<Contact/>}>Contacts</Link>
          <Button onClick={togleNavbar}>
          <ReorderIcon/>
          </Button>
      
      </div>
    </div>
  )
}
