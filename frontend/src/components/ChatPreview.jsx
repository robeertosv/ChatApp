import { useEffect } from 'react'
import './ChatPreview.scss'

const ChatPreview = ({nombre}) => {

    useEffect(() => {

    })

    return (
        <div className="chatPreview">
            <div className="inlineContent">
                <img src="../../public/vite.svg" alt="User profile pic" />
                <h2>{nombre}</h2>
                <p className="time">10:00</p>
            </div>
            <p className="lastMessage">No hay mensajes</p>

        </div>
    )
}

export default ChatPreview