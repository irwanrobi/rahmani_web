import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import * as api from '../../api'
import './blog-detail.scss';

import Header from '../../components/header/Header';
import Article from '../../components/blog_article/Article'
import Footer from '../../components/footer/Footer';
import Button from '../../elements/button/Button'

const Blog = () => {

    const { pathname } = useLocation();
    const articleId = pathname.split("/")[2];

    const [currentArticle, setCurrentArticle] = useState({});
    console.log(currentArticle)

    const getArticle = async (id) => {
        await api.fetchArticleDetail(id)
        .then((response) => {
            setCurrentArticle(response.data.data);
            console.log(response.data.data);
        })
        .catch((e) => {
            console.log(e)
        });
    };

    useEffect(() => {
        getArticle(articleId)
    }, [articleId]);

    const PageTitle = currentArticle.title;

    return (
        <>
            <Header Title={PageTitle} />
            <div className="bg-section-light">
                <Article article={currentArticle} />
                <section id="more-articles">
                    <div className="container">
                        <div className="row">
                            <Button
                                className="text-decoration-none px-5 py-3"
                                href="/blog"
                                type="link"
                                isPrimary="yes"
                                isLarge="yes">
                                Kembali ke Blog
                            </Button>
                        </div>
                    </div>
                </section>
                
            </div>
            <Footer />
        </>
    )
}

export default Blog
