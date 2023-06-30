
import './App.css';
import FormSubmit from './components/FormSubmit';

function App() {
  return (
<div className='App'>
<header className='App-header'>
  <h1>Currency Converter</h1>
      <p>Enter USD below to convert to a new currrency.
      </p>
    <FormSubmit />
  </header>
</div>
  );
}

export default App;
