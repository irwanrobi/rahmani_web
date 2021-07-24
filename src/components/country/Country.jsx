import React from 'react';
import './country.scss';
import Divider from "../../elements/divider/Divider";
import { US, CN, AE, DE, JP, NL} from 'country-flag-icons/react/3x2';

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
                        <US title="United States" className="country-img"/>
                        <p>Inggris - Indonesia</p>
                        <p>Indonesia - Inggris</p>
                    </div>
                    <div class="col-sm-4 col-lg-4 country-detail">
                        <CN title="Mandarin" className="country-img"/>
                        <p>Mandarin - Indonesia</p>
                        <p>Indonesia - Mandarin</p>
                    </div>
                    <div class="col-sm-4 col-lg-4 country-detail">
                        <AE title="Uni Emirat Arab" className="country-img"/>
                        <p>Arab - Indonesia</p>
                        <p>Indonesia - Arab</p>
                    </div>
                    <div class="col-sm-4 col-lg-4 country-detail">
                        <DE title="Jerman" className="country-img"/>
                        <p>Jerman - Indonesia</p>
                        <p>Indonesia - Jerman</p>
                    </div>
                    <div class="col-sm-4 col-lg-4 country-detail">
                        <JP title="Jepang" className="country-img"/>
                        <p>Jepang - Indonesia</p>
                        <p>Indonesia - Jepang</p>
                    </div>
                    <div class="col-sm-4 col-lg-4 country-detail">
                        <NL title="Belanda" className="country-img"/>
                        <p>Belanda - Indonesia</p>
                        <p>Indonesia - Belanda</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Country
