import React from "react";
import "./hero.scss";
import Button from "../../elements/button/Button";
import BrandElement from "../../assets/images/brand/brand-element.png";
import Divider from "../../elements/divider/Divider";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const Hero = () => {
  return (
    <section id="hero">
      <div className="container col-xl-12 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <Zoom>
          <div className="col-10 col-sm-8 col-lg-6 d-sm-nonek brand-element">
            <img
              src={BrandElement}
              className="brand-element-img d-block mx-lg-auto img-fluid"
              alt="Rahmani Logo"
            />
          </div>
            </Zoom>
          <div className="col-lg-6 hero-text">
            <Fade bottom delay={500}>
              <h1 className="display-5 hero-title">
                Konsultan Dokumen <span className="text-primary">Berpengalaman</span>
              </h1>
            </Fade>
            <Fade bottom delay={1000}>
            <p className="lead hero-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, deleniti dolore alias commodi adipisci vero excepturi eveniet nobis natus sunt voluptas dolor laudantium, atque officiis harum pariatur autem veritatis ratione?
            </p>
            </Fade>
            <Fade bottom delay={1500}>
            <Divider isTitle="false" />
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button
                className="text-decoration-none px-5 py-3 me-md-2"
                href=""
                type="link"
                isPrimary="yes"
                isLarge="yes"
              >
                Minta Penawaran
              </Button>
              <Button
                className="text-decoration-none px-5 py-3"
                href=""
                type="link"
                isOutlinePrimary="yes"
                isLarge="yes"
              >
                <FontAwesomeIcon icon={['fab', 'whatsapp']} /> WhatsApp
              </Button>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
