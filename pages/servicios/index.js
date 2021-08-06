import Layaut from "../../components/Template/Layaut";
import services from "../../db/services.json";
//Animation
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
//Content
import ServicesNavbar from "../../components/Pages/Services/servicesContent/ServicesNavbar";
import Inicio from "../../components/Pages/Services/servicesContent/Inicio";
import Consultoria from "../../components/Pages/Services/servicesContent/Consultoria";
import Logistica from "../../components/Pages/Services/servicesContent/Logistica";
import Web from "../../components/Pages/Services/servicesContent/Web";
import AppWeb from "../../components/Pages/Services/servicesContent/AppWeb";
//Hooks
import { useRef, useEffect } from "react";
import { link } from "../../hooks/link";
import Shop from "../../components/Pages/Services/servicesContent/Shop";
import Marketing from "../../components/Pages/Services/servicesContent/Marketing";
export default function Servicios() {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(`#${link(services[0].items[0])}__content`),
      {
        opacity: 0,
        y: "200%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: element.querySelector(
            `#${link(services[0].items[0])}__subtitle`
          ),
        },
      }
    );
    gsap.fromTo(
      element.querySelector(`#logistica__title`),
      {
        opacity: 0,
        y: "200%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: element.querySelector(`#services-logistica`),
        },
      }
    );
    for (let j = 1; j <= 5; j++) {
      for (let i = 0; i <= services[j].items.length - 1; i++) {
        gsap.fromTo(
          element.querySelectorAll(`#${link(services[j].items[i])}__subtitle`),
          {
            opacity: 0,
            y: "200%",
          },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            scrollTrigger: {
              trigger: element.querySelector(
                `#${link(services[j].items[i])}__content`
              ),
            },
          }
        );
        gsap.fromTo(
          element.querySelectorAll(`#${link(services[j].items[i])}__paragraph`),
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 2,
            scrollTrigger: {
              trigger: element.querySelector(
                `#${link(services[j].items[i])}__content`
              ),
            },
          }
        );
      }
    }
    for (let i = 2; i <= services; i++) {
      gsap.fromTo(
        element.querySelectorAll(`.consultoria-items-${i}`),
        {
          opacity: 0,
          y: "200%",
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: element.querySelector(
              `#${link(services[0].items[i - 1])}__subtitle`
            ),
          },
        }
      );
    }
    for (let i = 0; i <= 2; i++) {
      gsap.fromTo(
        element.querySelector(`#${link(services[0].items[i])}__subtitle`),
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector(
              `#${link(services[0].items[i])}__subtitle`
            ),
          },
        }
      );
    }
    for (let i = 1; i <= 3; i++) {
      gsap.fromTo(
        element.querySelectorAll(`.sub-${i}`),
        {
          y: "200%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: element.querySelector(`.sub_${i}`),
          },
        }
      );
    }
    gsap.to(".services-content__nav", {
      x: 0,
      duration: 2,
      opacity: 1,
    });
    gsap.to(".Title", {
      y: 0,
      duration: 2,
      opacity: 1,
    });
    gsap.to(".services-content-paragraph", {
      y: 0,
      duration: 2,
      opacity: 1,
    });
    gsap.to(".services-image", {
      x: 0,
      duration: 2,
      delay: 2,
      opacity: 1,
    });
    gsap.fromTo(
      element.querySelector(`#services-paragraph`),
      {
        opacity: 0,
        y: "200%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: element.querySelector(`.services-consultoria`),
        },
      }
    );
    gsap.fromTo(
      element.querySelector(`.services-content__nav`),
      {
        opacity: 0,
        x: "-200%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
      }
    );
  }, []);
  return (
    <Layaut>
      <div className="services" ref={ref}>
        <h1 className="Title">Servicios</h1>
        <div className="services-content">
          <ServicesNavbar services={services} />
          <div className="services--conte">
            <Inicio />
            <Consultoria services={services} />
            <Logistica services={services} />
            <Web services={services} />
            <AppWeb services={services} />
            <Shop services={services} />
            <Marketing services={services} />
          </div>
        </div>
      </div>
    </Layaut>
  );
}
