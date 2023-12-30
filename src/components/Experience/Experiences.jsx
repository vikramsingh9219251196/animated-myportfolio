import React from 'react'
import {motion} from "framer-motion";
import { experiences } from '../../data';
import { textVariants } from '../../utils/motion';
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarWrapper from '../../constants/SectionWrapper';
const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='icons_img'>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='experiences_img'
            />
          </div>
        }
      >
        <div>
          <h3 className='experiences_title'>{experience.title}</h3>
          <p
           className='experiences_para'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
  
        <ul className='experiences_point'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
             className='experiences_li'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };
const Experiences = () => {
  return (
    <div className='experiences'>
       <motion.div variants={textVariants()}>
        <p className='intro' style={{textAlign:"center"}}>
          What I have done so far
        </p>
        <h2 className='overview' style={{textAlign:"center"}}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='experiences_content'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default StarWrapper(Experiences, "work");
