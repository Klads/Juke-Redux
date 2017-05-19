import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics'

export default class LyricsContainer extends React.Component {

  constructor(props) {
    super(props),
    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState()),
    this.setArtist= this.setArtist.bind(this);
    this.setSong=this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setArtist(userInput){
    this.setState({artistQuery:userInput})
  }

  setSong(userInput){
    this.setState({songQuery:userInput})
  }

  handleSubmit(event){
    console.log("this is state, ", this.state)
  }

  componentDidMount() {
    const unsubscribe = store.subscribe(function () {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Lyrics key = {'lyrics'} 
      setArtist = {this.setArtist} 
      setSong = {this.setSong} 
      handleSubmit = {this.handleSubmit} 
      text = {this.state.text}
      artistQuery = {this.artistQuery}
      songQuery = {this.songQuery}
      />
    )
  }

}