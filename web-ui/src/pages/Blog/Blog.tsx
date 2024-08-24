import React from "react";
interface BlogProps {}

/**
 * Redirects to the docusaurus blog
 * @param props
 * @returns
 */
const Blog: React.FC<BlogProps> = (props) => {
  if (process.env.NODE_ENV === "development") {
    //window.location.href = "http://localhost:3001/blog";
  } else {
    //window.location.href = "https://brendansmiley.com/blog";
  }
  return <div>Coming Soon ...</div>;
};

export default Blog;
