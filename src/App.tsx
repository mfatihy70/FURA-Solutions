import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LANGUAGES } from "./locales/i18n";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Partners from "./pages/partners/PartnersParent";
import Contact from "./pages/contact/Contact";
import "./locales/i18n";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Catalog from "./pages/products/CatalogParent";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/tr/home" replace />} />

        {/* Language-specific routes */}
        {LANGUAGES.map(({ code }) => (
          <Route
            key={code}
            path={`/${code}`}
            element={<Navigate to={`/${code}/home`} replace />}
          />
        ))}

        {/* Main routes with language parameter */}
        <Route path="/:lang/home" element={<Home />} />
        <Route path="/:lang/about" element={<About />} />
        <Route path="/:lang/partners" element={<Partners />} />
        <Route path="/:lang/contact" element={<Contact />} />
        <Route path="/:lang/login" element={<Login />} />
        <Route path="/:lang/register" element={<Register />} />
        <Route path="/:lang/products" element={<Catalog />} />

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
