import { Routes, Route } from "react-router-dom";

import AllBooks from "../../components/all-books/all-books.component";
import AuthorPage from "../../components/author-page/author-page-component";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<AllBooks />} />
      <Route path=":author" element={<AuthorPage />} />
    </Routes>
  );
};

export default Shop;
