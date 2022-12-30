import earth from "../../images/image/image-deep-earth.jpg";
import night from "../../images/image/image-night-arcade.jpg";
import soccer from "../../images/image/image-soccer-team.jpg";
import grid from "../../images/image/image-grid.jpg";
import above from "../../images/image/image-from-above.jpg";
import pocket from "../../images/image/image-pocket-borealis.jpg";
import curiosty from "../../images/image/image-curiosity.jpg";
import make from "../../images/image/image-fisheye.jpg";
import Cards from "./Cards";
import "./stylesContainerCard.css";
import Button from "../styleButton";

const ContainerCard = () => {
  const images = [
    { image: earth, name: "DEEP EARTH" },
    { image: night, name: "Night arcade" },
    { image: soccer, name: "Soccer team VR " },
    { image: grid, name: "The grid" },
    { image: above, name: "From up above VR" },
    { image: pocket, name: "Pocket borealis" },
    { image: curiosty, name: "The curiosity" },
    { image: make, name: "Make it fisheye" },
  ];
  return (
    <div className="container-images">
      <div className="box-button">
        <div>OUR CREATIONS</div>
        <div>
          <Button.Body>SEE ALL</Button.Body>
        </div>
      </div>
      <div className="item-imagen">
        {images.map((image, index) => (
          <Cards key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ContainerCard;
