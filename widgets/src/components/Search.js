import React, { useState, useEffect } from "react";
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);
  
  // useEffect(() => { 
  //   console.log(results)
  // }, [results])

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
  const renderedResults = results.map((result) => {
    // use cleanSnippet to create some angle-bracketless text. 
    // const regex = /(<([^>]+)>)/gi;
    // const cleanSnippet = result.snippet.replace(regex,"");

    return (<div key={result.pageid} className="item">
      <div className="content">
        <div className="header"> {result.title} </div>
        {/* {result.snippet}<br/> */}
        <span dangerouslySetInnerHTML={{__html: result.snippet }}></span>
        {/* {cleanSnippet} */}
      </div>
    </div>);
  });
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
        <div className="ui celled list">
          {renderedResults}
        </div>
      </div>
    </div>
  );
};
export default Search;
