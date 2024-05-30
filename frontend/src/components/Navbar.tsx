import { Link,useNavigate } from "react-router-dom"
import style from "./modules/Navbar.module.css"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../store/store"
import { logout } from "../store/authSlice"


export const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const handleClick = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <nav>
            <ul>
                <div className={style.left}>
                    <li><Link id={style.link} to='/leaderboard'>Leaderboard</Link></li>
                    <li><Link id={style.link} to='/profile'>Profile</Link></li>
                </div>
                <div className={style.right}>
                    <li onClick={handleClick}>Logout</li>
                </div>
            </ul>
        </nav>
    )
}