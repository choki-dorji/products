"use client";
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { getItem } from "@/store/Reducer1";
import { store } from "@/store/store";

function Page() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("clicking");
    dispatch(
      getItem({
        title: data,
        description: description,
        price: price,
        image: "https://i.pravatar.cc",
        category: category,
      })
    );
    setCategory(" ");
    setData(" ");
    setDescription("");
    setPrice("");
  };
  //   console.log(store.getState());

  return (
    <div style={{ maxWidth: "80%", height: "70px" }}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Product title"
          value={data}
          className="mb-3"
          onChange={(e) => setData(e.target.value)}
        />

        <Input
          type="number"
          label="Price"
          value={price}
          className="mb-3"
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          type="text"
          label="description"
          value={description}
          className="mb-3"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="text"
          label="category"
          value={category}
          className="mb-3"
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
}

export default Page;
