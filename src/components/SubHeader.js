import React from "react";
import { Link } from "react-router-dom";
import style from "../style/explore.module.css";

export default function SubHeader(props) {
    return (
       <div className={style.subHead}>
            <Link to="/home">
                <img src="/images/left.png"/>
            </Link>
            <h3>
            {props.pageTitle}
            </h3>
       </div>
    );
}