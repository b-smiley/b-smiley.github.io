import React from "react";
import Navbar from "@theme-original/Navbar";
import BackToMainSite from "../../components/BackToMainSite";

export default function NavbarWrapper(props) {
  return (
    <>
      <Navbar {...props} />
      <BackToMainSite />
    </>
  );
}
