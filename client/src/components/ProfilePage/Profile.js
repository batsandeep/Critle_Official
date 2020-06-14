import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux'
import Axios from 'axios';
import {handleSubmit} from '../../actions/updateUserDetails'
import Upload from "./ProfileComponents/PastUpload/PastUpload"
import Review from "./ProfileComponents/PastReview/PastReview"

import "./Profile.css"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Profile = (props)=>{
    const [userdata,setUserData]=useState({
        name:"Loading",
        picture:"",
        displayName:"Loading",
        googleId:"",
        googleMail:"Loading",
        dateOfJoining:"Loading",
        genderType:"Loading"
    })
    useEffect(()=>{
        if(props.user){
            setUserData({
                name:props.user.userName,
                picture:props.user.picture,
                displayName:props.user.displayName,
                googleId:props.user.googleId,
                googleMail:props.user.googleMail,
                dateOfJoining:props.user.dateOfJoining,
                genderType:props.user.genderType
            })  
        }
    },[]);
    
    const [curDisName,setDispName]=useState(props.user?props.user.displayName:'');


    const userProfileMargin = {
        marginTop : "2em"
    }
    const center = {
        textAlign : "center"
    }

    const topMargin = {
        marginTop : "100px"
    }
    // function handleSubmit(event){
    //     event.preventDefault();
    //     Axios.put(`/api/update/${userdata.googleId}/${curDisName}`).then(response=>{
    //         console.log(response);
    //         if(response.data.msg==='Name Updated Successfully')
    //         {
    //             alert('Name Updated Successfully')
    //             window.location.reload(true)
    //         }
    //     })
    // }
    //if(props.user)
    //    var curDisName = props.user.displayName
    // if(!props.user)
    //     props.history.push('/')
    return(
        <div>

           

            {/* <h1>userid : </h1>
            <div className="card" style={{margin:"10%",padding:"10%",textAlign:"center"}}>
                <h2>{userdata.name}</h2>
                <img className="circle" src={userdata.picture}></img>
                <h2>{userdata.displayName}</h2>
                <form onSubmit={(e)=>{e.preventDefault();props.updateUserDetails(curDisName);}}>
                <img src='/userimages/Witcher.jpg' style={{width:'100px',height:'100px',backgroundColor:'red'}} alt="loaddddd"/>
                <input placeholder="Placeholder" id="first_name" type="text" className="validate" value={curDisName} onChange={e => setDispName(e.target.value)}></input>
                </form>
                <h2>{userdata.googleMail}</h2>
                <h2>{userdata.dateOfJoining}</h2>
                <h2>{userdata.genderType}</h2>
            </div> */}

            {/* NAVBAR CODE START */}









            {/* NAVBAR CODE END */}


            <div>   

                    <div style={topMargin}>
                        <Row className="align-items-center" style={userProfileMargin}>
                            <Col style={center}>
                                <img id="uiop" src={require('./UserAssets/profilePic.jpg')} />
                                <h1 id="profileName">Noctis77<span id="fredit"><a href="" id="freditMast">Edit</a></span></h1>


                                <h4 id="profileRealName">Noctis Lucis Caelum</h4>
                                <h4 id="profileMail">noctiscaelum@gmail.com</h4>
                                <button className="critleButtonNew">Upload Artwork</button>
                            </Col>
                        </Row>
                    </div>

                    <div className="center">
                        <div className="profileSubTitleDiv">
                            <h1 className="profileSubTitle">Recent Uploads</h1>
                        </div>
                           
                        <div className="pastUploadDiv">
                            <Upload />
                            <Upload />
                            <Upload />
                            <Upload />
                            <Upload />
                            <Upload />
                            <Upload />
                            <Upload />
                            <Upload />
                            <Upload />

                        </div>
                    </div>

                    <div className="center">
                        <div className="profileSubTitleDiv">
                            <h1 className="profileSubTitle">Recent Reviews</h1>
                        </div>
                           
                        <div>
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                        </div>
                        
                    </div>





            </div>


            










        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        user:state.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        updateUserDetails:(newName)=>{dispatch(handleSubmit(newName))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);