import Carousel from "react-bootstrap/Carousel";
import office1 from "../assets/office/office1.png";
import office2 from "../assets/office/office2.png";
import office3 from "../assets/office/office3.png";
import office4 from "../assets/office/office4.png";
import office5 from "../assets/office/office5.png";

function Slider() {
  return (
    <div className="container">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              className="d-block"
              style={{ maxWidth: "70%", height: "auto" }}
              src={office1}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              className="d-block"
              style={{ maxWidth: "70%", height: "auto" }}
              src={office2}
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              className="d-block"
              style={{ maxWidth: "70%", height: "auto" }}
              src={office3}
              alt="Third slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              className="d-block"
              style={{ maxWidth: "70%", height: "auto" }}
              src={office4}
              alt="Third slide"
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              className="d-block"
              style={{ maxWidth: "70%", height: "auto" }}
              src={office5}
              alt="Third slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
