import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import darkStyles from '../styles/dark.module.css'
import lightStyles from '../styles/light.module.css'
import styles from '../styles/RegionFilter.module.css'
import {BiChevronDown}from 'react-icons/bi'
const RegionFilter = ({regions, setRegion}) => {
    const {mode} = useSelector(state => state.status)
    const [showDropdown, setShowDropdown] = useState(false)
    const [filter, setFilter] = useState('')
    const handleSelection = (region) => {
        setShowDropdown(false)
        setFilter(region)
        setRegion(region)
    }
    return (
        <div className={styles.container}>
            <div className={`${mode === 'light' ? lightStyles.element : darkStyles.element} ${styles.button}`} onClick={()=> setShowDropdown(!showDropdown)}>
                {filter ? filter : 'Filter by Region'}
                <BiChevronDown />
            </div>
            {showDropdown && 
            <div className={`${mode === 'light' ? lightStyles.element : darkStyles.element} ${styles.dropdown}`}>
                {
                    regions.map((region, index) => {
                        return <span key={ index } onClick={() => handleSelection(region)}>{region}</span>
                    })
                }
            </div>
            }
        </div>
    )
}

export default RegionFilter

