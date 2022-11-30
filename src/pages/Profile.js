import React from "react";
import { Link } from "react-router-dom";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs"; 
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from "react-icons/ai";


export default function Profile() {
    return (
        <>
            <div className={style.profileContainer}>
                <div className={exploreStyle.header}>
                    <div className={`${exploreStyle.subHead} text-right mb-0`}>
                        <Link to="/home">
                            <img
                                src="/images/left.png"
                                alt=""
                                className={exploreStyle.arrow_icon}
                            />
                        </Link>
                        <div className={style.actionBtn}>
                            <BsAt />
                            <BsUpload />
                            <AiOutlineSetting /> 
                        </div>
                    </div>
                </div>
                <img 
                    src="/images/2.png"
                    alt=""
                    className={style.profile_image}
                />
                <h4>Hamna R</h4>
                <p>@hamnaraeel</p>
                <div className={style.follow}>
                    <p>
                        <span>0</span> Followers
                    </p>
                    <p>
                        <span>51</span> Following
                    </p>
                </div>
                <button>Add a bio</button>
                <div className="mb-4">
                    <button>
                        <AiOutlineTwitter /> Add Twitter
                    </button>
                    <button>
                        <AiOutlineInstagram /> Add Instagram
                    </button>
                </div>
                <div className={style.nominated}>
                    <img 
                        src="/images/2.png"
                        alt=""
                    />
                    <div>
                        <p>Joined 14-July-2020</p>
                        <p>Nominated by <span>Anton Alarcon</span></p>
                    </div>
                </div>
                <p>Member of</p>
                <button className={style.addMemberBtn}>
                    <BsPlus />
                </button>
            </div>
        </>
    );
}