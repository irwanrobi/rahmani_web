import React from "react";
import Hero from "../../components/hero/Hero";
import Excellence from '../../components/excellence/Excellence';
import Client from '../../components/client/Client';
import Service from '../../components/service/Service';
import Partner from '../../components/partner/Partner';
import FormOffer from '../../components/form_offer/FormOffer';
import Motto from '../../components/motto/Motto';
import BlogFeatured from '../../components/blog_featured/BlogFeatured';
import Footer from '../../components/footer/Footer'
import {Helmet} from "react-helmet";

const Home = () => {
  return (
      <React.Fragment>
        <Helmet>
          <title>Rahmani Agency: Konsultan Jasa Legalisasi Dokumen Berpengalaman dan Terpercaya</title>
          <meta name="keyword" content="konsultan legalisasi, jasa legalisasi, legalisasi, legalisir, jasa legalisir, legalisasi dokumen, legalisir dokumen, legalisasi kemenlu, legalisasi kemenkumham, legalisasi kedutaan" />
          <meta name="description" content="Rahmani Agency merupakan jasa legalisasi dan penerjemah resmi. Layanan kami sudah memilki badan hukum untuk mengesahkan dokumen ke berbagai instansi pemerintah." />
          <meta name="og:title" content="Rahmani Agency: Konsultan Jasa Legalisasi Dokumen Berpengalaman dan Terpercaya" />
          <meta name="og:description" content="Rahmani Agency merupakan jasa legalisasi dan penerjemah resmi. Layanan kami sudah memilki badan hukum untuk mengesahkan dokumen ke berbagai instansi pemerintah." />
          <meta property="twitter:title" content="Rahmani Agency: Konsultan Jasa Legalisasi Dokumen Berpengalaman dan Terpercaya" />
          <meta property="twitter:description" content="Rahmani Agency merupakan jasa legalisasi dan penerjemah resmi. Layanan kami sudah memilki badan hukum untuk mengesahkan dokumen ke berbagai instansi pemerintah." />
        </Helmet>
        <Hero />
        <div className="bg-section-light">
            <Excellence />
            <Client />
            <Service />
        </div>
        <Partner />
        <div className="bg-section-light">
            <FormOffer />
            <Motto />
            <BlogFeatured />
        </div>
        <Footer />
      </React.Fragment>

  )
}

export default Home;
