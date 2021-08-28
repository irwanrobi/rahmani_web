import React from 'react';
import {Helmet} from "react-helmet";

const About = () => {
    return (
        <div>
            <Helmet>
             <title>My Title</title>
             <meta name="description" content="Helmet application" />
             <meta name="og:description" content="......" />
            </Helmet>
            <h1>Halo Dunia!</h1>
        </div>
    )
}

export default About
