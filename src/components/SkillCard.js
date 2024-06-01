import React from "react"

const SkillCard = ({ image, alt }) => {
  return (
    <div className="card bg-base-100 shadow-xl w-full aspect-square flex items-center justify-center">
      <img src={image} alt={alt} className="w-20 h-20" />
    </div>
  )
}

export default SkillCard
