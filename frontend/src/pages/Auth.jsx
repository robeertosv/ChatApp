import '../styles/Auth.scss'
import query from '../handler/query';
import { useState, useEffect } from 'react';

const Auth = () => {
    const type = window.location.pathname.split('/')[1];
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const[phone, setPhone] = useState('');
    const[name, setName] = useState('');

    function updateUsername(e) { setUsername(e.target.value) }
    function updatePassword(e) { setPassword(e.target.value) }
    function updateName(e) { setName(e.target.value) }
    function updatePhone(e) { setPhone(e.target.value) }
    function updateCPassword(e) { setCPassword(e.target.value) }

    async function login(e) {
        e.preventDefault();
        let res = await query('http://127.0.0.1/api/auth/login', 'POST', { username, password })

        if (res == 'OK') {
            window.location.replace('/')
        } else {
            alert(res.error)
        }

    }

    async function register(e) {
        e.preventDefault();

        let uname = username, pass = password;

        let res = await query('http://127.0.0.1/api/auth/register', 'POST', {username, password, confirmPassword: cpassword, phone, fullname: name})

        if(res == 'Created') {
            console.log("REGISTER SUCCESS: " + res)
        }else {
            console.log(res)
            return
        }

        let lg = await query('http://127.0.0.1/api/auth/login', 'POST', { username:uname, password:pass })
            if (lg == 'OK') {
                window.location.replace('/')
            } else {
                console.log("Error de login: " + lg.error + " EL MENSAJE: " + lg)
            }
    }

    useEffect(() => {
        fetch("http://127.0.0.1/api/auth/validateAuth")
            .then((response) => response.json())
            .then((user) => {
                if (user._id) window.location.replace('/');
            });
    }, []);

    if (type == 'login') {

        return (
            <div className="container">
                <form onSubmit={login}>
                    <h1>Login</h1>
                    <div className="formContent">
                        <div>
                            <label htmlFor="username" >Username: </label>
                            <input type="text" required name='username' id='username' onChange={updateUsername} />
                        </div>
                        <div>
                            <label htmlFor="password" >Password: </label>
                            <input type="password" name='password' id='password' required onChange={updatePassword} />
                        </div>
                        <button type="submit">Login</button>
                    </div>
                </form>

            </div>
        )
    } else {
        return (
            <div className="container">
                <form onSubmit={register}>
                    <h1>Create Account</h1>
                    <div className="formContentRegister">
                        <div>
                            <label htmlFor="username" >Full Name: </label>
                            <input type="text" required name='username' id='username' onChange={updateName} />
                        </div>
                        <div>
                            <label htmlFor="username" >Username: </label>
                            <input type="text" required name='username' id='username' onChange={updateUsername} />
                        </div>
                        <div>
                            <label htmlFor="password" >Password: </label>
                            <input type="password" name='password' id='password' required onChange={updatePassword} />
                        </div>
                        <div>
                            <label htmlFor="cpassword" >Confirm Password: </label>
                            <input type="password" name='cpassword' id='cpassword' required onChange={updateCPassword} />
                        </div>
                        <div>
                            <label htmlFor="phone" >Phone number: </label>
                            <input type="number" name='phone' id='phone' required onChange={updatePhone} />
                        </div>
                        
                    </div>
                    <button type="submit">Create Account</button>
                </form>

            </div>
        )
    }
}

export default Auth