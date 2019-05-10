import React from 'react';
import './App.css';
import Responsive from 'react-responsive';
import Navbrand from './Components/NavBar/Navbar';
import Jumbo from './Components/NavBar/Jumbotron';
import TeamPage from './Components/Team/TeamPage';
import MobileTeamPage from './MobileComponents/MobileTeam/Mobileteam';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

const Mobile = props => <Responsive {...props} maxWidth={812} />;
const Default = props => <Responsive {...props} minWidth={813} />;

function App() {
  return (
    <div className="App">
    <Default>
    <div className="Default">
      <Jumbo></Jumbo>
      <TeamPage></TeamPage>
      <hr></hr>
      <About></About>
      <hr></hr>
      <Contact></Contact>
    </div>
    </Default>
    <Mobile>
      <div className="Mobile-App">
      <Navbrand></Navbrand>
      <br></br>
      <MobileTeamPage></MobileTeamPage>
      </div>
    </Mobile>
    </div>
  );
}

export default App;
