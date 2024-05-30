import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";
import { Board } from "../components/Board";
import { useDispatch } from "react-redux";
import { toggleMode } from "../store/modeSlice";
import style from './modules/Welcome.module.css'

export const Welcome = () => {
    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.auth.user);
    const dark = useSelector((state: RootState) => state.mode.darkMode);
    
    const handleClick = () => {
        dispatch(toggleMode())
    }
    return (
            
            <div className={style.body} style={{backgroundColor : dark ? '#000000' : '#ffffff'}}>
                <Navbar/>
                <h1 id={style.heading}>Welcome {user?.name}</h1>
                {/* <button onClick={handleClick}>Change</button> */}
                <Board/>
            </div>
            
    )
}