import { MdNotificationImportant, MdOutlineMessage, MdSettings, MdPeopleAlt, MdEditDocument } from 'react-icons/md'
import profile from '../assets/image-2.avif'

export default function MainSidebar () {
    return (
        <>
            <div className="left--sidebar--profile">
                    <img src={profile} alt="Profile image" />
                    <p>{localStorage.getItem('username')}</p>
            </div>
            <div className="left--sidebar--menu">
                <div className="menu--holder">
                    <div className="single--item">
                        <div className="icon">
                            <MdOutlineMessage />
                        </div>
                        <div className="name">Chats</div>
                    </div>
                    <div className="single--item">
                        <div className="icon">
                            <MdNotificationImportant />
                        </div>
                        <div className="name">Notifications</div>
                    </div>
                    <div className="single--item">
                        <div className="icon">
                            <MdSettings />
                        </div>
                        <div className="name">Settings</div>
                    </div>
                    <div className="single--item">
                        <div className="icon">
                            <MdPeopleAlt />
                        </div>
                        <div className="name">Friends</div>
                    </div>
                    <div className="single--item">
                        <div className="icon">
                            <MdEditDocument />
                        </div>
                        <div className="name">Documents</div>
                    </div>
                </div>
            </div>
        </>
    )
}