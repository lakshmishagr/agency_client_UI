import logo from './logo.svg';
import './App.css';
import { useEffect , useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Categories() {

  const [categories, setCategories] = useState([])

useEffect(()=>{
  axios({
    // Endpoint to send files
    url: "https://fakestoreapi.com/products/categories",
    method: "GET",
    headers: {
    }
    })
    .then((res) => {
      setCategories(res.data)
    })
    .catch((err) => {
      console.log(err)
    });
},[])




  return (
    <div className="App">
    <p style={{fontSize:"xxx-large"}}> Categories </p>
      
      {
        categories.map(category => {
          return (
          <li>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
          )
        })
      }
      
    </div>
  );

}

export default Categories;
