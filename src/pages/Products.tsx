import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getAllProducts = async () => {
    try {
      let products_url = "https://fakestoreapi.com/products";
      let res = await axios.get(products_url);
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log("errormsg:", error);
      setLoading(false);
    }
  };

  console.log("products:", products);
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="flex w-full min-h-screen ">
      <div className="flex flex-col w-[80%] h-full mx-auto ">
        <div className="pt-12 flex flex-col gap-y-10 justify-center">
          <p
            className="flex text-4xl"
            style={{
              fontFamily: "Trirong",
            }}
          >
            Pick up where you left off
          </p>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className=" flex flex-wrap justify-center w-full gap-5 h-full ">
              {products.map((item: Product) => {
                return <ProductCard key={item.id} item={item} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
