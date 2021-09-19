import React from 'react'
import { useSelector } from 'react-redux'
import darkStyles from '../styles/dark.module.css'
import lightStyles from '../styles/light.module.css'
import styles from '../styles/CountryCard.module.css'
import {useHistory} from 'react-router-dom'
const CountryCard = ({name, flag, population, region, capital, alpha3Code}) => {
    const {mode} = useSelector(state => state.status)
    const history = useHistory()
    const showDetails = () => {
        history.push(`/country/${alpha3Code.toLowerCase()}`)
    }
    return (
        <div 
        className={`${mode === 'light' ? lightStyles.element : darkStyles.element} ${styles.container}`}
        onClick={showDetails}
        >
            <img src={flag} alt="" />
            <div className={styles.details}>
                <p className={styles.name}>{name}</p>
                <div className={styles.subDetails}>
                    <p><span>Population:</span> {parseInt(population).toLocaleString()}</p>
                    <p><span>Region:</span>  {region}</p>
                    <p><span>Capital:</span>  {capital}</p>
                </div>
            </div>
        </div>
    )
}

export default CountryCard
