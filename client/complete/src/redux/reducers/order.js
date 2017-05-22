 function orders(state = [], action) {
   switch(action.type) {
     case 'GET_ORDERS':
       console.log('GET_ORDERS', action.orders)
       return action.orders;
     default:
       return state;
   }
 }

 export default orders;
