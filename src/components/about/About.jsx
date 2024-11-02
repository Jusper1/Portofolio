import { section } from "framer-motion/m";
import React from "react";
import "./about.css";

const About = () => {
  return (
    <section  className="about" id="about">
      <div className="aboutTypo">
        <span className="aboutTypoText">about me</span>
        <span className="aboutTypoText">about me</span>
        <span className="aboutTypoText">about me</span>
      </div>
      <div className="aboutContent">
        <h1 className="aboutInfo">
          Mahasiswa semester 5 prodi D3 Manajemen Informatika di Politeknik
          Negeri Padang. Berpengalaman dalam bidang design grafis selama 5
          tahun. Tertarik dalam bidang frontend developer, dan memiliki
          keterampilan komunikasi yang aktif dalam team
        </h1>
      </div>
    </section>
  );
};

export default About;
