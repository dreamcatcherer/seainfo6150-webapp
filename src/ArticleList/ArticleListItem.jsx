import React from "react";
import PropTypes from 'prop-types';

function ArticleListItem(props) {

    const article = props.article

    return (
        <article>
            <header>
                <h1>{article.title}</h1>
                <p>{props.article.displayDate} {props.article.pubYear}<br /></p>
            </header>
            <p>{article.shortText}</p>
        </article>
    )
}


ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleListItem
