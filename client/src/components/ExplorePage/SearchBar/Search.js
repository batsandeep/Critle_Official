import React from 'react'
import TextLoop from "react-text-loop";

import "./search.css"

const searchbar = () => {

    const moviesNames = require('movies-names');
    let movieObjectArray = moviesNames.all;
    let movieArray = [];
    for (let i=0; i<movieObjectArray.length; i+=1) {

        if(movieObjectArray[i].year > 2015) {
            movieArray.push(movieObjectArray[i].title);
        }
        
    }

    return (
        <div id="searchDiv">
            <div>
                <h1 id="trySearching">Try searching</h1>
                <h1 id="randomArt">"
                <TextLoop interval={3000} children={movieArray} />"
                </h1>
            </div>

            <div id="wrapSearch">
                <input type="text" id="searchBar" placeholder="Search Critle..."/>
                <button id="searchButton">Search</button>
            </div>
           
            
        </div>
    )
}

export default searchbar;