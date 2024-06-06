import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import SkillCategory from "../components/SkillCategory"
import ThemeToggle from "../components/ThemeToggle"
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
import { motion } from "framer-motion"

const Skills = ({ theme, setTheme }) => {
  const frontEndSkills = [
    { image: js, alt: "JavaScript Logo" },
    { image: theme === "black" ? html2 : html, alt: "HTML Logo" },
    { image: theme === "black" ? css2 : css, alt: "CSS Logo" },
    { image: react, alt: "React Logo" },
  ]

  const backEndSkills = [
    { image: ruby, alt: "Ruby Logo" },
    { image: rails, alt: "Rails Logo" },
    { image: go, alt: "Go Logo" },
  ]

  const devToolsSkills = [
    { image: postgres, alt: "PostgreSQL Logo" },
    { image: theme === "black" ? github2 : github, alt: "GitHub Logo" },
    { image: git, alt: "Git Logo" },
  ]

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
          <div className="hero-content flex-col items-center">
            <h1 className="text-4xl lg:text-5xl underline underline-offset-8 font-bold mb-8">
              Skills
            </h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <SkillCategory title="Front-End" skills={frontEndSkills} />
              <SkillCategory title="Back-End" skills={backEndSkills} />
              <SkillCategory
                title="Development Tools"
                skills={devToolsSkills}
              />
            </div>
            <Link to="/contact">
              <button className="btn btn-accent mt-4">
                Contact <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
