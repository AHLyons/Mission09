import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import collegeBasketBallTeams from './CollegeBasketballTeams.json';
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
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{oneBand.school}</h2>
            <h3 className="card-subtitle mb-2 text-muted">
              Mascot: {oneBand.name}
            </h3>
            <p className="card-text">
              Location: {oneBand.city}, {oneBand.state}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function Bandlist() {
  return (
    <div className="row">
      {collegeBasketBallTeams.teams.map((team: Team) => (
        <Band key={team.school} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <Bandlist />
    </div>
  );
}

export default App;
