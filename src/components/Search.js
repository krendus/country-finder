import React, { useState} from 'react'
import { useSelector } from 'react-redux'
import darkStyles from '../styles/dark.module.css'
import lightStyles from '../styles/light.module.css'
import {AiOutlineSearch} from 'react-icons/ai'
import styles from '../styles/Search.module.css'

const Search = ({setSearch}) => {
   const {mode} = useSelector(state => state.status)
   const [searchInput, setSearchInput] = useState('')
   const handleSubmit = (e) => {
       e.preventDefault()
       if(searchInput){
           setSearch(searchInput)
       }
   }
    return (
        <form 
         className={`${mode === 'light' ? lightStyles.element : darkStyles.element} ${styles.container}`}
         onSubmit={handleSubmit}
         >
            <AiOutlineSearch className={`${mode === 'light' ? lightStyles.inputColor : darkStyles.elementColor} ${styles.icon}`} onClick={handleSubmit}/>
            <input 
             type="text" 
             value={searchInput}
             onChange={(e) => setSearchInput(e.target.value)}
             placeholder="Search for a country..." 
             className={`${mode === 'light' ? lightStyles.inputColor : darkStyles.elementColor} ${styles.input}`}
            />
        </form>
    )
}

export default Search
