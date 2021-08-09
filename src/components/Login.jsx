import { useContext, useState } from 'react';
import { UserContext } from '../App';
import './Login.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
const {user, setUser}= useContext(UserContext)
    function doLogin(e) {
        e.preventDefault();

        if (email !== "test@test.com") {
            alert("Invalid email");
            return;
        }
        
        setUser({ id: 1, email, name: "Agrombin Beatrice" });
    }

    return (
        <form className="loginform" onSubmit={doLogin}>
            <input
                type="text"
                placeholder="E-mail"
                value={email}
                name="email"
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                disabled={password.length === 0}
                type="submit"
            >
                Login
            </button>
        </form>
    );
}

export default Login;
