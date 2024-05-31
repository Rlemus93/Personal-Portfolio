import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="h-16">
      <footer className="footer items-center p-4 bg-neutral text-neutral-content h-full">
        <aside className="flex items-center space-x-4 w-full justify-between">
          <p className="hidden md:block text-sm md:text-base">
            Copyright © 2024 - All right reserved
          </p>
          <nav className="flex space-x-4 md:place-self-center md:justify-self-end">
            <ul className="flex space-x-4">
              <li>
                <div className="tooltip" data-tip="Linkedin">
                  <a
                    href="https://www.linkedin.com/in/ryan-lemus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon className="size-10" icon={faLinkedin} />
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
            </ul>
          </nav>
        </aside>
      </footer>
    </div>
  )
}

export default Footer
