import React, {useCallback, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PropTypes from 'prop-types';
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css"

function ArticleListItem(props) {
    //let {url} = useRouteMatch();
    const article = props.article
    const [buttonExpanded, setButtonExpanded] = useState(false)


    const toggle = () => {
      setButtonExpanded(!buttonExpanded)
    }
    const slug = ({match}) =>(
        match.param.slug
    )

     return (
     <div>
    <li className={styles.listItem}>
      <article className={styles.uglyItem}>
        <h2><Link to="/articlelist/${article.slug}">{props.article.title}</Link></h2>
        <p style={{display: buttonExpanded?"block":"none"}} className={styles.shortLine}>{props.article.shortText}</p>
        <time style={{display: buttonExpanded?"block":"none"}} className={styles.time} dateTime={props.article.timeStamp}>
          {props.article.displayDate}
        </time>
        <ArticleTextToggleButton buttonText={buttonExpanded? "Show less" : "Show more"} onClick={toggle}/>
      </article>
    </li>
        
   </div>
  );
};


ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleListItem
