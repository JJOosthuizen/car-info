import './App.css';
import CarList from './components/CarList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Car Showroom</h1> 
      </header>
      <main>
        <CarList />
      </main>
    </div>
  );
}

export default App;
