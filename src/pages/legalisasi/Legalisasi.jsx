import React from 'react';
import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';
import Instansi from '../../components/instansi/Instansi';
import DocumentLegalisasi from '../../components/document_legalisasi/DocumentLegalisasi'
import Footer from '../../components/footer/Footer';
import ImageFeatured from "../../assets/images/legalisasi.png";
import parse from 'html-react-parser';
import {Helmet} from "react-helmet";

const Terjemahan = () => {

    const PageTitle = parse('Jasa <span class="text-primary">Legalisasi</span>');

    return (
        <>
        <Helmet>
          <title>Konsultan Legalisasi Apostille Dokumen dan Penerjemah Tersumpah</title>
          <meta name="keyword" content="konsultan legalisasi, jasa legalisasi, jasa apostille , apostille kedutaan, legalisasi kedutaan, legalisir, jasa legalisir, legalisasi dokumen, legalisasi kemenlu, legalisasi kemenkumham" />
          <meta name="description" content="Jasa legalisasi kami merupakan  konsultan dokumen yang sudah profesional dan berpengalaman selama lebih dari 20 tahun ke berbagai instansi pemerintah  dan swasta" />
          <meta name="og:title" content="Konsultan Legalisasi Apostille Dokumen dan Penerjemah Tersumpah" />
          <meta name="og:description" content="Jasa legalisasi kami merupakan  konsultan dokumen yang sudah profesional dan berpengalaman selama lebih dari 20 tahun ke berbagai instansi pemerintah  dan swasta" />
          <meta property="twitter:title" content="Konsultan Legalisasi Apostille Dokumen dan Penerjemah Tersumpah" />
          <meta property="twitter:description" content="Jasa legalisasi kami merupakan  konsultan dokumen yang sudah profesional dan berpengalaman selama lebih dari 20 tahun ke berbagai instansi pemerintah  dan swasta" />
        </Helmet>
            <Header Title={PageTitle} />
            <div className="bg-section-light">
                <Intro
                    Title="Apa itu Jasa Legalisasi?" 
                    Content="Jasa legalisasi kami merupakan suatu konsultan dokumen yang sudah profesional dan berpengalaman selama lebih dari 20 tahun dalam mengatasi berbagai urusan pribadi, organisasi maupun perusahaan yang sedang membutuhkan bantuan dalam menyelesaikan urusan untuk mengesahkan dokumen ke berbagai instansi pemerintah  dan swasta."
                    Content2="Dan tentunya kami akan sangat membantu anda yang sedang ingin melanjutkan studi atau ingin bekerja keluar negeri untuk mengesahkan dokumen sebagai keharusan membuat legalitas, agar anda dapat mendapatkan perlindungan secara hukum sesuai dengan ketentuan negara, maka hal tersebut memerlukan Jasa konsultan legalisasi dokumen."
                    Image={ImageFeatured} />
                    <p></p>
                <Instansi />
                <DocumentLegalisasi />
            </div>
            <Footer />
        </>
    )
}

export default Terjemahan
