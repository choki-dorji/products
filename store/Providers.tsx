"use client";

import { store } from "./store";
import { Provider } from "react-redux";

export function Providers1({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

console.log("Providers", store.getState());
