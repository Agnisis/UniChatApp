import React,{useContext,useState,useEffect} from 'React';
import {usehistory} from 'react-router-dom';
import {auth} from '../firebase';

const AuthContext=React.createContext();

export const useAuth = ()=> useContext(AuthContext);


export const AuthProvider=({children})=>{
 const[loading, setLoading]=useState(true);
 const[user,setuser]=useState({});
 const history=useHistory();

 useEffect(()=>{
         auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            history.pushState('./chats');

         })
 },[user,history]);

}
