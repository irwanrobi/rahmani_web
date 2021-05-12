import React from 'react';
import './purpose_terjemah.scss';
import Divider from "../../elements/divider/Divider";

const PurposeTerjemah = () => {
    return (
        <section id="purpose-terjemah">
            <div className="container">
                <div className="section-title">
                    <h1>Bisa Digunakan untuk Apa Saja?</h1>
                    <Divider isTitle="true" />
                </div>
                <div class="row gx-5">
                    <div class="col-sm-12 col-lg-6 purpose-name">
                        <h3>Perusahaan</h3>
                    </div>
                    <div class="col-sm-12 col-lg-6 purpose-name">
                        <h3>Bisnis</h3>
                    </div>
                    <div class="col-sm-12 col-lg-6 purpose-name">
                        <h3>Pendidikan</h3>
                    </div>
                    <div class="col-sm-12 col-lg-6 purpose-name">
                        <h3>Professional</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PurposeTerjemah
