import React from 'react';

export const countries = [
    { name: 'Finland', city: 'Helsinki' },
    { name: 'Sweden', city: 'Stockholm' },
    { name: 'Denmark', city: 'Copenhagen' },
    { name: 'Norway', city: 'Oslo' },
    { name: 'Iceland', city: 'Reykjavík' },
  ]

export const Country = ({country: {name,city}}) => {
    return (
        <div>
            <h1>{name}</h1>
            <small>{city}</small>
        </div>
    )
}

const Countries = (countries) => {
    const countryList = countries.map((country)=> {
        return (
            <Country key={country.name} country={country} />
        )
    })
    return (
        <div>
            {countryList}
        </div>
    )
}

export const CountryRender = () => {
    <div>
        <h1>Countries List</h1>
        <Countries countries={countries}/>
    </div>
}