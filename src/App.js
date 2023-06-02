import './App.css';
import Albums from './components/Albums';
import Nav from './components/Nav';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Posts></Posts>
      <Albums></Albums>
    </div>
  );
}

export default App;
