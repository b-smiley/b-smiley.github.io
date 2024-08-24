import React from "react";
import { devProdRoute } from "../../utils";
const BackToMainSite = () => {
  const handleClick = () => {
    window.location.href = devProdRoute();
  };
  return <button onClick={handleClick}>Back to main site</button>;
};
export default BackToMainSite;
