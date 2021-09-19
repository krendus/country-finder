import axios from "axios"
const HOST = 'https://restcountries.eu/rest/v2'

export const getAllCountry = () => {
    return axios.get(`${HOST}/all`)
} 
export const searchCountry = ({search}) => {
    return axios.get(`${HOST}/name/${search}`)
}
export const getAllCountryInRegion = ({region}) => {
    if(region === 'All') {
        return axios.get(`${HOST}/all`)
    }
    return axios.get(`${HOST}/region/${region}`)
} 
export const getOneCountry = ({code}) => {
    return axios.get(`${HOST}/alpha/${code}`)
}
export const fetchFullName = ({code}) => {
    return axios.get(`${HOST}/alpha/${code}?fields=name`)
}