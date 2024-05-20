import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/home/01.jpg";
import img2 from "../assets/home/02.jpg";
import img3 from "../assets/home/03.png";
import img4 from "../assets/home/04.jpg";
import img5 from "../assets/home/05.png";
import img6 from "../assets/home/06.png";
import { useEffect, useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-100% max-w-[1700px] mx-auto relative">
      <Carousel
        interval={4000}
        autoPlay
        infiniteLoop
        emulateTouch
        stopOnHover={false}
        swipeable={true}
        transitionTime={700}
      >
        <div>
          <img className="h-500px" src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
