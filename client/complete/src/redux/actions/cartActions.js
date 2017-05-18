 import axios from 'axios';
 import config from '../../../config';
 import { browserHistory } from 'react-router';


 export function checkout(cart) {
   return dispatch => {
       let _order = {userId: localStorage.getItem('userId'), products: cart}
       console.log(_order);
       axios.post(`${config.host}/order/new`, _order).then( res => {
         dispatch({type: 'CHECKOUT'});
         console.log("res!@@@@"+res);
         browserHistory.push(`/profile`);
       })
   }
 }


export function addCourseToCart(courseId) {
   return dispatch => {
       dispatch({type: 'ADD_COURSE_TO_CART', courseId})
   }
}
