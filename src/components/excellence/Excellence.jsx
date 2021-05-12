import React from 'react';
import './excellence.scss';
import Terjamin from '../../assets/images/Terjamin.png';
import Akurat from '../../assets/images/Akurat.png';
import Terjangkau from '../../assets/images/Terjangkau.png';

const Excellence = () => {
    return (
        <section id="excellence">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="excellence-card">
                            <div className="card-outline">
                                <img src={Terjamin} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h2 className="card-title">Terjamin</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="excellence-card">
                            <div className="card-outline">
                                <img src={Akurat} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h2 className="card-title">Akurat</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="excellence-card">
                            <div className="card-outline">
                                <img src={Terjangkau} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h2 className="card-title">Terjangkau</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Excellence
