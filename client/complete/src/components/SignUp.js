import React from 'react';
import axios from 'axios';
import config from '../../config';

import PropTypes from 'prop-types';

import '../css/signup.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let _user = {
                username: this.refs.username.value,
                password: this.refs.password.value
            };
    console.log(_user);
    axios.post(`${config.host}/user/signup`, _user)
    .then((res) => {
      console.log(res)
      this.context.router.push(`/`);
    })
    .catch((err) => console.log(err))
  }
  render(){
    return (
        <div className="signup">
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
           <label>再输一次</label>
           <input ref="password" type="password" />
           </p>
           <p>
             <input className="submit button" type="submit" value="注册"/>
           </p>
         </form>
       </div>
    )
  }
}

SignUp.contextTypes = {
  router: PropTypes.object.isRequired
}

export default SignUp;
