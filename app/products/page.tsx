"use client";
import App, { products } from "@/components/Card/Card";
import Card1 from "@/components/Card/Card1";
import { disconnect } from "process";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/Reducer1";

const link =
  "https://firebasestorage.googleapis.com/v0/b/fbpro-9e1e6.appspot.com/o/images";

// export function Fetchchoki() {
//   return fetch("http://localhost:3000/api/products")
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//       throw error;
//     });
// }

function Products() {
  const dispatch = useDispatch();
  const [data1, setData1] = useState<[] | null>();

  const fetcheddata = useSelector((state: any) => state.productItem);
  // console.log(fetcheddata);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);
  // Fetchchoki()
  //   .then((data) => {
  //     // dispatch(getItem(data));
  //     setData1(data);
  //   })
  //   .catch((error) => {
  //     console.error("Error while fetching data:", error);
  //   });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "10px",
        justifyContent: "center",
      }}
    >
      {fetcheddata &&
        fetcheddata.products.map((d: any) => (
          <App
            key={d.id}
            id={d.id}
            title={d.title}
            description={d.description}
            price={d.price}
            rating={12}
            rater={123}
            image={`${link}%2F${d.image}?alt=media`}
          />
        ))}
    </div>
  );
}

export default Products;
