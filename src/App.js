import logo from './logo.svg';
import './App.css';
import Profile from './profile/profile';


function App() {
  const handleName =()=>{
    alert (`John doe`)
  }
  return (
    <div className="App" style={{color: "white", backgroundColor: "darkgrey", minHeight:"100vh" }}>
      <Profile>
        <img src='john doe.png'/>
      </Profile>
      <handleName>
        <button onClick= {handleName}>click me!</button>
      </handleName>
    </div>
  );
}

export default App;
