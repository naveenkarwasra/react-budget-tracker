import React from "react";

const AlertBar = ({open, setOpen}) => {

    const handleClose = (envent, reason) => {
        if (reason === "clickaway") return
        setOpen(false)
    }

    return (
        <div>
            <div>Transaction is created successfully</div>
            <button onClick={handleClose}>X</button>
        </div>
    )
}
export default AlertBar