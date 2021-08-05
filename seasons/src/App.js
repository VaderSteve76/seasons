import './App.css';
import SeasonDisplay from './components/SeasonDisplay';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return (
    <SeasonDisplay />
  )
};

export default App;