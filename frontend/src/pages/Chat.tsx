import profile from '../assets/image-2.avif'
import { MdNotificationImportant, MdOutlineMessage, MdSettings, MdPeopleAlt, MdEditDocument } from 'react-icons/md'
import { MdArrowCircleDown, MdSearch } from 'react-icons/md'
export default function Chat () {
    return (
        <div className="chat--container">
            <div className="left--sidebar">
                <div className="left--sidebar--profile">
                    <img src={profile} alt="Profile image" />
                    <p>user name</p>
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
            </div>
            <div className="right--sidebar">
                <div className="right--sidebar--heading">
                    <h5 className="heading">CHATS</h5>
                    <div className="works">
                        <div className="chat">
                            <div className="holder">
                                <h5>Recent Chats</h5>
                                <span className="icon">
                                    <MdArrowCircleDown />
                                </span>
                            </div>
                            <button>+ New Chat</button>
                        </div>
                        <div className="search">
                            <div className="icon">
                                <MdSearch />
                            </div>
                            <input type="text" name="" id="" placeholder='Search'/>
                        </div>
                    </div>
                </div>
                <div className="right--sidebar--bottom">

                </div>
            </div>
            <div className="chat--container">
                chat page
            </div>
        </div>
    )
}