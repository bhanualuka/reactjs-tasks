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

function App() {
  return (
    <div>
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
      <InfiniteScroll />
    </div>
  );
}

export default App;
