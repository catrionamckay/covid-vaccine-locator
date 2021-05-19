import './App.css';
import VaccineForm from "./components/VaccineForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVID-19 Vaccine Locator</h1>
      </header>
      <main>
          <div id="content" >
            <div id="form" component={VaccineForm}></div>
          </div>
        </main>
    </div>
  );
}

export default App;
