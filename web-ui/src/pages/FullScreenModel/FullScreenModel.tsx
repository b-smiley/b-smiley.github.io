import React, { useState, useEffect } from "react";

import ModelRenderer from "../../components/ModelRenderer";
import ToolTip from "../../components/ToolTip";
import "./FullScreenModel.scss";
import deviceType from "../../utils/windowSize";

interface FullScreenModelProps {}
const FullScreenModel: React.FC<FullScreenModelProps> = (props) => {
  const [showToolTip, setShowToolTip] = useState(false);
  // Decide the guide content based on the device type
  let guide;
  if (deviceType() === "mobile") {
    guide = (
      <div>
        <h1>Guide</h1>
        <p>Use one finger to rotate the model</p>
        <p>Use two fingers to pan the model</p>
        <p>Use the pinch gesture to zoom in and out</p>
      </div>
    );
  } else {
    guide = (
      <div>
        <h1>Guide</h1>
        <p>Use left click and move to rotate the model</p>
        <p>Use right click and move to pan the model</p>
        <p>Use the scroll wheel to zoom in and out</p>
      </div>
    );
  }

  // Get the file path from the url
  const location = window.location;
  const params = new URLSearchParams(location.search);
  const filePath = params.get("filePath");

  // On page load wait 5 seconds then show the tooltip once
  useEffect(() => {
    setTimeout(() => {
      setShowToolTip(true);
    }, 5000);
  }, []);

  return (
    <div className="FullScreenModel">
      <ModelRenderer filePath={filePath} scale={0.1} fullScreen={true} />
      {showToolTip && <ToolTip content={guide} show={setShowToolTip} />}
    </div>
  );
};
export default FullScreenModel;
