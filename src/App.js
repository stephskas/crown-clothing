import React, { useState, useEffect } from 'react';
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from "./components/header/header.component";
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
      const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            console.log(snapShot);
            setCurrentUser(snapShot.id);
            console.log(currentUser);
          })
        } else {
          setCurrentUser(null);
          console.log(currentUser)
        }   
      })
  })
  
  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  )
}

export default App;
