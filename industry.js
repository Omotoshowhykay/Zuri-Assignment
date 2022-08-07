// import createRoot from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Enroll from "./pages/Enroll";
import Home from "./pages/Home";
import Privacy from "./pages/privacy";
import Completed from "./pages/Completed";
// import Enroll from "./pages/Enroll";

import { createRoot } from 'react-dom/client';
import Terms from "./pages/terms";



export default function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />}>
  
          
        </Route>
        <Route path="/enroll" exact  element={<Enroll />} />
        <Route path="/privacy" exact  element={<Privacy />} />
        <Route path="/completed" exact  element={<Completed />} />
        <Route path="/terms" exact  element={<Terms />} />
       
                  
       
      </Routes>
    </BrowserRouter>
  );
}
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App  />);
