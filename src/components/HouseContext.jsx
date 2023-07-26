import { useState, useEffect, createContext } from 'react';

import { housesData } from '../data.js'

export const HouseContext = createContext()


const HouseContextProvider = ({ children }) => {

    const [houses, setHouses] = useState(housesData)
    const [country, setCountry] = useState('Location (any)')
    const [countries, setCountries] = useState([])
    const [property, setProperty] = useState('Property type (any)')
    const [properties, setProperties] = useState([])
    const [price, setPrice] = useState('Price range (any)')
    const [loading, setLoading] = useState(false)

    // Retornar todos lo paises
    useEffect(() => {
        const allCountries = houses.map((house) => {
            return house.country
        })
        // Remover duplicados
        const uniqueCountries = ['Location (any)', ... new Set(allCountries)]

        // Se cambia el estado
        setCountries(uniqueCountries)
    }, [])

    // Retornar todas las propiedades
    useEffect(() => {
        const allProperties = houses.map((house) => {
            return house.type
        })
        // Remover duplicados
        const uniquePropertries = ['Location (any)', ... new Set(allProperties)]

        // Se cambia el estado
        setProperties(uniquePropertries)
    }, [])

    const handleClick = () => {
        setLoading(true)
        // console.log(country)
        // Se incluye cualquier selección
        const isDefault = (str) => {
            return str.split(' ').includes('(any)')
        }
        // console.log(isDefault(country))


        // Se parcea el precio
        const minPrice = parseInt(price.split(' ')[0])
        // se optine el valor minimo
        // console.log(minPrice)

        const maxPrice = parseInt(price.split(' ')[2])
        // se optine el valor máximo
        console.log(maxPrice)

        const newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price)

            // Si todos los valores son seleccionados
            if (
                house.country === country &&
                house.type === property &&
                housePrice >= minPrice &&
                housePrice <= maxPrice
            ) {
                return house
            }

            if (isDefault(country) && isDefault(property) && isDefault(price)) {
                return house
            }

            if (!isDefault(country) && isDefault(property) && isDefault(price)) {
                return house.country === country
            }

            if (!isDefault(property) && isDefault(country) && isDefault(price)) {
                return house.type === property
            }

            if (!isDefault(price) && isDefault(country) && isDefault(property)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house
                }
            }

            if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
                return house.country === country && house.type === property
            }

            if (!isDefault(price) && !isDefault(country) && isDefault(property)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.country === country
                }
            }

            if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.type === property
                }
            }

        })
        // return newHouses
        // console.log(newHouses)
        setTimeout(() => {
            return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
                setLoading(false)
        }, 1500)
        // return newHouses
    }
    return (
        <HouseContext.Provider value={{
            country,
            setCountry,
            countries,
            property,
            setProperty,
            properties,
            price,
            setPrice,
            houses,
            handleClick,
            loading
        }}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseContextProvider;
