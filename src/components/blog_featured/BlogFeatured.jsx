import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './blogfeatured.scss';
import Divider from "../../elements/divider/Divider";
import BlogCard from '../blog_card/BlogCard';
import Loader from '../../elements/loader/Loader'

import { getArticles } from '../../actions/articles'

const BlogFeatured = () => {

    const articles = useSelector((state) => state.articles);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles());
        
    }, [dispatch])

    return (
        <section id="blog-featured">
            <div className="container bg-white blog-featured">
                <div className="section-title">
                    <h1>Artikel</h1>
                    <Divider isTitle="true" />
                </div>
                <div class="row gx-5">
                    {!articles.success == true ? <Loader /> : (
                        articles.data.slice(0,3).map((article) => (
                            <BlogCard key={article._id} article={article} slug={article.title.toLowerCase()} />
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}

export default BlogFeatured
