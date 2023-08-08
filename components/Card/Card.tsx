"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Image,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface cards {
  rate: number;
  count: number;
}

export interface products {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  rater: number;
}

export default function App(props: products) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${props.id}`);
  };
  return (
    <Card
      className="py-2 w-1/4 mt-2 mr-2 justify-end "
      isFooterBlurred
      radius="lg"
    >
      {/* <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
     
      </CardHeader> */}
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={props.image}
          width={270}
        />
      </CardBody>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny uppercase font-bold">{props.title}</p>
        <small className="text-default-500">$ {props.price}</small>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
          onClick={handleClick}
        >
          More
        </Button>
      </CardFooter>
    </Card>
  );
}
