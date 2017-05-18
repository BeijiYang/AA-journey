import React from 'react';
import { connect } from 'react-redux';
import { loadCourses } from '../redux/actions/courseActions';
import Cart from './Cart.js';
import { addCourseToCart } from '../redux/actions/cartActions';

import '../css/home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state={

    }
  }

  componentWillMount() {
     this.props.loadCourses();

   }
   handleClick(id) {
     console.log(id)
     this.props.addCourseToCart(id);
   }

  render(){
    console.log(this.props.courses)

    let courseList = this.props.courses.map(item => (
      <li className='course' key={Math.random()}>
         <div className='card'>
           <img src={item.poster} />
           <p className='title'>{item.name}</p>
           <button disabled={this.props.cart.includes(item._id)} className={this.props.cart.includes(item._id) ? 'buy disabled': 'buy'} onClick={this.handleClick.bind(this, item._id)}>购买</button>
         </div>
      </li>
     ))

    return(
      <div className="home">
         <h1 className="page-title"> 所有课程 </h1>
         <ul className='course-list container'>
            {courseList}
         </ul>
         <Cart />
      </div>
    )
  }
}

// export default Home;
 const mapStateToProps = (state) => ({
   courses: state.courses,
   cart: state.cart,
 })

 export default connect(mapStateToProps, {loadCourses, addCourseToCart})(Home);
