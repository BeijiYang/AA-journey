import React from 'react';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../css/main.css';

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <div className='app'>
          <Header />
          { this.props.children }
        </div>
      </Provider>
    )
  }
}

export default App;
