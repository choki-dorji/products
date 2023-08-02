import React from "react";

function Search(id: number) {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
}

export default Search;
