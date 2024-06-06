import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import night from "../assets/night404.png"
import day from "../assets/day404.png"
import ThemeToggle from "../components/ThemeToggle"
import { motion } from "framer-motion"

const NotFound = ({ theme, setTheme }) => {
  return (
    <>
      <div className="flex-1">
        <div className="hero h-full bg-base-200">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hero-content flex-col lg:flex-row items-center">
              <img
                src={theme === "black" ? night : day}
                alt="404"
                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              />
              <Link to="/">
                <button className="btn btn-accent mt-4">
                  Return Home <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
export default NotFound
