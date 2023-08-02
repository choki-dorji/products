"use client";
import App, { products } from "@/components/Card/Card";
import Card1 from "@/components/Card/Card1";
import React from "react";
import { useSelector } from "react-redux";

function Products() {
  const data = useSelector((state: any) => state.productItem);
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "10px",
        justifyContent: "center",
      }}
    >
      {data.products.length > 0 ? (
        data.products.map((s: products) => (
          <App
            key={s.title}
            id={s.title}
            title={s.title}
            description={s.description}
            image={s.image}
            price={s.price}
            rating={11}
            rater={1234}
          />
        ))
      ) : (
        <Card1 />
      )}
    </div>
  );
}

export default Products;
