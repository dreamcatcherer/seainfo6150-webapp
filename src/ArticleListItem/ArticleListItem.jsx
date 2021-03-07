import React from "react";
import PropTypes from 'prop-types';

function ArticleListItem(props) {

    const article = props.article

    return (
        <article>
            <header>
                <h1>{article.title}</h1>
                <time dateTime={article.timeStamp}>{article.displayDate}</time>
            </header>
            <p>{article.shortText}</p>
        </article>
    )
}


ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleListItem
