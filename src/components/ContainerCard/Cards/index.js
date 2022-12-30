import "./css.css";
const stylyCard = {
  margin: "10px",
};

const Cards = ({ image }) => {
  return (
    <div className="box-image">
      <img src={image.image} alt="" />
      <div className="name-image">
        <h2>{image.name}</h2>
      </div>
    </div>
  );
};
export default Cards;
