import './App.css';


  function callApi() {
    console.log('Calling')
    fetch('http://localhost:8000/hello', { method: 'GET' })
      .then(data => data.json()) // Parsing the data into a JavaScript object
      .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
  }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={callApi}>Call API</button>
      </header>
    </div>
  );
}

export default App;
