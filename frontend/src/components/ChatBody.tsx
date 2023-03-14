import { io } from "socket.io-client";
import { useState, useEffect } from "react";

const ChatBody = () => {

    const [messages, setMessages ] = useState<string[]>([])

    const socket = io('http://localhost:8000',{
        transports: ['websocket'],
    });

    useEffect(() => {
        socket.on('messageResponse', (data: string) => {
            setMessages(prevMessages => [...prevMessages, data])
            
            return () => {
                socket.disconnect();
            }
        });
      }, []);
    

    return (
        <div className="chatBody--container">
            
            <div className="message__container">
                {
                    messages.map((message: any) => message.name === localStorage.getItem('username') ? (
                        <div className="message__chats" key={message.id} >
                            <p className="sender__name">You</p>
                            <div className="message__sender">
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="message__chats" key={message.id}>
                            <p>{message.name}</p>
                            <div className="message__recipient">
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ))
                }


                {/*This is triggered when a user is typing*/}
                {/* <div className="message__status">
                    <p>Someone is typing...</p>
                </div> */}
            </div>
        </div>
    )
}

export default ChatBody;