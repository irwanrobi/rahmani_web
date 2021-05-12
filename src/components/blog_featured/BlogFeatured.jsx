import React from 'react';
import './blogfeatured.scss';
import Divider from "../../elements/divider/Divider";

const BlogFeatured = () => {
    return (
        <section id="blog-featured">
            <div className="container bg-white blog-featured">
                <div className="section-title">
                    <h1>Artikel</h1>
                    <Divider isTitle="true" />
                </div>
                <div class="row gx-5">
                    <div class="col-sm-6 col-lg-4 col-xl-4">
                        <div class="blog-card">
                            <img src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="card-img-top" alt="Artikel" />
                            <div class="blog-card-body">
                                <small>11 Maret, 2021</small>
                                <h3 class="blog-card-title">Tips mengurus dokumen dengan aman</h3>
                                <Divider isTitle="true" />
                                <p class="blog-card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 col-xl-4">
                        <div class="blog-card">
                            <img src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="card-img-top" alt="Artikel" />
                            <div class="blog-card-body">
                                <small>11 Maret, 2021</small>
                                <h3 class="blog-card-title">Tips mengurus dokumen dengan aman</h3>
                                <Divider isTitle="true" />
                                <p class="blog-card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 col-xl-4">
                        <div class="blog-card">
                            <img src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="card-img-top" alt="Artikel" />
                            <div class="blog-card-body">
                                <small>11 Maret, 2021</small>
                                <h3 class="blog-card-title">Tips mengurus dokumen dengan aman</h3>
                                <Divider isTitle="true" />
                                <p class="blog-card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogFeatured
