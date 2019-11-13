import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom' //my addition
// import HomePage from './pages/HomePage.js' // making my own page for testing
import MyPage from './pages/MyPage.js'
import UserPage from './pages/UserPage.js'
import MyLink from './pages/MyLink.js'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={MyPage} />
      /* <Route path="/:id" component={UserPage} /> */
      <Route path="/mylink" component={MyLink} />
    </Switch>
  )
}




                          // all the original app code:

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
// }

// export default App;
