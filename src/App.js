import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import About from './component/About/About';
import Home from './component/Home/Home';
import LogIn from './component/Log_In/LogIn';
import Log_Out from './component/Log_Out/Log_Out';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>}/>
        <Route path='/log-in' element={<LogIn></LogIn>}/>
        <Route path='/log-out' element={<Log_Out></Log_Out>}/>
      </Routes>
    </div>
  );
}

export default App;
