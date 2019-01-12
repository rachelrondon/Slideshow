import React, { Component } from 'react';
import Slide from '../Slide/slide';
import './slideshow.css';

class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
        count: 0,
        img: '',
        data: [],
        id: '',
        isLoading: false
    };
  }

  componentDidMount() {
    fetch('https://api.unsplash.com/photos/?client_id=e3d37a3f6d41c25020197820a612d8b7c0ff0c78f99edba1f82a38ee6eea87f1', {
      method: 'GET',
    })
    .then((results) => {
      results.json().then((data) => {
        this.setState({
          data: data,
          id: data[0].id,
          img: data[0].urls.full,
          isLoading: true
        })
      })
    })
    .catch(err => {
      console.log('Error', err);
    });
  }

  componentWillUnmount = () => {
    this.setState({
      isLoading: false
    })
  }




  render() {
    console.log('slideshow component is linked!');

    console.log('this is the data');
    console.log(this.state.data);

    console.log('this is the id');
    console.log(this.state.id);

    console.log('this is the img');
    console.log(this.state.img);

    return(
      <div>
      </div>
    );
  }
}

export default Slideshow;
