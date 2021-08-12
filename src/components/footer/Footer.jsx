import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import config from '../../config/config.json';
import Button from "../../elements/button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);


const Footer = () => {
    return (
        <footer id="footer">

        <div class="container footer">

        <div class="row">

            <div class="col-sm-12 col-md-6">

                <div className="contact-phone">
                    <i class="material-icons">phone_in_talk</i>
                    <h4 class="text-uppercase"> {config.phone_number}</h4>
                </div>

                
                <ul class="list-unstyled list-inline footer-social-media">
                    <li class="list-inline-item">
                        <a class="btn-floating" href={config.social_media.facebook} target="_blank">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating" href={config.social_media.instagram} target="_blank">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating" href={config.social_media.twitter} target="_blank">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating" href={config.social_media.linkedin} target="_blank">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="col-sm-12 col-md-6">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12">
                                <Button
                                    className="text-decoration-none px-5 py-3"
                                    href="/contact"
                                    type="link"
                                    isOutlinePrimary="yes"
                                    isLarge="yes">
                                    Minta Penawaran
                                </Button>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-6">
                            <ul class="list-unstyled">
                                <li>
                                    <Button
                                        className="text-decoration-none footer-link"
                                        href=""
                                        type="link">
                                        FAQ
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        className="text-decoration-none footer-link"
                                        href="/blog"
                                        type="link">
                                        Blog
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        className="text-decoration-none footer-link"
                                        href=""
                                        type="link">
                                        Syarat dan Ketentuan
                                    </Button>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-6">
                            <ul class="list-unstyled">
                                <li>
                                    <Button
                                        className="text-decoration-none footer-link"
                                        href="/legalisasi"
                                        type="link">
                                        Legalisasi
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        className="text-decoration-none footer-link"
                                        href="/terjemahan"
                                        type="link">
                                        Terjemahan
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        className="text-decoration-none footer-link"
                                        href=""
                                        type="link">
                                        Interpreter
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </div>

        <div class="footer-copyright text-center">© 2021 Copyright by
        <Link to="/home"> Rahmani Agency</Link>.
        </div>

        </footer>
    )
}

export default Footer
