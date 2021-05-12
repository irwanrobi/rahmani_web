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

const Home = () => {
  return (
      <>
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
      </>

  )
}

export default Home;
