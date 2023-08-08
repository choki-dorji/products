"use client";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Progress,
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { MailIcon } from "./MailIcon";
import { LockIcon } from "./LockIcon";
import { HeartIcon } from "./HeaderIcon";
import { PauseCircleIcon } from "./PauseCircleIcon";
import { NextIcon } from "./NextIcon";
import { PreviousIcon } from "./PreviousIcon";
import { RepeatOneIcon } from "./RepeatOneIcon";
// import { ShuffleIcon } from "./ShuffleIcon";
import { useRouter } from "next/router";

async function Delete(id: number) {
  const response = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "DELETE",
  });
  console.log("response", response);
  alert("deleted");
}

export default function Card2(props: any) {
  const [liked, setLiked] = React.useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src={props.image}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">
                  {props.title}
                </h3>
                <p className="text-small text-foreground/80">${props.price}</p>
                <h1 className="text-large font-medium mt-2">
                  {props.description}
                </h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>
            <div className="flex flex-row mt-3 gap-1">
              <Tooltip content="Delete Product" color="danger">
                <Button onClick={() => Delete(props.id)}>Delete</Button>
              </Tooltip>
              <Tooltip color="success" content="Add to card">
                <Button>Add</Button>
              </Tooltip>
              <Tooltip color="primary" content="Edit">
                <Button onPress={onOpen}>Edit</Button>
              </Tooltip>
            </div>
            {/*  */}
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              placement="top-center"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Log in
                    </ModalHeader>
                    <ModalBody>
                      <Input
                        autoFocus
                        endContent={
                          <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Email"
                        placeholder="Enter your email"
                        variant="bordered"
                      />
                      <Input
                        endContent={
                          <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        variant="bordered"
                      />
                      <div className="flex py-2 px-1 justify-between">
                        <Checkbox
                          classNames={{
                            label: "text-small",
                          }}
                        >
                          Remember me
                        </Checkbox>
                        <Link color="primary" href="#" size="sm">
                          Forgot password?
                        </Link>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="flat" onClick={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Sign in
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>

            {/*  */}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
