import "./App.css"
import { Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import LandigPage from './Components/LandigPage';
import DogsDetails from "./Components/detalles/DogsDetails";
import CrearReceta from './Components/crearReceta/CrearReceta';


function App() {

  return (
    <div className="app"> 
      <Routes key={Math.random(0,9)}>
        <Route key={Math.random(0,9)} exact path="/" element ={<LandigPage/>}></Route>
        <Route key={Math.random(0,9)} path="/Home" element ={<HomePage/> }></Route>
        <Route key={Math.random(0,9)} path="/DogsDetails" element={<DogsDetails/>}></Route>
        <Route key={Math.random(0,9)} path="/CrearReceta" element={<CrearReceta/>}></Route>
      </Routes>
    </div> 
  );
}

export default App;

