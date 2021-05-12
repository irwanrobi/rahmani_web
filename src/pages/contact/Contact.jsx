import React from 'react';
import parse from 'html-react-parser';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Contact = () => {

    const PageTitle = parse('<span class="text-primary">Kontak</span> Kami');

    return (
        <>
        <Header Title={PageTitle} />
        <Footer />
      </>
    )
}

export default Contact
