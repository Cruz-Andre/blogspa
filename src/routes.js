import NotFound from "Pages/NofFound/NotFound";
import Post from "Pages/Post/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import StandardPage from "./components/StandardPage/StandardPage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import HomePage from "./Pages/HomePage/HomePage";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<StandardPage />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        
        {/* 

          Na rota "/", a estrutura a ser renderizada é:
          <StandardPage>
            <HomePage/>
          </StandardPage>

          Na rota "/about", a estrutura a ser renderizada é:
          <StandardPage>
            <AboutMe/>
          </StandardPage>

        */}

        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;
