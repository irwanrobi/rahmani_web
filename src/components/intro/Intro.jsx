import React from 'react';
import './intro.scss';
import Divider from "../../elements/divider/Divider";

const Intro = ({Title, Content, Content2, Image}) => {
    return (
        <section id="intro">
            <div className="container bg-white intro-bg">
                <div className="section-title">
                    <h2>{Title}</h2>
                    <Divider isTitle="true" />
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="intro-text">
                            <p>{Content}</p>
                            <p>{Content2}</p>
                        </div>
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
