import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

const App = () => {
  const [theme, setTheme] = useState("black")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <AnimatedRoutes theme={theme} setTheme={setTheme} />
        <Footer />
      </Router>
    </div>
  )
}

const AnimatedRoutes = ({ theme, setTheme }) => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="*"
          element={<NotFound theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/Personal-Portfolio"
          element={<Hero theme={theme} setTheme={setTheme} />}
        />
        <Route path="/" element={<Hero theme={theme} setTheme={setTheme} />} />
        <Route
          path="/projects"
          element={<Projects theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/about"
          element={<About theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/skills"
          element={<Skills theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/contact"
          element={<Contact theme={theme} setTheme={setTheme} />}
        />
      </Routes>
    </AnimatePresence>
  )
}

export default App
