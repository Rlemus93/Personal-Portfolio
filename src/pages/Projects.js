import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import ProjectCard from "../components/ProjectCard"
import projectImage1 from "../assets/project1.png"
import projectImage2 from "../assets/project2.png"
import projectImage3 from "../assets/project3.png"
import projectImage4 from "../assets/project4.png"
import projectImage5 from "../assets/project5.png"
import projectImage6 from "../assets/project6.png"
import ThemeToggle from "../components/ThemeToggle"

const Projects = ({ theme, setTheme }) => {
  const projects = [
    {
      title: "Bank Buddy",
      description:
        "Built using React, Ruby on Rails, and CSS, Bank Buddy is a personal finance app that allows users to save with friends and family.",
      image: projectImage1,
      badges: [
        { type: "primary", label: "React" },
        { type: "accent", label: "Ruby on Rails" },
        { type: "info", label: "CSS" },
      ],
      demoLink: "https://capstone-frontend-yx8y.onrender.com/",
      codeLink: "https://github.com/Rlemus93/Bank-Buddy-Frontend",
    },
    {
      title: "Cat Tinder",
      description:
        "Built using React, Ruby on Rails, and Ruby, Cat-Tinder is a social app to help cat owners find playdates for their cats. View other cats' profiles and connect.",
      image: projectImage2,
      badges: [
        { type: "primary", label: "React" },
        { type: "accent", label: "Ruby on Rails" },
        { type: "info", label: "CSS" },
      ],
      demoLink: null,
      codeLink: "https://github.com/Rlemus93/Cat-Tinder-Frontend",
    },
    {
      title: "Homestead Living",
      description:
        "Built using React, Ruby on Rails, and Ruby, Homestead Living is a real estate app that allows users to find homestead-style homes in their area.",
      image: projectImage3,
      badges: [
        { type: "primary", label: "React" },
        { type: "accent", label: "Ruby on Rails" },
        { type: "info", label: "CSS" },
      ],
      demoLink: null,
      codeLink: "https://github.com/Rlemus93/Apartment-App-Frontend",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "Built using React, JavaScript, and CSS, this is a simple game of Tic-Tac-Toe. Play against a friend and choose between emojis or X's and O's.",
      image: projectImage4,
      badges: [
        { type: "primary", label: "React" },
        { type: "accent", label: "JavaScript" },
        { type: "info", label: "CSS" },
      ],
      demoLink: null,
      codeLink: "https://github.com/Rlemus93/tic-tac-toe",
    },
    {
      title: "To-Do List",
      description:
        "Built using Go, HTMX, and Tailwind CSS, this is a simple To-Do List app that allows users to add, and delete tasks.",
      image: projectImage5,
      badges: [
        { type: "primary", label: "Go" },
        { type: "accent", label: "HTMX" },
        { type: "info", label: "Tailwind" },
      ],
      demoLink: null,
      codeLink: "https://github.com/Rlemus93/to-do-list",
    },
    {
      title: "Go Forms",
      description:
        "Built using Go, HTMX, and Tailwind CSS, this is a simple form app that allows users to add, and delete form entries.",
      image: projectImage6,
      badges: [
        { type: "primary", label: "Go" },
        { type: "accent", label: "HTMX" },
        { type: "info", label: "Tailwind" },
      ],
      demoLink: null,
      codeLink: "https://github.com/Rlemus93/forms-with-go",
    },
  ]

  return (
    <div className="flex-1">
      <div className="hero h-full bg-base-200">
        <div className="hero-content flex-col items-center">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <h1 className="text-3xl lg:text-5xl underline underline-offset-8 font-bold mb-8">
            My Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                badges={project.badges}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            ))}
          </div>
          <Link to="/about">
            <button className="btn btn-accent">
              About <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
