import { MdDarkMode } from "react-icons/md";
import "./ThemeChanger.css";
import { useDispatch, useSelector } from "react-redux";
import { toogeleThemeChanger } from "../reduxToolkit/slices/ThemeSlice";
import light_Theme_image from "../assets/images/light_theme_URL.png";

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
          src={light_Theme_image}
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
