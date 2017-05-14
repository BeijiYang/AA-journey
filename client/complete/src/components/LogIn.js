import React from 'react';
import axios from 'axios';
import config from '../../config';
// import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import { login } from '../redux/actions/accountActions';
import { connect } from 'react-redux';


class LogIn extends React.Component {
  constructor() {
    super();
  }

  _handleSubmit(e) {
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
        <div className="login">
          <span>登录</span>
          <form onSubmit={this._handleSubmit.bind(this)}>
            <p>
            name:
            <input ref='username' type="text" />
            </p>
            <p>
            password:
            <input ref='password' type="password" />
            </p>
            <p>
              <input type='submit' />
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
