import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Categories from './categories'
import CategoryProducts from './categoriesProducts'
import Product from './Product'
import Home from './home'


function App() {
  return (
    <div>
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/categories" element={<Categories/>} />
    <Route path="/category/:page" element={<CategoryProducts/>} />
    <Route path="/category/products/:id" element={<Product/>} />
    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
