import './styles.css';

export const MediaCard = (props) => {
  const { id, name, image } = props;

  return (
    <div className="media-card">
      <img src={image} />
    </div>
  );
};
