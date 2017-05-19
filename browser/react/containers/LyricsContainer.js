import React from 'react';
import store from '../store';

export default class LyricsContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
    	storeState: store.getState()
    }
  }

  componentDidMount () {
    const unsubscribe = store.subscribe(function () {
	    console.log('----------------');
	    console.log('State changed!!', store.getState());
	});
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render() {

  	return (<h1>Just a container, more to come!</h1>)
  }

}