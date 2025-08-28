import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkClient from "./components/shared/LinkClient";
const NotFound = () => {
  return (
    <div className=" max-w-screen ">
      <div className="bg-primary relative">
        <div className="  h-screen flex flex-col items-center justify-center px-8">
          <Image
            src={`/notFound.svg`}
            alt=""
            width={637}
            height={435}
            className="mb-9"
          />
          <LinkClient href={"/"} className="main-button px-3">
            Back To Home
          </LinkClient>
        </div>
        <div className="bg-primary -z-50 h-full w-[100%]"></div>
      </div>
    </div>
  );
};
NotFound.displayName = "NotFound";

export default NotFound;
