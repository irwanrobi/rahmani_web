import React from 'react';
import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';
import Country from '../../components/country/Country';
import DocumentTerjemah from '../../components/document_terjemah/DocumentTerjemah';
import PurposeTerjemah from '../../components/purpose_terjemah/PurposeTerjemah';
import Footer from '../../components/footer/Footer';
import ImageFeatured from "../../assets/images/penerjemah.png";
import parse from 'html-react-parser';

const Terjemahan = () => {

    const PageTitle = parse('Jasa <span class="text-primary">Penerjemah</span>');

    return (
        <>
            <Header Title={PageTitle} />
            <div className="bg-section-light">
                <Intro
                    Title="Apa itu Jasa Penerjemah?" 
                    Content="Ciri utama penerjemah tersumpah adalah sudah pasti memiliki Surat Keputusan (SK) Gubernur DKI Jakarta. Karena mereka baru bisa praktik legal dan disebut certified translator jika memiliki SK Gubernur DKI Jakarta. Lantaran berhak menerjemahkan dokumen resmi negara, tanda tangan atau cap penerjemah tersumpah terdaftar di kedutaan-kedutaan besar negara sahabat. Hal ini bertujuan supaya pihak Dubes mudah memvalidasi hasil terjemahan.

                    Dengan kualitas terjemahan yang terbaik, sudah pasti tarif translator tersumpah di atas penerjemah biasa. Namun hasil terjemahan jelas sebanding dengan harga yang ditetapkan."
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
