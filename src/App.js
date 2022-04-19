import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import About from './component/About/About';
import Home from './component/Home/Home';
import Log_In from './component/Log_In/LogIn';
import Checkout from './component/Checkout/Checkout';
import Register from './component/Register/Register';
import ErrorPage from './component/ErrorPage/ErrorPage';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Blogs from './component/Blogs/Blogs';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/blog' element={<Blogs></Blogs>} />
        <Route path='/log-in' element={<Log_In></Log_In>} />
        <Route path='/*' element={<ErrorPage></ErrorPage>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }
        />
      </Routes>
    </div>
  );
}

export default App;
