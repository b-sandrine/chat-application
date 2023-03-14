import ChatHeader from '../components/ChatHeader'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'
import ActiveUsers from '../components/ActiveUsers'
import RightSidebarHeading from '../components/RightSidebarHeading'
import MainSidebar from '../components/MainSidebar'
import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

export default function Chat ( ) {

    
    return (
        <div className="chat--container">
            <div className="left--sidebar">
                <MainSidebar />
            </div>
            <div className="right--sidebar">
                <RightSidebarHeading />
                <hr />
                <div className="right--sidebar--bottom">
                    <ActiveUsers />
                </div>
            </div>

            <div className="chat--container">
                <ChatHeader />
                <ChatBody/>
                <ChatFooter />
            </div>
        </div>
    )
}