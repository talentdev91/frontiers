import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IconSearch, IconMapPin } from "@tabler/icons-react";

const Category = () => {
  const items = [
    <div>
      <img
        src="./images/category/1.png"
        alt=""
        role="presentation"
        className="category-item-image"
      />
      <p className="category-item">Bulls</p>
    </div>,
    <div>
      <img
        src="./images/category/2.png"
        alt=""
        role="presentation"
        className="category-item-image"
      />
      <p className="category-item">Cows</p>
    </div>,
    <div>
      <img
        src="./images/category/3.png"
        alt=""
        role="presentation"
        className="category-item-image"
      />
      <p className="category-item">Bred Heifers</p>
    </div>,
    <div>
      <img
        src="./images/category/4.png"
        alt=""
        role="presentation"
        className="category-item-image"
      />
      <p className="category-item">Open Replacement</p>
    </div>,
    <div>
      <img
        src="./images/category/5.png"
        alt=""
        role="presentation"
        className="category-item-image"
      />
      <p className="category-item">Cow and Calf Pairs</p>
    </div>,
    <div>
      <img
        src="./images/category/6.png"
        alt=""
        role="presentation"
        className="category-item-image"
      />
      <p className="category-item">Bulls</p>
    </div>,
    <div>
      <img
        src="./images/category/7.png"
        alt=""
        role="presentation"
        className="category-item-image"
      />
      <p className="category-item">Cows</p>
    </div>,
  ];
  const responsiveItemDefault = {
    0: { items: 0 },
    330: { items: 2 },
    500: { items: 3 },
    560: { items: 2 },
    700: { items: 3 },
    1200: { items: 4 },
    1400: { items: 5 },
    1630: { items: 6 },
  };

  return (
    <div className="category-main">
      <div className="mb-2">
        <span className="category-text-title1">verified sellers</span>
        <span className="category-text-title2">ships nationwide</span>
      </div>
      <div className="mb-8">
        <span className="category-text-content">
          Discover America’s #1 livestock offer
        </span>
      </div>
      <div className="category-search-main flex w-full mb-8">
        <div className="category-search-input-main flex items-center w-full pl-4">
          <div className="flex items-center justify-center">
            <IconSearch className="text-gray-500 w-4" />
          </div>
          <input
            className="category-search-input w-full pl-2"
            placeholder="What are you looking for?"
          />
        </div>
        <div className="category-search-select-main flex items-center">
          <div className="flex items-center justify-center ml-4">
            <IconMapPin className="text-gray-500 w-4" />
          </div>
          <select className="category-select-item w-full mr-2">
            <option>All States</option>
          </select>
        </div>
        <button className="category-select-btn flex items-center justify-center">
          Search&nbsp;&nbsp;
          <p>&#x1F50D;&#xFE0E;</p>
        </button>
      </div>
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls={false}
        responsive={responsiveItemDefault}
        autoPlayInterval={1000}
        autoPlay={false}
        disableDotsControls={true}
        renderPrevButton={() => {
          return (
            <div style={{ opacity: 0.6, transition: "0.5s" }}>
              <img
                src="./images/category/arrowleft.png"
                alt=""
                width={36}
                height={36}
                className="img-radius carousel-arrow"
                style={{ margin: "2px 5px 2px 0" }}
              />
            </div>
          );
        }}
        renderNextButton={() => {
          return (
            <div style={{ opacity: 0.6, transition: "0.5s" }}>
              <img
                src="./images/category/arrowright.png"
                alt=""
                width={36}
                height={36}
                className="img-radius carousel-arrow"
                style={{ margin: "2px 5px 2px 0" }}
              />
            </div>
          );
        }}
      />
    </div>
  );
};

export default Category;
