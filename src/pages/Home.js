import React, { useState } from "react";
import DailyInfoCard from "../components/DailyInfoCard";
import Header from "../components/Header";
import RoomInfoCard from "../components/RoomInfoCard";
import style from "../style/Home.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import BottomSheet from "../components/BottomSheet";
import data from "../data/roomCard.json"
import newRoomData from "../data/newRoomData.json"

export default function Home() {
    const [itemsVisible, setItemsVisible] = useState(true);
    const [sheetVisible, setSheetVisible] = useState(false);
    const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
    const [loaderVisibility, setLoaderVisibility] = useState(false);
    const [cardId, setCardId] = useState(1);

    return (
        <>
        {loaderVisibility ? (
            <div style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <img src="/images/loader.gif" style={{width: "50px"}} alt="" />
            </div>
        ) : (
            ""
        )}
            <Header />
            <div className={style.home_container}>
                <DailyInfoCard />
                <RoomInfoCard />
            </div>
            <div className={style.action_btn}>
                <button onClick={() => setSheetVisible(true)}> 
                    <AiOutlinePlus className="me-2" />
                    Start a room
                </button>
                <button>
                    <BsGrid3X3Gap />
                </button>
            </div>
            <BottomSheet 
                sheetTitle="Start room"
                setSheetVisible={(item) => setSheetVisible(item)}
                sheetVisible={sheetVisible}
                cardDetail ={data.find((item) => item.id == cardId)}
                setItemsVisible={(item) => setItemsVisible(item)}
                setSheetCreateRoom={(item) => {
                    setLoaderVisibility(true);
                    setTimeout(() => {
                        setSheetCreateRoom(item);
                        setLoaderVisibility(false)
                    }, 1000);
                }}
            />
            <BottomSheet
                sheetTitle = "New room"
                setSheetVisible={(item) =>  setSheetCreateRoom(item)}
                sheetVisible={sheetCreateRoom}
                cardDetail={newRoomData}
                setItemsVisible={(item) => setItemsVisible(item)}
            />
        </>
    );
}