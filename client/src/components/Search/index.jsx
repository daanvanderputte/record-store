import React, { useState } from "react";
import axios from "axios"

function App() {

  const [data, setData] = useState({});
  const [artist, setArtist] = useState('');

  const url = `https://api.discogs.com/database/search?q=${artist}&key=${process.env.REACT_APP_API_KEY}&secret=${process.env.REACT_APP_SECRET}`;

  const searchArtist = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setArtist('')
    }  
  }

  return (
    <div className="App">
      <div className="search">
        <input 
        value={artist} 
        onChange={event => setArtist(event.target.value)}
        onKeyPress={searchArtist}
        placeholder="Search"
        type="text"/>
      </div>
      <div className="result">
            <p>{data.results && data.results[0].title}</p>
            <img src={data.results && data.results[0].thumb}/>
          
          </div>
    </div>
  );
}

export default App;