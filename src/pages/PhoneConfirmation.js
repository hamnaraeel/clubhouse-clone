import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function  PhoneConfirmation() {
    const {value, setValue} = useState();
    return (
        <div className={style.PhoneConfirmationContainer}>
            <h1>Enter your phone</h1>
        </div>
    );
}