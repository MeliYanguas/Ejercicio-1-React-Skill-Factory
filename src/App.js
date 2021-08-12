import logo from './logo.svg';
import './App.css';
import Catalogo from './components/Catalogo'

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Catalogo/>
    </div>
  );
}

export default App;
