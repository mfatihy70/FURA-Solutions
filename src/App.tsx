import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Partners from "./pages/partners/Partners";
import Contact from "./pages/contact/Contact";
import { LANGUAGES } from "./locales/i18n";
import "./locales/i18n";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
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
        <Route path="*" element={<NotFound />} />


        {/* Catch all redirect */}
        <Route path="*" element={<Navigate to="/tr/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
