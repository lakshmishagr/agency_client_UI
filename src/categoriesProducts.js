import logo from './logo.svg';
import './App.css';
import { useEffect , useState} from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

function CategoryProducts() {

  const [products, setProducts] = useState([])
const {page} = useParams()

useEffect(()=>{
  axios({
    // Endpoint to send files
    url: `https://fakestoreapi.com/products/category/${page}`,
    method: "GET",
    headers: {
    }
    })
    .then((res) => {
      setProducts(res.data)
    })
    .catch((err) => {
      console.log(err)
    });
},[])




  return (
    <div className="App">
    <p style={{fontSize:"xxx-large"}}> Products</p>
      {products.map(product => (
        <div>
          <Link to={`/category/products/${product.id}`}>
            <img src={product.image} height="80px" width="80px"/>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );

}

export default CategoryProducts;
