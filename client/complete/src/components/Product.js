import React from 'react';
import axios from 'axios';
import config from '../../config';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.state={
    //    cats: []
    // }
  }

  getCats() {
    axios.get(`${config.host}/cats`)
      .then((res)=>{
        console.log(res.data.cats);
        this.setState({cats:res.data.cats})
      })
      .catch(err=>console.log(err))
  }

  componentWillMount(){
    this.getCats();
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.catId.value);
    let product = {
                name: this.refs.name.value,
                summary: this.refs.summary.value,
                price: this.refs.price.value,
                poster: this.refs.poster.value,
                cat: this.refs.catId.value
            };
    console.log(product);
    axios.post(`${config.host}/product/new`, product)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }
  render(){

    let optionList = this.state.cats.map(item => {
        return(
          <option value={item._id} key={Math.random()}>
            {item.name}
          </option>)
      });

    return (
        <div className="product">
          <span>新建商品</span>
          <form onSubmit={this.handleSubmit}>
            <p>
            name
            <input ref="name" type="text" />
            </p>
            <p>
            summery
            <input ref="summary" type="text" />
            </p>
            <p>
            price:
            <input ref="price" type="text" />
            </p>
            <p>
            poster:
            <input ref="poster" type="text" />
            </p>
            <p>
            <select name="catId" ref="catId">
              {optionList}
            </select>
            </p>
            <p>
              <input type="submit" />
            </p>
          </form>
        </div>
    )
  }
}

export default Product;
