import React, { Component } from 'react';
import { getTrending } from "./webUtils/utils.js";
import './App.css';

class App extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
	  getTrending()
      .then( res => {
        this.setState({
          data: res.data
        })
      });
  }

  render() {

    const { data } = this.state;
    console.log( data );

    return (
      <div className="App">
        <div className="container">
          {
	          data.map( item => {
	            return <img src={item.url} alt={item.title} key={item.id} crossOrigin="anonymous"/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
