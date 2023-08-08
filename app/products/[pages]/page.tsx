import App from "@/components/Card/Card";
import React from "react";
import Card2 from "@/components/Card/Card2";

const link =
  "https://firebasestorage.googleapis.com/v0/b/fbpro-9e1e6.appspot.com/o/images";

async function GetApi(id: number) {
  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  const data = response.json();
  // console.log("response ", data);
  return data;
}

async function Individual({ params }: { params: { pages: number } }) {
  const id = params.pages;
  const data = await GetApi(id);
  const finaldata = data.data.feedback;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card2
        title={finaldata.title}
        description={finaldata.description}
        price={finaldata.price}
        image={`${link}%2F${finaldata.image}?alt=media`}
        id={id}
      />
    </div>
  );
}

export default Individual;
