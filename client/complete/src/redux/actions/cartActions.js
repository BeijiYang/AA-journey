export function addCourseToCart(courseId) {
   return dispatch => {
       dispatch({type: 'ADD_COURSE_TO_CART', courseId})
   }
}
