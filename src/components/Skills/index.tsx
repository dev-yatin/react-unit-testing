import React from "react";
import SkillProps from "./skills.type";

function Skills(props: SkillProps) {
  const skills = props.skills;
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}

export default Skills;
