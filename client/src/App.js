import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/homePage/Landing";
import AppBar from "./components/navigation/navigationAppBar";
import AddPlant from "./components/plantDisplay/AddPlant";
import PlantDisplay from "./components/plantDisplay/PlantDisplay";
import Schedule from "./components/plantDisplay/Schedule";

function App() {
  
  
  
  return (
    <Router>
      <AppBar />
      <Routes>

        <Route path="/" element={<Landing/>}>
        </Route>
      
        <Route path="/schedule" element={<Schedule/>}>
        </Route>
        
        <Route path="/greenhouse" element={<PlantDisplay/>}>
        </Route>

        <Route path="/addplant" element={<AddPlant/>}>
        </Route>

      </Routes>
    </Router>
    
    
    
    
  )
  
}

export default App;
