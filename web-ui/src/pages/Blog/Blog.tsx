import React from "react";
import { useNavigate } from "react-router-dom";
interface BlogProps {}

/**
 * Redirects to the docusaurus blog
 * @param props
 * @returns
 */
const Blog: React.FC<BlogProps> = (props) => {
  const navigate = useNavigate();
  if (process.env.NODE_ENV === "development") {
    window.location.href = "http://localhost:3001/blog";
  } else {
    navigate("/blog");
  }
  return <div></div>;
};

export default Blog;
