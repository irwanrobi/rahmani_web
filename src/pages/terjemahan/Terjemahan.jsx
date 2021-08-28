import React from 'react';
import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';
import Country from '../../components/country/Country';
import DocumentTerjemah from '../../components/document_terjemah/DocumentTerjemah';
import PurposeTerjemah from '../../components/purpose_terjemah/PurposeTerjemah';
import Footer from '../../components/footer/Footer';
import ImageFeatured from "../../assets/images/penerjemah.png";
import parse from 'html-react-parser';
import {Helmet} from "react-helmet";

const Terjemahan = () => {

    const PageTitle = parse('Jasa <span class="text-primary">Penerjemah</span>');

    return (
        <>
        <Helmet>
            <title>Konsultan Legalisasi Dokumen dan Penerjemah Tersumpah</title>
            <meta name="keyword" content="konsultan legalisasi, penerjemah tersumpah, penerjemah resmi, jasa terjemahan, jasa terjemah, legalisasi terjemahan, legalisir terjemahan, legalisasi terjemah, legalisir terjemah " />
            <meta name="description" content="Penerjemah tersumpah merupakan penerjemah yang sudah memiliki Surat Keputusan (SK) Gubernur DKI.Mereka berhak menerjemahkan dokumen-dokumen penting negara. " />
            <meta name="og:title" content="Konsultan Legalisasi Dokumen dan Penerjemah Tersumpah" />
            <meta name="og:description" content="Penerjemah tersumpah merupakan penerjemah yang sudah memiliki Surat Keputusan (SK) Gubernur DKI.Mereka berhak menerjemahkan dokumen-dokumen penting negara." />
            <meta property="twitter:title" content="Konsultan Legalisasi Dokumen dan Penerjemah Tersumpah" />
            <meta property="twitter:description" content="Penerjemah tersumpah merupakan penerjemah yang sudah memiliki Surat Keputusan (SK) Gubernur DKI.Mereka berhak menerjemahkan dokumen-dokumen penting negara." />    

        </Helmet>
            <Header Title={PageTitle} />
            <div className="bg-section-light">
                <Intro
                    Title="Apa itu Jasa Penerjemah?" 
                    Content="Penerjemah tersumpah merupakan penerjemah yang sudah memiliki Surat Keputusan (SK) Gubernur DKI Jakarta. Mereka baru bisa menjalankan proses legal setelah memiliki SK Gubernur DKI Jakarta. Maka mereka berhak menerjemahkan dokumen-dokumen penting negara, tanda tangan atau endorse dari pernerjemah tersebut setalah sudah terdaftar di kementrian hukum dan ham dan kedutaan besar negara. Hal ini bertujuan untuk memudahkan pihak kedutaan mudah memverifikasi hasil terjemahan tersebut."
                    Image={ImageFeatured} />
                <Country />
            </div>
            <div className="bg-section-dark">
                <DocumentTerjemah />
                <PurposeTerjemah />
            </div>
            <Footer />
        </>
    )
}

export default Terjemahan
