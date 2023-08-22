/*
The content to put inside every showcase as a bare minimum

*/

import React from "react";
import "./ShowcaseItem.scss";
import ModelRenderer from "../../../components/ModelRenderer";
interface ShowcaseItemProps {
  description: string;
  filePath: string;
  tags: string[];
}
const ShowcaseItem: React.FC<ShowcaseItemProps> = ({
  description,
  filePath,
  tags,
}) => {
  return (
    <div className="ShowcaseItem">
      <div className="ShowcaseItem__description">{description}</div>
      <ModelRenderer filePath={filePath} />
      <div className="ShowcaseItem__tags">{tags}</div>
    </div>
  );
};
export default ShowcaseItem;
