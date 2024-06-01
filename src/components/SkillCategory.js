import React from "react"
import SkillCard from "./SkillCard"

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="text-center border border-gray-300 p-4">
      <h2 className="text-xl lg:text-2xl font-semibold mb-4 underline underline-offset-8">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} image={skill.image} alt={skill.alt} />
        ))}
      </div>
    </div>
  )
}

export default SkillCategory
