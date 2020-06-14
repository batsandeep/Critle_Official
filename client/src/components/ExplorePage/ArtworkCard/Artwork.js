import React from 'react'
import "./Artwork.css"


const artwork = () => {


    return (
            <div id="pastUploadCard" >
                    
                    <div className="containeR">
                        <img src={require('./ReviewAssets/SamplePic.jpg')} id="imagica" />
                        <div className="overlaY">
                            <div className="texT">
                                Volition
                            </div>
                            <div className="texT2">
                            Tony Dean Smith

                            </div>
                        </div>
                    </div>
            </div>

    );
}

export default artwork;