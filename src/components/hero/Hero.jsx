import React from "react";
import "./hero.scss";
import config from '../../config/config.json'
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
              Rahmani Agency merupakan jasa legalisasi dan penerjemah resmi(tersumpah). Layanan kami sudah memilki badan hukum dan dapat digunakan dalam mengatasi berbagai urusan pribadi, organisasi maupun perusahaan yang sedang membutuhkan bantuan dalam menyelesaikan urusan untuk mengesahkan dokumen ke berbagai instansi pemerintah  dan swasta.
            </p>
            </Fade>
            <Fade bottom delay={1500}>
            <Divider isTitle="false" />
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button
                className="text-decoration-none px-5 py-3 me-md-2"
                href="#form-offer"
                type="link"
                isPrimary="yes"
                isLarge="yes"
              >
                Minta Penawaran
              </Button>
              <a className="text-decoration-none px-5 py-3 btn btn-outline-primary btn-lg" href={config.whatsapp_link} target="_blank">
                <FontAwesomeIcon icon={['fab', 'whatsapp']} /> WhatsApp
              </a>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
