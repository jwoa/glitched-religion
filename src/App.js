import glitchbanner from './glitchbanner.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>GLITCHED RELIGION</h1> */}
        <img src={glitchbanner} className="App-logo" alt="logo" />
        <p>
          The goal of this project is to show that through our own personal 
          views on life and experiences certain we shape religion to our own version. 
          One that makes us feel comfortable or may even strike fear into us.
          The original image will be converted into text with the users responses then
          being added to the text itself. This will distort/glitch the image, giving it
          a unique twist based on the users input.
        </p>
        {/* <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW GALLERY
        </a> */}
      </header>
    </div>
  );
}

export default App;
