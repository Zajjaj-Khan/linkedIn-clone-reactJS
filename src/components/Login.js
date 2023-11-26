import React, { useState } from "react";
import "../Css/login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const LoginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profilePic: userAuth.user.profileURL,
        })
      );
    }).catch((error) => {alert(error.message)});
  };
  const registor = () => {
    if (!name) {
      return alert("Please enter your Full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/500px-LinkedIn_Logo.svg.png"
        alt=""
      />
      <form>
        <input
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <input
          placeholder="Profile Picture URL (optional)"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />

        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button onClick={LoginToApp} type="submit">
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login-registor" onClick={registor}>
          Registor Now
        </span>
      </p>
    </div>
  );
}

export default Login;
