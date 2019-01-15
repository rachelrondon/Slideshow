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
        index: 0,
    };
  }

  componentDidMount() {
     fetch('https://api.unsplash.com/photos/?client_id=e3d37a3f6d41c25020197820a612d8b7c0ff0c78f99edba1f82a38ee6eea87f1&per_page=15', {
      method: 'GET',
    })
    .then((results) => {
      results.json().then((data, index) => {
        this.setState({
          data: data,
          id: data[0].id,
          img: data[0].urls.full,
          isLoading: true,
          index: 0
        })
      })
    })
    .catch(err => {
      console.log('Error', err);
    });

    window.addEventListener('scroll', this.handleScroll);
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
        id: this.state.data[this.state.count + 1].id,
        index: this.state.index + 1
      })
  }

  previousSlide = () => {
      this.setState({
        count: this.state.count - 1,
        img: this.state.data[this.state.count - 1].urls.full,
        id: this.state.data[this.state.count - 1].id,
        index: this.state.index - 1
      })
    }

  selectorClick = (i) => {
    if (i === this.state.index) {
      return
    } else {
      this.setState({
        img: this.state.data[i].urls.full,
        id: this.state.data[i].id,
        index: i
      })
    }
  }


  render() {
    const { active } = this.props

    console.log('this is the index');
    console.log(this.state.index);

    console.log('this is the data length');
    console.log(this.state.data.length - 1);

    return(
      <div className="slideshow">
        <Slide
          key={this.state.id}
          src={this.state.img}
        />

      <div className="slideSelectors">
        <PreviousArrow
          previousSlide={this.previousSlide}
        />

        <Selectors
          index={this.state.index}
          data={this.state.data}
          selectorClick={this.selectorClick}
        />

        <NextArrow
          nextSlide={this.nextSlide}
         />
      </div>

      </div>
    );
  }
}

export default Slideshow;
