import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics'; 
import {setLyrics} from '../action-creators/lyrics'; 
import axios from 'axios';

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
    event.preventDefault();
    //console.log("this is state, ", this.state)
    if (this.state.artistQuery && this.state.songQuery) {
      axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
        .then(response => {
          //console.log(response.data.lyric);
          const setLyricsAction = setLyrics(response.data.lyric);
          store.dispatch(setLyricsAction);           
        });
    }
  }

  componentDidMount() {
     this.unsubscribe = store.subscribe(() => {
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