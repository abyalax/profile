"use client";

import { ToastContainer } from "react-toastify"

const Toaster = () => {
    return (
        <ToastContainer autoClose={5000} position="top-center" draggable={true}/>
    )
}

export default Toaster  