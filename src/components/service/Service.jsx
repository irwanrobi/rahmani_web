import React from 'react';
import './service.scss';
import { Link } from 'react-router-dom'
import Divider from "../../elements/divider/Divider";

const Service = () => {
    return (
        <section id="service">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <Link to="/legalisasi" className="link-to"> 
                        <div className="service-card">
                            <div className="card-body">
                                <h2 className="card-title">Jasa Legalisasi</h2>
                                <Divider isTitle="true" />
                                <p class="card-text">Legalisasi merupakan jasa layanan hukum yang dapat membantu Anda untuk mendapatkan Sertifikasi atau Pengesahan Ulang dari Kementrian dan Kedutaan Asing.</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <Link to="/terjemahan" className="link-to"> 
                        <div className="service-card">
                            <div className="card-body">
                                <h2 className="card-title">Jasa Terjemah</h2>
                                <Divider isTitle="true" />
                                <p class="card-text">Tim profesional Penerjemah Tersumpah dari Rahmani telah memiliki SK Gubernur dari DKI Jakarta dan HPI sebagai Organisasi Utama Penerjemah Indonesia</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
