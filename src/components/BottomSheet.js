import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from "../style/bottomSheet.module.css";
import StartRoom from "./Bottom_sheets/StartRoom";

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
        <StartRoom 
        setSheetCreateRoom={props.setSheetCreateRoom}
        setSheetVisible={(item) => {
            props.setSheetVisible(item);
            props.setitemsVisible(true);
        }}
        />
      </div>
    </SwipeableBottomSheet>
  );
}
