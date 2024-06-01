import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import profile from "../assets/profile.png"
import { Link } from "react-router-dom"
import ThemeToggle from "../components/ThemeToggle"

const Hero = ({ theme, setTheme }) => {
  return (
    <div className="flex-1">
      <div className="hero h-full bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <img
            src={profile}
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            alt="profile"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif">
              Hi, I'm{" "}
              <span className="italic underline uppercase  text-blue-700 font-extrabold">
                Ryan Lemus
              </span>
            </h1>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl py-4">
              {" "}
              A
              <span className="italic text-blue-700 font-extrabold">
                {" "}
                Full Stack Developer
              </span>{" "}
              from San Diego, CA
            </h3>
            <Link to="/projects">
              <button className="btn btn-accent mt-4">
                View Projects <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
