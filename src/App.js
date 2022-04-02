import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Price from './Components/Price/Price';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>This is Tailwind</h1>

      <Price></Price>
    </div>
  );
}

export default App;
