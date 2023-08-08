import { useDispatch } from "react-redux";
import { getItem } from "@/store/Reducer1";



export function ApiCall() {
    return fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => data.products)
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
  }