import React from 'react';
import Routes from './routes/router';
import Footer from './components/footer';
import './styles/app.css';

function App() {
  return (
    <React.Fragment>
      <Routes />
      <Footer />
    </React.Fragment>
  );
}

export default App;
