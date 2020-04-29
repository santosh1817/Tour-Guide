import React from 'react';
import Select from './components/Select'
import Days from './components/Days'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//
class App extends React.Component
{
  render()
  {
    return(
      <BrowserRouter>
      <div>
        <Link to='/Select'>Menu Bar </Link>
        <Link to='/Days'>Days</Link>
        </div>
    
      <Switch>
        <Route path='/Select' component={Select} exact={true}/>
        <Route path='/Days/:daysCount' component={Days} exact={true}/>
        
      </Switch>
      </BrowserRouter>
      
      
    )
  }
}

export default App;
