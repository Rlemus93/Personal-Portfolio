import React from "react"

const Hero = () => {
  return (
    <div data-theme="black">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Hi, I'm Ryan</h1>
            <h3 className="text-3xl py-6">
              A Full Stack Developer. Welcome to my portfolio.
            </h3>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
