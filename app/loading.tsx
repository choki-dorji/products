"use client";
import { Spinner } from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex gap-4">
        <Spinner
          size="lg"
          label="Loading..."
          color="danger"
          labelColor="danger"
        />
      </div>
    </div>
  );
}
