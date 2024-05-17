import '../styles/Auth.scss'
import query from '../handler/query';
import { useState } from 'react';

const Auth = () => {
    const type = window.location.pathname.split('/')[1];
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function updateUsername(e) { setUsername(e.target.value) }
    function updatePassword(e) { setPassword(e.target.value) }

    async function login(e) {
        e.preventDefault();
        let res = await query('http://127.0.0.1/api/auth/login', 'POST', { username, password })

        if (res == 'OK') {
            window.location.replace('/')
        } else {
            alert(res.error)
        }

    }

    if (type == 'login') {
        return (
            <div className="container">
                <form onSubmit={login}>
                    <label htmlFor="username" >Username: </label>
                    <input type="text" required name='username' id='username' onChange={updateUsername} />
                    <label htmlFor="password" >Password: </label>
                    <input type="password" name='password' id='password' required onChange={updatePassword} />

                    <button type="submit">Login</button>
                </form>

            </div>
        )
    } else {
        return (
            <div className="contanier"></div>
        )
    }
}

export default Auth