import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import { AppDispatch } from "../store/store"
import { useDispatch } from "react-redux"
import { login } from "../store/authSlice"
import axios from "axios"
import style from './modules/Signup.module.css'

export const Signup = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [hidden, sethidden] = useState(true)
    const [hidden2, sethidden2] = useState(true)
    const [clicked, setClicked] = useState(false)


    const toggleVisibility = () => {
        sethidden(!hidden);
    }
    const toggleVisibility2 = () => {
        sethidden2(!hidden2);
    }
    const handleSubmit = async (e : any) => {
        e.preventDefault();
        if(name === "" || username === "" || password === "" || repassword === ""){
            alert("Please fill all the fields")
            setName("");
            setUsername("");
            setPassword("");
            setRepassword("");
            return;
        }
        if(password !== repassword){
            alert("Passwords do not match")
            setName("");
            setUsername("");
            setPassword("");
            setRepassword("");
            return;
        }
        try{
            const res = await axios.post("http://localhost:8000/user/create",{name,username,password})
            alert("Signup successful");
            dispatch(login({
                name : res.data.user.name,
                username : res.data.user.username,
                gamesWon : res.data.user.gamesWon,
                _id : res.data.user._id
            }))
            navigate('/play');
        } catch (err)
        {
            alert("Username already exists")
            setName("");
            setUsername("");
            setPassword("");
            setRepassword("");
        }

    }
    useEffect(()=>{
        setTimeout(()=>{setClicked(true)},100)
    },[])
    return (
        <div className={style.body}>
            {/* <div className={`${style.opacityControl} ${clicked ? style.clicked : '' }`}></div> */}
            <div className={style.opacityControl}></div>
            <div className={style.container}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <h2>Signup</h2>
                    <label htmlFor="name">Name</label>
                    <div className={style.form_group}>
                        <input type="text" placeholder="Enter your name" id="name" value={name} onChange={e => setName(e.target.value)} required/>
                    </div>
                    <label htmlFor="username">Username</label>
                    <div className={style.form_group}>
                        <input type="text" placeholder="Enter your username" id="username" value={username} onChange={e => setUsername(e.target.value)} required/>
                    </div>
                    <label htmlFor="password">Password</label>
                    <div className={style.visibility}>
                        {!hidden && <FontAwesomeIcon id={style.eye} className={style.icon} icon={faEye} style={{color: "#1f3251",}} onClick={toggleVisibility}/>}
                        {hidden && <FontAwesomeIcon id={style.eyeslash} className={style.icon} icon={faEyeSlash} style={{color: "#1f3251",}} onClick={toggleVisibility}/>}
                        <input type={hidden ? 'password' : 'text'} placeholder="Enter your password" id="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                    </div> 
                    
                    <label htmlFor="repassword">Confirm Password</label>
                    <div className={style.visibility}>
                        {!hidden2 && <FontAwesomeIcon id={style.eye} className={style.icon} icon={faEye} style={{color: "#1f3251",}} onClick={toggleVisibility2}/>}
                        {hidden2 && <FontAwesomeIcon id={style.eyeslash} className={style.icon} icon={faEyeSlash} style={{color: "#1f3251",}} onClick={toggleVisibility2}/>}
                        <input type={hidden ? 'password' : 'text'} placeholder="Confirm your password" id="repassword" value={repassword} onChange={e => setRepassword(e.target.value)} required/>
                    </div>
                    <button type="submit" id={style.signup_button} >Signup </button>
                    <p>Already have an account? <Link id={style.link} to="/login">Login</Link></p>
                </form>
            </div>
            <div className={style.image}>
                
            </div>
        </div>
    )
}