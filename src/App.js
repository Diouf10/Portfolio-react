import { Route, Routes } from 'react-router-dom';
import './App.css';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import NavigationBar from './_misc/Components/NavigationBar';
import About from './_misc/Pages/About';
import Home from './_misc/Pages/Home';
import Skills from './_misc/Pages/Skills';
import Projects from './_misc/Projects/Pages/Projects';
import particules from './Utilities/Particules';




/**
 * Retourne le jsx de l'App. 
 * @return {jsx}
 */
function App() {

  const handleInit = async (main)=>{
    await loadSlim(main)
  }
  return (
    <div className="App">
    {/* particles js */}
    <Particles id="particles" options={particules} init={handleInit}/>

    <NavigationBar/>

    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/skills" element={<Skills/>}></Route>
      <Route path="/Projects" element={<Projects/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
