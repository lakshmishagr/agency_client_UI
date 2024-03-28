import logo from './logo.svg';
import './App.css';
import { useEffect , useState} from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';

function Product() {

  const [product, setProduct] = useState([])
const {id} = useParams()

useEffect(()=>{
  axios({
    // Endpoint to send files
    url: `https://fakestoreapi.com/products/${id}`,
    method: "GET",
    headers: {
    }
    })
    .then((res) => {
      console.log(res.data)
      setProduct(res.data)
    })
    .catch((err) => {
      console.log(err)
    });
},[])




  return (
    <div className="App">
    <p style={{fontSize:"xxx-large"}}> Product Details</p>

      {product && (
        <div>
          <img src={product.image} height="80px" width="80px"/>
          <p>Category: {product.category}</p>
          <p>Title: {product.title}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating?.rate} ({product.rating?.count})</p>

        </div>
      )}
    </div>
  );

}

export default Product;
