import React, { useRef } from "react";
import "./portfolio.scss";
import { items } from "../../data";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";


const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section style={{height:"100vh"}} >
      <div className="container">
        <div className="wrapper">
        
        <div className="imageContainer " ref={ref}>
            <img className="portfolio_img" src={item.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2 className="work">{item.title}</h2>
            <p>{item.desc}</p>
            <div className="btn">
            <a href={item.demo} ><button  target='_blank'>See Demo</button></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
