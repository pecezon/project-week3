import "./App.css";
import "./components.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BoardPage from "./pages/BoardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/board-page" element={<BoardPage />} />
    </Routes>
  );
}

export default App;
