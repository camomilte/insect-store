import { useEffect, useState } from "react"
import axios from "../api/axios";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  // State to hold list of products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    /// /
    // Function to fetch products
    /// /
    const getProducts = async () => {
      try {
        // GET request to api
        const res = await axios('api/products');
  
        // Check if fetch is successfull
        if(res.status !== 200) {
          // If fetch is unsuccessfull return error response
          return console.log("Error");
        };
  
        // Log data
        console.log(res.data);
        
        // Update state with fetched products
        setProducts(res.data);
      
      } catch (err) {
        // Log error if fetching fails
        console.error("Fetching data failed", err);
      }
    };

    // Call function to fetch products
    getProducts();
  }, [])


  return (
    <div className="wrapper">
      <div className="my-10">
        <h2 className="text-3xl text-center mb-5 font-semibold">Discover the tiny wonders of the world!</h2>
        <p className="text-center text-brown/70s">From buzzing beetles to fluttering moths, our shop is crawling with nature’s most fascinating bugs. Whether you're a curious collector, a nature-loving hobbyist, or just bugging out for fun, we’ve got something for everyone.</p>
      </div>
      <div>
        {
          !!products.length
          ? products.map(product => (
              <div key={product._id}>
                <ProductCard product={product} />
              </div>

            ))
            : (
              <div></div>
            )
        }
      </div>
    </div>
  )
}

export default HomePage
