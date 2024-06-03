import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Navbar from './Navbar';

//an object of configuration values
const configObj = {
  signInOptions: [
    { 
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
    {
      provider: GoogleAuthProvider.PROVIDER_ID
    }
  ],
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: () => false //don't do anything special on signin
  },
  credentialHelper: 'none'
}

//the React compnent to render
export function SignInPage(props) {

  const auth = getAuth(); //access the "authenticator"

  if (props.currentUser !== null) { // if signed in
    return <Navigate to="/HomePage" />;
  }

  return (
    <div>
      <Navbar currentUser={props.currentUser}/>
      <div className="container">
        <p><strong>Please sign-in:</strong></p>
        <StyledFirebaseAuth uiConfig={configObj} firebaseAuth={auth} />
      </div>
    </div>
  );
}