import React from "react";
import "./work.css";
import Picture from "../../assets/work4.png";
import Picture1 from "../../assets/work5.png";
import Picture2 from "../../assets/work6.png";

const Work = () => {
  return (
    <section id="work">
      <div className="workDesign">
        <div className="workTypo">
          <span>Project</span>
          <span>Project</span>
          <span>Project</span>
        </div>
        <span className="workOpening">Portofolio projects</span>
      </div>
      <div className="workContainerMain">
        <div className="workMain">
          <div className="imageWrapper">
            <img className="workImage" src={Picture1} alt="Project 1" />
          </div>
          <div className="workContent">
            <div className="workText">
              <span className="workNumber">01.</span>
              <div className="workTitle">
                <span>OnlineShop</span>
                <span>
                  Aplikasi online shop berbasis bahasa Flutter dengan fitur
                  CRUD.
                </span>
              </div>
            </div>
            <div className="workLink">
              <a className="workLinked" href="#">
                <i className="uil uil-arrow-up-left"></i>
                <span>Online Preview</span>
              </a>
            </div>
          </div>
        </div>

        <div className="workMain">
          <div className="imageWrapper">
            <img className="workImage" src={Picture} alt="Project 2" />
          </div>
          <div className="workContent">
            <div className="workText">
              <span className="workNumber">02.</span>
              <div className="workTitle">
                <span>Web Sistem Inventori Jurusan TI</span>
                <span>
                  Website inventori untuk stok dan sistem peminjaman barang di
                  jurusan TI.
                </span>
              </div>
            </div>
            <div className="workLink">
              <a className="workLinked" href="#">
                <i className="uil uil-arrow-up-left"></i>
                <span>Online Preview</span>
              </a>
            </div>
          </div>
        </div>

        <div className="workMain">
          <div className="imageWrapper">
            <img className="workImage" src={Picture2} alt="Project 3" />
          </div>
          <div className="workContent">
            <div className="workText">
              <span className="workNumber">03.</span>
              <div className="workTitle">
                <span>E-Commerce Pisang Meledak</span>
                <span>
                  Aplikasi mobile E-Commerce berbasis Flutter dengan backend
                  Laravel.
                </span>
              </div>
            </div>
            <div className="workLink">
              <a className="workLinked" href="#">
                <i className="uil uil-arrow-up-left"></i>
                <span>Online Preview</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
