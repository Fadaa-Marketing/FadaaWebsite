import ClientsLogo from "@/app/components/shared/ClintsLogo";
import React from "react";
import SectionTitle from "./SectionTitle";

const Clients = async() => {

  return (
    <section className=" main-padding flex flex-col justify-center relative items-center  bg-primary sec-porto ">

        <SectionTitle title=" Our Clients" text="Partners in Success" />

        <ClientsLogo/>
    </section>
  );
};

export default Clients;
