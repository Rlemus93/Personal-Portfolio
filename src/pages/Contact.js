import React from "react"
import ThemeToggle from "../components/ThemeToggle"

const Contact = ({ theme, setTheme }) => {
  return (
    <div className="flex-1">
      <div className="hero h-full bg-base-200">
        <div className="hero-content flex-col items-center">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <div className="flex justify-center items-center w-full">
            <form
              method="POST"
              action="https://getform.io/f/qalondgb"
              className="flex flex-col max-w-[600px] w-full"
            >
              <div className="pb-8">
                <p className="text-3xl lg:text-4xl font-bold inline border-b-4 border-pink-600">
                  Contact
                </p>
                <p className="py-4">
                  Submit the form below or shoot me an email -
                  rlemus93@gmail.com
                </p>
              </div>
              <input
                className="bg-gray-200 p-2 mb-4 rounded  text-black"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="bg-gray-200 p-2 mb-4 rounded  text-black"
                type="email"
                placeholder="Email"
                name="email"
              />
              <textarea
                className="bg-gray-200 p-2 mb-4 rounded text-black"
                name="message"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className="btn btn-accent text-white rounded px-4 py-3 mx-auto flex items-center">
                Let's Collaborate
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
