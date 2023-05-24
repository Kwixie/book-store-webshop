import { Link } from "react-router-dom";
import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const formattedTitle = title.toLowerCase().replace(/ /g, "-");

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          width: "100%",
        }}
      />
      <div className="category-body-container">
        <Link to={`/shop/${formattedTitle}`}>
          <h2>{title}</h2>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
