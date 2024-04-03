
import './App.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './assets/components/AllPages/Home/Home';
import Layout from './assets/components/Layout/Layout';
import ProductContainer from './assets/components/AllPages/Products/ProductContainer';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='ElectroPro/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='product' element={<ProductContainer/>}/>
        <Route path='cart' element={<h1>cart empty</h1>}/>
        <Route path='contact' element={<h1>Contact page unavailable</h1>}/>
      </Route>

    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
