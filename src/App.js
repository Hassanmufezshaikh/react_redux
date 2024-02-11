import React from 'react'
// import User from './components/User'
// import logo from './logo.svg';
import './App.css';
import HeaderContainer from './containers/HeaderContainer'
import HomeContainer from './containers/HomeContainer'


function App() {
  return (
    <div className="App">
      {/* <h1>Add Component</h1>  */}
      {/* to transfer data in user component follow below syntax */}
      {/* <User data={{name:'Hassan Mufez', age:26}}/>   */}
      <HeaderContainer />  

      <HomeContainer />  


    </div>
  );
}

export default App;
