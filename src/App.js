import logo from './logo.svg';
import './App.css';
import React from 'react';

const Temperature = ({ t }) => {
  const color = t < 0 ? 'blue' : 'red';

  return (
    <div style={{ color }}>
      {t}
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Temperature t={451} />
    </div>
  );
}
export default App;
