import SimpleCounter from "./Counter/SimpleCounter";
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
      <SearchFunctionalityApi />
      {/* <SimpleCounter /> */}
      {/* <Todo /> */}
      {/* <MemoDarkTheme /> */}
      {/* <StarRating /> */}
      {/* <ShuffleItems /> */}
    </div>
  );
}

export default App;
