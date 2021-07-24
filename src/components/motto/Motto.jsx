import React from 'react';
import './motto.scss';
import Divider from "../../elements/divider/Divider";

const Motto = () => {
    return (
        <section id="motto">
            <div className="container">
                <div className="section-title">
                    <h1>Motto</h1>
                    <Divider isTitle="true" />
                </div>
                <div className="row">
                    <p className="lead">Kami membantu anda menyelesaikan masalah administratif serta membantu perusahaan dan bisnis anda berkembang cepat di dalam lingkup internasional</p>
                </div>
            </div>
        </section>
    )
}

export default Motto
