import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import Loader from './Components/Loader';

function App() {
  const [loading, setLoading] = React.useState(true)
  return (
    <div>
      <Header/>
      {loading && <Loader/>}
    </div>
  );
}

export default App;
