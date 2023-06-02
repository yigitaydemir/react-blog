import { Route, Routes } from 'react-router-dom';
import './App.css';
import Albums from './components/Albums';
import Nav from './components/Nav';
import Posts from './components/Posts';
import Users from './components/Users';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Posts></Posts>}></Route>
        <Route path='/:id' element={<Post></Post>}></Route>
        <Route path='/albums' element={<Albums></Albums>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
      </Routes>
    </div>
  );
}

export default App;