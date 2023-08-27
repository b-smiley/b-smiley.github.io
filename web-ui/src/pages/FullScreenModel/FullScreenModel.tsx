import React from "react";
import ModelRenderer from "../../components/ModelRenderer";

import "./FullScreenModel.scss";
interface FullScreenModelProps {}
const FullScreenModel: React.FC<FullScreenModelProps> = (props) => {
  // Get the file path from the url
  const location = window.location;
  const params = new URLSearchParams(location.search);
  const filePath = params.get("filePath");

  return (
    <div className="FullScreenModel">
      <ModelRenderer filePath={filePath} fullScreen={true} />
    </div>
  );
};
export default FullScreenModel;
