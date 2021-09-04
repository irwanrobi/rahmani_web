import React from 'react';
import './instansi.scss';
import Divider from "../../elements/divider/Divider";
import Kementerian from "../../assets/images/instansi/Kementerian.png";
import LembagaSwasta from "../../assets/images/instansi/LembagaSwasta.png";
import Kedutaan from "../../assets/images/instansi/Kedutaan.png";

const Instansi = () => {
    return (
        <section id="instansi">
            <div className="container">
                <div className="section-title">
                    <h1>Instansi Tujuan</h1>
                    <Divider isTitle="true" />
                </div>
                <div class="row gx-5">
                    <div class="col-sm-12 col-lg-6 instansi-detail">
                        <img src={Kementerian} className="instansi-img" alt="jasa legalisasi kementerian" />
                        <ul>
                            <li>Kementerian Hukum dan HAM</li>
                            <li>Kementerian Luar Negeri</li>
                            <li>Kementerian Agama</li>
                            <li>Kementerian Pendidikan</li>
                            <li>Kementrerian Restekdikti</li>
                        </ul>
                    </div>
                    <div class="col-sm-12 col-lg-6 instansi-detail">
                        <img src={LembagaSwasta} className="instansi-img" alt="jasa legalisasi lembaga swasta" />
                        <ul>
                            <li>Kamar Dagang dan Industri (KADIN)</li>
                            <li>Kantor Notaris</li>
                        </ul>
                    </div>
                    <div class="col-sm-12 col-lg-12 instansi-detail">
                        <img src={Kedutaan} className="instansi-img" alt="jasa legalisasi kedutaan" />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-lg-4">
                                    <ul>
                                        <li>Kedutaan Belanda</li>
                                        <li>Kedutaan China</li>
                                        <li>Kedutaan Arab Saudi</li>
                                        <li>Kedutaan Arab</li>
                                        <li>Kedutaan Kuwait</li>
                                        <li>Kedutaan Oman</li>
                                        <li>Kedutaan Qatar</li>
                                        <li>Kedutaan Yaman</li>
                                    </ul>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                    <ul>
                                        <li>Kedutaan Belanda</li>
                                        <li>Kedutaan China</li>
                                        <li>Kedutaan Arab Saudi</li>
                                        <li>Kedutaan Arab</li>
                                        <li>Kedutaan Kuwait</li>
                                        <li>Kedutaan Oman</li>
                                        <li>Kedutaan Qatar</li>
                                        <li>Kedutaan Yaman</li>
                                    </ul>
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                    <ul>
                                        <li>Kedutaan Belanda</li>
                                        <li>Kedutaan China</li>
                                        <li>Kedutaan Arab Saudi</li>
                                        <li>Kedutaan Arab</li>
                                        <li>Kedutaan Kuwait</li>
                                        <li>Kedutaan Oman</li>
                                        <li>Kedutaan Qatar</li>
                                        <li>Kedutaan Yaman</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Instansi
