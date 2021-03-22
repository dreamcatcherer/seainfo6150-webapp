import React from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import HTMLText from "../HTMLText/HTMLText";
import ArticleList from "../ArticleList/ArticleList"
import css from "./DynamicArticle.module.css"

const DynamicArticle = (props) => {
  return (
    <article >
      <Link to={'/articlelist'} className = {css.button}>   Back</Link>
      <div className = {css.articleBody}>
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
      </div>
    </article>
    
  );
};

export default DynamicArticle;
