import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import flower from "../Assets/flower.svg";
import another from "../Assets/another.svg";
import arrow from "../Assets/arrow.svg";
import malva from "../Assets/malva_GIF.gif";
import shop from "../Assets/fakeshop_GIF.gif";
import phunt from "../Assets/phunt_gif.gif";
import zuki from "../Assets/zuki.jpeg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);
function Home() {
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    asunto: null,
    message: null,
  });

  let iframeRef = useRef(null);
  let hero = useRef(null);
  let home = useRef(null);
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let text4 = useRef(null);
  let p1 = useRef(null);

  let section1 = useRef(null);
  let titleProjects1 = useRef(null);
  let titleProjects2 = useRef(null);

  let project1 = useRef(null);
  let project2 = useRef(null);
  let project3 = useRef(null);
  let gif1 = useRef(null);
  let gif2 = useRef(null);
  let gif3 = useRef(null);
  let mask = useRef(null);
  const form = useRef();
  let about_display = useRef(null);

  const timeline_home = gsap.timeline();
  const timeline_scroll = gsap.timeline();

  emailjs.init("Kqp6QquReDazEdiBa");

  const handleInput = (target) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yvk3o2s",
        "template_iocys7u",
        form.current,
        "Kqp6QquReDazEdiBa"
      )
      .then(
        (result) => {
          alert("Gracias por contactarte!");
        },
        (error) => {
          alert("Ups no se pudo mandar el mail");
        }
      );
  };

  useEffect(() => {
    timeline_home
      .from(iframeRef, { scale: 0.2, duration: 2, opacity: 0 }, "-=2")
      .from(
        [text1, text2, text3, text4],
        {
          duration: 1.2,
          skewY: 15,
          y: 500,
          stagger: {
            amount: 0.2,
          },
        },
        "-=1.5"
      )
      .from(p1, { duration: 1, x: -100, opacity: 0 }, "-=1")
      .from(".flower-svg", { duration: 1, y: 100, opacity: 0 }, "-=1");

    timeline_scroll
      .to(
        [text1, text2, text3, text4],
        { duration: 1.5, skewY: 25, y: 500 },
        "same"
      )
      .to(p1, { opacity: 0, scale: 0.3 }, "same")
      .to(".flower-svg", { opacity: 0, scale: 0.3 }, "same")

      .from(titleProjects1, { duration: 2 }, "same5")
      .from(titleProjects2, { duration: 2 }, "same5")

      .to(
        titleProjects2,
        { xPercent: -100, ease: "power1.inOut", opacity: 0 },
        "same2"
      )
      .to(
        titleProjects1,
        { xPercent: 100, ease: "power1.inOut", opacity: 0 },
        "same2"
      )
      .to(iframeRef, { scale: 4.5, ease: "power1.in", duration: 2.5 }, "same2")
      .to(mask, { display: "none" }, "same2")

      .from(
        project1,
        { xPercent: -100, ease: "power1.inOut", delay: 1.5, duration: 1.5 },
        "same2"
      )
      .from(
        gif1,
        { xPercent: 100, ease: "power1.inOut", delay: 1.5, duration: 1.5 },
        "same2"
      )

      .to(project1, { duration: 1.5 }, "same3")
      .to(gif1, { duration: 1.5 }, "same3")
      // .from(project1, {duration:1.5},"same3")
      // .from(gif1,{duration:1.5},"same3")

      .from(
        project2,
        { xPercent: -100, ease: "power1.inOut", duration: 1.5 },
        "same4"
      )
      .from(
        gif2,
        { xPercent: 100, ease: "power1.inOut", duration: 1.5 },
        "same4"
      )

      .to(project2, { duration: 1.5 }, "same40")
      .to(gif2, { duration: 1.5 }, "same40")

      .from(
        project3,
        { xPercent: -100, ease: "power1.inOut", duration: 1.5 },
        "same8"
      )
      .from(
        gif3,
        { xPercent: 100, ease: "power1.inOut", duration: 1.5 },
        "same8"
      )

      .to(project2, { duration: 1.5 }, "same80")
      .to(gif2, { duration: 1.5 }, "same80")

      .from(
        ".about .box_titleProject_top",
        { yPercent: 50, ease: "power1.in", duration: 2.5, opacity: "0" },
        "same6"
      )
      .from(
        ".zuki",
        { yPercent: 50, ease: "power1.in", duration: 2.5, opacity: "0" },
        "same6"
      )

      .from(".about .box_titleProject_top", { duration: 1.5 }, "same7")
      .from(".zuki", { duration: 1.5 }, "same7");

    // .to(iframeRef,{scale:0.7, ease:"power1.in",duration:2.5, opacity:0})

    ScrollTrigger.create({
      trigger: home,
      animation: timeline_scroll,
      start: "top top",
      end: () =>
        "+=" +
        (hero.offsetHeight + section1.offsetHeight + project1.offsetHeight * 6),
      // end:() => "+=" + home.offsetHegiht,
      scrub: 1.5,
      // markers:true,
      snap: 1 / 4,
    });

    return () => {
      ScrollTrigger.clearScrollMemory();
      window.history.scrollRestoration = "manual";
      timeline_home.kill();
      timeline_scroll.kill();
    };
  });

  return (
    <div className="home" ref={(el) => (home = el)}>
      <Header timeline={timeline_home} />
      <div
        ref={(el) => (hero = el)}
        className="hero"
        style={{ margin: "auto" }}
      >
        <div className="container" style={{ flexDirection: "column" }}>
          <div className="container1" style={{ justifyContent: "end" }}>
            <div className="txt-line">
              <p ref={(el) => (text1 = el)}>Franco</p>
            </div>
            <div className="txt-line line-bottom">
              <p ref={(el) => (text2 = el)}>Martinetti</p>
            </div>
          </div>
          <div className="left-side-quote">
            <p ref={(el) => (p1 = el)}>
              Desarrollador REACT / NODE / .NET <br /> Estudiante universitario{" "}
              <br /> Buenos aires, Argentina
            </p>
          </div>
        </div>

        <div className="wrapper_iframe">
          <div className="container_iframe">
            <iframe
              ref={(el) => (iframeRef = el)}
              src="https://my.spline.design/noiselightscopy-e997e2855e892ded4d1170fd4cbc7c20/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
            <div ref={(el) => (mask = el)} className="mask"></div>
          </div>
        </div>

        <div className="container">
          <div className="flower-svg">
            <img src={flower} alt="" />
          </div>
          <div className="container1">
            <div className="txt-line">
              <p ref={(el) => (text3 = el)}>Web</p>
            </div>
            <div className="txt-line line-bottom">
              <p ref={(el) => (text4 = el)}>Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="selected-projects" ref={(el) => (section1 = el)}>
        <div ref={(el) => (titleProjects1 = el)}>
          <p>Selected</p>
        </div>
        <div ref={(el) => (titleProjects2 = el)}>
          <p>Projects</p>
        </div>
      </div>

      <div className="project1">
        <div className="box_titleProject_top" ref={(el) => (project1 = el)}>
          <div>
            <h1 style={{ margin: "0" }}>GSAP ANIMATION</h1>
            <p>
              Una web creativa basada en animaciones con GSAP y React
              <br />
              siguiendo los estandares de diseño de{" "}
              <a href="https://www.awwwards.com">AWWWARDS</a>
              <br />
              manteniendo el foco en la experiencia del usuario
              <br />
              <br />
              Utiliza Gatsby SSR para optimizar el renderizado
              <br />
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://gatsby-gsap.netlify.app/"
              style={{
                padding: "10px 60px",
                background: "darkgray",
                border: "0",
                marginLeft: "10px",
                textDecoration: "none",
              }}
            >
              View Demo
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/franetti/creative_agency_web"
              style={{
                padding: "10px 60px",
                background: "darkgray",
                border: "0",
                marginLeft: "15px",
                textDecoration: "none",
              }}
            >
              Github
            </a>
          </div>
        </div>
        <div className="container_gif" ref={(el) => (gif1 = el)}>
          <div>
            <img src={malva} alt="" />
          </div>
        </div>
      </div>

      <div className="project">
        <div className="box_titleProject_top" ref={(el) => (project2 = el)}>
          <div>
            <h1>MERN STACK</h1>
            <p>Un ecommerce moderno hecho con REACT, NODE, EXPRESS y MONGO</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fakeshop-mern.netlify.app/"
              style={{
                padding: "10px 60px",
                background: "darkgray",
                border: "0",
                marginLeft: "10px",
                textDecoration: "none",
              }}
            >
              View Demo
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/franetti/fakeshop_client"
              style={{
                padding: "10px 60px",
                background: "darkgray",
                border: "0",
                marginLeft: "15px",
                textDecoration: "none",
              }}
            >
              Github
            </a>
          </div>
        </div>
        <div className="container_gif" ref={(el) => (gif2 = el)}>
          <div>
            <img src={shop} alt="" />
          </div>
        </div>
      </div>

      <div className="project">
        <div className="box_titleProject_top" ref={(el) => (project3 = el)}>
          <div>
            <h1>FIREBASE CRUD</h1>
            <p>
              El clasico create, read, update and delete <br />
              <br /> implementado con Firebase para la persistencia de datos y
              Next SSR.
              <br />
              Hecho en REACT
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://simpleabm-firebase.netlify.app/"
              style={{
                padding: "10px 60px",
                background: "darkgray",
                border: "0",
                marginLeft: "10px",
                textDecoration: "none",
              }}
            >
              View Demo
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/franetti/simpleabm_firebase"
              style={{
                padding: "10px 60px",
                background: "darkgray",
                border: "0",
                marginLeft: "15px",
                textDecoration: "none",
              }}
            >
              Github
            </a>
          </div>
        </div>
        <div className="container_gif" ref={(el) => (gif3 = el)}>
          <div>
            <img src={phunt} alt="" />
          </div>
        </div>
      </div>
      {/* 
      <div className="about_container" ref={(el) => (about_display = el)}>
        {/* <div className="my-skills-reel" id="skill-reel">
          <div className="reel-item">&nbsp; // sobre mi</div>
          <div className="reel-item">&nbsp; // sobre mi</div>
          <div className="reel-item">&nbsp; // sobre mi</div>
          <div className="reel-item">&nbsp; // sobre mi</div>
          <div className="reel-item">&nbsp; // sobre mi</div>
          <div className="reel-item">&nbsp; // sobre mi</div>
          <div className="reel-item">&nbsp; // sobre mi</div>
          <div className="reel-item">&nbsp; // sobre mi</div>
          <div className="reel-item">&nbsp; // sobre mi</div>
          <div className="reel-item">&nbsp; // sobre mi</div>
        </div> */}
      {/* <div className="about" >
                <div className='box_titleProject_top' style={{alignItems:"center",justifyContent:"center"}}>                         
                    <div style={{width:"fit-content"}}>                                                                
                        <p>Soy un programador de buenos aires enfocado en desarrollo web con experiencia en
                            .net, javascript(react,node), y sql. Estudio la carrera de tecnico en sistemas en la universidad tecnologica nacional.<br/>
                            Actualmente me encuentro trabajando en el area de desarrollo para una empresa financiera local.
                            Me gusta pasar tiempo investigando y probando cosas nuevas, tambien soy fan del diseño, el arte, 
                            y todas las formas de expresión... <br/>                           
                            y claramente de mi perro je
                        </p>                        
                    </div>
                </div>
                <div className='zuki' >
                    <div style={{position:"relative"}}>
                        <img src={zuki} alt="" />                                               
                    </div>                
                </div>                                                         
            </div> 
    </div> */}

      <div className="contact_container" ref={(el) => (about_display = el)}>
        <div className="contact">
          <div className="contact_box">
            <div>
              <div style={{ flexDirection: "initial " }}>
                <img src={arrow} alt="" style={{ width: "3.5rem" }} />
                <p
                  style={{
                    fontSize: "4rem",
                    margin: "15px 0 0 15px",
                    fontFamily: "Roboto Mono",
                  }}
                >
                  contacto
                </p>
              </div>
              <ul>
                <li>franco.martinetti@gmail.com</li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/franco-martinetti-243a791ab/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    linkedin
                  </a>
                </li>
              </ul>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div style={{ marginBottom: "12px" }}>
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  required
                  name="name"
                  onChange={(e) => handleInput(e.target)}
                />
              </div>
              <div style={{ marginBottom: "12px" }}>
                <label htmlFor="">Email</label>
                <input type="text" required name="email" />
              </div>
              <div style={{ marginBottom: "12px" }}>
                <label htmlFor="">Asunto</label>
                <input type="text" required name="asunto" />
              </div>
              <div style={{ marginBottom: "12px" }}>
                <label htmlFor="">Mensaje</label>
                <textarea
                  id=""
                  cols="40"
                  rows="10"
                  required
                  name="message"
                ></textarea>
              </div>
              <div>
                <button type="submit">Enviar </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div style={{width:"85%",textAlign:"center", paddingTop:"50px", margin:"auto"}}>
                Hecho con &#10084; por Franco Martinetti
            </div> */}
      </div>
    </div>
  );
}

export default Home;
