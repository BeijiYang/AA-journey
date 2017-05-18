 import axios from 'axios';
 import config from '../../../config';

 export function createCourse(course) {
   return dispatch => {
     axios.post(`${config.host}/course/new`, course)
          .then((res) => {
                  dispatch({type: 'ADD_COURSE', course: course});
           })
           .catch((err) => console.log(err));
   }
 }

 export function loadCourses() {
   return dispatch => {
     axios.get(`${config.host}/course/all`)
          .then(res => {
                  dispatch({type: 'LOAD_COURSES', courses: res.data.courses})
          })
          .catch(err => console.log(err));
   }
 }
