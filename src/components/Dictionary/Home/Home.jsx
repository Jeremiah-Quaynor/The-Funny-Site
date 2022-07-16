import axios from 'axios';
import React, { useState} from 'react'
// import Card from '../Card/Card';
import "./Home.css"


function Home() {
  const [data, setData] = useState([])
  const [searchWord, setSearchWord] = useState("")
  const [isPending, setIsPending] = useState(false)
  // lsdks
  
  // useEffect(()=> {
  //   axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`).then((res)=> {
  //     console.log(res.data)
  //     setData(res.data)
  //   }).catch((error)=> {
  //     console.log(error)
  //   })
  // }, [searchWord])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsPending(true)
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`).then((res)=> {
      console.log(res.data)
      setData(res.data[0])
    setIsPending(false)
    }).catch((error)=> {
      console.log(error)
    setIsPending(false)

    })
  }

  const displayWord = (
    <div>
      <h1>{data.word}</h1>
      <h3>{data.phonetic}</h3>
    </div>
  )

  const loading = (
    <img src='https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg' alt='Loading'/>
  )

    return (
      <>
        <h2>Word Search</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>{setSearchWord(e.target.value)}} value={searchWord}  placeholder="Enter a word" required /><br/>
        {!isPending && <button type="submit"  value="Search">Search</button>}
        {isPending && <button type="submit"  value="Searching" disabled>Searching...</button>}
        </form>
        {isPending ? loading : displayWord}
      </>
    );
  }



export default Home