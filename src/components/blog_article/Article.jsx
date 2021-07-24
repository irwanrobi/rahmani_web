import React, { useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import './article.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons'

const Article = ({article}) => {
    
    const { content, author, featuredImage, createdAt} = article;

    useEffect(() => {
        const element = document.getElementsByClassName("article-text");
        element.innerHTML = content;
    }, [article])

    return (
        <section id="article">
            <div className="container bg-white article-bg">
                <div class="row">
                    <div class="col-sm-12">
                        <img src={process.env.REACT_APP_API_URL + '/uploads/' + featuredImage} className="article-img" alt="" />
                        <div className="article-info">
                            <p><FontAwesomeIcon icon={faUser} className="text-primary" /><span className="mx-2">{author}</span> <FontAwesomeIcon icon={faCalendar} className="text-primary" /><span className="mx-2">{moment(createdAt).lang("id").format('LL')}</span></p>
                        </div>
                        <div class="article-text">
                            {parse("" + content)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Article
