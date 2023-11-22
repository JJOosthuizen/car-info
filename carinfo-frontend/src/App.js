import './App.css';
import CarList from './components/CarList';
import Navbar from './components/Navbar/Navbar';
import Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1>Welcome to the Car Showroom</h1>
      </header>
      <main>
        <Pages />
        {/* <CarList /> */}
      </main>
    </div>
  );
}

export default App;
