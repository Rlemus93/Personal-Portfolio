import React from "react"
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <>
      <div data-theme="black">
        <div className="navbar bg-base-100">
          <div className="flex-1 size-11">
            <a href="/">
              <img src={logo} className="px-1 mt-1 size-6/12" />
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 text-lg ">
              <li>
                <details>
                  <summary>Socials</summary>
                  <ul className="bg-base-100 rounded-t-none">
                    <li>
                      <div class="tooltip" data-tip="Linkedin">
                        <a
                          href="https://www.linkedin.com/in/ryan-lemus"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            className="size-10"
                            icon={faLinkedin}
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tooltip" data-tip="Github">
                        <a href="https://github.com/Rlemus93" target="_blank">
                          <FontAwesomeIcon
                            className="size-10"
                            icon={faGithub}
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tooltip" data-tip="Resume">
                        <a>
                          <FontAwesomeIcon className="size-10" icon={faFile} />
                        </a>
                      </div>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About Me</a>
              </li>
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
