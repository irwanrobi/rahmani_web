import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './blog.scss';

import Header from '../../components/header/Header';
import BlogCard from '../../components/blog_card/BlogCard'
import Footer from '../../components/footer/Footer';
import Divider from '../../elements/divider/Divider'
import parse from 'html-react-parser';
import {Helmet} from "react-helmet";
import Loader from '../../elements/loader/Loader'

import { getArticles } from '../../actions/articles'

const Blog = () => {

    const articles = useSelector((state) => state.articles);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles());
        
    }, [dispatch])

    const PageTitle = parse('<span class="text-primary">Artikel</span> Terkini');

    return (
        <>
         <Helmet>
          <title>My Title</title>
          <title>Blog: Konsultan Legalisasi Dokumen dan Penerjemah Tersumpah</title>
          <meta name="keyword" content="blog legalisasi, jasa legalisasi, legalisasi, legalisir, jasa legalisir, legalisasi dokumen, legalisir dokumen, legalisasi kemenlu, legalisasi kemenkumham, legalisasi kedutaan" />
          <meta name="og:title" content="Blog: Konsultan Legalisasi Dokumen dan Penerjemah Tersumpah" />
          <meta property="twitter:title" content="BLog: Konsultan Legalisasi Dokumen dan Penerjemah Tersumpah" />
         </Helmet>
            <Header Title={PageTitle} />
            <div className="bg-section-light">
                <section id="blog-page">
                    <div className="container bg-white blog-page-bg">
                        <div class="row gx-5">
                            {!articles.success == true ? <Loader /> : (
                                articles.data.map((article) => (
                                    <BlogCard key={article._id} article={article} />
                                ))
                            )}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Blog
