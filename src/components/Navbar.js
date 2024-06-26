import React from "react"
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { Link } from "react-router-dom"

const Navbar = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:rlemus93@gmail.com"
  }

  return (
    <div className="h-16">
      <div className="navbar bg-base-100 h-full">
        <div className="flex-1">
          <Link to="/">
            <img
              src={logo}
              className="h-8 sm:h-10 md:h-12 lg:h-16"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-lg font-serif">
            <li>
              <Link to="/projects" className="text-sm sm:text-base md:text-lg">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm sm:text-base md:text-lg">
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" className="text-sm sm:text-base md:text-lg">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm sm:text-base md:text-lg">
                Contact
              </Link>
            </li>
            <li className="hidden sm:block">
              <details>
                <summary className="text-sm sm:text-base md:text-lg">
                  Socials
                </summary>
                <ul className="bg-base-100 rounded-t-none">
                  <li>
                    <div className="tooltip" data-tip="Linkedin">
                      <a
                        href="https://www.linkedin.com/in/ryan-lemus"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          className="size-10"
                          icon={faLinkedin}
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip" data-tip="Github">
                      <a
                        href="https://github.com/Rlemus93"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon className="size-10" icon={faGithub} />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip" data-tip="Email">
                      <FontAwesomeIcon
                        className="size-10 cursor-pointer"
                        icon={faEnvelope}
                        onClick={handleEmailClick}
                      />
                    </div>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
