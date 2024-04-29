
import { Navbar } from './Components/Navbar/Navbar'
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';

import { Shop } from './Pages/Shop';
import {Produtos} from './Pages/Produtos';
import { Cart } from './Pages/Cart';
import { LoginCriar} from './Pages/LoginCriar';
import { Hero } from './Components/Hero/Hero';


function App() {
  return (
    <div>


      <BrowserRouter>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/homen' element={<ShopCategory category="homen" />} />
          <Route path='/mulher' element={<ShopCategory category="mulher" />} />
          <Route path='/crianças' element={<ShopCategory category="crianças" />} />
          <Route path="produtos" element={<Produtos />}>

        
            <Route path='>produtoID' element={<Produtos />}/>
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginCriar/>} />


        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
