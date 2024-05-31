import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects" // Add imports for your other pages
import About from "./pages/About"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"

const App = () => {
  const [theme, setTheme] = useState("black")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route
            path="/Personal-Portfolio"
            element={<Hero theme={theme} setTheme={setTheme} />}
          />
          <Route
            path="/"
            element={<Hero theme={theme} setTheme={setTheme} />}
          />
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
        <Footer />
      </Router>
    </div>
  )
}

export default App
