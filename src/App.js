import './App.css';
import Home from './Home';
import Card from './Card';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar/>
        <Home/>
        <Card/>
      </div>
    </div>
  );
}

export default App;
