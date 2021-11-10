import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import LengkapiProfile from './components/LengkapiProfile';

function App() {
  const [profile, setProfile] = useState("auzan")
  return (
    <div>

      <Nav profile={profile} />
      <LengkapiProfile profile={profile} />

    </div>
  );
}

export default App;
