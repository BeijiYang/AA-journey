function cart(state = [], action) {
   switch(action.type) {
     case 'XXX':
       return [];
     case 'ADD_COURSE_TO_CART':
       return [...state, action.courseId];
       console.log("reducer!!!"+state);
     default:
       return state;
   }
 }

 export default cart;
