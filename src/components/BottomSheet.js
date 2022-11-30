import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from "../style/bottomSheet.module.css";
import StartRoom from "./Bottom_sheets/StartRoom";
import NewRoom from "./Bottom_sheets/NewRoom";

export default function BottomSheet(props) {
  return (
    <SwipeableBottomSheet
      open={props.sheetVisible}
      onchange={() => {
        props.setSheetVisible(!props.sheetVisible);
        props.setItemsVisible(true);
      }}
      fullScreen={props.sheetTitle == "room detail" ? true : false}
    >
      <div
        className={style.BottomSheetContianer}
        style={{
          backgroundColor: props.sheetTitle == "profile" ? "transparent" : "",
        }}
      >
        {props.sheetTitle == 'New room' ? (
            <NewRoom 
                cardDetail={props.cardDetail}
                setSheetVisible={(item) => {
                    props.setSheetVisible(item);
                    props.setitemsVisible(true);
            }}
        />
        ) : props.sheetTitle == "Start room" ? (
            <StartRoom 
                setSheetCreateRoom={props.setSheetCreateRoom}
                setSheetVisible={(item) => {
                    props.setSheetVisible(item);
                    props.setitemsVisible(true);
                }}
            />
        ) : (
            ""
        )}
        
      </div>
    </SwipeableBottomSheet>
  );
}
