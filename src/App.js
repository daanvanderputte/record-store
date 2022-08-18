import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import axios from "axios"

// Components

import Header from "./components/Header";
import Menu from "./components/Menu";
import Search from "./components/Search";
import Genres from "./pages/Genres";
import New from "./pages/New";
import Picks from "./pages/Picks";
import Sale from "./pages/Sale";

function App() {
  return (
    <div>
        <Header />
        <Menu />
        <Search />
        <Routes>
          <Route path="/new" element={<New/>}/>
          <Route path="/genres" element={<Genres/>}/>
          <Route path="/picks" element={<Picks/>}/>
          <Route path="/sale" element={<Sale/>}/>
        </Routes>
      </div>
  )
}

// function App() {

//   const [data, setData] = useState({});
//   const [artist, setArtist] = useState('');

//   const url = `https://api.discogs.com/database/search?q=${artist}&key=${process.env.REACT_APP_API_KEY}&secret=${process.env.REACT_APP_SECRET}`;

//   const searchArtist = (event) => {
//     if (event.key === 'Enter') {
//       axios.get(url).then((response) => {
//         setData(response.data)
//         console.log(response.data)
//       })
//       setArtist('')
//     }  
//   }

//   return (
//     <div className="App">
//       <div className="title">Record Store</div>

//       <div className="search">
//         <input 
//         value={artist} 
//         onChange={event => setArtist(event.target.value)}
//         onKeyPress={searchArtist}
//         placeholder="Enter Artist"
//         type="text"/>
//       </div>
//       <div className="result">
//             <p>{data.results && data.results[0].title}</p>
//             <img src={data.results && data.results[0].thumb}/>
          
//           </div>
//     </div>
//   );
// }

export default App;
