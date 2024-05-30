import { Navbar } from "../components/Navbar"
import styles from './modules/Menu.module.css'
export const Menu = () => {
    return (
        <div>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles.options} id={styles.local}></div>
                <div className={styles.options} id={styles.friends}></div>
                <div className={styles.options} id={styles.online}></div>
            </div>
        </div>
    )
}