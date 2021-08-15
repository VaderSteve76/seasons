import { React, Component } from "react";
import Spinner from './Loader';

const seasonConfig = {
  summer: {
    text: "let's hit the beach",
    iconName: "orange sun massive"
  },
  winter: {
    text: "It's cold, wear a jacket",
    iconName: "blue snowflake massive"
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

    function getSeason(lat, month) {
      if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
      } else {
        return lat > 0 ? "winter" : "summer";
      }
    };

    const season = getSeason(this.lat, new Date().getMonth());
    console.log(getSeason(this.lat, new Date().getMonth()));
    const {text, iconName } = seasonConfig[season];

    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left ${iconName} icon`} />
        <h1 className="text">{text}</h1>
        <i className={`icon-right ${iconName} icon`} />
      </div>
    );
  }

}

export default SeasonDisplay;