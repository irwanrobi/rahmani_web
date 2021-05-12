import React from 'react';
import './country.scss';
import Divider from "../../elements/divider/Divider";
import FlagUK from "../../assets/images/flag_uk.png";

const Country = () => {
    return (
        <section id="countries">
            <div className="container">
                <div className="section-title">
                    <h1>Layanan Penerjemah Kami</h1>
                    <Divider isTitle="true" />
                </div>
                <div class="row gx-5">
                    <div class="col-sm-4 col-lg-4 country-detail">
                        <img src={FlagUK} className="country-img" alt="" />
                        <p>Inggris - Indonesia</p>
                        <p>Indonesia - Inggris</p>
                    </div>
                    <div class="col-sm-4 col-lg-4 country-detail">
                        <img src={FlagUK} className="country-img" alt="" />
                        <p>Inggris - Indonesia</p>
                        <p>Indonesia - Inggris</p>
                    </div>
                    <div class="col-sm-4 col-lg-4 country-detail">
                        <img src={FlagUK} className="country-img" alt="" />
                        <p>Inggris - Indonesia</p>
                        <p>Indonesia - Inggris</p>
                    </div>
                    <div class="col-sm-4 col-lg-4 country-detail">
                        <img src={FlagUK} className="country-img" alt="" />
                        <p>Inggris - Indonesia</p>
                        <p>Indonesia - Inggris</p>
                    </div>
                    <div class="col-sm-4 col-lg-4 country-detail">
                        <img src={FlagUK} className="country-img" alt="" />
                        <p>Inggris - Indonesia</p>
                        <p>Indonesia - Inggris</p>
                    </div>
                    <div class="col-sm-4 col-lg-4 country-detail">
                        <img src={FlagUK} className="country-img" alt="" />
                        <p>Inggris - Indonesia</p>
                        <p>Indonesia - Inggris</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Country
