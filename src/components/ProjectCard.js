// src/components/ProjectCard.js
import React from "react"

const ProjectCard = ({
  image,
  title,
  description,
  badges,
  demoLink,
  codeLink,
}) => {
  return (
    <div className="card max-w-md lg:max-w-lg w-full mb-8 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="underline underline-offset-4 card-title text-lg lg:text-2xl">
          {title}
        </h2>
        <p className="text-base lg:text-lg">{description}</p>
        <div className="card-actions justify-start mt-4">
          {badges.map((badge, index) => (
            <div key={index} className={`badge badge-${badge.type}`}>
              {badge.label}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">Demo</button>
            </a>
          )}
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">Code</button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
