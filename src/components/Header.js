import React from "react";
import { Link } from "react-router-dom";
import style from '../style/Header.module.css';

export default function Header() {
    return(
        <div className={style.Header}>
            <Link exact to="/explore">
                <img src="/images/search_icon.png" alt="" />
            </Link>
            <div className={style.nav_items}>
                <Link exact to="/friends_invite">
                    <img src="/images/invite_icon.png" alt="" />
                </Link>
                <Link exact to="/upcoming">
                    <img src="/images/calendar_icon.png" alt="" />
                </Link>
                <Link exact to="/activity">
                    <img src="/images/noti_icon.png" alt="" />
                </Link>
                <Link exact to="/profile">
                    <img src="/images/avatar.png" alt="" />
                </Link>
            </div>
        </div>
    );
}