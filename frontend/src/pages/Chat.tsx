import profile from '../assets/image-2.avif'
import { MdNotificationImportant, MdOutlineMessage, MdSettings, MdPeopleAlt, MdEditDocument } from 'react-icons/md'
import { MdArrowCircleDown, MdSearch , MdPhone, MdVideoCall, MdMore , MdEmojiEmotions, MdAttachFile, MdRecordVoiceOver, MdSendToMobile} from 'react-icons/md'
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
                    <p className="heading">CHATS</p>
                    <div className="works">
                        <div className="chat">
                            <div className="holder">
                                <p>Recent Chats</p>
                                <span className="icon">
                                    <MdArrowCircleDown />
                                </span>
                            </div>
                            <button>+ New Chat</button>
                        </div>
                        <div className="search">
                            <div className="icon">
                                <MdSearch className='search--icon'/>
                            </div>
                            <input type="text" name="" id="" placeholder='Search'/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="right--sidebar--bottom">
                    <div className="users--container">
                        <div className="user--item">
                            <div className="profile">
                                <img src={profile} alt="Friend picture" />
                                <span className='tag'></span>
                            </div>
                            <div className="description">
                                <p className='names'>Olivia William</p>
                                <p className="status">Online</p>
                                <p className="recent--action">recording...</p>
                            </div>
                            <div className="previous--chatted-time">
                                <p className="time">13 mins ago</p>
                                <div className="new--messages">
                                    <p>3</p>
                                </div>
                            </div>
                        </div>

                        <div className="user--item">
                            <div className="profile">
                                <img src={profile} alt="Friend picture" />
                                <span className='tag'></span>
                            </div>
                            <div className="description">
                                <p className='names'>James Emma</p>
                                <p className="status">Last active 1h ago</p>
                                <p className="recent--action">DOes what i need it to ...</p>
                            </div>
                            <div className="previous--chatted-time">
                                <p className="time">1 hr ago</p>
                                <div className="new--messages">
                                    <p>3</p>
                                </div>
                            </div>
                        </div>

                        <div className="user--item">
                            <div className="profile">
                                <img src={profile} alt="Friend picture" />
                                <span className='tag'></span>
                            </div>
                            <div className="description">
                                <p className='names'>Henry Eva</p>
                                <p className="status">Online</p>
                                <p className="recent--action">typing...</p>
                            </div>
                            <div className="previous--chatted-time">
                                <p className="time">13 hrs ago</p>
                                <div className="new--messages">
                                    <p>3</p>
                                </div>
                            </div>
                        </div>

                        <div className="user--item">
                            <div className="profile">
                                <img src={profile} alt="Friend picture" />
                                <span className='tag'></span>
                            </div>
                            <div className="description">
                                <p className='names'>Charlotte Alexander</p>
                                <p className="status">Online</p>
                                <p className="recent--action">Can you please let ...</p>
                            </div>
                            <div className="previous--chatted-time">
                                <p className="time">25 mins ago</p>
                                <div className="new--messages">
                                    <p>3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="chat--container">
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

                <div className="footer">
                    <div className="typing--space">
                        <MdEmojiEmotions className='right--icon' />
                        <input type="text" name="message" id="" placeholder='Type your message here' className='input'/>
                        <div className="left--icons">
                            <MdAttachFile className='icon'/>
                            <MdRecordVoiceOver />
                        </div>
                    </div>
                    <div className="send--message">
                        <MdSendToMobile className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}