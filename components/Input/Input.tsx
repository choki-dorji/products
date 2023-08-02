"use client";
import React, { useState } from "react";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import { useDispatch, useSelector } from "react-redux";
import { search } from "@/store/Reducer2";
import { store } from "@/store/store";

function Input1() {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState(""); // State to store the input value

  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue); // Update the state with the typed value
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      // Check if the Enter key was pressed
      handleSearch(); // Call the search function when Enter is pressed
      console.log("Enter key pressed", store.getState());
    }
  };

  const handleSearch = () => {
    dispatch(search(searchValue)); // Call the search action with the searchValue
  };

  return (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      value={searchValue} // Set the value of the input field to the state value
      onChange={handleChange}
      onKeyDown={handleKeyDown} // You
    />
  );
}

export default Input1;
