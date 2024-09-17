import { Route, Routes } from "react-router-dom";
import { useData } from "./context/data";
import Home from "./pages/Home";

function App() {
  const { isLoading } = useData();
  
  return (
    isLoading
    ? "Cargando..."
    : 
    <Routes>
      <Route index path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
