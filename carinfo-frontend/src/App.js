import './App.css';
import CarList from './components/CarList';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1>Welcome to the Car Showroom</h1>
      </header>
      <main>
        <CarList />
      </main>
    </div>
  );
}

export default App;
