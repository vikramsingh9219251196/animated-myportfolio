import React from 'react'
import "./hero.css"
import {animate, motion} from "framer-motion";
import CTA from '../CTA';
export const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }

}

const SliderVariants={
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        opacity:1,
        transition:{
            duration:20,
            repeatType:"mirror",
         repeat:Infinity,
        },
    },
  
}
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero_wrapper">
        <motion.div className="hero_textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 className='name' variants={textVariants}>VIKRAM SINGH</motion.h2>
            <motion.h1 variants={textVariants}>Full Stack Web Developer and UI designer</motion.h1>
            <motion.div variants={textVariants} className='buttons'>
                <motion.button variants={textVariants}><CTA/></motion.button>
                <motion.button className='btn2' variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img className='scroll' variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={SliderVariants} initial="initial" animate="animate">
            Writer Content Creater Influencer
        </motion.div>
      <div className="hero_imageContainer"  >
        <img style={{width:"23rem"}} src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
