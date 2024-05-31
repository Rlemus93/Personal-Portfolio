import React from "react"
import profilePic from "../assets/profile3.png"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const About = ({ theme, setTheme }) => {
  const handleThemeChange = () => {
    setTheme(theme === "black" ? "light" : "black")
  }
  return (
    <div className="flex-1">
      <div className="hero h-full bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center">
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
          <div className="card bg-base-100 shadow-xl max-w-lg lg:max-w-3xl w-full lg:mr-8 mb-8 lg:mb-0">
            <div className="card-body">
              <h2 className="card-title text-3xl lg:text-4xl font-bold">
                My Story
              </h2>
              <p className="text-lg lg:text-xl">
                Hello there! I'm thrilled to introduce myself as a seasoned
                software web developer, deeply passionate about crafting
                exceptional digital experiences. My expertise spans HTML, CSS,
                JavaScript, React, and Ruby on Rails, allowing me to build
                robust and user-friendly web applications. With a keen eye for
                detail and a knack for problem-solving, I thrive in
                collaborative environments where creativity and innovation
                flourish. I'm constantly seeking new challenges to expand my
                skill set and stay ahead of industry trends, driven by a
                relentless pursuit of excellence. I invite you to delve into my
                portfolio, where you'll find a showcase of my projects and a
                testament to my commitment to delivering top-notch solutions.
                Together, let's embark on an exciting journey of digital
                innovation and create something truly extraordinary. Thank you
                for considering me for your next project—I can't wait to
                collaborate with you!
              </p>
              <div className="card-actions justify-start mt-4">
                <div className="badge badge-primary">React</div>
                <div className="badge badge-secondary">Go</div>
                <div className="badge badge-accent">Ruby on Rails</div>
                <div className="badge badge-info">Tailwind CSS</div>
              </div>
              <Link to="/skills">
                <button className="btn btn-accent mt-4">
                  Skills <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center lg:pl-4 w-full lg:w-1/3">
            <img
              src={profilePic}
              alt="Profile"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
