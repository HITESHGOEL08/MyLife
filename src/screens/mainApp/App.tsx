import React, { useEffect } from 'react';
import logo from '../../logo.svg';
import { serviceWrapper } from '../../services/serviceWrapper';
// import './App.scss';

function App() {

  const callTestApi = async () => {
    const { data } = await serviceWrapper.getMethod()
    console.log(data);
    console.log(data && data?.results);



  }

  useEffect(() => {
    callTestApi()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Hitesh!!!!!!!!!
          Wooo HOOOOOOOOOOOOOOOOOOOOOOOOO
        </p>
      </header>
    </div>
  );
}

export default App;
