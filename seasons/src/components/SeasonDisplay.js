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

  render() {
    const season = getSeason(this.lat, new Date().getMonth());
    const text = season === "winter" ? "It's cold outside, wear a jacket" : "Let's hit the beach";
    const icon = season === "winter" ? "snowflake" : "sun";
    return (
      <div id="season">
        <i className={`${icon} icon extra large`} />
        <h1>{text}</h1>
      </div>
    );
  }

}

export default SeasonDisplay;
