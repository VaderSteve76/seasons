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
    return (
      <div>
        Latitude: {this.state.lat}
        <br/>
        {this.state.errMsg}
      </div>
    );
  }

}

export default SeasonDisplay;