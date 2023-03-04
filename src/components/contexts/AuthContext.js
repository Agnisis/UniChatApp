// import React,{useContext,useState,useEffect} from 'react';
// import {useHistory} from 'react-router-dom';
// import {auth} from '../firebase';

// const AuthContext=React.createContext();

// export const useAuth = ()=> useContext(AuthContext);


// export const AuthProvider=({children})=>{
//  const[loading, setLoading]=useState(true);
//  const[user,setUser]=useState({});
//  const history=useHistory();

//  useEffect(()=>{
//          auth.onAuthStateChanged((user) => {
//             setUser(user);
//             setLoading(false);
//             history.push('./chats');

//          })
//  },[user,history]);
//  const value={user};
//  return(
//         <AuthContext.Provider value={value}>
//                 {!loading && children}
//         </AuthContext.Provider>
//  )

// }

import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
        apiKey: "AIzaSyBmpCFkyzqNweFFraQMaWOjp3s9079PmQ8",
        authDomain: "unichat-138f5.firebaseapp.com",
        projectId: "unichat-138f5",
        storageBucket: "unichat-138f5.appspot.com",
        messagingSenderId: "936245543325",
        appId: "1:936245543325:web:9b59296b5d9b21021aaf74"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) history.push('./chats');
    });

    return () => unsubscribe();
  }, [history]);

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};