import React from 'react';
import './header.scss';
import Divider from "../../elements/divider/Divider";
import Fade from 'react-reveal/Fade';

const Header = ({Title}) => {
    return (
        <header id="header">
            <div className="container col-xl-12 px-4 py-5">
                <div className="row align-items-center g-5 py-5">
                <div className="col-lg-12 page-title">
                    <Fade top>
                    <h1 className="display-5">
                        {Title}
                    </h1>
                    </Fade>
                    <Divider isTitle="false" />
                </div>
                </div>
            </div> 
        </header>
    )
}

export default Header
