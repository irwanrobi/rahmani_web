import React, {useEffect, useState} from 'react';
import axios from "axios";
import Divider from "../../elements/divider/Divider";
import { Link } from 'react-router-dom'
import moment from 'moment';
import localization from 'moment/locale/id';

moment.updateLocale('id', localization);

const BlogCard = ({article}) => {

    const [featuredImage, setFeaturedImage] = useState('');

    useEffect(() => {
        axios({
            method: "GET",
            url: article._links['wp:featuredmedia'][0].href,
        })
        .then((result) => {
            setFeaturedImage(result.data.guid.rendered)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [article._links['wp:featuredmedia'][0].href])
    

    return (
        <div class="col-sm-6 col-lg-4 col-xl-4">
            <a href={article.link} className="link-color" target="_blank" rel="noopener noreferrer">
            <div class="blog-card">
                <img src={featuredImage} class="card-img-top" alt="Artikel" />
                <div class="blog-card-body">
                    {/* <small>{moment(article.createdAt).lang("id").format('LL')}</small> */}
                    {/* <small>{slug.replace(/\s/g, '-').trim() + '-' + new Date(article.createdAt).getTime()}</small> */}
                    <h3 class="blog-card-title">{article.title.rendered}</h3>
                    <Divider isTitle="true" />
                    {/* <p class="blog-card-text">{article.excerpt.rendered}</p> */}
                </div>
            </div>
            </a>
        </div>
    )
}

export default BlogCard
