import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "motion/react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LoadingScreen from "./components/LoadingScreen"
import PageTransition from "./components/PageTransition"

import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import PortfolioPage from "./pages/PortfolioPage"
import CategoryPage from "./pages/CategoryPage"
import SubcategoryPage from "./pages/SubcategoryPage"
import Projectpage from "./pages/Projectpage"
import ContactPage from "./pages/ContactPage"


function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* ================= MAIN PAGES ================= */}

        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />

        <Route
          path="/services"
          element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          }
        />

        <Route
          path="/portfolio"
          element={
            <PageTransition>
              <PortfolioPage />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />


        {/* ================= FURNITURE CATEGORY ================= */}

        <Route
          path="/portfolio/category/:category"
          element={
            <PageTransition>
              <CategoryPage />
            </PageTransition>
          }
        />


        {/* ================= FURNITURE SUBCATEGORY ================= */}

        <Route
          path="/portfolio/category/:category/:subcategory"
          element={
            <PageTransition>
              <SubcategoryPage />
            </PageTransition>
          }
        />


        {/* ================= INDIVIDUAL PROJECT ================= */}

        <Route
          path="/portfolio/:slug"
          element={
            <PageTransition>
              <Projectpage />
            </PageTransition>
          }
        />

      </Routes>
    </AnimatePresence>
  )
}


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])


  return (
    <BrowserRouter>

      {loading ? (
        <LoadingScreen />
      ) : (

        <div className="min-h-screen bg-stone-950">

          <Navbar />

          <main className="pt-[76px]">
            <AnimatedRoutes />
          </main>

          <Footer />

        </div>

      )}

    </BrowserRouter>
  )
}

export default App