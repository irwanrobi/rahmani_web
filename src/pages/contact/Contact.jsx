import React from 'react';
import parse from 'html-react-parser';
import Header from '../../components/header/Header';
import FormOffer from '../../components/form_offer/FormOffer';
import Footer from '../../components/footer/Footer';
import {Helmet} from "react-helmet";

const Contact = () => {

    const PageTitle = parse('<span class="text-primary">Kontak</span> Kami');

    return (
        <>
        <Helmet>
          <title>Kontak Kami: Konsultan Legalisasi Apostille Dokumen dan Penerjemah Tersumpah</title>
          <meta name="keyword" content="konsultan legalisasi, jasa legalisasi, jasa apostille , apostille kedutaan, legalisasi, legalisir, jasa legalisir, legalisasi dokumen, legalisir dokumen, legalisasi kemenlu, legalisasi kemenkumham, legalisasi kedutaan" />
          <meta name="description" content="Rahmani Agency merupakan jasa legalisasi apostille dan penerjemah tersumpah resmi. Layanan kami sudah memilki badan hukum untuk mengesahkan dokumen ke berbagai instansi pemerintah." />
          <meta name="og:title" content="Kontak Kami : Konsultan Legalisasi Apostille Dokumen dan Penerjemah Tersumpah" />
          <meta name="og:description" content="Rahmani Agency merupakan jasa legalisasi dan penerjemah resmi. Layanan kami sudah memilki badan hukum untuk mengesahkan dokumen ke berbagai instansi pemerintah." />
          <meta property="twitter:title" content="Kontak Kami : Konsultan Legalisasi Apostille Dokumen dan Penerjemah Tersumpah" />
          <meta property="twitter:description" content="Rahmani Agency merupakan jasa legalisasi dan penerjemah resmi. Layanan kami sudah memilki badan hukum untuk mengesahkan dokumen ke berbagai instansi pemerintah." />
        </Helmet>
        <Header Title={PageTitle} />
        <div className="bg-section-light">
            <FormOffer />
        </div>
        <Footer />
      </>
    )
}

export default Contact
