import React,{Component} from "react";
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import store from "../store";
import {Provider} from 'react-redux'
import Youtube from "./Youtube";
import Login from "./Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from "./Layout";
firebase.initializeApp({
    apiKey: "AIzaSyDLoqcbTDMFuurtAyDgVEKZ6qwo0j0Osjk",
    authDomain: "fir-auth-tutorial-ed11f.firebaseapp.com"
  })
class GoogleAuth extends Component{
    constructor(){
        super();
        this.state = { isSignedIn: false }
      this.uiConfig = {
          signInFlow: "popup",
          signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            
          ],
          callbacks: {
            signInSuccess: () => false
          }
        }
    }
   
  
    componentDidMount ()  {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user})
        console.log("user", user)
      })
    }
    render(){
        return(
            <div className="App">
            {this.state.isSignedIn ? (
              <span>
                
                <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                <p>Welcome {firebase.auth().currentUser.displayName}</p>
                <img
                  alt="profile picture"
                  src={firebase.auth().currentUser.photoURL} width="50" height="50"
                />
                 {<Provider store={store}>
                      <Youtube/>
                 </Provider> }
                }
                 
              </span>
            ) : (
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
          </div>

        )
    }
}
export default GoogleAuth;

//https://www.youtube.com/watch?v=zq0TuNqV0Ew