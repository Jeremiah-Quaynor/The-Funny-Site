import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Anime () {
    const [data, setData] = useState([])
    const [displayData, setDisplayData] = useState(false)
    const API_URL =  "https://anime-facts-rest-api.herokuapp.com/api/v1"

    useEffect(()=> {
        axios.get(API_URL).then((response)=> {
            setData(response.data.data)
            console.log(response.data.data)
        }).catch((err)=> console.log(err))
    }, [])


    const handleClick = () => {
        if( displayData) {
            setDisplayData(false)
        }else{
            setDisplayData(true)
        }
    }

    const renderImage = data.map((dat)=> {
        return (
            <>
                <h2 key={dat.anime_name}>{dat.anime_name}</h2>
                <img src={dat.anime_img} alt={dat.anime_name} key={dat.anime_id}/>
            </>
        )
    })

    const renderNothing = <h2>Nothing to Show at the moment..</h2>
    const heading = <h1 style={{"textAlign" : "center"}}>Welcome To The Best Anime Site</h1>
    





    return(
        <>
            {heading}
            {displayData? renderImage : renderNothing }<br/>
            <button onClick={handleClick}>Random Anime</button>
        </>
    )
 

}