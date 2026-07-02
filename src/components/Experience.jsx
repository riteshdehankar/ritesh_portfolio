import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <motion.div
    className="bg-tertiary p-6 rounded-2xl mb-6"
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-white text-xl font-bold">
      {experience.title}
    </h3>
    <p className="text-secondary text-sm">
      {experience.company_name} — {experience.date}
    </p>

    <ul className="mt-4 list-disc ml-5 space-y-2">
      {experience.points.map((point, i) => (
        <li key={i} className="text-white-100 text-sm">
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        What I have done so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Work Experience.
      </h2>
    </motion.div>

    <div className="mt-20">
      {experiences.map((exp, i) => (
        <ExperienceCard key={i} experience={exp} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Experience, "work");
