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
                    Content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta distinctio optio tenetur asperiores deleniti repudiandae in ipsam explicabo aut officia dignissimos voluptas, obcaecati, quos id facere quis eligendi illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est, dolorem nam nulla perferendis autem itaque iste sunt fugiat non, aliquid reprehenderit possimus. Velit odit deserunt quis, esse quos minus!"
                    Image={ImageFeatured} />
                <Instansi />
                <DocumentLegalisasi />
            </div>
            <Footer />
        </>
    )
}

export default Terjemahan
