import React from "react";
import style from "../style/PhoneConfirmation.module.css"
import { Link } from "react-router-dom";

export default function CodeConfirm() {
    return (
        <div className={style.PhoneConfirmationContainer}>
            <Link exact to="/get_username" className={style.backBtn} >
                <img src="/images/left.png" alt="" />
            </Link>
            <div className="text-center">
                <h1 className={{width: '100%', maxWidth: '200px', marginBottom: '1em',}}>Enter the code we just texted you.</h1>
                <input 
                    type="text" 
                    style={{
                        width: "100%",
                        border: "none",
                        marginTop: "1em",
                        textAlign: "center",
                        outline: "none"
                    }} 
                />
                <p className="mt-2">
                    Didn't receive it? <span>Tap to resend.</span>
                </p>
            </div>
            <Link exact to='/allow_notification' className='primaryBtn d-flex align-item-center'>
                Next <img src="/images/rightt.png" alt="" className="ms-1" />
            </Link>
        </div>
    )
    
}