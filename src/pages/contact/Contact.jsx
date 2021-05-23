import React from 'react';
import parse from 'html-react-parser';
import Header from '../../components/header/Header';
import FormOffer from '../../components/form_offer/FormOffer';
import Footer from '../../components/footer/Footer';

const Contact = () => {

    const PageTitle = parse('<span class="text-primary">Kontak</span> Kami');

    return (
        <>
        <Header Title={PageTitle} />
        <div className="bg-section-light">
            <FormOffer />
        </div>
        <Footer />
      </>
    )
}

export default Contact
