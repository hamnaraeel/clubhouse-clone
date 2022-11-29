import React from "react";
import style from '../../'

function AppLayout({ children}) {
    return (
        <div className="app_layout">
            {children}
        </div>
    )
}

export default AppLayout