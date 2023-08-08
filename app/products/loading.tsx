"use client";
import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

function loading() {
  return (
    <Card>
      <Skeleton>
        <p>Loafing</p>
      </Skeleton>
    </Card>
  );
}

export default loading;
