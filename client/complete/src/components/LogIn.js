import React from 'react';
import axios from 'axios';
import config from '../../config';
// import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import { login } from '../redux/actions/accountActions';
import { connect } from 'react-redux';
import '../css/login.css';


class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //console.log('_handleSubmit....');
    // this.context.router.push(`/`);
    let _user = {
                username: this.refs.username.value,
                password: this.refs.password.value
            };
    console.log("Login:" ,_user);
    // axios.post(`${config.host}/user/login`, _user)
    // .then((res) => {
    //   console.log(res.data.msg,res)
    //   this.context.router.push(`/`);
    // })
    // .catch((err) => console.log(err))
    this.props.login(_user);
    // this.context.router.push(`/`);
    browserHistory.push(`/`);
  }
  render(){
    return (
        // <div className="login">
        //   <span>登录</span>
        //   <form onSubmit={this._handleSubmit.bind(this)}>
        //     <p>
        //     name:
        //     <input ref='username' type="text" />
        //     </p>
        //     <p>
        //     password:
        //     <input ref='password' type="password" />
        //     </p>
        //     <p>
        //       <input type='submit' />
        //     </p>
        //   </form>
        // </div>
        <div className="login">
         <form onSubmit={this.handleSubmit}>
           <p>
           <label>用户名</label>
           <input ref="username" type="text" />
           </p>
           <p>
           <label>密码</label>
           <input ref="password" type="password" />
           </p>
           <p>
             <input className="submit button" type="submit" value="登录"/>
           </p>
         </form>
       </div>
    )
  }
}

// LogIn.contextTypes = {
//   router: PropTypes.object.isRequired
// }

const mapStateToProps = () => ({});

// export default LogIn;
export default connect(mapStateToProps, { login } )(LogIn);;
