"use client";
import App from "@/components/Card/Card";
import { products } from "@/components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
// import { getItem } from "@/store/Reducer1";
import { fetchProducts } from "@/store/Reducer1";
import { ApiCall } from "@/config/apicalls";
import { store } from "@/store/store";
import { useEffect, useState } from "react";
import Link from "next/link";
import Search from "@/components/search";
import { Code } from "@nextui-org/react";
import { useSession } from "next-auth/react";

// import { useHooks } from "@/components/Hoks/useHooks";

const link =
  "https://firebasestorage.googleapis.com/v0/b/fbpro-9e1e6.appspot.com/o/images";

export default function Home() {
  const dispatch = useDispatch();
  const [getdata, setGetdata] = useState([]);
  const fetcheddata = useSelector((state) => state.productItem);
  console.log(fetcheddata);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // ApiCall()
  //   .then((data) => {
  //     //   console.log(data);
  //     // dispatch(getItem(data));
  //     setGetdata(data);
  //   })
  //   .catch((error) => {
  //     console.error("Error while fetching data:", error);
  //   });

  const data2 = useSelector((state: any) => state.searched);

  const { data: session, status } = useSession({
    required: true,
  });

  // console.log("thsis is get data ", getdata);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "10px",
        justifyContent: "center",
      }}
    >
      {/* <h1>Hello</h1> */}
      {/* {DataafterSearch
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
          )) */}
      {fetcheddata &&
        fetcheddata.products.map((d: products) => (
          <App
            key={d.id}
            id={d.id}
            title={d.title}
            description={d.description}
            price={d.price}
            rating={12}
            rater={12}
            image={`${link}%2F${d.image}?alt=media`}
          />
        ))}
    </div>
  );
}
