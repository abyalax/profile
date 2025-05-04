"use client"

import { toast } from "react-toastify"

const ClientComponent = () => {
    const handleClick = () => {
        toast("Hello, Welcome to my web-profile", {type: 'default'})
    }
    return (
        <div>
            <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Notify!
        </button>
        </div>
    )
}

export default ClientComponent