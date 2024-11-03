import React from "react";
import "./service.css";
import { section } from "framer-motion/client";
import { motion, useScroll, useTransform } from "framer-motion";

const Service = () => {
  const { scrollYProgress } = useScroll();
  const Design = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const FrontEnd = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const BackEnd = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <section id="service">
      <div className="serviceTypo">
        <motion.span style={{ x: Design }}>
          Design UI/UX<span className="outlineTypo">Developer</span> - Design
          UI/UX <span className="outlineTypo">Developer</span> - Design UI/UX{" "}
          <span className="outlineTypo">Developer</span> -{" "}
        </motion.span>
        <motion.span style={{ x: FrontEnd }}>
          FrontEnd<span className="outlineTypo">Developer</span> - FrontEnd{" "}
          <span className="outlineTypo">Developer</span> - FrontEnd{" "}
          <span className="outlineTypo">Developer</span> -{" "}
        </motion.span>
        <motion.span style={{ x: BackEnd }}>
          {" "}
          <span className="outlineTypo">BackEnd</span> Developer -{" "}
          <span className="outlineTypo">BackEnd</span> Developer -{" "}
          <span className="outlineTypo">BackEnd</span> Developer -{" "}
        </motion.span>
      </div>
      <div className="serviceStack">
        <div className="serviceTechStack">
          <span>Laravel</span>
          <span>flutter</span>
          <span>node</span>
          <span>React</span>
          <span>MySQL</span>
        </div>
        <div className="serviceTechStack">
          <span>HTML</span>
          <span>CSS</span>
          <span>javaScript</span>
          <span>PHP</span>
        </div>
      </div>
    </section>
  );
};

export default Service;
