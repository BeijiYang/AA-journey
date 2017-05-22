import React from 'react';
import { connect } from 'react-redux';
import { checkout } from '../redux/actions/cartActions';
import '../css/order.css';

class Order extends React.Component {
  constructor() {
    super();
    this.pay = this.pay.bind(this);
  }
  pay() {
    this.props.checkout(this.props.cart);
  }
  render() {
    let currentCourse;
    let cartItems = this.props.cart.map((item) => {
      currentCourse = this.props.courses.filter(value => value._id == item)[0];
      return(
        <li className='course' key={item}>
          <div className='card'>
            <img src={currentCourse.poster} />
            <p className='title'>{currentCourse.name}</p>
          </div>
        </li>
      )
    });
    return(
      <div>
        <h1 className="page-title"> 欲购课程 </h1>
        <ul className='course-list container'>
          {cartItems}
        </ul>
        <div className="submit-order">
          <div className='container'>
            <div className='total-fee'>
              ￥ 6.9 元
            </div>
            <div className='pay' onClick={this.pay}>结算</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  courses: state.courses,
});


export default connect(mapStateToProps, {checkout})(Order);
