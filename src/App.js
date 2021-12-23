import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(null);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const handleClick = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)
    const json = await response.json();
    setResult(json.data.images.fixed_height.url);
  }

  return (
    <div className="App">
      <h1>Giphy</h1>
      <button onClick={() => handleClick()}>Show me the Giphy</button><br /><br />
      {result && <img src={result} alt="Gif" />}
    </div>
  );
}

export default App;
