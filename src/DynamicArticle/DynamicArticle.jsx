import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* add extra html with javascript attributes here */}
      <header>
      	<h1>{props.article.title}</h1>
      	<p><i>by {props.article.author}</i> (<a href = {props.article.authorEmail}>{props.article.authorEmail}</a>) </p>
      	<time dateTime = {props.article.timeStamp}> {props.article.displayDate} </time>
      </header>
      
      <HTMLText text={props.article.text} />
      
      
    </article>
  );
};

export default DynamicArticle;
