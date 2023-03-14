import { MdPhone, MdVideoCall, MdMore } from 'react-icons/md'
import profile from '../assets/image-2.avif'

export default function ChatHeader () {
    return (
        <div className="heading">
            <div className="left--side">
                <div className="profile">
                    <img src={profile} alt="A friend your are currently chatting with" />
                </div>
                <div className="description">
                    <p className="names">Henry Ava</p>
                    <div className="status">
                        <span className='tag'></span>
                        <p className="tag--name">Online</p>
                    </div>
                </div>
            </div>
            <div className="right--side">
                <MdPhone className='icon'/>
                <MdVideoCall className='icon'/>
                <MdMore className='icon'/>
            </div>
        </div>
    )
}