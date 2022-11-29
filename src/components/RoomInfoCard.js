import React, { useState , UseEffect } from "react";
import style from "../style/RoomCard.module.css";
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/bs"
import data from "../data/roomCard.json";


export default function RoomInfoCard(props) {
    return (
        <>
            <h2>I'm room info card</h2>
            {data.map((item) => (
                <div>
                    <div>
                        <div className={style.roomCardContainer}>
                            <h6>{item.title}</h6>
                            <h2>{item.subtitle}</h2>

                            <div className={style.roomMembers}>
                                <div>
                                    <img src="/images/1.png" alt="" />
                                    <img src="/images/2.png" alt="" />
                                </div>
                                <div>
                                    {item.members.map((item) => (
                                        <p>
                                            {item.first_name} {item.last_name} <BsChatDots />
                                        </p>
                                    ))}
                                    <p className="d-flex align-items-center">
                                        <span className="me-2">1.8</span>
                                        <BsFillPersonFill />
                                        <span className="mx-2"></span> {" "}
                                        <span className="me-2">5</span> <BsChatDotsFill />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}