import React, { useState, useEffect } from "react";
import axios from 'axios'
const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);
  
  useEffect(() => { 
    console.log(results)
  }, [results])

  useEffect(() => {
    const search = async () => { 
        const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term
            }
        })

        setResults(data.query.search)
    }
    search()
  }, [term]);
//   const outsList = results.map(({pageId, title, wordcount}) => {
//         return <div key={pageId}>
//             <p>
//                 <span style={{fontSize: "larger"}}> {title}</span>
//                     &nbsp;{wordcount}
//             </p>
//         </div>
//     })
  return (
    <div className="search">
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          ></input>
        </div>
        {/* <div className="results">
            {outsList}
        </div> */}
      </div>
    </div>
  );
};
export default Search;
