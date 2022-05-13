import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdUser from './components/AdUser/AdUser';
import Home from './components/Home/Home';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div>
      {/* <h1>This is the React Router App</h1> */}

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/add' element={<AdUser></AdUser>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
