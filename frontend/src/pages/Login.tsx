import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import { AppDispatch } from "../store/store"
import { useDispatch } from 'react-redux';
import { login } from "../store/authSlice"
import axios from "axios"
import style from './modules/Login.module.css'

export const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [hidden, setHidden] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [clicked, setClicked] = useState(false)

    const toggleVisibility = () => {
        setHidden(!hidden);
    }
    const handleSubmit = async (e : any) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/user/login",{username,password})
            console.log(res)
            alert("Login successful");
            dispatch(login({
                name : res.data.user.name,
                username : res.data.user.username,
                gamesWon : res.data.user.gamesWon,
                _id : res.data.user._id
            }))
            navigate('/play')
            
        } catch (error) {
            window.alert("Invalid credentials")
            setUsername("")
            setPassword("")
            console.log(error)
        }
    }
    return (
        <div className={style.body}>
            <div className={style.opacityControl}></div>
            <div className={style.image}>
            </div>
            <div className={style.container}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <label htmlFor="username">Username</label>
                    <div className={style.form_group}>
                        <input type="text" value={username} placeholder="Enter your username" id="username" onChange={e => setUsername(e.target.value)} required/>
                    </div>
                    <label htmlFor="password">Password</label>
                    <div className={style.visibility}>
                        <FontAwesomeIcon id={style.eye} className={style.icon} icon={hidden ? faEye : faEyeSlash} style={{color: "#1f3251",}} onClick={toggleVisibility}/>
                        <input type={hidden ? "text" : "password"} value={password} placeholder="Enter your password" id="password" onChange={e => setPassword(e.target.value)} required/>
                    </div>
                    
                    <button type="submit" id={style.login_button}>Login</button>
                    <p>Don't have an account? <Link id={style.link} to="/signup">Signup</Link></p>
                </form>
            </div>
        </div>
    )
}