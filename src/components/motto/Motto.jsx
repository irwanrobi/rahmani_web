import React from 'react';
import './motto.scss';
import Divider from "../../elements/divider/Divider";

const Motto = () => {
    return (
        <section id="motto">
            <div className="container">
                <div className="section-title">
                    <h1>Motto</h1>
                    <Divider isTitle="true" />
                </div>
                <div className="row">
                    <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus natus voluptatem eligendi aliquid nemo rerum suscipit. Eum fugiat harum id voluptates perspiciatis quas obcaecati qui provident temporibus autem. Dolor, eligendi.</p>
                </div>
            </div>
        </section>
    )
}

export default Motto
