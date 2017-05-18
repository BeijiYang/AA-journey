 function courses(state = [], action) {
   switch(action.type) {
     case 'LOAD_COURSES':
       console.log(action.courses);
       return action.courses;
     case 'ADD_COURSE':
       return [...state, action.course];
     default:
       return state;
   }
 }

 export default courses;
