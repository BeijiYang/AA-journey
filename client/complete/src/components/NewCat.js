import React from 'react';
import axios from 'axios';
import config from '../../config';

import { fetchCats, createCat, removeCat } from '../redux/actions/catActions';
import { connect } from 'react-redux';
import '../css/new-cat.css';

class NewCat extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchCats();
  }

  handleSubmit(e){
    e.preventDefault();
    let catName = this.refs.catName.value;
    console.log('handleSubmit', catName);
    this.refs.catName.value = ''; //已经取到，及时清空，下次再次使用
    this.props.createCat(catName);
  }

  render(){
    let catList = this.props.cats.map((item, i) => {
        return(
          <li key={i}>
            {item.name}
            <span onClick={() => this.props.removeCat(item._id)}> x </span>
          </li>
          )
        }
    )
    return(
      <div className="new-cat">
         <h1 className="title-dark-bg">新建分类</h1>
         <div className="container">
           <ul className="cat-list">
             {catList}
           </ul>
           <form onSubmit={this.handleSubmit}>
             <input ref="catName" type="text" />
             <input className="submit" type="submit" value="创建分类"/>
           </form>
         </div>
      </div>
    )
  }
}

 const mapStateToProps = (state) => ({
   cats: state.cats
 });

 export default connect(mapStateToProps, {fetchCats, createCat, removeCat})(NewCat);
