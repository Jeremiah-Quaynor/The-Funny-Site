import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function DataFetching () {
    // const API_URL =  "https://anime-facts-rest-api.herokuapp.com/api/v1"
    const [posts, setPosts ] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=> {
            setPosts(response.data)
            console.log(response)
        }).catch((error)=> console.log(error))
    }, [])

    const renderChange= () =>{
        if(isLoading) {
            setIsLoading(false)
        }else {
            setIsLoading(true)
        }
    }

    const card = posts.map((post)=> {
        return (
        <li key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
        </li>)
    })

    return(
        <>
            <button onClick={renderChange}>Click</button>
            {isLoading ? <h3>Loading.....</h3> :<ul>{card}</ul>}
        </>
    )
}