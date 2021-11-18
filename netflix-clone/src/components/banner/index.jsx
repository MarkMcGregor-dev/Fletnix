import "./styles.css";
import backgroundImage from "../../images/banner-background.bmp";
import titleImage from "../../images/banner-title.png";

export const Banner = () => {
  return (
    <div className="banner">
      <img className="title-image" src={titleImage} alt="Title" />
      <p className="description">Brilliant but immature Brooklyn detective Jake Peralta must learn to follow the rules and be a team player when his squad gets an exacting new captain.</p>

      <div className="buttons">
        <p>Play</p>
        <p>More Info</p>
      </div>
    </div>
  );
};
