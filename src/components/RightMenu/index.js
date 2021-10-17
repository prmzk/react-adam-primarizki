import React, { useState } from 'react'
import { BsFillChatLeftTextFill, BsArrowDownCircle, BsNewspaper, BsCameraReels, BsFilePerson, BsCart, BsCaretRightFill } from "react-icons/bs";

const menus = [
    {
        id: 1,
        icon: <BsFillChatLeftTextFill/>,
        text: 'Chat' 
    },
    {
        id: 2,
        icon: <BsArrowDownCircle/>,
        text: 'Download' 
    },
    {
        id: 3,
        icon: <BsNewspaper/>,
        text: 'Read Newspaper' 
    },
    {
        id: 4,
        icon: <BsCameraReels/>,
        text: 'Watch Video' 
    },
    {
        id: 5,
        icon: <BsFilePerson/>,
        text: 'View Profile' 
    },
    {
        id: 6,
        icon: <BsCart/>,
        text: 'View Cart' 
    }
]

function RightMenu() {
    const [selected, setSelected] = useState(1)
    return (
        <div className='right-menu d-flex flex-column'>
            {menus.map(({icon, id, text}) => <div 
                key={id} 
                className={`right-menu__menus ${selected === id && 'selected'}`}
                onClick={() => setSelected(id)}
            >
                <div className='hover-text py-1 px-4'>
                    <p className='fw-bold mb-0'>{text}</p>
                </div>
                <BsCaretRightFill className='arrow-right'/>
                <div className='icons ms-2'>
                    {icon}
                </div>
            </div>)}
           
        </div>
    )
}

export default RightMenu
