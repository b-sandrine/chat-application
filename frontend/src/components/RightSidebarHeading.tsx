
import { MdArrowCircleDown, MdSearch  } from 'react-icons/md'

export default function RightSidebarHeading() {
    return (
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
    )
}