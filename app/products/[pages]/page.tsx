import App from "@/components/Card/Card";
import React from "react";

async function GetApi(id: number) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = response.json();
  return data;
}

async function Individual({ params }: { params: { pages: number } }) {
  const id = params.pages;
  const data = await GetApi(id);

  return (
    <App
      key={data.id}
      id={data.id}
      title={data.title}
      description={data.description}
      price={data.price}
      rating={data.rating.rate}
      rater={data.rating.count}
      image={data.image}
    />
  );
}

export default Individual;
