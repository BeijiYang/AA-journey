 import axios from 'axios';
 import config from '../../../config';

 export function login(user) {
   return dispatch => {
     axios.post(`${config.host}/user/login`, user)
     .then((res) => {
       console.log("accountActions", res.data);
       localStorage.setItem('userId', res.data.userId);
       dispatch({type: 'LOG_IN', user: res.data.user});
       console.log("login:",res);
     })
     .catch((err) => console.log(err))
   }
 }

 export function fetchUser() {
   return dispatch => {
     let userId = localStorage.getItem("userId");
     if (userId) {
       axios.get(`${config.host}/user/${userId}`)
       .then((res) => {
         dispatch({type: 'LOAD_USER', user: res.data.user.username});
       }).catch((err) => console.log(err));
     }
   }
 }

 export function logout() {
   return dispatch => {
     console.log('logout~action ');
     localStorage.removeItem("userId");

       axios.get(`${config.host}/user/logout`)
       .then((res) => {
         console.log("from server", res.data);
         dispatch({type: 'LOG_OUT'});
       }).catch((err) => console.log(err));

   }
 }
