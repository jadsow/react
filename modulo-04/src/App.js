import './App.css';
import Welcome from "./components/Welcome/Welcome"
import ComponenteClasse from './components/Welcome/index'

function App() {
  return (
    <div className="App">
      <Welcome name='Função' />
      <ComponenteClasse  />
    </div>
  );
}

export default App;
