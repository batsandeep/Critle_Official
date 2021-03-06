import React,{useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/HomePage/Home';
import Profile from './components/ProfilePage/Profile';
import Explore from './components/ExplorePage/Explore';
import Upload from './components/UploadPage/Upload';
import Details from './components/ArtworkDetailsPage/Details'
import WriteReview from './components/WriteReviewPage/WriteReview'
import Edit from './components/EditArtworkPage/Edit'

import {BrowserRouter,Route} from 'react-router-dom';
import {connect} from 'react-redux'
import {fetchUserAction} from './actions/myaction'
function App(props) {
    useEffect(()=>{
        props.fetch_user()
    },[])
  return (
    <Profile />

    // <BrowserRouter>
    //   <Header />
    //   <Route exact path="/" component={Home} />
    //   <Route path="/profile" component={Profile} />
    //   <Route path="/upload" component={Upload} />
    // </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetch_user:()=>{dispatch(fetchUserAction())}
    }
}

export default connect(null,mapDispatchToProps)(App);
