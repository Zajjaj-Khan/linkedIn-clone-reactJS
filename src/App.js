import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, login } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./components/firebase";
import Widget from "./components/Widget";
function App() {
  const user = useSelector(selectUser); 
  const dispatch = useDispatch();
  
useEffect(() => {

  auth.onAuthStateChanged((userAuth) => {
    if (userAuth) {
      dispatch(
        login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        })
      );
    } else {
      dispatch(logout());
    }
  });
}, [dispatch])

  return (
    <div className="app">
      {/* header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          {/* App Body */}
          {/* side Bar */}
          <SideBar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widget/>
        </div>
      )}
    </div>
  );
}

export default App;
