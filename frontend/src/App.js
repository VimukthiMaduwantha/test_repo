import './App.css';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import ViewMenu from './Pages/ViewMenu';
import Table from './Pages/Table';
import Order from './Pages/Order';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ViewMenu />} />
        <Route exact path='/orderAtTable' element={<Table />} />
        <Route exact path='/orderOnline' element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
