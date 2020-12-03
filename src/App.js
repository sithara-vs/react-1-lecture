
// import './App.css';
// import ClassComponent from './components/ClassComponent'
// import FunctionalComponent from './components/FunctionalComponent'

// function App() {
//   return (
//     <div className="App">
//       <h1> This is my App.JS</h1>
//       <p> Whatever you want</p>
//       <ClassComponent />
//       <ClassComponent />
//       <ClassComponent />

//     </div>
//   );
// }

// export default App;




import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent'
import Directory from './components/Directory'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>This is my App.js</h1>
      <p>Whatever you want can go here</p>
      <Directory />

      {/* <ClassComponent />
      <ClassComponent />
      <ClassComponent />
      <ClassComponent /> */}
    </div>
  );
}
