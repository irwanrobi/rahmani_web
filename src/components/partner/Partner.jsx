import React from 'react';
import './partner.scss';
import Divider from "../../elements/divider/Divider";
import Kementerian from '../../assets/images/partners/Kementerian.png';
import Kedutaan from '../../assets/images/partners/Kedutaan.png';
import LembagaSwasta from '../../assets/images/partners/LembagaSwasta.png';
import BUMN from '../../assets/images/partners/BUMN.png';

const Partner = () => {
    return (
        <section id="partner">
            <div className="container">
                <div className="section-title">
                    <h1>Instansi Tujuan</h1>
                    <Divider isTitle="true" />
                </div>
                <div className="row no-gutters partner-wrap clearfix">
                    <div className="partner-left col-sm-6 col-md-6 col-lg-6">
                        <div className="partner-name">
                            <div className="partner-img">
                                <div class="circle-shadow">
                                    <div class="circle-primary">
                                        <img src={Kementerian} alt="jasa legalisasi kementerian" />
                                    </div>
                                </div>
                            </div>
                            <h2>Kementerian</h2>
                            <Divider isTitle="true" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="partner-name">
                            <div className="partner-img">
                                <div class="circle-shadow">
                                    <div class="circle-primary">
                                        <img src={Kedutaan} alt="jasa legalisasi kedutaan" />
                                    </div>
                                </div>
                            </div>
                            <h2>Kedutaan</h2>
                            <Divider isTitle="true" />
                        </div>
                    </div>
                    <div className="partner-left partner-bottom col-sm-6 col-md-6 col-lg-6">
                        <div className="partner-name">
                            <div className="partner-img">
                                <div class="circle-shadow">
                                    <div class="circle-primary">
                                        <img src={LembagaSwasta} alt="jasa legalisasi lembaga swasta" />
                                    </div>
                                </div>
                            </div>
                            <h2>Lembaga Swasta</h2>
                            <Divider isTitle="true" />
                        </div>
                    </div>
                    <div className="partner-bottom col-sm-6 col-md-6 col-lg-6">
                        <div className="partner-name">
                            <div className="partner-img">
                                <div class="circle-shadow">
                                    <div class="circle-primary">
                                        <img src={BUMN} alt="jasa legalisasi bumn" />
                                    </div>
                                </div>
                            </div>
                            <h2>BUMN</h2>
                            <Divider isTitle="true" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partner
