import React from 'react';
import './document_terjemah.scss';
import DokumenPerusahaan from '../../assets/images/dokumen_terjemah/Dokumen_Perusahaan.png';
import DokumenIndividu from '../../assets/images/dokumen_terjemah/Dokumen_Individu.png';
import DokumenPendidikan from '../../assets/images/dokumen_terjemah/Dokumen_Pendidikan.png';

const DocumentTerjemah = () => {
    return (
        <section id="document-terjemah">
            <div className="container bg-primary">
                <div class="row gx-5">
                    <div class="col-sm-12 col-lg-4 document-terjemah-detail">
                        <img src={DokumenPerusahaan} className="document-img" alt="" />
                        <h3>Dokumen Perusahaan</h3>
                    </div>
                    <div class="col-sm-12 col-lg-4 document-terjemah-detail">
                        <img src={DokumenIndividu} className="document-img" alt="" />
                        <h3>Dokumen Pribadi</h3>
                    </div>
                    <div class="col-sm-12 col-lg-4 document-terjemah-detail">
                        <img src={DokumenPendidikan} className="document-img" alt="" />
                        <h3>Dokumen Pribadi</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DocumentTerjemah
