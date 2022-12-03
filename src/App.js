import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutMe/AboutMe";
import FrontPage from "./Pages/FrontPage/FrontPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="*" element={<div>Pagina não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
