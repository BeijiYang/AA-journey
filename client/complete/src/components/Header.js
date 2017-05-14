import React from 'react';
import { Link } from 'react-router';
import store from '../redux/store';
import { connect } from 'react-redux';
import { fetchUser, logout} from '../redux/actions/accountActions';

class Header extends React.Component {
  componentWillMount(){
    this.props.fetchUser();
  }

  render(){
    const LoginLink = (
      <div>
        <Link to='/login'>登录</Link>
        <Link to='/signup'>注册</Link>
      </div>
    );

    const LogoutLink = (
      <div>
        { this.props.currentUser }
        <Link to='/' onClick={this.props.logout}>退出</Link>
      </div>
    );

    return(
      <div>
        <Link to='/'>Home</Link>
        <Link to='/new-cat'>新建分类</Link>
        <Link to='/new-product'>新建商品</Link>
        {this.props.currentUser.length == 0 ? LoginLink : LogoutLink}

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.account.currentUser
});

// export default Header;
export default connect(mapStateToProps, {fetchUser, logout})(Header);
