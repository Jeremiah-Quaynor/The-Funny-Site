import React, { useState} from 'react'

export default function Forms () {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ country, setCountry ] = useState("");
    const [ container, setContainer] = useState({
        firstName: '',
        lastName: '',
        country: ''
    })
    
    const handleFirstName= (e) => {
        setFirstName(e.target.value)
    }
    const handleLastName= (e) => {
        setLastName(e.target.value)
    }
    const handleCountry= (e) => {
        setCountry(e.target.value)
    }
    const handleSubmit = (e)=> {
        e.preventDefault()
        setContainer({
            firstName: firstName,
            lastName: lastName,
            country: country
        })
        setFirstName("")
        setLastName("")
        setCountry("")

        console.log(container)
    }

    
    return (
        <>
            <label htmlFor='firstName'>First Name: </label>
            <input
                type='text'
                id='firstName'
                placeholder='First Name'
                value = {firstName}
                onChange={handleFirstName}
            />
            <label htmlFor='lastName'>Last Name: </label>
            <input
                type='text'
                id='lastName'
                placeholder='Last Name'
                value = {lastName}
                onChange={handleLastName}
            />
            <label htmlFor='country'>Country: </label>
            <input
                type='text'
                id='country'
                placeholder='Country'
                value = {country}
                onChange={handleCountry}
            />
            <button onClick={handleSubmit}>Submit</button>


            {Object.keys(container).map((key)=> <p key={key}>{key}: {container[key]}</p>)}
        </>
    )
}