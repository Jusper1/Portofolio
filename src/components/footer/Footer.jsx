import React from "react";
import "./footer.css";
import picture from "../../assets/hafis1.jpg";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footerText">
        <img src={picture} alt="" />
        <span>Connect with</span>
      </div>
      <div className="footerLink">
        <a href="mailto:Hafisalkadri@gmail.com">Email</a>
        <a href="https://wa.me/085263154625">whatshap</a>
        <a href="https://github.com/jusper1">Github</a>
      </div>
      <div className="footerSosmed">
        <a href="https://instagram.com/hafis.alkdr1">Instagram</a>
        <a href="https://youtube.com/@hafisalkadri2721">Youtube</a>
        <a href="https://linkedin.com/in/hafisalkadri">LinkedIn</a>
        <a href="https://discordapp.com/users/jus7552">Discord</a>
      </div>
    </section>
  );
};

export default Footer;
