import React from "react";
import "./ToolTip.scss";

/*
Shows a tooltip and when clicked or tapped it will show the content
The content is another component
*/

interface ToolTipProps {
  content: React.ReactNode;
}

const ToolTip: React.FC<ToolTipProps> = ({ content }) => {
  return <div className="ToolTip">{content}</div>;
};
export default ToolTip;
