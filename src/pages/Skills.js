import React from "react"
import ruby from "../assets/ruby.png"
import rails from "../assets/rails.png"
import react from "../assets/react.png"
import css from "../assets/css.png"
import css2 from "../assets/css2.png"
import html from "../assets/html.png"
import html2 from "../assets/html2.png"
import js from "../assets/js.png"
import postgres from "../assets/postgre.png"
import git from "../assets/git.png"
import go from "../assets/go.png"
import github from "../assets/github.png"
import github2 from "../assets/github2.png"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Skills = ({ theme, setTheme }) => {
  const handleThemeChange = () => {
    setTheme(theme === "black" ? "light" : "black")
  }

  return (
    <div className="flex-1">
      <div className="hero h-full bg-base-200">
        <div className="hero-content flex-col items-center">
          <div className="absolute top-20 left-4">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={handleThemeChange}
                checked={theme === "light"}
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <h1 className="text-4xl lg:text-5xl underline underline-offset-8 font-bold mb-8">
            Skills
          </h1>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center border border-gray-300 p-4">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4 underline underline-offset-8">
                Front-End
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="card bg-base-100 shadow-xl w-full aspect-square flex items-center justify-center">
                  <img src={js} alt="JavaScript Logo" className="w-20 h-20" />
                </div>
                <div className="card bg-base-100 shadow-xl w-full aspect-square flex items-center justify-center">
                  <img
                    src={theme === "black" ? html2 : html}
                    alt="HTML Logo"
                    className="w-20 h-20"
                  />
                </div>
                <div className="card bg-base-100 shadow-xl w-full aspect-square flex items-center justify-center">
                  <img
                    src={theme === "black" ? css2 : css}
                    alt="CSS Logo"
                    className="w-20 h-20"
                  />
                </div>
                <div className="card bg-base-100 shadow-xl w-full aspect-square flex items-center justify-center">
                  <img src={react} alt="React Logo" className="w-20 h-20" />
                </div>
              </div>
            </div>
            <div className="text-center border border-gray-300 p-4">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4 underline underline-offset-8">
                Back-End
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="card bg-base-100 shadow-xl w-full aspect-square flex items-center justify-center">
                  <img src={ruby} alt="Ruby Logo" className="w-20 h-20" />
                </div>
                <div className="card bg-base-100 shadow-xl w-full aspect-square flex items-center justify-center">
                  <img src={rails} alt="Rails Logo" className="w-20 h-20" />
                </div>
                <div className="card bg-base-100 shadow-xl w-full aspect-square flex items-center justify-center">
                  <img src={go} alt="Go Logo" className="w-20 h-20" />
                </div>
              </div>
            </div>
            <div className="text-center border border-gray-300 p-4">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4 underline underline-offset-8">
                Development Tools
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="card bg-base-100 shadow-xl w-full aspect-square flex items-center justify-center">
                  <img
                    src={postgres}
                    alt="PostgreSQL Logo"
                    className="w-20 h-20"
                  />
                </div>
                <div className="card bg-base-100 shadow-xl w-full aspect-square flex items-center justify-center">
                  <img
                    src={theme === "black" ? github2 : github}
                    alt="GitHub Logo"
                    className="w-20 h-20"
                  />
                </div>
                <div className="card bg-base-100 shadow-xl w-full aspect-square flex items-center justify-center">
                  <img src={git} alt="Git Logo" className="w-20 h-20" />
                </div>
              </div>
            </div>
          </div>
          <Link to="/contact">
            <button className="btn btn-accent mt-4">
              Contact <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Skills