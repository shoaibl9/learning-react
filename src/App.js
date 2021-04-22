import logo from './logo.svg';
import './App.css';
import FirstCard from './FirstCard';
import SecondCard from './SecondCard';

function App() {
  return (
    <div className="App">
      <header className="Nav">
        <img src={logo} width="100" height="55" alt="logo"/>
        haoyudoing.com
      </header>
      <body className="Body">
        <FirstCard/>
        <SecondCard/>
      </body>
      <footer>
        Yu Hao Wong @ 2020
      </footer>
    </div>
  );
}

export default App;
