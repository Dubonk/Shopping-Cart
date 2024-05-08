import { useState, useEffect } from 'react'
import { HomePage } from './components/HomePage'
import { ShopPage } from './components/ShopPage'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import { Header } from './components/Header';

function App() {
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState(() => {
    const localProducts = localStorage.getItem('Products')
    if(localProducts === null) return [];

    return JSON.parse(localProducts);
});

useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(products))
  }, [products])


useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json();
            const productResults = data;
            setProducts(productResults, category)
        } catch (error) {
            console.log(error)
        }
    }
    fetchProducts();
}, []);

  return (
    <Router>
      <Header cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/" element={<HomePage cart={cart} setCart={setCart} category={category} setCategory={setCategory} products={products} setProducts={setProducts}/>} />
        <Route path="shoppage" element={<ShopPage cart={cart} setCart={setCart} category={category} setCategory={setCategory} products={products} setProducts={setProducts}/>} />
      </Routes>
    </Router>
  )
}

export default App
//<HomePage cart={cart} setCart={setCart} category={category} setCategory={setCategory} products={products} setProducts={setProducts}/> 