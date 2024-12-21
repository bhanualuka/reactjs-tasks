import { MdDarkMode } from "react-icons/md";
import "./ThemeChanger.css";
import { useDispatch, useSelector } from "react-redux";
import { toogeleThemeChanger } from "../reduxToolkit/slices/ThemeSlice";

const ThemeChanger = () => {
  const toogoleTheme = useSelector((state) => state?.theme?.themeChanger);
  const dispatch = useDispatch();

  return (
    <div className={toogoleTheme ? "container" : ""}>
      {toogoleTheme ? (
        <img
          onClick={() => {
            dispatch(toogeleThemeChanger());
          }}
          className="icon light-theme"
          src="https://png.pngtree.com/png-clipart/20230924/original/pngtree-night-mode-dark-mode-glyph-ui-icon-theme-web-screen-vector-png-image_12749665.png"
          alt="LightTheme"
        />
      ) : (
        <MdDarkMode
          onClick={() => {
            dispatch(toogeleThemeChanger());
          }}
          className="icon"
        />
      )}
    </div>
  );
};

export default ThemeChanger;
