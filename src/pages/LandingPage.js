import React, {useEffect, useState} from 'react'
import CountryCard from '../components/CountryCard'
import RegionFilter from '../components/RegionFilter'
import Search from '../components/Search'
import styles from '../styles/LandingPage.module.css'
import {getAllCountry, getAllCountryInRegion, searchCountry} from '../api/apiCall.js'
import Loading from '../components/Loading'
const LandingPage = () => {
    const [region, setRegion] = useState('')
    const [search, setSearch] = useState('')
    const [countries, setCountries] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(search){
            setLoading(true)
            searchCountry({
            search
            })
            .then(res =>{
                setError(false)
                setLoading(false)
                setCountries(res.data)
            } )
            .catch(err => {
                setLoading(false)
                setError(true)
            })
        }
        
    }, [search])
    useEffect(() => {
        if(region){
            setLoading(true)
            getAllCountryInRegion({
            region
            })
            .then(res =>{
                setError(false)
                setLoading(false)
                setCountries(res.data)
            })
            .catch(err => {
                setLoading(false)
                setError(true)
            })
        }
        
    }, [region])
     useEffect(() => {
        getAllCountry()
        .then((res) => {
            setError(false)
            setLoading(false)
            setCountries(res.data)
        })
        .catch(err => {
            setLoading(false)
            setError(true)
        })
    }, [])

    const regions = ['All','Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <Search setSearch={setSearch}/>
                <RegionFilter regions={regions} setRegion={setRegion}/>
            </div>
            
                {countries.length && !loading && !error ?
                    <div className={styles.countryList}>
                    {
                        countries.map((country,index) => {
                            return <CountryCard key={index} {...country}/>
                        })
                    }
                    </div>
                    : 
                    loading ? <Loading /> : <h2 style={{textAlign: 'center', marginTop:'40px'}}>Country not found</h2>
                    
                }
                
            
        </div>
    )
}

export default LandingPage
