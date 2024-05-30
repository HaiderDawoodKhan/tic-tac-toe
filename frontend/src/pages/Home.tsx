import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import style from "./modules/Home.module.css"
export const Home = () => {
    const [width, setWidth] = useState(50);
    const [clicked, setClicked] = useState(false)
    const [clickedIn, setClickedIn] = useState(false)
    const navigate = useNavigate();
    useEffect(() =>{
        
        const handleMouseMove = (e : any) =>
        {
            const percentage = (e.clientX / window.innerWidth) * 100;
            setWidth(percentage);
        }
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    },[])
    const handleLogin = () => {
        setWidth(50);
        setClicked(true)
        setTimeout(()=>{
            navigate('/login')
        },300)
    }
    const handleSignup = () => {
        setWidth(50);
        setClicked(true)
        setTimeout(()=>{
            navigate('/signup')
        },300)
    }
    useEffect(()=>{
        setTimeout(()=>{setClickedIn(true)},100)
    },[])
    return (
        <>  
            <div className={`${style.opacityControl} ${clicked ? style.clicked : '' }`}></div>
            <div className={style.navbar}>
                <p id={style.link} onClick={handleSignup}>Signup</p>
                <p id={style.link} onClick={handleLogin}>Login</p>
            </div>
            <div className={style.side} id={style.left} >
                <h1>Play Tic-Tac-Toe!</h1>
                <h3>Signup first</h3>
            </div>
            <div className={style.side} id={style.right}  style={{width: `${width}%`}}>
                <h1 id={style.color}>Play Tic-Tac-Toe!</h1>
                <h3>Start playing now</h3>
            </div>
        </>
    )
}