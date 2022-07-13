import React, { useState } from 'react'
import axios from 'axios'

// data.data.map((dat)=> <li key={dat.anime_id}>{dat.anime_name}</li>)
export default function Anime () {
    // const API_URL = "https://anime-facts-rest-api.herokuapp.com/api/v1"
    const API_URL = 'https://restcountries.eu/rest/v2/all'
    const [data, setData] = useState({})

    
    const getAnime =(url=API_URL)=> {
        axios.get(url).then((response)=> {
            HTMLFormControlsCollection.log(response.data)
            setData(response.data)
        }).catch((error)=> {
            console.log(error)
        })
    }

    // const renderCountry = data.map((country) => {

    // })

    return(
        <>
            <button onClick={getAnime}>Click Me</button>
            {data}
            {/* {data == null ? <h3>Nothing to render..</h3>: ani } */}
        </>
    )
}