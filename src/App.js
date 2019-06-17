import React from 'react';
import logo from './logo.svg';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import AppNavBar from './AppNavBar'
import './App.css';

function App(props) {



  const user = {
    personalDetails: {
      name: 'ankita',
      dob: '12/12/1709'
    },
    contactDetails: {
      address: 'hyd',
      ph: '12121212212'
    }
  }


  return (
    <div className="App">
      <AppHeader
      myevent={this.hitme}
        vvvv={'mani'}
        userName={user.personalDetails.name}
        phNo={user.contactDetails.ph}></AppHeader>
      <AppNavBar></AppNavBar>
      <AppContent></AppContent>
      <AppFooter></AppFooter>
      <button ></button>

    </div>
  );
}

export default App;
