import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/Loading.module.css'
import darkLoader from '../assets/d-loader.svg'
import lightLoader from '../assets/l-loader.svg'
const Loading = () => {
    const {mode} = useSelector(state => state.status)
    return (
        <div className={styles.container}>
            {mode === 'light' ? <img src={lightLoader} alt=''></img>:<img src={darkLoader} alt=''></img>}
        </div>
    )
}

export default Loading
