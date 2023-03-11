import { useNavigate } from 'react-router-dom'

export default function Welcome () {
    
    var navigate = useNavigate()

    return (
        <div className="welcome--container">
            <h1>Welcome page</h1>
            <button onClick={() => navigate('/login')} value='login'>Log In</button>
            <button onClick={() => navigate('/register')} value='register'>Register</button>
        </div>
    )
} 