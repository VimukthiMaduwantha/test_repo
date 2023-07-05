import './App.css';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import ViewMenu from './Pages/ViewMenu';
import Table from './Pages/Table';
import Order from './Pages/Order';
import OnlineOrder from './Pages/OnlineOrder';
import { FoodProvider } from './Context/FoodContext';

function App() {
  return (
    <>
      <FoodProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ViewMenu />} />
          <Route exact path='/orderAtTable' element={<Table />} />
          <Route exact path='/orderOnline' element={<OnlineOrder />} />
          <Route exact path='/cart' element={<Order />} />
        </Routes>
      </FoodProvider>
    </>
  );
}

export default App;
