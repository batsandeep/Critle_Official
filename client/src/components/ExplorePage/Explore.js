import React from 'react'
import "./Explore.css"
import Artwork from "./ArtworkCard/Artwork"

import Search from "./SearchBar/Search"




const explore = () => {

    return (
        <div>
            <Search />

            <div id="suggestDiv">

                <div className="suggestStrip">

                        <div className="profileSubTitleDiv">
                            <h1 className="profileSubTitle">For You</h1>
                        </div>
                           
                        <div className="pastUploadDiv">

                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            

                        </div>

                </div>

                <div className="suggestStrip">
                        
                        <div className="profileSubTitleDiv">
                            <h1 className="profileSubTitle">Most Popular</h1>
                        </div>
                           
                        <div className="pastUploadDiv">
                        <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />

                        </div>
                </div>

                <div className="suggestStrip">

                        <div className="profileSubTitleDiv">
                            <h1 className="profileSubTitle">Highest Rated</h1>
                        </div>
                           
                        <div className="pastUploadDiv">
                        <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />
                            <Artwork />

                        </div>

                </div>

                

            </div>
            

        </div>
    );

}

export default explore;