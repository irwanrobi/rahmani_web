import React from 'react';
import './document_legalisasi.scss';
import DividerSecondary from '../../elements/divider_secondary/DividerSecondary'
import Ijazah from '../../assets/images/dokumen_legalisasi/Ijazah.png';
import Transkrip from '../../assets/images/dokumen_legalisasi/Transkrip.png';
import Raport from '../../assets/images/dokumen_legalisasi/Raport.png';
import KTP from '../../assets/images/dokumen_legalisasi/KTP.png';
import AktaKematian from '../../assets/images/dokumen_legalisasi/AktaKematian.png';
import SIUP from '../../assets/images/dokumen_legalisasi/SIUP.png';
import AktaPerceraian from '../../assets/images/dokumen_legalisasi/AktaPerceraian.png';
import SIM from '../../assets/images/dokumen_legalisasi/SIM.png';
import KartuKeluarga from '../../assets/images/dokumen_legalisasi/KartuKeluarga.png';
import TDP from '../../assets/images/dokumen_legalisasi/TDP.png';
import Export from '../../assets/images/dokumen_legalisasi/Export.png';
import Agreement from '../../assets/images/dokumen_legalisasi/Agreement.png';

const DocumentLegalisasi = () => {
    return (
        <section id="document-legalisasi">
            <div className="container bg-primary">
                <div className="section-title">
                    <h1>Dokumen Pribadi</h1>
                    <DividerSecondary isTitle="true" />
                </div>
                <div class="row">
                    <div class="document-legalisasi-detail">
                        <img src={Ijazah} className="document-img" alt="" />
                        <h4>Ijazah</h4>
                    </div>
                    <div class="document-legalisasi-detail">
                        <img src={Transkrip} className="document-img" alt="" />
                        <h4>Transkrip</h4>
                    </div>
                    <div class="document-legalisasi-detail">
                        <img src={Raport} className="document-img" alt="" />
                        <h4>Raport</h4>
                    </div>
                    <div class="document-legalisasi-detail">
                        <img src={KTP} className="document-img" alt="" />
                        <h4>KTP</h4>
                    </div>
                    <div class="document-legalisasi-detail">
                        <img src={AktaKematian} className="document-img" alt="" />
                        <h4>Akta Kematian</h4>
                    </div>
                    <div class="document-legalisasi-detail">
                        <img src={SIUP} className="document-img" alt="" />
                        <h4>SIUP</h4>
                    </div>
                    <div class="document-legalisasi-detail">
                        <img src={AktaPerceraian} className="document-img" alt="" />
                        <h4>Akta Perceraian</h4>
                    </div>
                    <div class="document-legalisasi-detail">
                        <img src={SIM} className="document-img" alt="" />
                        <h4>SIM</h4>
                    </div>
                    <div class="document-legalisasi-detail">
                        <img src={KartuKeluarga} className="document-img" alt="" />
                        <h4>Kartu Keluarga</h4>
                    </div>
                    <div class="document-legalisasi-detail">
                        <img src={TDP} className="document-img" alt="" />
                        <h4>TDP</h4>
                    </div>
                </div>

                <div className="section-title dokumen_komersial">
                    <h1>Dokumen Komersial</h1>
                    <DividerSecondary isTitle="true" />
                </div>
                <div class="row">
                    <div class="document-legalisasi-detail">
                        <img src={Export} className="document-img" alt="" />
                        <h4>Export</h4>
                    </div>
                    <div class="document-legalisasi-detail">
                        <img src={Agreement} className="document-img" alt="" />
                        <h4>Agreement</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DocumentLegalisasi