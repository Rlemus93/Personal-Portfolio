import React from "react"
import profilePic from "../assets/profile3.png"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import ThemeToggle from "../components/ThemeToggle"
import { motion } from "framer-motion"

const About = ({ theme, setTheme }) => {
  return (
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
            <div className="card flex justify-center bg-base-100 shadow-xl max-w-lg lg:max-w-3xl w-full lg:mr-8 mb-8 lg:mb-0">
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
                  relentless pursuit of excellence. I invite you to delve into
                  my portfolio, where you'll find a showcase of my projects and
                  a testament to my commitment to delivering top-notch
                  solutions. Together, let's embark on an exciting journey of
                  digital innovation and create something truly extraordinary.
                  Thank you for considering me for your next project—I can't
                  wait to collaborate with you!
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
        </motion.div>
      </div>
    </div>
  )
}

export default About
