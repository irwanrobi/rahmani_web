import React from 'react';
import Divider from "../../elements/divider/Divider";
import { Link } from 'react-router-dom'
import moment from 'moment';
import localization from 'moment/locale/id';

moment.updateLocale('id', localization);

const BlogCard = ({article}) => {


    return (
        <div class="col-sm-6 col-lg-4 col-xl-4">
            <Link to={`/blog/` + article._id} className="link-color">
            <div class="blog-card">
                <img src={process.env.REACT_APP_API_URL + '/uploads/' + article.featuredImage} class="card-img-top" alt="Artikel" />
                <div class="blog-card-body">
                    <small>{moment(article.createdAt).lang("id").format('LL')}</small>
                    {/* <small>{slug.replace(/\s/g, '-').trim() + '-' + new Date(article.createdAt).getTime()}</small> */}
                    <h3 class="blog-card-title">{article.title}</h3>
                    <Divider isTitle="true" />
                    <p class="blog-card-text">{article.summary}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default BlogCard
