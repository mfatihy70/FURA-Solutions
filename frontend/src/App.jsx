import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { LANGUAGES } from "./locales/i18n"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/home/Home"
import About from "./pages/About"
import Partners from "./pages/partners/PartnersPage"
import Contact from "./pages/contact/ContactPage"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Catalog from "./pages/products/CatalogPage"
import Cart from "./pages/cart/Cart"
import Checkout from "./pages/Checkout"
import NotFound from "./pages/NotFound"
import UserDashboard from "./pages/dashboard/User"
import AdminDashboard from "./pages/dashboard/Admin"
import ProtectedAdminRoute from "./pages/auth/AdminRoute"
import PermissionDenied from "./pages/auth/PermissionDenied"
import "./locales/i18n"
import "./App.css"

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/tr/home" replace />} />

        {LANGUAGES.map(({ code }) => (
          <Route
            key={code}
            path={`/${code}`}
            element={<Navigate to={`/${code}/home`} replace />}
          />
        ))}

        <Route path="/:lang/home" element={<Home />} />
        <Route path="/:lang/about" element={<About />} />
        <Route path="/:lang/partners" element={<Partners />} />
        <Route path="/:lang/contact" element={<Contact />} />
        <Route path="/:lang/login" element={<Login />} />
        <Route path="/:lang/register" element={<Register />} />
        <Route path="/:lang/products" element={<Catalog />} />
        <Route path="/:lang/cart" element={<Cart />} />
        <Route path="/:lang/checkout" element={<Checkout />} />
        <Route path="/:lang/dashboard" element={<UserDashboard />} />
        {/* Admin routes */}
        <Route
          path="/:lang/admin"
          // Add ProtectedAdminRoute to protect the admin dashboard
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />
        <Route path="/:lang/permission-denied" element={<PermissionDenied />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
