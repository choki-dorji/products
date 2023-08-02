"use client";
import App from "@/components/Card/Card";
import { products } from "@/components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getItem, search } from "@/store/Reducer1";
import { store } from "@/store/store";
import { useState } from "react";
import Link from "next/link";
import Search from "@/components/search";
// import { useHooks } from "@/components/Hoks/useHooks";

export function ApiCall() {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
}

export default function Home() {
  const [getdata, setGetdata] = useState([]);
  const [searcheddata, setSearcheddata] = useState();
  ApiCall()
    .then((data) => {
      //   console.log(data);
      setGetdata(data);
    })
    .catch((error) => {
      console.error("Error while fetching data:", error);
    });

  const data2 = useSelector((state: any) => state.searched);

  const DataafterSearch = getdata.filter((data) =>
    data.title.toLowerCase().includes(data2.text.toLowerCase())
  );

  //   console.log("resolu", id);

  //   Search(4)
  //     .then((data) => {
  //       //   console.log(data);
  //       setSearcheddata(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error while fetching data:", error);
  //     });

  //   console.log("bdvjhbdjvha", searcheddata);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "10px",
        justifyContent: "center",
      }}
    >
      {DataafterSearch
        ? DataafterSearch.map((d: products) => (
            <App
              key={d.id}
              id={d.id}
              title={d.title}
              description={d.description}
              price={d.price}
              rating={d.rating.rate}
              rater={d.rating.count}
              image={d.image}
            />
          ))
        : getdata &&
          getdata.map((d: products) => (
            <App
              key={d.id}
              id={d.id}
              title={d.title}
              description={d.description}
              price={d.price}
              rating={d.rating.rate}
              rater={d.rating.count}
              image={d.image}
            />
          ))}
    </div>
  );
}
