import { Route, Routes } from "react-router-dom";
import { useData } from "./context/data";
import Home from "./pages/Home";
import Loader from "./components/Loader";

function App() {
  const { isLoading } = useData();
  
  return (
    isLoading
    ? <Loader />
    : 
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/success" element={<h1>Gracias por responder. Tu respuesta se ha registrado con exito!!</h1>} />
    </Routes>
  );
}

export default App;
