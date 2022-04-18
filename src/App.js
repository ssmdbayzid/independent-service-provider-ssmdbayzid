import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import About from './component/About/About';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>}/>
      </Routes>
    </div>
  );
}

export default App;
