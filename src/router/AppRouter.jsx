/* Librerías */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Importaciones de páginas y componente Navbar */
import { EpisodesPage, HomePage, LocationPage, NavbarComponent, NotFoundPage } from "../ram";
import { LoginPage, RegisterPage } from "../auth";


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavbarComponent />
      </div>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/episodios" element={ <EpisodesPage /> } />
        <Route path="/ubicacion" element={ <LocationPage /> } />
        <Route path="/ingresar" element={ <LoginPage /> } />
        <Route path="/registro" element={ <RegisterPage /> } />

        <Route path="/*" element={ <NotFoundPage /> } />
      </Routes>
    </Router>
  )
}
