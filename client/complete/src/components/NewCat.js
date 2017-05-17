import React from 'react';
import axios from 'axios';
import config from '../../config';

import { fetchCats, createCat, removeCat } from '../redux/actions/catActions';
import { connect } from 'react-redux';
import '../css/new-cat.css';

class NewCat extends React.Component {
  // constructor() {
  //   super();
  //   this.state={
  //     cats: []
  //   }
  // }

  componentWillMount() {
    // axios.get(`${config.host}/cats`).then(res => {
    //   this.setState(
    //     {
    //        cats: res.data.cats
    //     }
    //   )
    // })
    this.props.fetchCats();
  }

  _handleSubmit(e){
    e.preventDefault();
    let catName = this.refs.catName.value;
    console.log('_handleSubmit', catName);
    this.refs.catName.value = ''; //已经取到，及时清空，下次再次使用
    // let data = {name: catName};
    // axios.post(`${config.host}/cat`, data)
    //      .then( (res) => {
    //         console.log(res);
    //         this._updateCatList();
    //      })
    this.props.createCat(catName);
  }

  _updateCatList(){
   axios.get(`${config.host}/cats`)
     .then((res)=>this.setState({cats:res.data.cats}))
     .catch(err=>console.log(err))
 }

 // _handleDelete(id){
 // //   console.log('_handleDelete', id);
 // //   let cats = this.state.cats;
 // //   cats = cats.filter(value => value._id != id );
 // //   this.setState({cats});
 // //   axios.delete(`${config.host}/cat?id=${id}`).then(res => {
 // //     console.log(res.data);
 // //   });
 // this.props.removeCat(id)
 // }

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
      // <div>
      //   <ul>
      //     {catList.length == 0 ? '暂无分类': catList}
      //   </ul>
      //   <form onSubmit={this._handleSubmit.bind(this)}>
      //     <input ref='catName' type='text' />
      //     <input type='submit' />
      //   </form>
      // </div>
      <div className="new-cat">
         <h1 className="title-dark-bg">新建分类</h1>
         <div className="container">
           <ul className="cat-list">
             { catList }
           </ul>
           <form onSubmit={this._handleSubmit.bind(this)}>
             <input ref='catName' type="text" />
             <input className="submit" type='submit' value="创建分类"/>
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
