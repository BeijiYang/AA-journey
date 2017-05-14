import React from 'react';
import Header from './Header';


class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        { this.props.children }
        <h1>Footer</h1>
      </div>
    )
  }
}

export default App;
