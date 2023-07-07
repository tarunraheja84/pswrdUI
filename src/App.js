import './App.css';
import {useState} from 'react';

function App() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
  
    const generatePassword = () => {
      // Logic to generate password based on settings
      // ...
  
      // Update the generated password state
      setPassword();
    };
  
    const handleLengthChange = (e) => {
      setLength(e.target.value);
    };
  
    const handleIncludeUppercaseChange = () => {
      setIncludeUppercase(!includeUppercase);
    };
  
    const handleIncludeLowercaseChange = () => {
      setIncludeLowercase(!includeLowercase);
    };
  
    const handleIncludeNumbersChange = () => {
      setIncludeNumbers(!includeNumbers);
    };
  
    const handleIncludeSymbolsChange = () => {
      setIncludeSymbols(!includeSymbols);
    };
  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className="settings">
        <label htmlFor="length">Length:</label>
        <input
          type="range"
          id="length"
          min="4"
          max="20"
          value={length}
          onChange={handleLengthChange}
        />
        <span>{length}</span>
        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={handleIncludeUppercaseChange}
            />
            Include Uppercase Letters
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={handleIncludeLowercaseChange}
            />
            Include Lowercase Letters
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={handleIncludeNumbersChange}
            />
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={handleIncludeSymbolsChange}
            />
            Include Symbols
          </label>
        </div>
        <button className="generate-btn" onClick={generatePassword}>
          Generate
        </button>
      </div>
      <div className="result">
        <strong>Generated Password:</strong>
        <div className="password">{password}</div>
        <div className="strength">{/* Password strength indicator */}</div>
      </div>
    </div>
  );
}

export default App;
