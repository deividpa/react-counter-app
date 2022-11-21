import CounterApp from "./Components/CounterApp";
import PrimeraApp from "./Components/PrimeraApp";

function App() {
  return (
    <div className="App">
      <CounterApp value={15645456456.54654} />
      <hr />
      <PrimeraApp saludo="David Pérez" />
    </div>
  );
}

export default App;
