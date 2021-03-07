import React from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import HTMLText from "../HTMLText/HTMLText";
import ArticleList from "../ArticleList/ArticleList"

const DynamicArticle = (props) => {
  //let {url} = useRouteMatch({path:'/'});
  //console.log("url", url)
  //console.log("1",<ArticleList/>)
  return (
    <article>
      <Link to={'/articlelist'}> Back</Link>
      <header>
        <h1>{props.article.title}</h1>
        <address>
          by {props.article.author} (
          <a href={props.article.authorEmail}>{props.article.authorEmail}</a>)
          <br />
        </address>
        <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
      </header>
      <HTMLText text={props.article.text} />
    </article>
    
  );
};

export default DynamicArticle;
