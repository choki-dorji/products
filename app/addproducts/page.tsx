"use client";
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { getItem } from "@/store/Reducer1";
import { store } from "@/store/store";
import { v4 as uuidv4 } from "uuid";
import { storage } from "@/firebase/firebase";
import Modal from "@/components/Modal/Modal";
import { ref, uploadBytes } from "firebase/storage";

let id = 99961;

function Page() {
  // const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<
    Blob | Uint8Array | ArrayBuffer | string
  >();
  const [price, setPrice] = useState<number>(0);

  const handlePriceChange = (e: any) => {
    // The input value is treated as a string by default, so we need to convert it to a number
    const newPrice = Number(e.target.value);
    setPrice(newPrice);
  };
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setCategory(file);
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // image to firebase

    if (category === "") {
      return;
    }
    const imageref = ref(storage, `images/${category.name}`);

    uploadBytes(imageref, category)
      .then(() => {
        console.log("bj");
      })
      .catch((e) => console.log(e));

    //

    //
    const dataToSend = {
      id: String(uuidv4()),
      title: data,
      price: price,
      description: description,
    };
    if (category) {
      dataToSend.image = category.name;
    }
    console.log("form", dataToSend);

    fetch(`http://localhost:3000/api/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => <Modal />)
      .catch((error) => console.log(error));

    setData(" ");
    setDescription(" ");
    setCategory(" ");
    setPrice(0);
  }

  return (
    <div
      style={{
        maxWidth: "100%",
        height: "70px",
        display: "flex",
        justifyContent: "center",
      }}
    >
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
          className="mb-3"
          onChange={handlePriceChange}
        />
        <Input
          type="text"
          label="description"
          value={description}
          className="mb-3"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="file"
          label="category"
          className="mb-3"
          onChange={handleImageChange}
        />
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
}

export default Page;
