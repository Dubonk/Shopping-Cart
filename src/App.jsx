import { useState, useEffect } from 'react'
import { HomePage } from './components/HomePage'
import './styles/App.css'

function App() {
  const [category, setCategory] = useState('');

  const [products, setProducts] = useState(() => {
    const localProducts = localStorage.getItem('Products')
    if(localProducts === null) return [];

    return JSON.parse(localProducts);
});
const [currentIndex, setCurrentIndex] = useState(0);

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
    <>
    <HomePage category={category} setCategory={setCategory} products={products} setProducts={setProducts} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/> 
    </> 
  )
}

export default App
