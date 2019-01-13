import React, { Component } from 'react';
import Slide from '../Slide/slide';
import NextArrow from '../NextArrow/nextarrow';
import PreviousArrow from '../PreviousArrow/previousarrow';
import Selectors from '../Selectors/selectors';
import './slideshow.css';

class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
        count: 0,
        img: '',
        data: [],
        id: '',
        isLoading: false,
    };
  }

  componentDidMount() {
    fetch('https://api.unsplash.com/photos/?client_id=e3d37a3f6d41c25020197820a612d8b7c0ff0c78f99edba1f82a38ee6eea87f1&per_page=15', {
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

  nextSlide = () => {
    this.setState({
      count: this.state.count + 1,
      img: this.state.data[this.state.count + 1].urls.full,
      id: this.state.data[this.state.count + 1].id
    })
  }

  previousSlide = () => {
    if (this.state.count = 1) {
      this.setState({
        count: 0
      })
    } else {
      this.setState({
        count: this.state.count - 1,
        img: this.state.data[this.state.count - 1].urls.full,
        id: this.state.data[this.state.count - 1].id
      })
    }
  }

  selectorClick = (i) => {
      this.setState({
        img: this.state.data[i].urls.full
      })
    }


  render() {

    console.log('this is the count');
    console.log(this.state.count);

    return(
      <div className="slideshow">
      <Slide
        key={this.state.id}
        src={this.state.img}
      />

      <Selectors
        count={this.state.count}
        data={this.state.data}
        selectorClick={this.selectorClick}
        className="selector"
      />

      <NextArrow
        nextSlide={this.nextSlide}
       />

      <PreviousArrow
        previousSlide={this.previousSlide}
      />
      </div>
    );
  }
}

export default Slideshow;
