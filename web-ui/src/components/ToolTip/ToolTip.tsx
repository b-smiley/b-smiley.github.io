import React from "react";
import "./ToolTip.scss";

/*
Shows a tooltip with a exit button
The content is another component
*/

interface ToolTipProps {
  content: React.ReactNode;
  show: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToolTip: React.FC<ToolTipProps> = ({ content, show }) => {
  return (
    <div className="ToolTip">
      <div className="tooltip-header">
        <button
          onClick={() => {
            show(false);
          }}
        >
          X
        </button>
      </div>
      {content}
    </div>
  );
};
export default ToolTip;
