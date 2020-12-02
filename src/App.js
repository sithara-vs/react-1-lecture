import './App.css';
import ClassComponent from './components/ClassComponent'
import Directory from './components/Directory'

function App() {
  return (
    <div className="App">
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

export default App;
