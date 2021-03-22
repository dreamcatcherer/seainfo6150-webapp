import React, {useState} from "react";
import styles from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = (props) => {
    return <button className={styles.uglyButton} onClick={props.onClick} type="button">{props.buttonText}</button>
}

export default ArticleTextToggleButton