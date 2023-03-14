import profile from '../assets/image-2.avif'

export default function ActiveUsers () {
    return (
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
    )
}