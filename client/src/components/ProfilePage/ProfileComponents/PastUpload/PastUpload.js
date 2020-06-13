import React from 'react'
import "./PastUpload.css"


const upload = () => {


    return (
            <div id="pastUploadCard" >
                    {/* <img src={require('./ReviewAssets/SamplePic.jpg')} className="coverImage" />
                    <h4 id="imageTitle">Volition</h4>   */}
                    <div className="containeR">
                        <img src={require('./ReviewAssets/SamplePic.jpg')} className="imagE" />
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

export default upload;