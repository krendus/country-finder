import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import darkStyles from '../styles/dark.module.css'
import lightStyles from '../styles/light.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setMode } from '../redux/actions'
import {FaMoon, FaRegMoon} from 'react-icons/fa'


const Navbar = () => {
    const dispatch = useDispatch()
    const {mode} = useSelector(state => state.status)
    const history = useHistory()
    const goHome = () => history.push('/')
    const changeMode = () => {
        dispatch(setMode())
    }
    return (
        <div className={`${mode ==='light'? lightStyles.element: darkStyles.element} ${styles.nav}`} >
            <div className={styles.content}>
                <span className={styles.header} onClick={goHome}>Where in the world?</span>
                <span onClick={changeMode} className={styles.button}>{mode === 'light' ? <><FaRegMoon /> Dark Mode</>: <><FaMoon /> Light Mode</>} </span>   
            </div>
            
        </div>
    )
}

export default Navbar
