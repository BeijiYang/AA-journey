 import React from 'react';
 import { Link } from 'react-router';
 import '../css/profile.css';


 class Profile extends React.Component {

   render(){
     return (
         <div className="profile">
           <h1 className="title-dark-bg">个人中心</h1>
           <div className="container">
             <Link className="button" to="/new-product">创建课程</Link>
             <Link className="button" to="/new-cat">创建课程分类</Link>
           </div>
         </div>
     )
   }
 }

 export default Profile;
