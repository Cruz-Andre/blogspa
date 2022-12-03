import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutMe from "./Pages/AboutMe/AboutMe";
import FrontPage from "./Pages/FrontPage/FrontPage";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="*" element={<div>Pagina não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
