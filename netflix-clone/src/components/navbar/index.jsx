import "./styles.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="fletnix-logo">FLETNIX</li>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
      </ul>

      <ul>
        <li className="search"></li>
        <li>Kids</li>
        <li className="notifications"></li>
        <li className="user-profile"></li>
      </ul>
    </div>
  );
};
