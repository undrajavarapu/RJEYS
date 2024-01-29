import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

function ProductList() {
  // State for storing the product list
  const [products, setProducts] = useState([]);  //Hook
  // State for tracking any relevant dependencies for memoization
  const [dependency, setDependency] = useState(0);

  // Define a memoized function for fetching the product list
  const fetchProductList = useMemo(() => async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Replace with your API endpoint
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  }, [dependency]);

  // Fetch the product list on component mount
  useEffect(() => {
    fetchProductList();
  }, [fetchProductList]);

  return (
    <div> 
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <ul key={product.id} onClick={()=>console.log({product})}>{product.title}</ul>
        ))}
      </div>
      <button onClick={() => setDependency(dependency + 1)}>
        Click to Refresh Product List
      </button>
    </div>
  );
}

export default ProductList;