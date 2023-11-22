import './App.css';
import CarList from './components/CarList';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import Pages from './pages/Pages';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">

          <Navbar />
          <h1>Welcome to the Car Showroom</h1>
        </header>
        <main>

          <Search />
          <Pages />
          {/* <CarList /> */}
        </main>
      </BrowserRouter>

    </div>
  );
}

export default App;
