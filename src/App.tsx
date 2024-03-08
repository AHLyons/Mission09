import React from "react";
import logo from "./logo.svg";
import "./App.css";

import collegeBasketBallTeams from "./CollegeBasketballTeams.json";
interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>NCAA Basketball March Madness</h1>;
}

class Band extends React.Component<Team> {
  render() {
    const oneBand = this.props;

    return (
      <div>
        <h2>School Name: {oneBand.school}</h2>
        <h2>Mascot: {oneBand.name}</h2>
        <h2>City: {oneBand.city}</h2>
        <h2>State: {oneBand.state}</h2>
      </div>
    );
  }
}

function Bandlist() {
  return (
    <div>
      {collegeBasketBallTeams.teams.map((team: Team) => (
        <Band key={team.school} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
