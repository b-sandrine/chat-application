import { MdEmojiEmotions, MdAttachFile, MdRecordVoiceOver, MdSendToMobile} from 'react-icons/md'
import { useState } from 'react'
import { io } from 'socket.io-client'

export default function ChatFooter() {
    const [message, setMessage] = useState('')

    const socket = io('http://localhost:8000',{
        transports: ['websocket'],
    });

    const handleSendMessage = (e: any) => {
        e.preventDefault();
        if(message.trim() && localStorage.getItem('username')) {
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('usename'),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id
            })
        }
        setMessage('')
    }

    return (
        <div className="footer">
            <div className="typing--space">
                <MdEmojiEmotions className='right--icon' />
                <form action="" onSubmit={handleSendMessage}>
                    <input 
                        type="text" 
                        name="message" 
                        id="" 
                        placeholder='Type your message here' 
                        className='input'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </form>
                <div className="left--icons">
                    <MdAttachFile className='icon'/>
                    <MdRecordVoiceOver />
                </div>
            </div>
            <div className="send--message">
                <MdSendToMobile className='icon' />
            </div>
        </div>
    )
}