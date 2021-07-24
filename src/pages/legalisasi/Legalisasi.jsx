import React from 'react';
import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';
import Instansi from '../../components/instansi/Instansi';
import DocumentLegalisasi from '../../components/document_legalisasi/DocumentLegalisasi'
import Footer from '../../components/footer/Footer';
import ImageFeatured from "../../assets/images/legalisasi.png";
import parse from 'html-react-parser';

const Terjemahan = () => {

    const PageTitle = parse('Jasa <span class="text-primary">Legalisasi</span>');

    return (
        <>
            <Header Title={PageTitle} />
            <div className="bg-section-light">
                <Intro
                    Title="Apa itu Jasa Legalisasi?" 
                    Content="Jasa legalisasi dokumen tentunya sangat membantu bagi anda yang sedang mendirikan sebuah badan usaha atau hal yang berkaitan dengan keharusan membuat legalitas. Agar lembaga atau badan usaha yang anda buat mendapatkan perlindungan secara hukum dan bisa beroperasi sesuai dengan ketentuan negara, maka hal tersebut harus terdaftar dan memerlukan Jasa legalisasi dokumen."
                    Image={ImageFeatured} />
                <Instansi />
                <DocumentLegalisasi />
            </div>
            <Footer />
        </>
    )
}

export default Terjemahan
