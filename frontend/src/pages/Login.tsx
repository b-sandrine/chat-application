import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { io } from 'socket.io-client'

export default function Login() {
    const navigate = useNavigate();
    const [username, setUserName ] = useState('');
    const socket = io('http://localhost:8000',{
        transports: ['websocket'],
    });

    const handleSubmit = (e:any) => {
        e.preventDefault();
        localStorage.setItem('username',username)
        socket.emit('newUser', {username, socketID: socket.id})
        console.log(username)
        navigate('/dashboard')
    }

    return (
        <div className="login--container w-50 mx-auto">
            <h1 className="text-center m-5">Login page</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group m-3">
                    <label htmlFor="username" className="mb-1">username</label>
                    <input 
                        type="text"
                        className="form-control" 
                        id="username" 
                        placeholder="Joe Doe" 
                        name="username" 
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="password" className="mb-1">Password</label>
                    <input
                        type="text" 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        placeholder="Password" 
                    />
                </div>
                <div className="m-3">
                    <input type="submit" name="" id="" value="Log In" className="btn btn-primary btn-lg"/>
                </div>
            </form>
        </div>
    )
}