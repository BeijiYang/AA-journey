import React from 'react';
import axios from 'axios';
import config from '../../config';

class NewCat extends React.Component {
  constructor() {
    super();
    this.state={
      cats: []
    }
  }

  componentWillMount() {
    axios.get(`${config.host}/cats`).then(res => {
      this.setState(
        {
           cats: res.data.cats
        }
      )
    })
  }

  _handleSubmit(e){
    e.preventDefault();
    let catName = this.refs.catName.value;
    console.log('_handleSubmit', catName);
    this.refs.catName.value = ''; //已经取到，及时清空，下次再次使用
    let data = {name: catName};
    axios.post(`${config.host}/cat`, data)
         .then( (res) => {
            console.log(res);
            this._updateCatList();
         })
  }

  _updateCatList(){
   axios.get(`${config.host}/cats`)
     .then((res)=>this.setState({cats:res.data.cats}))
     .catch(err=>console.log(err))
 }

 _handleDelete(id){
   console.log('_handleDelete', id);
   let cats = this.state.cats;
   cats = cats.filter(value => value._id != id );
   this.setState({cats});
   axios.delete(`${config.host}/cat?id=${id}`).then(res => {
     console.log(res.data);
   });
 }

  render(){
    let catList = this.state.cats.map((item, i) => {
        return(
          <li key={i}>
            {item.name} ~~ {item._id}
            <span onClick={this._handleDelete.bind(this, item._id)}> 删除 </span>
          </li>
          )
          }
    )
    return(
      <div>
        <ul>
          {catList}
        </ul>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input ref='catName' type='text' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default NewCat;
