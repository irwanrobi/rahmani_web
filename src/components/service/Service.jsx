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
                                <p class="card-text">Kami merupakan suatu konsultan dokumen yang sudah profesional dan berpengalaman selama lebih dari 20 tahun dalam mengatasi berbagai urusan untuk mengesahkan dokumen ke berbagai instansi pemerintah dan swasta</p>
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
                                <p class="card-text">Tim Penerjemah Tersumpah kami telah memiliki SK Gubernur DKI Jakarta dan kami terbiasa menerjemahkan dokumen-dokumen penting untuk pengurusan kedutaan.</p>
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
