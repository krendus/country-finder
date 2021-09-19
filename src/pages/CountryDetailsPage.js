import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import darkStyles from '../styles/dark.module.css'
import lightStyles from '../styles/light.module.css'
import styles from '../styles/CountryDetailsPage.module.css'
import {useHistory} from 'react-router-dom'
import { fetchFullName, getOneCountry } from '../api/apiCall'
import {BsArrowLeft} from 'react-icons/bs'
import Loading from '../components/Loading';

const CountryDetailsPage = () => {
    const [country, setCountry] = useState(null)
    const [borders, setBorders] = useState(null)
    const [loading, setLoading] = useState(true)
    const {mode} = useSelector(state => state.status)
    const {code} = useParams()
    const history = useHistory()
    useEffect(() => {
        setLoading(true)
        getOneCountry({code})
        .then( res => {
            let data = res.data;
            let bordersList = [];
            let arrLength = res.data.borders.length;
            if(res.data.borders.length){
                for (let i = 0; i < res.data.borders.length; i++) {
                    const code = res.data.borders[i].toLowerCase();
                    fetchFullName({code})
                    .then(res => {
                        bordersList.push({name: res.data.name, code})
                        if(i === (arrLength - 1)){
                            setBorders(bordersList)
                            setCountry(data)
                            setLoading(false)
                        }
                        
                    })
                }
            } else {
                setBorders(true)
                setCountry(data)
                setLoading(false)
            }
            

        })
        .catch(err => console.log(err))
    }, [code])
    return (
        loading ? 
        <Loading /> :
        country && borders &&
        <div className={styles.container}>
           <div className={styles.topBar}>
            <button 
             className={`${mode === 'light' ? lightStyles.element : darkStyles.element} ${styles.button} `}
             onClick={()=> {
                history.push('/')
             }}
             >
                <BsArrowLeft /> Back
            </button>
           </div>
           <div className={styles.countryContainer}>
               <div className={styles.subCountryContainer}>
                   <img src={country.flag} alt="" />
               </div>
               <div className={styles.subCountryContainer}>
                   <h2>{country.name}</h2>
                    <div className={styles.countryAttr}>
                        <div>
                            <p><span>Native Name: </span>{country.nativeName}</p>
                            <p><span>Populaton: </span>{parseInt(country.population).toLocaleString()}</p>
                            <p><span>Region: </span>{country.region}</p>
                            <p><span>Sub Region: </span>{country.subregion}</p>
                            <p><span>Capital: </span>{country.capital}</p>
                        </div>
                        <div>
                            <p><span>Top Level Domain: </span>{country.topLevelDomain.map((domain, index) => {
                                if(index !== 0){
                                    return ', ' + domain
                                } else {
                                    return domain
                                }
                            })}</p>
                            <p><span>Currencies: </span>{country.currencies.map((currency, index) => {
                                if(index !== 0){
                                    return ', ' + currency.name
                                } else {
                                    return currency.name
                                }
                            })}</p>
                            <p><span>Languages: </span>{country.languages.map((language, index) => {
                                if(index !== 0){
                                    return ', ' + language.name
                                } else {
                                    return language.name
                                }
                            })}</p>
                        </div>
                    </div> 
                    <div className={styles.bordersContainer}>
                        <span className={styles.borderHeading}>Border Countries:</span>
                        {
                            country.borders.length ?
                            borders.map(border => {
                                return <span className={`${mode === 'light' ? lightStyles.element : darkStyles.element} ${styles.border} `} onClick={()=> history.push(`/country/${border.code.toLowerCase()}`)}>{border.name}</span>
                            })
                            : <span className={`${mode === 'light' ? lightStyles.element : darkStyles.element} ${styles.border} `}>No country</span>
                        }
                    </div>                 
               </div>
               
           </div>
        </div>
        
    )
}

export default CountryDetailsPage
