import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
hello 
<Greet number ="zero" name="abc"/>
<Greet number ="one" name="abc"><button>1st</button></Greet>
<Welcome />
<Greet number ="two" name = "xyz">this is number 2</Greet>
<Welcome name= "Fatima" />
<Welcome name= "Fatima" number= "one" />
    </div>
  );
}

export default App;