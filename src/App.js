import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./CartFunctionality/HomePage";
import CheckBoxShuffle from "./CheckBoxShuffle/CheckBoxShuffle";
import SimpleCounter from "./Counter/SimpleCounter";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import Parent from "./InputApiCall/Parent";
import ParentRtk from "./InputApiCall/RtkInputApiCall/ParentRtk";
import Pagination from "./Pagination/Pagination";
import SearchFunctionalityApi from "./Search/ApiSearchFunctionality";
import ShuffleItems from "./ShuffleItems/ShuffleItems";
import { StarRating } from "./StarRating/StarRating";
import ThemeChanger from "./Theme/ThemeChanger";
import Todo from "./Todo/Todo";
import { MemoDarkTheme } from "./useMemo-DarkTheme/MemoDarkTheme";
import SingleProduct from "./CartFunctionality/SingleProduct";
import CartPage from "./CartFunctionality/CartPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
      {/* <ThemeChanger /> */}
      {/* <SearchFunctionalityApi /> */}
      {/* <SimpleCounter /> */}
      {/* <Todo /> */}
      {/* <MemoDarkTheme /> */}
      {/* <StarRating /> */}
      {/* <ShuffleItems /> */}
      {/* <Parent /> */}
      {/* <ParentRtk /> */}
      {/* <CheckBoxShuffle /> */}
      {/* <Pagination /> */}
      {/* <InfiniteScroll /> */}
    </div>
  );
}

export default App;
