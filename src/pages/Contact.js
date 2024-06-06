import React from "react"
import ThemeToggle from "../components/ThemeToggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

const Contact = ({ theme, setTheme }) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:rlemus93@gmail.com"
  }
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
            <div className="flex justify-center items-center w-full">
              <form
                method="POST"
                action="https://getform.io/f/qalondgb"
                className="flex flex-col max-w-[600px] w-full"
              >
                <div className="pb-4">
                  <p className="text-3xl lg:text-4xl font-bold inline border-b-4 border-pink-600">
                    Contact
                  </p>
                  <p className="py-4">
                    Submit the form below or shoot me an email -
                    <button
                      onClick={handleEmailClick}
                      className="text-blue-500 underline underline-offset-4 cursor-pointer bg-transparent border-none p-0"
                    >
                      rlemus93@gmail.com
                    </button>
                  </p>
                </div>
                <input
                  className="bg-gray-200 p-2 mb-4 rounded  text-black"
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                />
                <input
                  className="bg-gray-200 p-2 mb-4 rounded  text-black"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
                <textarea
                  className="bg-gray-200 p-2 mb-4 rounded text-black"
                  name="message"
                  rows="10"
                  placeholder="Message"
                  required
                ></textarea>
                <button className="btn btn-accent mt-4">
                  Let's Collaborate <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
