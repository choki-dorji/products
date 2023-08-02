"use client";
import React from "react";
import { useSelector } from "react-redux";

export function useHooks() {
  const data = useSelector((state: any) => state.productItem);
  return data;
}

// export const useData = () => {
//   return data;
// };
