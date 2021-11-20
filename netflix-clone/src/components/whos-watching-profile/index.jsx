import './styles.css';

export const WhosWatchingProfile = (props) => {

  const { name, image } = props;

  return (
    <a href="/home" className="whos-watching-profile">
      <img className="profile-image" src={image} />
      <span className="profile-title">{name}</span>
    </a>
  );
};
