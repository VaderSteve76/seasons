import { React, Component } from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

class SeasonDisplay extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     lat: null,
  //     errMsg: ''
  //   };
  state = { lat: null, errMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMsg: err.message })
    );
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  render() {
    return (
      <div>
        {getSeason === "winter"
          ? "It's cold outside, wear a jacket"
          : "Let's hit the beach"}
      </div>
    );
  }
}

export default SeasonDisplay;
