import React from 'react';
import './client.scss';
import indofoodLogo from '../../assets/images/clients/indofood.png';
import wilmarLogo from '../../assets/images/clients/wilmar.png';
import delitireLogo from '../../assets/images/clients/delitire.png';
import aplLogo from '../../assets/images/clients/apl.png';

const Client = () => {
    return (
        <section id="clients" className="section-bg">
            <div className="container">
                <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
                    <div className="col-lg-3 col-md-6 col-xs-6">
                        <div className="client-logo"> <img src={indofoodLogo} className="img-fluid" alt="indofood - jasa legalisasi" /> </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-6">
                        <div className="client-logo"> <img src={wilmarLogo} className="img-fluid" alt="wilmar - jasa legalisasi" /> </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-6">
                        <div className="client-logo"> <img src={delitireLogo}  className="img-fluid" alt="delitire - jasa legalisasi" /> </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-6">
                        <div className="client-logo"> <img src={aplLogo}  className="img-fluid" alt="albasi - jasa legalisasi" /> </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Client
