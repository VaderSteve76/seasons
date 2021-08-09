import { React, Component } from "react";

const seasonConfig = {
  summer: {
    text: "let's hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "It's cold, wear a jacket",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
class SeasonDisplay extends Component {
  state = { lat: null, errMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMsg: err.message })
    );
  }

  render() {
    const season = getSeason(this.lat, new Date().getMonth());
    const {text, iconName } = seasonConfig[season];
    return (
      <div id="season">
        <i className={`${iconName} icon extra large`} />
        <h1>{text}</h1>
        <i className={`${iconName} icon extra large`} />
      </div>
    );
  }

}

export default SeasonDisplay;