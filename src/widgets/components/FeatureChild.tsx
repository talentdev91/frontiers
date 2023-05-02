import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IconEye } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";

import "./style.css";

interface props {
  imgUrl: string;
  data: Array<string>;
}

const FeatureChild = ({ imgUrl, data }: props) => {
  const imageData = [
    {
      alt: "image1",
      url: "../images/cards/card1.png",
    },
    {
      alt: "image2",
      url: "../images/cards/card1.png",
    },
    {
      alt: "image3",
      url: "../images/cards/card1.png",
    },
    {
      alt: "image4",
      url: "../images/cards/card1.png",
    },
    {
      alt: "image5",
      url: "../images/cards/card1.png",
    },
  ];

  const [renderSlides, setRenderSlides] = useState(
    imageData.map((image) => (
      <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
      </div>
    ))
  );

  useEffect(() => {
    const newImageData = [
      {
        alt: "image1",
        url: imgUrl,
      },
      {
        alt: "image2",
        url: imgUrl,
      },
      {
        alt: "image3",
        url: imgUrl,
      },
      {
        alt: "image4",
        url: imgUrl,
      },
      {
        alt: "image5",
        url: imgUrl,
      },
    ];
    setRenderSlides(
      newImageData.map((image) => (
        <div key={image.alt}>
          <img src={image.url} alt={image.alt} />
        </div>
      ))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="feature-child-main mr-2">
      <div className="relative mb-3">
        <div className="feature-list-child-eye">
          <IconEye className="text-gray-700" />
          <span className="feature-list-child-eye-count text-gray-700">22</span>
        </div>
        <Carousel
          showArrows={false}
          autoPlay={false}
          infiniteLoop={false}
          showThumbs={false}
          showStatus={false}
          className="carousel-container"
        >
          {renderSlides}
        </Carousel>
        <div className="feature-list-child-status">
          <span className="feature-list-child-cur-status text-white">
            {data[0]}
          </span>
        </div>
      </div>
      <div className="feature-child-title1">{data[1]}</div>
      <div className="feature-child-title2 mb-3">
        Commercial beef / Beef Cattle
      </div>
      <div className="feature-child-title3 mb-3">
        <img src="./images/us.png" alt="us-flag" />
        <span>Montgomery, AL(1,232 mi. away)</span>
      </div>
      <div className="feature-child-title4 mb-1">{data[2]}</div>
      <div className="flex juflex justify-center items-center">
        <div className="feature-child-btn-email">
          <span className="feature-child-btn-text mr-1">Email seller</span>
          <IconMail className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default FeatureChild;
