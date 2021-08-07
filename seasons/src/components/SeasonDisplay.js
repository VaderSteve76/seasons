import { React, Component } from 'react';

class SeasonDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errMsg: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.setState({ lat: position.coords.latitude })
      },
      (err) => {
        this.setState({ errMsg: err.message });
      }
    );

  }

  render() {
    if(this.state.errMsg && !this.state.lat) {
      return <div>Error: {this.state.errMsg}</div>
    } 
    if(!this.state.errMsg && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }
    if(!this.state.errMsg && !this.state.lat) {
      return <div>Loading!</div>
    }
  }

}

export default SeasonDisplay;