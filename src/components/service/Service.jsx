import React from 'react';
import './service.scss';
import Divider from "../../elements/divider/Divider";

const Service = () => {
    return (
        <section id="service">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="service-card">
                            <div className="card-body">
                                <h2 className="card-title">Jasa Legalisasi</h2>
                                <Divider isTitle="true" />
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia a eius, ipsa assumenda iure accusamus. Obcaecati, sit nam! Soluta ullam doloribus voluptatem ducimus sed labore, magni eos sunt fuga maiores!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="service-card">
                            <div className="card-body">
                                <h2 className="card-title">Jasa Terjemah</h2>
                                <Divider isTitle="true" />
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia a eius, ipsa assumenda iure accusamus. Obcaecati, sit nam! Soluta ullam doloribus voluptatem ducimus sed labore, magni eos sunt fuga maiores!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
