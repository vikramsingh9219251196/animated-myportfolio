import React from 'react'
import {services} from "../../data";
import {motion} from "framer-motion"
import { fadeIn,textVariants } from '../../utils/motion';
import SectionWrapper from "../../constants/SectionWrapper"
import {Tilt} from "react-tilt";

const ServiceCard = ({ title, icon,index }) => (
  <Tilt className="tilt">
    <motion.div className='card_container'  variants={fadeIn("right", "spring",0.5*index, 0.75)}>
      <div className='cards' options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}>
        <img src={icon} alt={title} className='icons' />
        <h3>{title}</h3>
      </div>
    </motion.div>
    </Tilt>
  );
  
  

const About = () => {
  return (
    <div className='about'>
        <motion.div className='heading' variants={textVariants()}>
        <p className='into' style={{textAlign:"center"}}>Introduction</p>
       <h2 className='overview'>Overview.</h2>
        </motion.div>
    
     <motion.p className='para'  variants={fadeIn("right", "spring", 0.1, 1)}> Hello! I'm Vikram Singh, a passionate and wanna become a experienced web developer with a knack for turning ideas into functional and visually appealing websites.
     With few months of experience in the field, I've had the privilege of working on a small projects.
     Take a look at my portfolio to see some of my recent work.</motion.p>

        <div className='services'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(About, "about");
