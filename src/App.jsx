import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './assets/components/AllPages/Home/Home';
import Layout from './assets/components/Layout/Layout';
import ProductContainer from './assets/components/AllPages/Products/ProductContainer';
import Item from './assets/components/AllPages/Home/Item/Item';
import CartContainer from './assets/components/AllPages/MyCart/CartContainer';
import ScrollToTop from './assets/data/ScrollToTop';


function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path='ElectroPro/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='product' element={<ProductContainer />} />
        <Route path='product/item/:id' exact={true} element={<Item />} />
        <Route path='cart' element={<CartContainer />} />
        <Route path='contact' element={<h1>Contact page unavailable</h1>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
