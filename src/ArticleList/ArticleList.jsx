import React from "react";
import PropTypes from 'prop-types';
import ArticleListItem from "../ArticleListItem/ArticleListItem"

function ArticleList(props) {
  const fetchedData = props.articles

  let displayContent = <div>You have no data!</div>

  if (fetchedData.length) {
    displayContent = (
        <ul>
            {fetchedData.map((item) => (
                <li key={item.slug}><ArticleListItem article={item}/></li>
            ))}
        </ul>
    )
  }

  return (
    <section>
        {displayContent}
    </section>
  );
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default ArticleList;