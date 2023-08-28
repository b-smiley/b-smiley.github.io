import "./HighlightLink.scss";
import { Link } from "react-scroll";
import Highlighter from "react-highlight-words";

const HighlightLink = (props) => {
  const { text, search, to } = props;

  return (
    <Link
      className="HighlightLink"
      to={to}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <Highlighter
        highlightClassName="HighlightLink__highlight"
        searchWords={[search]}
        autoEscape={true}
        textToHighlight={text}
      />
    </Link>
  );
};
export default HighlightLink;
