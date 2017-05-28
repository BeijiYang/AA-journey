 import axios from 'axios';
 import config from '../../../config';

 export function fetchCats() {
   return dispatch => {
       axios.get(`${config.host}/cats`)
       .then((res) => {
         dispatch({type: 'LOAD_CATS', cats: res.data.cats});
       }).catch((err) => console.log(err));
   }
 }

 export function createCat(name) {
  return dispatch => {
    axios.post(`${config.host}/cat`, { name })
         .then((res) => {
           console.log(res);
           dispatch({type: 'ADD_CAT', _id: res.data.category._id, name: name})
         })
  }
}


export function removeCat(id) {
 return dispatch => {
   console.log(id);
   axios.delete(`${config.host}/cat?id=${id}`).then(res => {
        console.log(res.data);
        dispatch({type: 'DEL_CAT', id: id})
        });
 }
}
